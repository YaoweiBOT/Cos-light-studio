import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {WebGLPathTracer, PhysicalCamera, ShapedAreaLight, PhysicalSpotLight} from 'three-gpu-pathtracer';
import {FACE, DEG, radiance, position, aim, cctToLinear, whiteBalanceGains, exposure} from './physics.js';
import {aimedLights,CAMERAS} from './state.js';
import {getExternalModel,disposeExternal} from './external-model.js';
import {EXTERNAL_IDS} from './posing.js';
import {createCharacter,createProp,disposeGenerated} from './characters.js';
import {facePoint} from './posing.js';
import {configureLight} from './scene-light.js';
import {prepareHeadGeometry} from './geometry.js';
import {isMMD} from './character-catalog.js';
import {loadMMDCharacter,poseMMDCharacter,disposeMMDCharacter} from './mmd-character.js';
import {preserveMaterialGroups} from './tracer-compat.js';
import {JOINTS,boneForJoint} from './joints.js';
import {cameraPosition} from './viewport-math.js';

const ASSET_BASE=new URL('../models/LeePerrySmith/',import.meta.url);
const colorLinear=(v)=>new THREE.Color().setRGB(v,v,v,THREE.LinearSRGBColorSpace);
const vertex=`varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`;
const fragment=`
precision highp float;
uniform sampler2D source;
uniform vec3 wb;
uniform float expGain;
uniform int mode;
uniform vec2 imageSize;
varying vec2 vUv;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec3 srgb(vec3 x){return mix(12.92*x,1.055*pow(max(x,vec3(0.)),vec3(1./2.4))-.055,step(vec3(.0031308),x));}
vec3 falseColor(float y){
  if(y<.008)return vec3(.13,.09,.28);
  if(y<.035)return vec3(.16,.25,.60);
  if(y<.10)return vec3(.18,.65,.77);
  if(y<.26)return vec3(.31,.64,.43);
  if(y<.55)return vec3(.91,.75,.32);
  if(y<1.)return vec3(.88,.40,.22);
  return vec3(1.,.12,.43);
}
void main(){
  vec3 raw=max(texture2D(source,vUv).rgb,vec3(0.))*wb*expGain;
  vec3 outColor=srgb(aces(raw));
  if(mode==3)outColor=srgb(max(texture2D(source,vUv).rgb,vec3(0.)));
  if(mode==4)outColor=srgb(aces(vec3(dot(raw,vec3(.2126,.7152,.0722)))));
  if(mode==1 && max(max(raw.r,raw.g),raw.b)>=1.) {
    float stripe=step(.5,fract((gl_FragCoord.x+gl_FragCoord.y)/12.));
    outColor=mix(outColor,mix(vec3(.9,.18,.35),vec3(.15,.04,.1),stripe),.85);
  }
  if(mode==2)outColor=falseColor(dot(raw,vec3(.2126,.7152,.0722)));
  gl_FragColor=vec4(outColor,1.);
}`;

async function fetchAsset(name,onProgress){
  const response=await fetch(new URL(name,ASSET_BASE),{signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw new Error(`本地素材 ${name} 缺失（${response.status}）。请运行 npm run assets，然后重新启动。`);
  const data=await response.arrayBuffer();onProgress?.(name);return data;
}
async function loadTexture(name,srgb=false){
  const data=await fetchAsset(name);
  const blob=new Blob([data],{type:'image/jpeg'});
  const url=URL.createObjectURL(blob);
  try{
    const tex=await new THREE.TextureLoader().loadAsync(url);
    tex.colorSpace=srgb?THREE.SRGBColorSpace:THREE.NoColorSpace;
    tex.flipY=false;return tex;
  }finally{URL.revokeObjectURL(url);}
}

export class StudioRenderer {
  constructor(container,callbacks={}){
    this.container=container;this.callbacks=callbacks;this.paused=false;this.ready=false;this.disposed=false;
    this.frame=0;this.started=performance.now();this.lastStats=0;this.dirty=true;
    this.characterCache=new Map();this.characterLoads=new Map();this.applySerial=0;this.loadingCharacter=false;
    this.interacting=false;this.pendingFull=false;this.basicMaterials=new Map();
    const canvas=document.createElement('canvas'),options={antialias:false,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'};
    const context=canvas.getContext('webgl2',options);
    if(!context)throw new Error('浏览器没有启用 WebGL 2。请在本机 Chrome / Edge 开启硬件加速，并更新显卡驱动后重试。');
    this.renderer=new THREE.WebGLRenderer({canvas,context,...options});
    const gl=this.renderer.getContext();
    if(typeof WebGL2RenderingContext==='undefined'||!(gl instanceof WebGL2RenderingContext)||!gl.getExtension('EXT_color_buffer_float'))throw new Error('这台设备没有可用的 WebGL 2 浮点渲染。请在桌面版 Chrome / Edge 开启硬件加速后重试。');
    this.renderer.debug.onShaderError=()=>{this.shaderError=new Error('这台设备未能编译路径追踪着色器。请更新显卡驱动，在桌面 Chrome / Edge 中开启硬件加速后重试。');};
    this.renderer.setPixelRatio(1);this.renderer.setClearColor(0x000000,1);
    this.renderer.toneMapping=THREE.NoToneMapping;
    this.renderer.outputColorSpace=THREE.LinearSRGBColorSpace;
    this.renderer.domElement.setAttribute('aria-label','逐步收敛的物理路径追踪人像');
    container.appendChild(this.renderer.domElement);
    this.renderer.domElement.addEventListener('webglcontextlost',e=>{
      e.preventDefault();this.paused=true;callbacks.error?.(new Error('显卡上下文中断。请保存方案，再刷新页面；也可以降低画质后重试。'));
    });
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color(0);this.scene.environment=null;
    this.envTexture=new THREE.DataTexture(new Float32Array([1,1,1,1,1,1,1,1]),2,1,THREE.RGBAFormat,THREE.FloatType);
    this.envTexture.mapping=THREE.EquirectangularReflectionMapping;this.envTexture.needsUpdate=true;
    this.camera=new PhysicalCamera(35,2/3,.03,30);
    this.camera.position.set(0,FACE.y,1.65);this.camera.lookAt(0,FACE.y,0);
    this.pt=new WebGLPathTracer(this.renderer);
    preserveMaterialGroups(this.pt._generator);
    this.pt.renderToCanvas=false;this.pt.rasterizeScene=false;this.pt.dynamicLowRes=false;
    this.pt.minSamples=1;this.pt.renderDelay=60;this.pt.fadeDuration=0;
    this.pt.tiles.set(2,2);this.pt.textureSize.set(2048,2048);
    this.pt.filterGlossyFactor=.2;
    this.pt.transmissiveBounces=24;
    this.screenScene=new THREE.Scene();this.screenCamera=new THREE.Camera();
    this.screenMaterial=new THREE.ShaderMaterial({vertexShader:vertex,fragmentShader:fragment,depthTest:false,depthWrite:false,toneMapped:false,uniforms:{source:{value:null},wb:{value:new THREE.Vector3(1,1,1)},expGain:{value:.045},mode:{value:0},imageSize:{value:new THREE.Vector2(1,1)}}});
    this.screenScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),this.screenMaterial));
    this.albedoTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType});
    this.lights=['key','rim','top'].map(()=>{const l=new ShapedAreaLight(0xffffff,1,1,1);this.scene.add(l);return l;});
    this.spots=['key','rim','top'].map(()=>{const l=new PhysicalSpotLight();l.decay=2;l.distance=0;this.scene.add(l,l.target);return l;});
    this.buildRoom();this.buildObjects();
    this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);
  }
  buildRoom(){
    this.wallMat=new THREE.MeshStandardMaterial({color:colorLinear(.025),roughness:1});
    this.floorMat=new THREE.MeshStandardMaterial({color:colorLinear(.035),roughness:.95});
    const wall=(w,h,p,r,mat=this.wallMat)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat);m.position.set(...p);m.rotation.set(...r);this.scene.add(m);return m;};
    wall(8,6,[0,3,-2.6],[0,0,0]);
    wall(8,8,[0,0,0],[-Math.PI/2,0,0],this.floorMat);
    wall(8,6,[-4,3,0],[0,Math.PI/2,0]);wall(8,6,[4,3,0],[0,-Math.PI/2,0]);
    wall(8,8,[0,4.5,0],[Math.PI/2,0,0]);
    this.boardMat=new THREE.MeshStandardMaterial({color:colorLinear(.8),roughness:.95,side:THREE.DoubleSide});
    this.board=new THREE.Mesh(new THREE.BoxGeometry(.025,1.1,.8),this.boardMat);this.board.visible=false;this.scene.add(this.board);
    this.board2Mat=this.boardMat.clone();this.board2=new THREE.Mesh(new THREE.BoxGeometry(.025,1,1),this.board2Mat);this.board2.visible=false;this.scene.add(this.board2);
  }
  buildObjects(){
    this.pivot=new THREE.Group();this.pivot.position.set(FACE.x,FACE.y,FACE.z);this.scene.add(this.pivot);
    this.headMat=new THREE.MeshPhysicalMaterial({color:colorLinear(.55),roughness:.42,metalness:0,ior:1.42,specularIntensity:1});
    this.head=null;this.skinMap=null;this.normalMap=null;
    this.references=new THREE.Group();this.scene.add(this.references);this.references.visible=false;
    const mats=[
      new THREE.MeshStandardMaterial({color:colorLinear(.18),roughness:1}),
      new THREE.MeshStandardMaterial({color:colorLinear(.85),roughness:.35}),
      new THREE.MeshStandardMaterial({color:colorLinear(.8),roughness:.14,metalness:1})
    ];
    mats.forEach((mat,i)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.105,48,32),mat);m.position.set((i-1)*.245,FACE.y,0);this.references.add(m);});
    const ground=new THREE.Mesh(new THREE.BoxGeometry(.86,.03,.55),new THREE.MeshStandardMaterial({color:colorLinear(.18),roughness:1}));
    ground.position.set(0,FACE.y-.12,0);this.references.add(ground);
    // A plain neck stand is intentionally a study pedestal, not a fabricated body.
    const standMat=new THREE.MeshStandardMaterial({color:colorLinear(.035),roughness:.7});
    this.stand=new THREE.Mesh(new THREE.CylinderGeometry(.075,.105,.25,48),standMat);
    this.stand.position.set(0,-.235,-.018);this.pivot.add(this.stand);
    const base=new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,.025,64),standMat);base.position.set(0,-.37,-.018);this.pivot.add(base);
  }
  async init(state){
    this.state=state;this.callbacks.progress?.('正在加载人脸扫描 · 约 0.4 MB');
    let scanError=null;
    try{
      const data=await fetchAsset('LeePerrySmith.glb');
      const gltf=await new GLTFLoader().parseAsync(data,'');
      let source;gltf.scene.updateMatrixWorld(true);
      gltf.scene.traverse(o=>{if(o.isMesh&&!source)source=o;});
      if(!source)throw new Error('扫描中没有可用的人脸网格');
      const geo=prepareHeadGeometry(source);
      this.head=new THREE.Mesh(geo,this.headMat);this.pivot.add(this.head);
      this.callbacks.asset?.({scan:true,textures:false,triangles:Math.round((geo.index?.count||geo.attributes.position.count)/3)});
    }catch(e){
      scanError=e;this.callbacks.asset?.({scan:false,textures:false,error:e.message});
    }
    this.callbacks.progress?.('正在准备光线追踪 · 首次着色器编译稍慢');
    try{await this.apply(state,'scene');}catch(e){
      if(!e.missing||!this.head)throw e;
      Object.assign(state.model,{character:'scan',material:'clay',hair:'none',body:false});
      this.callbacks.model?.();this.callbacks.notice?.('本包未包含私有角色素材，已打开 Lee 扫描。按 README 加入自己的模型包后即可切换。');
      await this.apply(state,'scene');
    }
    this.ready=true;this.resize();this.pt.updateCamera();this.pt.reset();this.animate();
    if(scanError)this.callbacks.notice?.('Lee 扫描素材未加载；其他已导入的角色仍可正常使用。');
    else this.loadSkinTextures();
  }
  async loadSkinTextures(){
    const res=await Promise.allSettled([loadTexture('Map-COL.jpg',true),loadTexture('Infinite-Level_02_Tangent_SmoothUV.jpg')]);
    if(this.disposed){res.forEach(x=>x.status==='fulfilled'&&x.value.dispose());return;}
    this.skinMap=res[0].status==='fulfilled'?res[0].value:null;
    this.normalMap=res[1].status==='fulfilled'?res[1].value:null;
    this.callbacks.asset?.({scan:!!this.head,textures:!!this.skinMap,partial:!this.normalMap});
    if(this.state.model.character==='scan'&&this.state.model.material==='skin')this.apply(this.state,'materials').catch(e=>this.callbacks.error?.(e));
  }
  async apply(state,kind='lights'){
    this.state=state;const {camera:c,model:m,room:r,render:q}=state;
    if(kind==='display'){this.updateDisplay();this.dirty=true;return;}
    const serial=++this.applySerial;
    if((isMMD(m.character)||EXTERNAL_IDS.includes(m.character))&&m.object==='head'&&!this.characterCache.has(m.character)){
      this.loadingCharacter=true;this.callbacks.busy?.(true);
      const id=m.character;
      try{
        if(!this.characterLoads.has(id))this.characterLoads.set(id,EXTERNAL_IDS.includes(id)?getExternalModel(id):loadMMDCharacter(id,text=>this.callbacks.progress?.(text)));
        const root=await this.characterLoads.get(id);
        if(this.disposed)return;
        this.characterCache.set(id,root);
      }catch(e){this.characterLoads.delete(id);if(serial!==this.applySerial)return;throw e;}
      finally{if(serial===this.applySerial){this.loadingCharacter=false;this.callbacks.busy?.(false);}}
      if(serial!==this.applySerial)return;
    }
    this.loadingCharacter=false;
    const face=facePoint(m);
    aimedLights(state).forEach((item,i)=>configureLight(this.lights[i],this.spots[i],item));
    const signature=JSON.stringify(m);
    let geometryChanged=false;
    const externalKind=EXTERNAL_IDS.includes(m.character)&&m.object==='head'?m.character:null;
    if(externalKind){
      const group=this.characterCache.get(externalKind);
      group.userData.externalKind=externalKind;
      const yaw=(group.userData.facingY||0)+(m.yaw+m.bodyYaw)*DEG;
      if(this.character!==group){
        if(this.character){
          if(this.character.userData.externalKind||this.character.userData.mmd)this.character.removeFromParent();
          else disposeGenerated(this.character,[this.head?.geometry]);
        }
        this.character=group;this.scene.add(group);this.characterSignature=signature;geometryChanged=true;
      }else if(this.characterSignature!==signature){this.characterSignature=signature;geometryChanged=true;}
      if(group.rotation.y!==yaw){group.rotation.y=yaw;geometryChanged=true;}
    }else if(this.characterSignature!==signature||!this.character){
      if(this.character){
        if(this.character.userData.externalKind||this.character.userData.mmd)this.character.removeFromParent();
        else disposeGenerated(this.character,[this.head?.geometry]);
      }
      if(isMMD(m.character)){
        this.character=this.characterCache.get(m.character);poseMMDCharacter(this.character,m);
      }else{
        if(!this.head)throw new Error('Lee 扫描素材没有加载，请选择已导入的角色或恢复扫描素材。');
        this.character=createCharacter(m,this.head.geometry);
      }
      this.scene.add(this.character);this.characterSignature=signature;geometryChanged=true;
    }
    const propSig=JSON.stringify(state.prop);
    if(propSig!==this.propSignature){disposeGenerated(this.prop);this.prop=createProp(state.prop);this.scene.add(this.prop);this.propSignature=propSig;geometryChanged=true;}
    this.pivot.visible=false;this.references.visible=m.object==='spheres';this.character.visible=!this.references.visible;
    const charSkin=this.character.userData.skin,skin=m.character==='scan'&&['skin','diffuse'].includes(m.material)&&this.skinMap;
    if(charSkin){
      charSkin.map=skin?this.skinMap:null;charSkin.normalMap=skin?this.normalMap:null;
      if(skin)charSkin.color.copy(colorLinear(m.skinTone));
      charSkin.normalScale.set(.65,.65);charSkin.needsUpdate=true;
    }
    this.wallMat.color.copy(colorLinear(r.reflectance));this.floorMat.color.copy(colorLinear(r.floor));
    // A uniform background emits only when explicitly enabled by the user.
    this.scene.background.setRGB(r.background,r.background,r.background,THREE.LinearSRGBColorSpace);
    this.scene.backgroundIntensity=1;
    this.scene.environment=r.background>0?this.envTexture:null;
    this.scene.environmentIntensity=r.background;
    this.board.visible=r.board!=='off';
    this.boardMat.color.copy(colorLinear(r.board==='black'?.008:r.board==='silver'?.88:.8));
    this.boardMat.metalness=r.board==='silver'?1:0;this.boardMat.roughness=r.board==='silver'?.23:.95;
    this.board.rotation.set(0,0,0);this.board.scale.set(1,r.boardSize/1.1,r.boardWidth/.8);
    if(r.board==='below'){
      this.board.position.set(0,face.y-.4,.18);this.board.rotation.set(0,0,Math.PI/2);this.board.rotateY(-.18);
    }else{
      this.board.position.set(r.boardSide*r.boardDistance,r.boardHeight,.1);
      this.board.rotation.y=r.boardSide*r.boardAngle*DEG;
    }
    this.board2.visible=r.board2!=='off';
    this.board2Mat.color.copy(colorLinear(r.board2==='black'?.008:r.board2==='silver'?.88:.8));
    this.board2Mat.metalness=r.board2==='silver'?1:0;this.board2Mat.roughness=r.board2==='silver'?.23:.95;
    this.board2.position.set(-r.boardSide*r.board2Distance,r.board2Height,.1);
    this.board2.rotation.y=-r.boardSide*r.board2Angle*DEG;this.board2.scale.set(1,r.board2Size,r.board2Width);
    const cp=cameraPosition(c);
    this.camera.position.set(cp.x,cp.y,cp.z);this.camera.lookAt(c.x||0,c.targetY,0);
    this.camera.filmGauge=(CAMERAS.find(b=>b.id===c.body)?.sensor)??36;
    this.camera.setFocalLength(c.focal);
    this.camera.focusDistance=c.dof?c.focus:c.distance;
    if(c.dof)this.camera.fStop=c.aperture;else this.camera.bokehSize=0;
    this.camera.updateProjectionMatrix();this.camera.updateMatrixWorld(true);
    this.pt.bounces=q.bounces;
    this.scene.updateMatrixWorld(true);
    if(this.interacting||q.mode==='albedo'){this.pendingFull=true;}
    else if(this.pendingFull||kind==='scene'||kind==='geometry'||geometryChanged){this.pt.setScene(this.scene,this.camera);this.pendingFull=false;}
    else if(kind==='camera')this.pt.updateCamera();
    else if(kind==='materials'){this.pt.updateMaterials();this.pt.updateEnvironment();}
    else this.pt.updateLights();
    this.pt.reset();this.started=performance.now();this.dirty=true;
    this.updateDisplay();
    if(this.quality!==q.quality){this.quality=q.quality;this.resize();}
    this.callbacks.applied?.();
  }
  updateDisplay(){
    const c=this.state.camera;
    this.screenMaterial.uniforms.wb.value.set(...whiteBalanceGains(c.wb,c.tint));
    this.screenMaterial.uniforms.expGain.value=exposure(c);
    this.screenMaterial.uniforms.mode.value=this.interacting||this.state.render.mode==='albedo'?3:({beauty:0,clip:1,falsecolor:2,mono:4}[this.state.render.diagnostic]||0);
  }
  resize(){
    if(!this.state)return;
    const rect=this.container.getBoundingClientRect();if(rect.width<1||rect.height<1)return;
    const ratio={draft:.55,balanced:.9,fine:1.5}[this.state.render.quality];
    const max={draft:480,balanced:900,fine:1600}[this.state.render.quality];
    const scale=Math.min(ratio,max/Math.max(rect.width,rect.height));
    const width=Math.max(128,Math.round(rect.width*scale)),height=Math.max(128,Math.round(rect.height*scale));
    const size=this.renderer.getSize(new THREE.Vector2());
    if(size.x===width&&size.y===height)return;
    this.renderer.setSize(width,height,false);this.camera.aspect=width/height;
    this.albedoTarget.setSize(width,height);
    this.camera.setFocalLength(this.state.camera.focal);this.camera.updateProjectionMatrix();
    if(this.ready){this.pt.updateCamera();this.pt.reset();}
    this.dirty=true;this.callbacks.resolution?.({width,height});
  }
  animate(){
    if(this.disposed)return;
    this.frame=requestAnimationFrame(()=>this.animate());
    if(document.hidden||!this.ready||this.loadingCharacter)return;
    try{
      const preview=this.interacting||this.state.render.mode==='albedo';
      const shouldSample=!preview&&!this.paused&&this.pt.samples<this.state.render.maxSamples;
      if(shouldSample){this.pt.renderSample();if(this.shaderError)throw this.shaderError;this.dirty=true;}
      if(this.dirty&&this.pt.target){
        if(preview)this.renderAlbedo();
        this.screenMaterial.uniforms.source.value=preview?this.albedoTarget.texture:this.pt.target.texture;
        this.renderer.setRenderTarget(null);this.renderer.render(this.screenScene,this.screenCamera);this.dirty=false;
      }
      const now=performance.now();
      if(now-this.lastStats>400){
        this.callbacks.stats?.({samples:preview?1:Math.floor(this.pt.samples),elapsed:(now-this.started)/1000,paused:this.paused,complete:!preview&&this.pt.samples>=this.state.render.maxSamples,preview,interacting:this.interacting});this.lastStats=now;
      }
    }catch(e){this.paused=true;this.ready=false;this.callbacks.error?.(e);}
  }
  renderAlbedo(){
    const swapped=[],used=new Set(),background=this.scene.background;
    try{
      this.scene.background=new THREE.Color(.025,.025,.025);
      this.scene.traverseVisible(object=>{
        if(!object.isMesh)return;
        const original=object.material;
        const convert=mat=>{
          used.add(mat);let basic=this.basicMaterials.get(mat);
          if(!basic){basic=new THREE.MeshBasicMaterial();this.basicMaterials.set(mat,basic);}
          const mapChanged=basic.map!==mat.map;
          basic.color.copy(mat.color);basic.map=mat.map;basic.opacity=mat.opacity;basic.transparent=mat.transparent;
          basic.side=mat.side;basic.alphaTest=mat.alphaTest;basic.depthWrite=mat.depthWrite;
          if(mapChanged)basic.needsUpdate=true;return basic;
        };
        object.material=Array.isArray(original)?original.map(convert):convert(original);swapped.push([object,original]);
      });
      this.renderer.setRenderTarget(this.albedoTarget);this.renderer.render(this.scene,this.camera);
    }finally{
      for(const [object,material] of swapped)object.material=material;
      this.scene.background=background;
      for(const [material,basic] of this.basicMaterials)if(!used.has(material)){basic.dispose();this.basicMaterials.delete(material);}
    }
  }
  setInteracting(value){
    this.interacting=value;this.updateDisplay();this.dirty=true;
    if(!value&&this.ready)this.apply(this.state,'scene').catch(e=>this.callbacks.error?.(e));
  }
  jointPoints(detail='body'){
    if(!this.character||this.state.model.object==='spheres'||this.character.userData.externalKind)return [];
    if(!this.character.userData.mmd)return [{id:'head',label:'头部',kind:'head',position:this.character.userData.head.getWorldPosition(new THREE.Vector3())}];
    const u=this.character.userData;
    return JOINTS.filter(j=>detail==='hands'?j.detail==='hands':!j.detail).flatMap(j=>{
      const bone=boneForJoint(u.byName,j);return bone?[{...j,position:bone.getWorldPosition(new THREE.Vector3())}]:[];
    });
  }
  setPaused(value){this.paused=value;}
  reset(){this.pt.reset();this.started=performance.now();this.paused=false;this.dirty=true;}
  async capture(){
    if(!this.ready||(this.state.render.mode!=='albedo'&&this.pt.samples<1))throw new Error('请等画面至少完成一次采样');
    return new Promise((resolve,reject)=>this.renderer.domElement.toBlob(blob=>blob?resolve(blob):reject(new Error('无法导出画面')),'image/png'));
  }
  dispose(){
    this.disposed=true;cancelAnimationFrame(this.frame);this.resizeObserver.disconnect();this.pt.dispose();
    this.albedoTarget.dispose();this.basicMaterials.forEach(m=>m.dispose());this.basicMaterials.clear();
    this.characterCache.forEach(root=>{if(root.userData.mmd)disposeMMDCharacter(root);});disposeExternal();this.characterCache.clear();
    const geometries=new Set(),materials=new Set(),textures=new Set([this.skinMap,this.normalMap,this.envTexture]);
    for(const s of [this.scene,this.screenScene])s.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));});
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t?.dispose());
    this.renderer.dispose();this.renderer.domElement.remove();
  }
}

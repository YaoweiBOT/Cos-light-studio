import * as T from 'three';
import {CHARACTERS,JOINTS} from './characters.js';
const DEG=Math.PI/180;
const clamp=T.MathUtils.clamp;
const skinColor=hex=>new T.Color(hex);
const v=(x,y,z)=>new T.Vector3(x,y,z);

function ellipsoid(parent,material,position,scale,segments=32){
  const m=new T.Mesh(new T.SphereGeometry(1,segments,24),material);
  m.position.set(...position);m.scale.set(...scale);parent.add(m);return m;
}
function taperedStrand(parent,material,points,width,depth=width*.65){
  const path=new T.CatmullRomCurve3(points.map(p=>v(...p))),steps=24,sides=8;
  const frame=path.computeFrenetFrames(steps,false),positions=[],uv=[],indices=[];
  for(let i=0;i<=steps;i++){
    const t=i/steps,p=path.getPoint(t),taper=Math.max(.045,Math.sin(Math.PI*(.12+.88*t))**.45);
    for(let j=0;j<=sides;j++){
      const a=j/sides*Math.PI*2,q=p.clone().addScaledVector(frame.normals[i],Math.cos(a)*width*taper).addScaledVector(frame.binormals[i],Math.sin(a)*depth*taper);
      positions.push(...q.toArray());uv.push(j/sides,t);
      if(i<steps&&j<sides){const k=i*(sides+1)+j;indices.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2);}
    }
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();
  const mesh=new T.Mesh(geo,material);parent.add(mesh);return mesh;
}
function curve(parent,material,points,radius){
  const geometry=new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>v(...p))),24,radius,6,false),mesh=new T.Mesh(geometry,material);parent.add(mesh);return mesh;
}
function disposeGroup(group){group.traverse(o=>o.geometry?.dispose());group.clear();}

export function buildHair(parent,material,style,spec){
  if(style==='none')return;
  const w=spec.width*1.09,h=spec.height*1.08,d=.086;
  const cap=new T.Mesh(new T.SphereGeometry(1,48,24,0,Math.PI*2,0,1.39),material);cap.scale.set(w,h,d);cap.position.y=.006;parent.add(cap);
  // Solid clumps provide actual occlusion and rim highlights; no baked shadows.
  const short=style==='short',bob=style==='bob',long=style==='long';
  const length=long?.31:bob?.09:short?.025:.04;
  for(let i=0;i<20;i++){
    const a=.37+(Math.PI*2-.74)*i/19,x=Math.sin(a),z=-Math.cos(a);
    if(z>.5&&Math.abs(x)<.66)continue;
    taperedStrand(parent,material,[[x*w*.78,h*.55,z*d*.8],[x*w*1.02,0,z*d],[x*w*(long?1.10:.93),-length,z*d*.96],[x*w*(long?1.18:.78),-length-.035,z*d*.9]],.014, .009);
  }
  // Separate bangs leave eye openings and a clear nose/cheek surface.
  for(let i=0;i<9;i++){
    const x=(i-4)*w*.175;
    taperedStrand(parent,material,[[x*.75,h*.91,.031],[x,h*.60,.077],[x*1.05,h*.35,.080],[x*1.04,h*(i%2?.25:.30),.077]],w*.10,.0045);
  }
  for(const sign of [-1,1])taperedStrand(parent,material,[[sign*w*.77,h*.55,.045],[sign*w*.94,0,.051],[sign*w*.9,-(long?.16:.065),.042],[sign*w*.77,-(long?.19:.085),.035]],.014,.006);
  const tail=(sign,high=true)=>{
    const x=sign*w*.96,y=high?h*.55:-.02;
    for(let i=0;i<8;i++){
      const angle=i/8*Math.PI*2,dx=Math.cos(angle)*.018,dz=Math.sin(angle)*.016;
      taperedStrand(parent,material,[[x,y,-.012],[x+sign*.047+dx,y-.045,-.06+dz],[x+sign*.065+dx,y-.21,-.035+dz],[x+sign*.030+dx*.4,y-.39,.012+dz]],.013,.009);
    }
  };
  if(style==='twin'){tail(-1);tail(1);}
  if(style==='side')tail(1);
  if(style==='ponytail'){
    for(let i=0;i<12;i++){
      const a=i/12*Math.PI*2,dx=Math.cos(a)*.025,dz=Math.sin(a)*.02;
      taperedStrand(parent,material,[[dx*.3,h*.7,-.058],[dx,h*.55,-.15+dz],[dx*1.4,-.08,-.18+dz],[dx*.6,-.34,-.12+dz]],.013,.009);
    }
  }
  if(style==='buns')for(const sign of [-1,1]){
    ellipsoid(parent,material,[sign*w*1.04,h*.64,-.015],[.040,.039,.035]);
    for(let i=0;i<5;i++){const a=i/5*Math.PI*2;curve(parent,material,[[sign*w*1.04+Math.cos(a)*.035,h*.64+Math.sin(a)*.034,.001],[sign*w*1.04+Math.cos(a+.7)*.038,h*.64+Math.sin(a+.7)*.036,.012],[sign*w*1.04+Math.cos(a+1.4)*.033,h*.64+Math.sin(a+1.4)*.033,.002]],.004);}
  }
  if(style==='braid')for(const sign of [-1,1])for(let strand=0;strand<3;strand++){
    const points=[];for(let j=0;j<21;j++){const t=j/20,a=t*Math.PI*10+strand*Math.PI*2/3;points.push([sign*(w+.015)+Math.cos(a)*.011,-.035-t*.31,.002+Math.sin(a)*.011]);}
    taperedStrand(parent,material,points,.009,.008);
  }
}

export class AvatarRig {
  constructor(){
    this.root=new T.Group();this.root.name='StudioFemaleRig';this.bones={};this.bodyMeshes=[];
    this.skin=new T.MeshPhysicalMaterial({color:'#edb9a6',roughness:.43,ior:1.42});
    this.cloth=new T.MeshStandardMaterial({color:'#565d73',roughness:.82});
    this.shoe=new T.MeshStandardMaterial({color:'#282a35',roughness:.5});
    this.hairMaterial=new T.MeshStandardMaterial({color:'#262331',roughness:.32});
    this.white=new T.MeshStandardMaterial({color:'#ebe6dc',roughness:.3});
    this.iris=new T.MeshStandardMaterial({color:'#6b566e',roughness:.28});
    this.dark=new T.MeshStandardMaterial({color:'#211e29',roughness:.5});
    this.lips=new T.MeshStandardMaterial({color:'#b9767d',roughness:.45});
    const joint=(name,parent,pos)=>{const g=new T.Group();g.name=name;g.position.set(...pos);parent.add(g);this.bones[name]=g;return g;};
    const body=(parent,mat,pos,scale)=>{const mesh=ellipsoid(parent,mat,pos,scale);this.bodyMeshes.push(mesh);return mesh;};
    const hips=joint('hips',this.root,[0,.88,0]);
    body(hips,this.cloth,[0,0,0],[.132,.14,.09]);
    const spine=joint('spine',hips,[0,.24,0]);body(spine,this.cloth,[0,-.085,0],[.112,.205,.080]);
    const chest=joint('chest',spine,[0,.26,0]);body(chest,this.cloth,[0,-.075,0],[.168,.145,.088]);
    const neck=joint('neck',chest,[0,.13,0]);body(neck,this.skin,[0,-.035,0],[.038,.08,.039]);
    const head=joint('head',neck,[0,.11,0]);this.headGroup=new T.Group();head.add(this.headGroup);this.hair=new T.Group();head.add(this.hair);
    this.fingers=[];
    for(const [side,sign] of [['left',1],['right',-1]]){
      const upper=joint(side+'UpperArm',chest,[sign*.174,.005,0]);body(upper,this.cloth,[0,-.082,0],[.046,.115,.047]);body(upper,this.skin,[0,-.19,0],[.033,.11,.034]);
      const lower=joint(side+'LowerArm',upper,[0,-.28,0]);body(lower,this.skin,[0,-.115,0],[.029,.14,.029]);
      const hand=joint(side+'Hand',lower,[0,-.255,0]);body(hand,this.skin,[0,-.032,0],[.031,.043,.016]);
      for(let i=0;i<5;i++){
        const finger=new T.Group();finger.position.set(i===4?sign*.035:(i-1.5)*.014,-(i===4?.025:.06),0);hand.add(finger);
        const length=i===4?.037:.046-Math.abs(i-1.3)*.006;
        const first=body(finger,this.skin,[0,-length*.28,0],[.006,length*.33,.006]);
        const tip=new T.Group();tip.position.y=-length*.51;finger.add(tip);body(tip,this.skin,[0,-length*.25,0],[.0055,length*.30,.0055]);
        this.fingers.push({finger,tip,index:i,sign});
      }
      const thigh=joint(side+'UpperLeg',hips,[sign*.080,-.020,0]);body(thigh,this.cloth,[0,-.18,0],[.067,.235,.068]);
      const knee=joint(side+'LowerLeg',thigh,[0,-.42,0]);body(knee,this.cloth,[0,-.17,0],[.042,.215,.043]);
      const foot=joint(side+'Foot',knee,[0,-.40,0]);body(foot,this.shoe,[0,.008,.037],[.043,.049,.103]);
    }
    this.stool=new T.Group();this.root.add(this.stool);
    const seat=new T.Mesh(new T.BoxGeometry(.38,.04,.38),this.cloth);seat.position.set(0,.37,0);this.stool.add(seat);
    for(const x of [-.14,.14])for(const z of [-.14,.14]){const leg=new T.Mesh(new T.CylinderGeometry(.014,.014,.35,12),this.shoe);leg.position.set(x,.175,z);this.stool.add(leg);}
  }
  buildFace(spec){
    disposeGroup(this.headGroup);
    const geo=new T.SphereGeometry(1,80,64),p=geo.attributes.position;
    const gaussian=(x,y,cx,cy,wx,wy)=>Math.exp(-((x-cx)/wx)**2-((y-cy)/wy)**2);
    for(let i=0;i<p.count;i++){
      const nx=p.getX(i),ny=p.getY(i),nz=p.getZ(i),front=Math.max(0,nz)**5;
      const jaw=ny<0?T.MathUtils.lerp(1,spec.jaw,Math.min(1,-ny)**1.3):1;
      const x=nx*spec.width*jaw,y=ny*spec.height;
      let z=nz*.074;
      // Continuous surface: cheek volume, orbital hollows, nose bridge and tip.
      z+=front*(.005*(gaussian(x,y,-.036,-.012,.025,.032)+gaussian(x,y,.036,-.012,.025,.032))
        -.012*(gaussian(x,y,-.031,.022,.024,.013)+gaussian(x,y,.031,.022,.024,.013))
        +.013*gaussian(x,y,0,.007,.010,.030)+.023*gaussian(x,y,0,-.013,.011,.010)
        +.004*gaussian(x,y,0,-.043,.027,.010));
      p.setXYZ(i,x,y,z);
    }
    geo.computeVertexNormals();const face=new T.Mesh(geo,this.skin);this.headGroup.add(face);
    for(const sign of [-1,1]){
      ellipsoid(this.headGroup,this.skin,[sign*spec.width*.95,-.01,-.002],[.014,.024,.009]);
      const x=sign*.031,y=.022;
      ellipsoid(this.headGroup,this.white,[x,y,.063],[spec.eye,.0085,.008]);
      ellipsoid(this.headGroup,this.iris,[x,y,.0701],[.0067,.0074,.0012],24);
      ellipsoid(this.headGroup,this.dark,[x,y,.0712],[.0027,.0052,.0007],24);
      curve(this.headGroup,this.dark,[[x-spec.eye*.92,y+.001,.064],[x-spec.eye*.50,y+.008,.069],[x,y+.009,.071],[x+spec.eye*.60,y+.007,.067],[x+spec.eye*.98,y+.001,.061]],.00095);
      curve(this.headGroup,this.hairMaterial,[[x-spec.eye*.85,.043,.062],[x,.048,.066],[x+spec.eye*.8,.044,.061]],.00135);
    }
    curve(this.headGroup,this.lips,[[-.019,-.043,.070],[-.009,-.042,.075],[0,-.043,.077],[.009,-.042,.075],[.019,-.043,.070]],.0015);
    curve(this.headGroup,this.lips,[[-.015,-.045,.072],[0,-.048,.076],[.015,-.045,.072]],.0017);
  }
  apply(state){
    const m=state.model,p=state.pose,spec=CHARACTERS.find(x=>x.id===m.character)||CHARACTERS[0];
    if(this.character!==spec.id){this.buildFace(spec);this.character=spec.id;this.hairKey=null;}
    if(this.hairKey!==m.hair+spec.id){disposeGroup(this.hair);buildHair(this.hair,this.hairMaterial,m.hair,spec);this.hairKey=m.hair+spec.id;}
    this.skin.color.copy(m.material==='skin'?skinColor(spec.skin).multiplyScalar(m.skinTone):new T.Color().setRGB(...Array(3).fill(m.material==='gray'?.18:.55)));
    this.skin.roughness=m.roughness;this.hairMaterial.color.set(m.hairColor);this.hairMaterial.roughness=m.hairRoughness;
    this.cloth.color.set(m.clothColor);
    this.root.rotation.y=p.bodyYaw*DEG;this.bones.hips.position.y=.88+(m.body?p.hipOffset:0);
    for(const [name] of JOINTS)this.bones[name].rotation.set(...['X','Y','Z'].map(axis=>(m.body?p[name+axis]:0)*DEG),'XYZ');
    this.bones.head.rotation.set(m.pitch*DEG,m.yaw*DEG,0,'YXZ');
    this.bodyMeshes.forEach(mesh=>mesh.visible=m.body);this.stool.visible=m.body&&p.preset==='seated';
    for(const {finger,tip,index,sign} of this.fingers){
      const curl=p.hand==='open'?0:p.hand==='peace'?(index===1||index===2?0:1.3):.35;
      finger.rotation.set(curl,0,index===4?sign*.7:0);tip.rotation.x=curl*.7;
    }
    this.root.updateMatrixWorld(true);
  }
  points(){const out={};for(const [name,bone] of Object.entries(this.bones))out[name]=bone.getWorldPosition(new T.Vector3()).toArray();return out;}
  face(){return this.bones.head.getWorldPosition(new T.Vector3());}
  solveIK(effector,target,state){
    const side=effector.startsWith('left')?'left':'right',arm=effector.endsWith('Hand');
    const chain=arm?[side+'LowerArm',side+'UpperArm']:[side+'LowerLeg',side+'UpperLeg'];
    const tip=this.bones[effector],wanted=v(...target);
    for(let iteration=0;iteration<14;iteration++){
      for(const name of chain){
        const bone=this.bones[name],origin=bone.getWorldPosition(new T.Vector3()),from=tip.getWorldPosition(new T.Vector3()).sub(origin),to=wanted.clone().sub(origin);
        if(from.lengthSq()<1e-10||to.lengthSq()<1e-10)continue;
        const delta=new T.Quaternion().setFromUnitVectors(from.normalize(),to.normalize());
        const parentQ=bone.parent.getWorldQuaternion(new T.Quaternion());
        bone.quaternion.premultiply(parentQ).premultiply(delta).premultiply(parentQ.invert());
        const e=new T.Euler().setFromQuaternion(bone.quaternion,'XYZ'),limits=JOINTS.find(j=>j[0]===name);
        for(const [i,axis] of ['X','Y','Z'].entries())state.pose[name+axis]=Math.round(clamp(e[axis.toLowerCase()]/DEG,...limits[i+2]));
        bone.rotation.set(...['X','Y','Z'].map(axis=>state.pose[name+axis]*DEG),'XYZ');this.root.updateMatrixWorld(true);
      }
      if(tip.getWorldPosition(new T.Vector3()).distanceTo(wanted)<.005)break;
    }
    state.pose.preset='custom';return this.points();
  }
}

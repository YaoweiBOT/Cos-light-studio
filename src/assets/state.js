import {clamp} from './physics.js';
export const VERSION=1;
// 器材目录只约束尺寸、焦距与光圈范围；灯具配光、柔光箱透射与镜头光学特性不参与计算。
export const CAMERAS=[
 {id:'sony-a7c2',label:'索尼 A7C II',short:'A7C II',sensor:35.7,note:'全画幅'},
 {id:'canon-r7',label:'佳能 R7',short:'R7',sensor:22.3,note:'APS-C'}
];
export const LENSES=[
 {id:'tamron-2875-g2',label:'腾龙 28-75 ƒ/2.8 G2',min:28,max:75,aperture:2.8},
 {id:'custom',label:'自定义 · 不限型号',min:18,max:120,aperture:1.4}
];
export const FLASHES=[
 {id:'ad200-1',label:'AD200Pro II · ①号',short:'AD200Pro ①'},
 {id:'ad200-2',label:'AD200Pro II · ②号',short:'AD200Pro ②'},
 {id:'v860',label:'V860 III',short:'V860 III'},
 {id:'',label:'通用光源 · 不标注',short:''}
];
const light=(id,name,role,color,overrides={})=>({id,name,role,color,enabled:id==='key',shape:'disk',width:.6,height:.6,power:0,azimuth:-45,distance:1.2,heightY:1.98,aimX:0,aimY:0,aimZ:0,roll:0,kelvin:5600,tint:0,modifier:'octa60',flash:'',...overrides});
export function defaults(){ return {
  version:VERSION,name:'45° 面光练习',preset:'rembrandt',selected:'key',solo:null,
  lights:[
    light('key','主光','K','#d9b77c',{flash:'ad200-1'}),
    light('rim','轮廓光','R','#8faec7',{shape:'rect',width:.3,height:1.2,power:-1,azimuth:135,distance:1.1,heightY:1.85,modifier:'strip',flash:'ad200-2'}),
    light('top','顶光 / 补光','T','#b09cca',{width:.6,height:.6,power:-1.5,azimuth:175,distance:.25,heightY:2.55,flash:'v860'})
  ],
  camera:{body:'sony-a7c2',lens:'tamron-2875-g2',focal:56,distance:1.65,aperture:4,shutter:125,iso:100,ev:0,wb:5600,tint:0,dof:false,focus:1.65,frame:'portrait'},
  model:{yaw:0,pitch:0,material:'clay',roughness:.42,skinTone:1,object:'head'},
  room:{reflectance:.025,floor:.035,background:0,board:'off',boardSide:1,boardDistance:.5,boardAngle:0,boardHeight:1.5},
  render:{quality:'balanced',maxSamples:256,bounces:6,diagnostic:'beauty',grid:false},
  notes:''
}; }
export const clone=value=>JSON.parse(JSON.stringify(value));
export const MODIFIERS=[
 {id:'octa60',label:'60×60 八角罩',group:'kit',shape:'disk',width:.6,height:.6},
 {id:'octa90',label:'90×90 八角罩',group:'kit',shape:'disk',width:.9,height:.9},
 {id:'deep90',label:'90×90 深口抛罩（按均匀圆盘计算）',group:'kit',shape:'disk',width:.9,height:.9},
 {id:'flash-ad200',label:'AD200Pro II 裸灯 · 标准罩',group:'kit',shape:'disk',width:.095,height:.095},
 {id:'flash-v860',label:'V860 III 裸灯',group:'kit',shape:'disk',width:.05,height:.05},
 {id:'disk120',label:'120 cm 圆形柔光箱',group:'generic',shape:'disk',width:1.2,height:1.2},
 {id:'strip',label:'30 × 120 cm 条形箱',group:'generic',shape:'rect',width:.3,height:1.2},
 {id:'rect',label:'60 × 90 cm 矩形箱',group:'generic',shape:'rect',width:.6,height:.9},
 {id:'small',label:'10 cm 小发光面',group:'generic',shape:'disk',width:.1,height:.1}
];
export const PRESETS=[
 {id:'rembrandt',name:'45° 面光',tag:'01 / 观察鼻影',desc:'从单灯开始。留意鼻影能否与颊影相接，再微调高度和脸朝向；45° 只是起点。',light:{azimuth:-45,heightY:2.05,distance:1.2,width:.6,height:.6,modifier:'octa60'}},
 {id:'loop',name:'蝴蝶侧移 · Loop',tag:'02 / 鼻影分离',desc:'主光靠近相机轴线，鼻影落向一侧。比较鼻影长度与眼窝亮度，试着保持鼻影和颊影分离。',light:{azimuth:-25,heightY:1.98,distance:1.2}},
 {id:'butterfly',name:'正面高位光',tag:'03 / 对称与高度',desc:'从相机正上方照下，观察鼻下阴影。向上抬灯直到眼窝变暗，再适当放低。',light:{azimuth:0,heightY:2.35,distance:1.05}},
 {id:'split',name:'侧光',tag:'04 / 明暗分界',desc:'灯放在侧面，微调脸朝向。观察鼻梁遮挡、脸颊高光与暗侧的反射补光。',light:{azimuth:-90,heightY:1.72,distance:1.25,width:.35,height:.35,modifier:''}},
 {id:'rim',name:'单独看轮廓光',tag:'05 / 别照到鼻尖',desc:'只开后侧条形灯，观察耳缘和下颌。移动灯位，找到不让鼻尖与脸颊溢光的位置。',keyOff:true,rim:{enabled:true,power:0}},
 {id:'top',name:'单独看顶光',tag:'06 / 眼窝与额头',desc:'只开高位灯。前后挪动，观察额头、鼻梁和眼窝之间的变化；真正头顶是水平距离接近零。',keyOff:true,top:{enabled:true,power:0,azimuth:180,distance:.05,heightY:2.6}},
 {id:'cosplay',name:'冷暖三灯',tag:'07 / 分离人物',desc:'中性主光、冷色轮廓、暖色高位光。先逐盏单独观察，再合起来；避免依靠整体提亮掩盖溢光。',light:{width:1.2,height:1.2,power:0,azimuth:-40,heightY:2.1,modifier:'disk120'},rim:{enabled:true,kelvin:9500,tint:10,power:-1},top:{enabled:true,kelvin:3200,power:-2,azimuth:150,distance:.7}},
 {id:'clamshell',name:'高位光 + 反光板',tag:'08 / 真实反射',desc:'正面高位主光，白色板置于下方。将反光板改成黑板，比较下颌与暗部的变化。',light:{azimuth:0,heightY:2.2,distance:1.05,width:.9,height:.9,modifier:'octa90'},board:'below'},
 {id:'hard',name:'硬光练习',tag:'09 / 看清边缘',desc:'10 cm 小发光面。把尺寸慢慢增大，注意阴影边缘和高光面积；总光通量保持不变。',light:{width:.1,height:.1,azimuth:-45,distance:1.4,heightY:2.05,modifier:'small'}}
];
export function presetState(id,current=defaults()){
  const p=PRESETS.find(x=>x.id===id)||PRESETS[0], next=defaults();
  next.camera=clone(current.camera);next.model=clone(current.model);next.render=clone(current.render);
  next.preset=p.id; next.name=p.name; next.notes=current.notes;
  Object.assign(next.lights[0],p.light||{},p.keyOff?{enabled:false}:{});
  Object.assign(next.lights[1],p.rim||{});Object.assign(next.lights[2],p.top||{});
  if(p.board)next.room.board=p.board;
  next.selected=p.keyOff?(p.rim?'rim':'top'):'key'; return next;
}
const numeric=(input,key,fallback,min,max)=>typeof input?.[key]==='number'&&Number.isFinite(input[key])?clamp(input[key],min,max):fallback;
const choice=(input,key,base,options)=>options.includes(input?.[key])?input[key]:base;
export function validateState(input){
  if(!input||typeof input!=='object'||Array.isArray(input))throw new Error('方案必须是 JSON 对象');
  if(input.version!==VERSION)throw new Error('不支持这个方案版本');
  if(!Array.isArray(input.lights)||input.lights.length!==3)throw new Error('方案应包含三盏灯');
  const d=defaults();
  d.name=typeof input.name==='string'?input.name.slice(0,80):d.name;
  d.notes=typeof input.notes==='string'?input.notes.slice(0,4000):'';
  d.preset=choice(input,'preset',d.preset,PRESETS.map(p=>p.id));
  d.selected=choice(input,'selected','key',['key','rim','top']);
  d.solo=choice(input,'solo',null,[null,'key','rim','top']);
  const bounds={width:[.05,2.4],height:[.05,2.4],power:[-6,4],azimuth:[-180,180],distance:[.02,4],heightY:[.3,3.8],aimX:[-1,1],aimY:[-.8,.8],aimZ:[-1,1],roll:[-180,180],kelvin:[1800,12000],tint:[-100,100]};
  const modIds=MODIFIERS.map(m=>m.id);
  d.lights=d.lights.map((base,i)=>{
    const a=input.lights[i]; if(!a||a.id!==base.id)throw new Error('灯具标识或顺序不正确');
    for(const [key,[min,max]] of Object.entries(bounds))base[key]=numeric(a,key,base[key],min,max);
    base.shape=choice(a,'shape','disk',['disk','rect']);base.enabled=typeof a.enabled==='boolean'?a.enabled:base.enabled;
    base.modifier=modIds.includes(a.modifier)?a.modifier:MODIFIERS.find(m=>m.shape===base.shape&&m.width===base.width&&m.height===base.height)?.id||'';
    base.flash=FLASHES.some(f=>f.id===a.flash)?a.flash:base.flash;
    return base;
  });
  const sections={
    camera:{focal:[18,120],distance:[.5,4],aperture:[1.4,16],shutter:[15,1000],iso:[50,3200],ev:[-5,5],wb:[1800,12000],tint:[-100,100],focus:[.4,5]},
    model:{yaw:[-90,90],pitch:[-35,35],roughness:[.15,.9],skinTone:[.4,1]},
    room:{reflectance:[0,.8],floor:[0,.8],background:[0,.06],boardSide:[-1,1],boardDistance:[.2,1.5],boardAngle:[-80,80],boardHeight:[.4,2.2]},
    render:{maxSamples:[16,4096],bounces:[2,12]}
  };
  for(const [section,keys] of Object.entries(sections))for(const [key,[min,max]] of Object.entries(keys))d[section][key]=numeric(input[section],key,d[section][key],min,max);
  for(const [section,key,options] of [
    ['camera','frame',['portrait','square','landscape']],
    ['model','material',['clay','skin','gray']],['model','object',['head','spheres']],
    ['room','board',['off','white','black','silver','below']],
    ['render','quality',['draft','balanced','fine']],['render','diagnostic',['beauty','clip','falsecolor']]
  ])d[section][key]=choice(input[section],key,d[section][key],options);
  // 旧方案只有 sensor 字段：按传感器尺寸迁移到默认机身后再校验。
  const legacySensor=(input.camera||{}).sensor;
  const legacyBody=legacySensor==='apsc'?'canon-r7':legacySensor==='full'?'sony-a7c2':undefined;
  d.camera.body=choice({body:legacyBody!==undefined?legacyBody:input.camera?.body},'body',d.camera.body,CAMERAS.map(c=>c.id));
  d.camera.lens=choice(input.camera,'lens',d.camera.lens,LENSES.map(l=>l.id));
  const lens=LENSES.find(l=>l.id===d.camera.lens)||LENSES[0];
  d.camera.focal=clamp(d.camera.focal,lens.min,lens.max);
  d.camera.aperture=Math.max(d.camera.aperture,lens.aperture);
  for(const [s,k] of [['camera','dof'],['render','grid']])d[s][k]=typeof input[s]?.[k]==='boolean'?input[s][k]:d[s][k];
  d.room.boardSide=d.room.boardSide<0?-1:1; d.render.maxSamples=Math.round(d.render.maxSamples);d.render.bounces=Math.round(d.render.bounces);
  return d;
}
export const effectiveLights=state=>state.lights.map(l=>({...l,enabled:state.solo?l.id===state.solo:l.enabled}));

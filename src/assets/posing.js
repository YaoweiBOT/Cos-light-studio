import {MMD_CHARACTERS} from './character-catalog.js';
import {MMD_PROFILES} from './mmd-profiles.js';
export const CHARACTERS=[...MMD_CHARACTERS.map(c=>[c.id,c.name]),['scan','Lee · 男性扫描']];
export const HAIRSTYLES=[['none','无附加假发']];
export const HAIR_COLORS=[['ink','原装']];
export const POSES=[['relaxed','自然站立'],['rest','原始站姿 · 检查模型'],['hip','单手叉腰'],['wave','抬手打招呼'],['frame','双手靠近脸'],['walk','前后错步'],['sit','坐三步梯'],['stool','坐圆凳']];
export const LIMBS=['leftHand','rightHand','leftFoot','rightFoot'];
export const LABELS={leftHand:'画面左手',rightHand:'画面右手',leftFoot:'画面左脚',rightFoot:'画面右脚'};
export function posePreset(id='relaxed',character='scan'){
  const p={id,rootY:.92,leftHand:{x:-.26,y:-.025,z:.06},rightHand:{x:.26,y:-.025,z:.06},leftFoot:{x:-.105,y:-.84,z:.025},rightFoot:{x:.105,y:-.84,z:.025},armBend:-1,kneeBend:1};
  if(id==='hip')p.rightHand={x:.15,y:.14,z:.12};
  if(id==='wave')p.rightHand={x:.36,y:.76,z:.04};
  if(id==='frame'){p.leftHand={x:-.115,y:.59,z:.18};p.rightHand={x:.115,y:.59,z:.18};}
  if(id==='walk'){p.leftFoot={x:-.13,y:-.77,z:.30};p.rightFoot={x:.13,y:-.77,z:-.28};p.rightHand.z=.24;p.leftHand.z=-.15;}
  if(id==='sit'||id==='stool'){
    p.rootY=id==='sit'?.82:.61;
    p.leftFoot={x:-.16,y:id==='sit'?-.50:-.53,z:.55};p.rightFoot={x:.19,y:id==='sit'?-.50:-.53,z:.51};
    p.leftHand={x:-.16,y:-.05,z:.35};p.rightHand={x:.16,y:-.05,z:.35};
  }
  if(MMD_PROFILES[character]&&!['sit','stool'].includes(id))p.rootY=MMD_PROFILES[character].pelvis.y;
  return p;
}
const add=(a,b)=>({x:a.x+b.x,y:a.y+b.y,z:a.z+b.z}),sub=(a,b)=>({x:a.x-b.x,y:a.y-b.y,z:a.z-b.z}),mul=(a,s)=>({x:a.x*s,y:a.y*s,z:a.z*s});
const dot=(a,b)=>a.x*b.x+a.y*b.y+a.z*b.z;
const len=v=>Math.hypot(v.x,v.y,v.z),unit=v=>mul(v,1/(len(v)||1));
export function solveTwoBone(start,target,a,b,pole){
  const raw=sub(target,start),direction=len(raw)>1e-8?unit(raw):{x:0,y:-1,z:0};
  const distance=Math.min(a+b-.00001,Math.max(Math.abs(a-b)+.00001,len(raw)));
  const end=add(start,mul(direction,distance));
  let bend=sub(pole,mul(direction,dot(pole,direction)));
  if(len(bend)<1e-5){const axis=Math.abs(direction.z)<.8?{x:0,y:0,z:1}:{x:1,y:0,z:0};bend=sub(axis,mul(direction,dot(axis,direction)));}
  const along=(a*a-b*b+distance*distance)/(2*distance),height=Math.sqrt(Math.max(0,a*a-along*along));
  return {start,mid:add(start,add(mul(direction,along),mul(unit(bend),height))),end};
}
export function rigPose(model){
  const profile=MMD_PROFILES[model.character];
  if(profile){
    const pose=model.pose||posePreset(),delta=model.body?pose.rootY-profile.pelvis.y:0,shift=p=>({...p,y:p.y+delta});
    const joints=Object.fromEntries(['pelvis','chest','neck','head'].map(k=>[k,shift(profile[k])])),limbs={};
    for(const key of LIMBS){
      const rest=profile.limbs[key],start=shift(rest.start),hand=key.endsWith('Hand'),dest=pose[key],sign=key.startsWith('left')?-1:1;
      if(pose.id==='rest'){limbs[key]={start,mid:shift(rest.mid),end:shift(rest.end)};continue;}
      const target=hand?{x:dest.x,y:joints.pelvis.y+dest.y,z:dest.z}:{x:rest.end.x+dest.x-sign*.105,y:rest.end.y+delta+dest.y+.84,z:rest.end.z+dest.z-.025};
      const pole=hand?{x:sign,y:pose.armBend,z:-.35}:{x:sign*.12,y:.15,z:pose.kneeBend};
      limbs[key]=solveTwoBone(start,target,len(sub(rest.mid,rest.start)),len(sub(rest.end,rest.mid)),pole);
    }
    return {joints,limbs};
  }
  const pose=model.pose||posePreset(),rootY=model.body?pose.rootY:.92;
  const joints={pelvis:{x:0,y:rootY,z:0},chest:{x:0,y:rootY+.32,z:0},neck:{x:0,y:rootY+.54,z:0},head:{x:0,y:rootY+.70,z:0}};
  const limbs={};
  for(const side of ['left','right']){
    const sign=side==='left'?-1:1;
    for(const part of ['Hand','Foot']){
      const hand=part==='Hand',key=side+part,start={x:sign*(hand?.19:.105),y:rootY+(hand?.45:0),z:0};
      const dest=pose[key],target={x:dest.x,y:rootY+dest.y,z:dest.z};
      const pole=hand?{x:sign,y:pose.armBend,z:-.35}:{x:sign*.12,y:.15,z:pose.kneeBend};
      limbs[key]=solveTwoBone(start,target,hand?.27:.42,hand?.25:.43,pole);
    }
  }
  return {joints,limbs};
}
export function rotateBody(point,yaw=0){const a=yaw*Math.PI/180;return {x:point.x*Math.cos(a)+point.z*Math.sin(a),y:point.y,z:-point.x*Math.sin(a)+point.z*Math.cos(a)};}
export function pointToPoseTarget(model,key,point){
  const p=MMD_PROFILES[model.character],delta=p&&model.body?model.pose.rootY-p.pelvis.y:0;
  if(!p)return {...point,y:point.y-(model.body?model.pose.rootY:.92)};
  if(key.endsWith('Hand'))return {...point,y:point.y-p.pelvis.y-delta};
  const rest=p.limbs[key].end,sign=key.startsWith('left')?-1:1;
  return {x:point.x-rest.x+sign*.105,y:point.y-rest.y-delta-.84,z:point.z-rest.z+.025};
}
export const modelToWorld=(model,p)=>add(rotateBody(p,model.bodyYaw),{x:model.x||0,y:model.y||0,z:model.z||0});
export const worldToModel=(model,p)=>rotateBody(sub(p,{x:model.x||0,y:model.y||0,z:model.z||0}),-model.bodyYaw);
export const facePoint=model=>modelToWorld(model,rigPose(model).joints.head);
export function setPose(state,id){
  state.model.object='head';state.model.body=true;state.model.pose=posePreset(id,state.model.character);
  state.model.joints={};
  if(id==='sit'||id==='stool'){Object.assign(state.prop,{type:id==='sit'?'ladder':'stool',x:0,z:0,yaw:state.model.bodyYaw});}
}
export function frameSubject(state,framing){
  const y=facePoint(state.model).y;
  const top=Math.max(y+.2,...Object.values(rigPose(state.model).limbs).map(l=>l.end.y+.18));
  Object.assign(state.camera,framing==='head'?{distance:1.65,focal:56,heightY:y,targetY:y-.025}:framing==='half'?{distance:2.1,focal:45,heightY:y-.15,targetY:y-.32}:{distance:Math.max(3.5,top*40/(state.camera.sensor==='apsc'?22.3:36)*1.22),focal:40,heightY:top*.56,targetY:top*.50});
  state.camera.focus=Math.hypot(state.camera.distance,state.camera.heightY-state.camera.targetY);
  state.camera.x=state.model.x||0;state.camera.azimuth=0;
}

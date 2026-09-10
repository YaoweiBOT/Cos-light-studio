import {clamp,wrapAngle} from './physics.js';
export function cameraPosition(c) {
  const angle=(c.azimuth||0)*Math.PI/180;
  return {x:(c.x||0)+Math.sin(angle)*c.distance,y:c.heightY,z:Math.cos(angle)*c.distance};
}
export function moveCamera(c,key,amount=.04) {
  if(key==='w'||key==='s'){
    const wanted=(key==='w'?1:-1)*amount;
    const delta=clamp(wanted,Math.max(.2-c.heightY,.1-c.targetY),Math.min(3-c.heightY,2.5-c.targetY));
    c.heightY+=delta;c.targetY+=delta;
  }else if(key==='a'||key==='d')c.x=clamp((c.x||0)+(key==='d'?amount:-amount),-2,2);
  else if(key==='q'||key==='e')c.distance=clamp(c.distance+(key==='q'?amount:-amount),.5,6);
  else return false;
  return true;
}
export function changeFocal(c,delta,fine=false) {
  c.focal=clamp(Math.round((c.focal-delta*(fine?.005:.025))*10)/10,18,120);
}
export function orbitCamera(c,dx,dy) {
  c.azimuth=wrapAngle((c.azimuth||0)+dx*.3);
  c.heightY=clamp(c.heightY+dy*.004,.2,3);
}

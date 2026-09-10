import {position,aim,DEG,clamp,wrapAngle} from './physics.js';
import {aimedLights} from './state.js';
import {rigPose,rotateBody,LIMBS,LABELS,pointToPoseTarget,modelToWorld} from './posing.js';
import {cameraPosition} from './viewport-math.js';

const point=(canvas,e)=>{const r=canvas.getBoundingClientRect();return {x:(e.clientX-r.left)/r.width*canvas.width,y:(e.clientY-r.top)/r.height*canvas.height};};
function bindDrag(owner){
  const c=owner.canvas;c.addEventListener('pointerdown',e=>owner.down(e));c.addEventListener('pointermove',e=>owner.move(e));
  for(const event of ['pointerup','pointercancel'])c.addEventListener(event,e=>{owner.drag=null;if(c.hasPointerCapture(e.pointerId))c.releasePointerCapture(e.pointerId);});
}
function line(c,a,b,color,width=2){c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke();}
function node(c,p,r,color){c.fillStyle=color;c.beginPath();c.arc(p.x,p.y,r,0,Math.PI*2);c.fill();}

export class ElevationDiagram{
  constructor(canvas,getState,onSelect,onMove){Object.assign(this,{canvas,getState,onSelect,onMove,view:'side',drag:null});this.ctx=canvas.getContext('2d');bindDrag(this);}
  transform(){const w=this.canvas.width,h=this.canvas.height;return {cx:w/2,base:h-38,scale:Math.min((w-56)/9,(h-60)/4)};}
  at(p){const {cx,base,scale}=this.transform();return {x:cx+(this.view==='side'?p.z:p.x)*scale,y:base-p.y*scale};}
  down(e){const q=point(this.canvas,e),lights=aimedLights(this.getState());const hit=lights.map(l=>({l,p:this.at(position(l))})).sort((a,b)=>Math.hypot(a.p.x-q.x,a.p.y-q.y)-Math.hypot(b.p.x-q.x,b.p.y-q.y))[0];if(hit&&Math.hypot(hit.p.x-q.x,hit.p.y-q.y)<29){this.drag=hit.l.id;this.onSelect(this.drag);this.canvas.setPointerCapture(e.pointerId);this.move(e);}}
  move(e){
    if(!this.drag)return;const q=point(this.canvas,e),{cx,base,scale}=this.transform(),l=this.getState().lights.find(l=>l.id===this.drag),p=position(l),h=clamp((base-q.y)/scale,.3,3.8);
    if(this.view==='side')p.z=(q.x-cx)/scale;else p.x=(q.x-cx)/scale;
    const dist=clamp(Math.hypot(p.x,p.z),.02,4);
    this.onMove(l.id,{heightY:Math.round(h*100)/100,distance:Math.round(dist*100)/100,azimuth:Math.round(wrapAngle(Math.atan2(p.x,p.z)/DEG))});
  }
  draw(){
    const c=this.ctx,s=this.getState(),w=this.canvas.width,h=this.canvas.height,{cx,base,scale}=this.transform();c.clearRect(0,0,w,h);c.fillStyle='#15171a';c.fillRect(0,0,w,h);c.font='15px system-ui';
    for(let y=0;y<=4;y++){line(c,{x:28,y:base-y*scale},{x:w-12,y:base-y*scale},y===0?'#65717d':'#2c333b',1);c.fillStyle='#8793a0';c.fillText(`${y}m`,3,base-y*scale+4);}
    const rig=rigPose(s.model),world=p=>this.at(modelToWorld(s.model,p));
    if(s.model.body){for(const chain of Object.values(rig.limbs)){line(c,world(chain.start),world(chain.mid),'#929baf',6);line(c,world(chain.mid),world(chain.end),'#929baf',5);}line(c,world(rig.joints.pelvis),world(rig.joints.neck),'#929baf',13);}
    node(c,world(rig.joints.head),10,'#b4bcb9');
    const cam=this.at(cameraPosition(s.camera));c.fillStyle='#7894ae';c.fillRect(cam.x-10,cam.y-6,20,12);line(c,cam,this.at({x:s.camera.x||0,y:s.camera.targetY,z:0}),'#455465',1);
    for(const l of aimedLights(s)){
      const p=position(l),q=this.at(p),t=this.at(aim(l)),selected=l.id===s.selected;c.globalAlpha=l.enabled?1:.3;
      c.setLineDash([5,5]);line(c,q,t,l.color,1);c.setLineDash([]);node(c,q,selected?18:14,'#252a30');c.strokeStyle=l.color;c.lineWidth=selected?3:1;c.stroke();c.fillStyle=l.color;c.textAlign='center';c.fillText(l.role,q.x,q.y+5);c.fillText(`${p.y.toFixed(2)} m`,q.x,q.y-25);c.globalAlpha=1;
    }
    c.textAlign='center';c.fillStyle='#8c98a3';c.fillText(this.view==='side'?'后方 −Z  ←  →  +Z 相机':'画面左 −X  ←  →  +X 画面右',cx,h-9);
  }
}

export class PoseEditor{
  constructor(canvas,getState,onChange,onSelect){Object.assign(this,{canvas,getState,onChange,onSelect,view:'front',selected:'rightHand',drag:null});this.ctx=canvas.getContext('2d');bindDrag(this);}
  transform(){return {cx:this.canvas.width/2,base:this.canvas.height-42,scale:Math.min(this.canvas.width/2.4,(this.canvas.height-70)/2.15)};}
  at(p){const {cx,base,scale}=this.transform();return {x:cx+(this.view==='front'?p.x:p.z)*scale,y:base-p.y*scale};}
  down(e){const q=point(this.canvas,e),rig=rigPose(this.getState().model);const hit=LIMBS.map(key=>({key,p:this.at(rig.limbs[key].end)})).sort((a,b)=>Math.hypot(a.p.x-q.x,a.p.y-q.y)-Math.hypot(b.p.x-q.x,b.p.y-q.y))[0];if(hit&&Math.hypot(hit.p.x-q.x,hit.p.y-q.y)<30){this.drag=hit.key;this.selected=hit.key;this.onSelect(this.selected);this.canvas.setPointerCapture(e.pointerId);this.move(e);}}
  move(e){
    if(!this.drag)return;const q=point(this.canvas,e),{cx,base,scale}=this.transform(),m=this.getState().model,world={...rigPose(m).limbs[this.drag].end};
    world[this.view==='front'?'x':'z']=clamp((q.x-cx)/scale,-.9,.9);world.y=clamp((base-q.y)/scale,.02,2.4);
    const target=pointToPoseTarget(m,this.drag,world);
    // Commit the reachable solution rather than leaving an unreachable goal stored.
    const next={...m,pose:{...m.pose,id:'custom',[this.drag]:target}},end=rigPose(next).limbs[this.drag].end;
    this.onChange(this.drag,pointToPoseTarget(m,this.drag,end));
  }
  draw(){
    const c=this.ctx,s=this.getState(),rig=rigPose({...s.model,body:true}),w=this.canvas.width,h=this.canvas.height,{base,scale}=this.transform();c.clearRect(0,0,w,h);c.fillStyle='#13181e';c.fillRect(0,0,w,h);c.font='16px system-ui';
    for(let y=0;y<2.1;y+=.25){line(c,{x:15,y:base-y*scale},{x:w-15,y:base-y*scale},y===0?'#6d7b89':'#27333e',1);}
    const a=p=>this.at(p);
    line(c,a(rig.joints.pelvis),a(rig.joints.neck),'#7d8c9c',18);node(c,a(rig.joints.head),.11*scale,'#b7babb');
    line(c,a(rig.limbs.leftHand.start),a(rig.limbs.rightHand.start),'#7d8c9c',11);
    for(const [key,chain] of Object.entries(rig.limbs)){
      const active=this.selected===key,color=active?'#e6bd7c':key.startsWith('left')?'#89adc7':'#b69aca';
      line(c,a(chain.start),a(chain.mid),color,9);line(c,a(chain.mid),a(chain.end),color,7);node(c,a(chain.mid),7,'#e6e9ed');node(c,a(chain.end),active?14:11,color);
      c.fillStyle=color;c.textAlign=key.startsWith('left')?'right':'left';c.fillText(LABELS[key],a(chain.end).x+(key.startsWith('left')?-20:20),a(chain.end).y+5);
    }
    c.fillStyle='#a2adb8';c.textAlign='center';c.fillText(this.view==='front'?'人物自身正面 · 拖动手腕 / 脚踝':'人物自身侧面 · 右侧是身体前方',w/2,h-14);
  }
}

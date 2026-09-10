import * as T from 'three';
import {clamp,wrapAngle} from './physics.js';
import {changeFocal,moveCamera,orbitCamera} from './viewport-math.js';
import {worldToModel,pointToPoseTarget,rigPose} from './posing.js';
import {jointById} from './joints.js';

export class ViewportControls {
  constructor(frame,overlay,getState,getEngine,onChange,onSelect,onFrame) {
    Object.assign(this,{frame,overlay,getState,getEngine,onChange,onSelect,onFrame,enabled:false,detail:'body',selected:null,drag:null,keys:new Set(),wheelTimer:0,keyFrame:0});
    this.controller=new AbortController();
    const listen=(type,fn,options={})=>frame.addEventListener(type,fn,{...options,signal:this.controller.signal});
    listen('contextmenu',e=>e.preventDefault());
    listen('pointerdown',e=>this.down(e));listen('pointermove',e=>this.move(e));
    listen('pointerup',e=>this.up(e));listen('pointercancel',e=>this.up(e));
    listen('wheel',e=>{if(!this.getEngine()?.ready)return;e.preventDefault();frame.focus({preventScroll:true});this.getEngine().setInteracting(true);changeFocal(getState().camera,e.deltaY,e.shiftKey);onChange('camera');clearTimeout(this.wheelTimer);this.wheelTimer=setTimeout(()=>this.getEngine()?.setInteracting(false),160);},{passive:false});
    listen('keydown',e=>this.keydown(e));listen('keyup',e=>{this.keys.delete(e.key.toLowerCase());if(!this.keys.size)this.stopKeys();});
    listen('blur',()=>{this.keys.clear();this.stopKeys();this.up();});
  }
  setNodes(enabled,detail=this.detail) {
    this.enabled=enabled;this.detail=detail;this.update();
  }
  select(id) {this.selected=id;this.onSelect(id);this.update();}
  down(e) {
    if(e.button>2||!this.getEngine()?.ready)return;
    if(e.target.closest('#compare-divider'))return;
    this.frame.focus({preventScroll:true});e.preventDefault();
    const id=e.button===0&&!e.shiftKey?e.target.closest('[data-joint]')?.dataset.joint:null;
    if(id)this.select(id);
    const engine=this.getEngine(),m=this.getState().model;
    const joint=id?engine.jointPoints(this.detail).find(j=>j.id===id):null;
    this.drag={id,kind:joint?.kind,button:e.button,shift:e.shiftKey,alt:e.altKey,x:e.clientX,y:e.clientY,
      camera:structuredClone(this.getState().camera),model:structuredClone(m),anchor:joint?.position.clone()};
    if(joint?.kind==='ik'){
      this.drag.plane=new T.Plane().setFromNormalAndCoplanarPoint(engine.camera.getWorldDirection(new T.Vector3()),joint.position);
      this.drag.startPoint=this.planePoint(e,this.drag.plane);
    }
    this.frame.setPointerCapture(e.pointerId);engine.setInteracting(true);
  }
  planePoint(e,plane) {
    const r=this.frame.getBoundingClientRect(),ndc=new T.Vector2((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2);
    const ray=new T.Raycaster();ray.setFromCamera(ndc,this.getEngine().camera);
    return ray.ray.intersectPlane(plane,new T.Vector3());
  }
  move(e) {
    const d=this.drag;if(!d)return;
    const s=this.getState(),dx=e.clientX-d.x,dy=e.clientY-d.y,fine=e.ctrlKey?.2:1;
    if(d.id){
      if(d.kind==='ik'){
        let point;
        if(d.alt){point=d.anchor.clone().addScaledVector(this.getEngine().camera.getWorldDirection(new T.Vector3()),dy*.003*fine);}
        else {
          const hit=this.planePoint(e,d.plane);if(!hit||!d.startPoint)return;
          point=d.anchor.clone().add(hit.sub(d.startPoint).multiplyScalar(fine));
        }
        // A coarse IK edit clears FK offsets so the endpoint follows the pointer.
        s.model.joints={};
        const local=worldToModel(s.model,point),target=pointToPoseTarget(s.model,d.id,local);
        const tentative={...s.model,pose:{...s.model.pose,id:'custom',[d.id]:target}};
        s.model.pose[d.id]=pointToPoseTarget(s.model,d.id,rigPose(tentative).limbs[d.id].end);
        s.model.pose.id='custom';
      }else if(d.kind==='head'){
        s.model.yaw=clamp(d.model.yaw+dx*.3*fine,-90,90);
        s.model.pitch=clamp(d.model.pitch+dy*.2*fine,-35,35);
      }else{
        const rest=d.model.joints[d.id]||{x:0,y:0,z:0};
        s.model.joints[d.id]=d.alt?{...rest,z:clamp(rest.z+dx*.35*fine,-120,120)}:{...rest,x:clamp(rest.x+dy*.35*fine,-120,120),y:clamp(rest.y+dx*.35*fine,-120,120)};
      }
      this.onChange('geometry');
    }else if(d.button===2){
      Object.assign(s.camera,d.camera);orbitCamera(s.camera,dx*fine,dy*fine);this.onChange('camera');
    }else if(d.button===1){
      s.camera.x=clamp(d.camera.x-dx*.002*fine,-2,2);
      Object.assign(s.camera,{heightY:d.camera.heightY,targetY:d.camera.targetY});moveCamera(s.camera,dy<0?'s':'w',Math.abs(dy)*.002*fine);this.onChange('camera');
    }else if(d.shift){
      // Pan parallel to the image using the camera's horizontal basis.
      const a=(s.camera.azimuth||0)*Math.PI/180,step=dx*.002*fine;
      s.model.x=clamp(d.model.x+step*Math.cos(a),-2,2);
      s.model.z=clamp(d.model.z-step*Math.sin(a),-2,2);
      s.model.y=clamp(d.model.y-dy*.002*fine,-.4,1);this.onChange('geometry');
    }else{
      s.model.bodyYaw=wrapAngle(d.model.bodyYaw+dx*.35*fine);this.onChange('geometry');
    }
  }
  up(e) {
    if(!this.drag)return;this.drag=null;
    if(e&&this.frame.hasPointerCapture(e.pointerId))this.frame.releasePointerCapture(e.pointerId);
    this.getEngine()?.setInteracting(false);
  }
  keydown(e) {
    if(e.ctrlKey||e.metaKey||e.altKey||!this.getEngine()?.ready)return;
    const key=e.key.toLowerCase();
    if(key==='escape'){this.select(null);this.keys.clear();this.stopKeys();return;}
    if(key==='f'){e.preventDefault();this.onFrame();return;}
    if(!'wasdqe'.includes(key)||key.length!==1)return;
    e.preventDefault();e.stopPropagation();this.keys.add(key);
    this.keySpeed=e.shiftKey?.18:.6;
    if(this.keyFrame)return;
    this.getEngine()?.setInteracting(true);this.keyTime=performance.now();
    const tick=now=>{
      const dt=Math.min(.05,(now-this.keyTime)/1000);this.keyTime=now;
      for(const k of this.keys)moveCamera(this.getState().camera,k,dt*this.keySpeed);
      this.onChange('camera');this.keyFrame=requestAnimationFrame(tick);
    };
    this.keyFrame=requestAnimationFrame(tick);
  }
  stopKeys() {
    if(!this.keyFrame)return;cancelAnimationFrame(this.keyFrame);this.keyFrame=0;
    this.getEngine()?.setInteracting(false);
  }
  update() {
    this.overlay.hidden=!this.enabled;
    if(!this.enabled)return;
    const engine=this.getEngine();if(!engine?.ready)return;
    const points=engine.jointPoints(this.detail),ids=points.map(p=>p.id).join(',');
    if(this.ids!==ids){
      this.overlay.replaceChildren();
      for(const p of points){
        const node=document.createElement('button');node.type='button';node.className='joint-node';node.dataset.joint=p.id;
        node.title=p.label;node.setAttribute('aria-label',p.label);node.textContent=p.kind==='ik'?'◆':'●';this.overlay.appendChild(node);
      }
      this.ids=ids;
    }
    points.forEach((p,i)=>{
      const node=this.overlay.children[i],screen=p.position.clone().project(engine.camera);
      node.hidden=screen.z<-1||screen.z>1||Math.abs(screen.x)>1||Math.abs(screen.y)>1;
      node.style.left=(screen.x+1)*50+'%';node.style.top=(1-screen.y)*50+'%';
      node.classList.toggle('active',p.id===this.selected);node.setAttribute('aria-pressed',String(p.id===this.selected));
    });
  }
  dispose() {this.up();this.stopKeys();clearTimeout(this.wheelTimer);this.controller.abort();}
}

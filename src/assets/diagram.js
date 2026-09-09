import {position,aim,angularSize,DEG,wrapAngle,clamp} from './physics.js';
import {aimedLights} from './state.js';

export class LightingDiagram {
  constructor(canvas,getState,onSelect,onMove){
    this.canvas=canvas;this.ctx=canvas.getContext('2d');this.getState=getState;this.onSelect=onSelect;this.onMove=onMove;this.drag=null;
    canvas.addEventListener('pointerdown',e=>this.down(e));
    canvas.addEventListener('pointermove',e=>this.move(e));
    canvas.addEventListener('pointerup',e=>this.up(e));
    canvas.addEventListener('pointercancel',e=>this.up(e));
  }
  transform(){
    const state=this.getState(),w=this.canvas.width,h=this.canvas.height;
    const extent=Math.max(3.05,...state.lights.map(l=>l.distance+.3),state.camera.distance+.4);
    return {cx:w/2,cy:h*.47,scale:Math.min(w,h)*.44/extent,w,h};
  }
  at(x,z){const {cx,cy,scale}=this.transform();return {x:cx+x*scale,y:cy+z*scale};}
  pointer(e){const rect=this.canvas.getBoundingClientRect();return {x:(e.clientX-rect.left)*this.canvas.width/rect.width,y:(e.clientY-rect.top)*this.canvas.height/rect.height};}
  down(e){
    const q=this.pointer(e),s=this.getState();
    const hit=s.lights.map(l=>{const p=position(l),v=this.at(p.x,p.z);return {l,d:Math.hypot(v.x-q.x,v.y-q.y)};}).sort((a,b)=>a.d-b.d)[0];
    if(hit&&hit.d<36){this.drag=hit.l.id;this.onSelect(hit.l.id);this.canvas.setPointerCapture(e.pointerId);this.move(e);}
  }
  move(e){
    if(!this.drag)return;
    const q=this.pointer(e),{cx,cy,scale}=this.transform();
    const x=(q.x-cx)/scale,z=(q.y-cy)/scale;
    this.onMove(this.drag,{azimuth:Math.round(wrapAngle(Math.atan2(x,z)/DEG)),distance:Math.round(clamp(Math.hypot(x,z),.02,4)*100)/100});
  }
  up(e){if(this.drag){this.drag=null;if(this.canvas.hasPointerCapture(e.pointerId))this.canvas.releasePointerCapture(e.pointerId);}}
  draw(){
    const c=this.ctx,s=this.getState(),{cx,cy,scale,w,h}=this.transform();c.clearRect(0,0,w,h);
    c.fillStyle='#15171a';c.fillRect(0,0,w,h);
    c.save();c.lineWidth=1;c.strokeStyle='#2c3036';
    for(let r=1;r<=4;r++){c.beginPath();c.arc(cx,cy,r*scale,0,Math.PI*2);c.stroke();}
    c.setLineDash([3,7]);c.strokeStyle='#2e333a';c.beginPath();c.moveTo(cx,18);c.lineTo(cx,h-18);c.moveTo(18,cy);c.lineTo(w-18,cy);c.stroke();c.setLineDash([]);
    c.font='14px system-ui';c.fillStyle='#596472';c.textAlign='center';c.fillText('后侧',cx,23);c.fillText('相机侧',cx,h-16);
    const frameAspect={portrait:2/3,square:1,landscape:1.5}[s.camera.frame];
    const filmWidth=(s.camera.sensor==='apsc'?22.3:36)*Math.min(frameAspect,1);
    const camera=this.at(0,s.camera.distance),fov=2*Math.atan(filmWidth/(2*s.camera.focal));
    c.fillStyle='#8995a50c';c.beginPath();c.moveTo(camera.x,camera.y);c.lineTo(cx-Math.tan(fov/2)*s.camera.distance*scale,cy);c.lineTo(cx+Math.tan(fov/2)*s.camera.distance*scale,cy);c.closePath();c.fill();
    c.strokeStyle='#657180';c.fillStyle='#222a34';c.lineWidth=1.5;c.beginPath();c.roundRect(camera.x-15,camera.y-8,30,19,3);c.fill();c.stroke();c.beginPath();c.moveTo(camera.x-7,camera.y-8);c.lineTo(camera.x-10,camera.y-15);c.lineTo(camera.x+10,camera.y-15);c.lineTo(camera.x+7,camera.y-8);c.closePath();c.fill();c.stroke();
    const r=s.room;if(r.board2!=='off'){c.save();const p=this.at(-r.boardSide*r.board2Distance,.1);c.translate(p.x,p.y);c.rotate(r.boardSide*r.board2Angle*DEG);c.fillStyle=r.board2==='black'?'#555a61':r.board2==='silver'?'#bdcbd7':'#d3cfc2';c.fillRect(-3,-r.board2Width/2*scale,6,r.board2Width*scale);c.restore();}
    if(r.board!=='off'){
      c.save();const p=r.board==='below'?this.at(0,.35):this.at(r.boardSide*r.boardDistance,.1);c.translate(p.x,p.y);c.rotate(r.board==='below'?Math.PI/2:-r.boardSide*r.boardAngle*DEG);c.fillStyle=r.board==='black'?'#555a61':r.board==='silver'?'#bdcbd7':'#d3cfc2';c.fillRect(-3,-r.boardWidth/2*scale,6,r.boardWidth*scale);c.restore();
    }
    aimedLights(s).forEach(l=>{
      const p=position(l),target=aim(l),q=this.at(p.x,p.z),t=this.at(target.x,target.z),selected=l.id===s.selected;
      c.save();c.globalAlpha=l.enabled?1:.27;c.strokeStyle=l.color;c.fillStyle=l.color;c.lineWidth=selected?2:1;
      const a=Math.atan2(t.y-q.y,t.x-q.x),ww=Math.min(52,Math.max(14,l.width*scale));
      c.beginPath();c.moveTo(q.x,q.y);c.lineTo(t.x,t.y);c.setLineDash([4,5]);c.globalAlpha*=.35;c.stroke();c.setLineDash([]);c.globalAlpha=l.enabled?1:.27;
      c.translate(q.x,q.y);c.rotate(a);c.fillStyle=l.enabled?`${l.color}18`:'#6f768008';c.beginPath();c.moveTo(0,-ww/2);c.lineTo(Math.min(60,Math.hypot(t.x-q.x,t.y-q.y)), -ww*.65);c.lineTo(Math.min(60,Math.hypot(t.x-q.x,t.y-q.y)),ww*.65);c.lineTo(0,ww/2);c.closePath();c.fill();c.fillStyle=l.color;c.fillRect(-2,-ww/2,4,ww);
      c.rotate(-a);c.fillStyle=selected?'#30291d':'#1b2026';c.strokeStyle=l.color;c.beginPath();c.arc(0,0,15,0,Math.PI*2);c.fill();c.stroke();c.fillStyle=l.color;c.font='600 13px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(l.role,0,0);
      c.font='12px system-ui';c.fillText(`${l.azimuth}°`,0,selected?-26:27);c.restore();
    });
    // Head silhouette and a small nose establish face orientation in plan view.
    c.save();c.translate(cx,cy);c.rotate(-(s.model.yaw+s.model.bodyYaw)*DEG);c.fillStyle='#9ba29f';c.strokeStyle='#c0c5bf';c.lineWidth=1;
    c.beginPath();c.ellipse(0,0,10,12,0,0,Math.PI*2);c.fill();c.beginPath();c.moveTo(-3,11);c.lineTo(0,17);c.lineTo(3,11);c.fill();c.restore();
    c.fillStyle='#a3aaa9';c.textAlign='left';c.font='12px system-ui';c.fillText('人像',cx+18,cy+5);
    const current=aimedLights(s).find(l=>l.id===s.selected),a=angularSize(current);c.fillStyle='#7d8895';c.textAlign='left';c.font='12px system-ui';c.fillText(`灯心高 ${current.heightY.toFixed(2)} m`,18,h-38);c.fillText(`至面心 ${a.distance.toFixed(2)} m`,18,h-20);
    c.restore();
  }
}

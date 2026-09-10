import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as T from 'three';
import {defaults} from '../src/assets/state.js';
import {ViewportControls} from '../src/assets/viewport-controls.js';
import {whitenRGBA} from '../src/assets/surfaces.js';

test('gray mask removes RGB but preserves every alpha, including semitransparent decals',()=>{
  const pixels=new Uint8ClampedArray([10,20,30,0,20,10,2,80,0,0,0,255]);whitenRGBA(pixels);
  assert.deepEqual([...pixels],[255,255,255,0,255,255,255,80,255,255,255,255]);
});
test('every literal app element binding is present in HTML or a generated panel',()=>{
  const app=readFileSync(new URL('../src/assets/app.js',import.meta.url),'utf8'),html=readFileSync(new URL('../src/index.html',import.meta.url),'utf8');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'static IDs must be unique');
  const generated=[...app.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  for(const [,id] of app.matchAll(/\$\('([^']+)'\)/g))assert.ok([...ids,...generated].includes(id),id);
  assert.ok(!html.includes('LOCAL 0.4'));assert.ok(html.includes('LOCAL 0.5'));
});
function fixture(){
  const frame={addEventListener(){},focus(){},setPointerCapture(){},hasPointerCapture(){return false;},getBoundingClientRect(){return {left:0,top:0,width:600,height:900};}};
  const s=defaults(),camera=new T.PerspectiveCamera(40,2/3,.03,30);camera.position.set(0,1.62,3);camera.lookAt(0,1.3,0);camera.updateMatrixWorld();
  const changed=[],selected=[],interactions=[];
  const engine={ready:true,camera,jointPoints(){return [{id:'head',kind:'head',position:new T.Vector3(0,1.62,0)},{id:'leftPalm',position:new T.Vector3(-.25,1,0)}];},setInteracting(value){interactions.push(value);}};
  const controls=new ViewportControls(frame,{},()=>s,()=>engine,k=>changed.push(k),id=>selected.push(id),()=>{});
  const event=(overrides={})=>({button:0,clientX:200,clientY:200,pointerId:1,shiftKey:false,altKey:false,ctrlKey:false,preventDefault(){},target:{closest(){return null;}},...overrides});
  return {s,controls,event,changed,selected,interactions};
}
test('direct viewport rotate/pan/orbit gestures affect the intended object only',()=>{
  const f=fixture(),{s,controls,event}=f;
  controls.down(event());controls.move(event({clientX:300}));controls.up();
  assert.equal(s.model.bodyYaw,35);assert.equal(s.camera.azimuth,0);
  controls.down(event({button:2}));controls.move(event({clientX:300}));controls.up();
  assert.equal(s.camera.azimuth,30);assert.equal(s.model.bodyYaw,35);
  controls.down(event({shiftKey:true}));controls.move(event({clientX:300,clientY:150}));controls.up();
  assert.ok(s.model.x>0);assert.ok(s.model.z<0);assert.equal(s.model.y,.1);
  assert.ok(f.interactions.at(-1)===false);controls.dispose();
});
test('viewport node gesture rotates authored joint data and respects numeric limits',()=>{
  const {s,controls,event}=fixture();
  const target=id=>({closest(selector){return selector==='[data-joint]'?{dataset:{joint:id}}:null;}});
  controls.down(event({target:target('head')}));controls.move(event({clientX:9999,clientY:9999}));controls.up();
  assert.equal(s.model.yaw,90);assert.equal(s.model.pitch,35);
  controls.down(event({target:target('leftPalm'),altKey:true}));controls.move(event({clientX:300}));controls.up();
  assert.deepEqual(s.model.joints.leftPalm,{x:0,y:0,z:35});
  controls.dispose();
});

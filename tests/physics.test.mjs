import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults,clone,validateState,presetState,PRESETS,effectiveLights} from '../src/assets/state.js';
import {radiance,area,flux,meter,FACE,angularSize,exposure,cctToLinear,whiteBalanceGains,luminance,frontalNormal,emitterBasis,dot,length} from '../src/assets/physics.js';
import {escapeHTML,makeSheet,safeFilename} from '../src/assets/exports.js';
const close=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<=tol,`${a} differs from ${b}`);
const centered=()=>({...defaults().lights[0],azimuth:0,heightY:FACE.y,distance:2,shape:'rect',width:.05,height:.05});

test('one stop doubles incident illumination without changing source geometry',()=>{
  const l=centered(),base=meter(l);close(meter({...l,power:l.power+1})/base,2);
});
test('source area changes conserve hemispherical flux for rectangles and disks',()=>{
  for(const shape of ['rect','disk'])for(const width of [.05,.6,1.2,2.4]){
    const l={...centered(),shape,width,height:width*.5};close(radiance(l)*area(l)*Math.PI,flux(l),1e-8);
  }
});
test('small distant source converges to the inverse-square law',()=>{
  const l=centered(),near=meter(l),far=meter({...l,distance:4});close(near/far,4,.002);
  const analytic=1000/(Math.PI*4);close(near/analytic,1,.001);
});
test('large near disk matches analytic irradiance and is not a softened point light',()=>{
  // E on axis for a uniform Lambertian disk: LπR²/(d²+R²).
  const l={...centered(),shape:'disk',width:1.2,height:1.2,distance:.5};
  const expected=radiance(l)*Math.PI*.6**2/(.5**2+.6**2);
  close(meter(l,FACE,{x:0,y:0,z:1},200)/expected,1,.003);
  assert.ok(meter(l)<flux(l)/(Math.PI*.5**2)*.5);
});
test('receiver turned away from the light receives no direct illumination',()=>{
  close(meter(centered(),FACE,{x:0,y:0,z:-1}),0);
});
test('same angular size is obtained when dimensions and all offsets scale together',()=>{
  const l={...centered(),width:.6,height:1.2,heightY:FACE.y+.4};
  const q={...l,width:1.2,height:2.4,distance:l.distance*2,heightY:FACE.y+.8};
  close(angularSize(l).width,angularSize(q).width);close(angularSize(l).height,angularSize(q).height);
});
test('emitter bases remain orthonormal, including top-down and rolled lights',()=>{
  for(const l of [...defaults().lights,{...centered(),distance:.02,heightY:3.8,roll:77}]){
    const b=emitterBasis(l);close(length(b.n),1);close(length(b.x),1);close(length(b.y),1);close(dot(b.n,b.x),0);close(dot(b.n,b.y),0);close(dot(b.x,b.y),0);
  }
});
test('continuous exposure obeys aperture, shutter, ISO, and compensation stops',()=>{
  const c=defaults().camera,v=exposure(c);
  close(exposure({...c,iso:200})/v,2);close(exposure({...c,shutter:250})/v,.5);close(exposure({...c,aperture:8})/v,.25);close(exposure({...c,ev:1})/v,2);
});
test('CCT conserves photometric luminance; warm/cool and tint directions agree',()=>{
  const warm=cctToLinear(3200),cool=cctToLinear(9500);
  assert.ok(warm[0]/warm[2]>cool[0]/cool[2]);
  for(const k of [1800,3200,5600,9500,12000])for(const tint of [-100,0,100]){
    const rgb=cctToLinear(k,tint);assert.ok(rgb.every(Number.isFinite));close(luminance(rgb),1,1e-6);
    const neutral=rgb.map((x,i)=>x*whiteBalanceGains(k,tint)[i]);
    if(Math.min(...rgb)>.03)neutral.forEach(x=>close(x,1));
  }
  const green=cctToLinear(5600,-50),magenta=cctToLinear(5600,50);
  assert.ok(green[1]/(green[0]+green[2])>magenta[1]/(magenta[0]+magenta[2]));
});
test('face yaw and pitch rotate the meter normal consistently',()=>{
  const n=frontalNormal(90,0);close(n.x,1);close(n.z,0);assert.ok(frontalNormal(0,30).y<0);
});
test('solo lighting is reversible and does not overwrite saved enabled states',()=>{
  const s=defaults(),before=clone(s.lights);s.solo='rim';assert.deepEqual(effectiveLights(s).map(x=>x.enabled),[false,true,false]);assert.deepEqual(s.lights,before);s.solo=null;assert.deepEqual(effectiveLights(s),before);
});
test('every preset survives export and import with the same values',()=>{
  for(const p of PRESETS){const s=presetState(p.id);assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);}
});
test('invalid imports cannot inject unsafe values or unbounded work',()=>{
  assert.throws(()=>validateState({}));assert.throws(()=>validateState({...defaults(),version:99}));
  const s=defaults();s.lights[0].width=-10;s.camera.iso=1e99;s.render.maxSamples=Infinity;s.render.bounces=999;s.model.material='arbitrary';s.model.skinTone=8;s.room.boardSide=.3;
  const v=validateState(s);assert.equal(v.lights[0].width,.05);assert.equal(v.camera.iso,3200);assert.equal(v.render.maxSamples,256);assert.equal(v.render.bounces,12);assert.equal(v.model.material,'skin');assert.equal(v.model.skinTone,1);assert.equal(v.room.boardSide,1);
});
test('selected lens constrains imported focal length and aperture',()=>{
  const s=defaults();s.camera.lens='tamron-2875-g2';s.camera.focal=100;s.camera.aperture=1.4;
  const v=validateState(s);assert.equal(v.camera.focal,75);assert.equal(v.camera.aperture,2.8);
});
test('legacy sensor field migrates to a body and unknown bodies fall back',()=>{
  const apsc=defaults();delete apsc.camera.body;apsc.camera.sensor='apsc';
  assert.equal(validateState(apsc).camera.body,'canon-r7');
  const full=defaults();delete full.camera.body;full.camera.sensor='full';
  assert.equal(validateState(full).camera.body,'sony-a7c2');
  const bad=defaults();bad.camera.body='nonsense';
  assert.equal(validateState(bad).camera.body,'sony-a7c2');
});
test('modifier and flash labels are validated or derived from emitter size',()=>{
  const s=defaults();s.lights[0].modifier='bogus';s.lights[0].flash='bogus';
  const v=validateState(s);assert.equal(v.lights[0].modifier,'octa60');assert.equal(v.lights[0].flash,'ad200-1');
  const legacy=defaults();delete legacy.lights[0].modifier;
  assert.equal(validateState(legacy).lights[0].modifier,'octa60');
  const fresnel=defaults();fresnel.lights[0].type='fresnel';fresnel.lights[0].modifier='';
  assert.equal(validateState(fresnel).lights[0].modifier,'');
});
test('deep parabolic modifier survives export and import as a distinct label',()=>{
  const s=defaults();s.lights[0].modifier='deep90';s.lights[0].width=.9;s.lights[0].height=.9;
  const v=validateState(JSON.parse(JSON.stringify(s)));assert.equal(v.lights[0].modifier,'deep90');
});
test('reference card escapes user notes and names',()=>{
  const s=defaults();s.name='<script>alert(1)</script>';s.notes='</p><img src=x onerror=alert(1)>';
  const html=makeSheet(s,'data:image/png;base64,abc');assert.ok(!html.includes('<script>'));assert.ok(!html.includes('<img src=x'));assert.ok(html.includes('&lt;script&gt;'));assert.equal(escapeHTML('a&b'),'a&amp;b');assert.equal(safeFilename('a/b:c'),'a_b_c');
});

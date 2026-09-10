import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults,clone,validateState,presetState,switchCharacter,renameStudy} from '../src/assets/state.js';
import {SURFACES,surfacePolicy} from '../src/assets/surfaces.js';
import {cameraPosition,changeFocal,moveCamera,orbitCamera} from '../src/assets/viewport-math.js';
import {modelToWorld,worldToModel} from '../src/assets/posing.js';
import {sanitizeJoints} from '../src/assets/joints.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-6);

test('switching ALL models preserves lights, camera, room, surface and rendering parameters',()=>{
  const s=presetState('cosplay');Object.assign(s.camera,{iso:200,focal:70,x:.3,azimuth:18,wb:6100});
  s.room.board2='silver';s.model.material='gray';s.lights[0].power=1.3;
  const before=clone(s);
  for(const id of ['yixuan','scan','velina','jiayin']){
    switchCharacter(s,id);
    for(const key of ['lights','camera','room','render','prop'])assert.deepEqual(s[key],before[key]);
    assert.equal(s.model.material,'gray');assert.equal(s.model.body,id!=='scan');
  }
});
test('clear custom preset disables all lights and resets boards without touching camera or model',()=>{
  const s=presetState('white');s.solo='top';const clear=presetState('custom',s);
  assert.ok(clear.lights.every(l=>!l.enabled));assert.equal(clear.solo,null);
  assert.equal(clear.room.board,'off');assert.equal(clear.room.board2,'off');assert.equal(clear.room.background,0);
  assert.deepEqual(clear.camera,s.camera);assert.deepEqual(clear.model,s.model);
});
test('rename is bounded and changes only the saved title',()=>{
  const item={id:'saved',date:'2026-09-10',state:defaults()},list=[item],before=clone(item);
  renameStudy(list,'saved','  我的三灯  ');assert.equal(item.state.name,'我的三灯');
  item.state.name=before.state.name;assert.deepEqual(item,before);
  assert.throws(()=>renameStudy(list,'saved','   '));assert.throws(()=>renameStudy(list,'missing','abc'));
});
test('all surfaces, camera offsets and authored bone rotations survive save/import',()=>{
  for(const [material] of SURFACES){
    const s=defaults();s.model.material=material;s.model.joints={leftIndex0:{x:30,y:10,z:0}};
    s.model.x=.2;s.camera.x=.3;s.camera.azimuth=-45;s.render.mode='albedo';s.render.diagnostic='mono';
    assert.deepEqual(validateState(s),s);
  }
  assert.deepEqual(surfacePolicy('gray'),{textured:false,color:.18,roughness:1,specular:0});
  assert.deepEqual(sanitizeJoints({bad:{x:12},leftPalm:{x:Infinity,y:999,z:-999}}),{leftPalm:{x:0,y:120,z:-120}});
});
test('navigation isolates focal length, translates camera and target together, clamps range',()=>{
  const c=defaults().camera,before=clone(c);changeFocal(c,-100);assert.equal(c.focal,58.5);assert.equal(c.distance,before.distance);
  const pitch=c.heightY-c.targetY;moveCamera(c,'w',.3);near(c.heightY-c.targetY,pitch);
  moveCamera(c,'s',99);near(c.heightY-c.targetY,pitch);assert.ok(c.targetY>=.1);
  moveCamera(c,'a',.2);near(c.x,-.2);moveCamera(c,'e',20);assert.equal(c.distance,.5);
  orbitCamera(c,300,0);near(c.azimuth,90);const pos=cameraPosition(c);near(pos.x,c.x+c.distance);near(pos.z,0);
});
test('world-space limb dragging round-trips after turning and translating model',()=>{
  const model={...defaults().model,bodyYaw:73,x:.3,y:.2,z:-.8},point={x:.4,y:1.2,z:-.15};
  const back=worldToModel(model,modelToWorld(model,point));for(const k of ['x','y','z'])near(point[k],back[k]);
});
test('old scan body / wig / clothing selections never regenerate an artificial person',()=>{
  const s=defaults();s.version=3;s.model.character='scan';s.model.body=true;s.model.hair='twin';s.model.clothing='dress';
  const next=validateState(s);assert.equal(next.model.body,false);assert.equal(next.model.hair,'none');
});

import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {StaticGeometryGenerator,MeshBVH} from 'three-mesh-bvh';
import {PhysicalSpotLight,ShapedAreaLight} from 'three-gpu-pathtracer';
import {LightsInfoUniformStruct} from 'three-gpu-pathtracer/src/uniforms/LightsInfoUniformStruct.js';
import {defaults,clone,validateState,aimedLights,presetState} from '../src/assets/state.js';
import {POSES,HAIRSTYLES,LIMBS,posePreset,rigPose,facePoint,setPose,frameSubject} from '../src/assets/posing.js';
import {createCharacter,createProp,disposeGenerated} from '../src/assets/characters.js';
import {spotIntensity,spotProfile,flux,meter,aim,position,sub,length,DEG} from '../src/assets/physics.js';
import {configureLight} from '../src/assets/scene-light.js';
import {ElevationDiagram,PoseEditor} from '../src/assets/editors.js';
import {makeSheet} from '../src/assets/exports.js';
const close=(a,b,tolerance=1e-7)=>assert.ok(Math.abs(a-b)<tolerance,`${a} versus ${b}`);

test('all poses and unreachable goals preserve limb lengths with finite IK solutions',()=>{
  for(const [id] of POSES){const m={...defaults().model,body:true,pose:posePreset(id)};
    for(const extreme of [false,true]){
      if(extreme){m.pose.leftHand={x:9,y:9,z:9};m.pose.leftFoot={x:0,y:0,z:0};}
      for(const [key,chain] of Object.entries(rigPose(m).limbs)){
        close(length(sub(chain.start,chain.mid)),key.endsWith('Hand')?.27:.42);
        close(length(sub(chain.mid,chain.end)),key.endsWith('Hand')?.25:.43);
        for(const p of Object.values(chain))assert.ok(Object.values(p).every(Number.isFinite));
      }
    }
  }
});
test('v1 plans migrate to the original scan; new complete seated scenes round-trip exactly',()=>{
  const old=defaults();old.version=1;delete old.model.pose;delete old.model.character;delete old.prop;delete old.room.board2;delete old.camera.heightY;
  const migrated=validateState(old);assert.equal(migrated.model.character,'scan');assert.equal(migrated.model.hair,'none');assert.equal(migrated.model.body,false);
  const s=presetState('fresnel');setPose(s,'sit');frameSubject(s,'full');s.room.board2='silver';s.model.pose.leftHand.z=.27;s.model.bodyYaw=30;
  assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
  const bad=clone(s);bad.model.pose.leftHand.x=NaN;bad.model.pose.rootY=-300;bad.lights[0].beam=10000;bad.room.board2Size=Infinity;
  const safe=validateState(bad);assert.ok(Number.isFinite(safe.model.pose.leftHand.x));assert.equal(safe.model.pose.rootY,.35);assert.equal(safe.lights[0].beam,80);assert.equal(safe.room.board2Size,2.2);
});
test('seated face aim and full-body framing use the actual height',()=>{
  const s=defaults();setPose(s,'stool');frameSubject(s,'full');
  close(facePoint(s.model).y,1.31);close(aim(aimedLights(s)[0]).y,1.31);assert.equal(s.prop.type,'stool');
  const c=new T.PerspectiveCamera(35,2/3,.03,30);c.filmGauge=22.3;c.setFocalLength(s.camera.focal);c.position.set(0,s.camera.heightY,s.camera.distance);c.lookAt(0,s.camera.targetY,0);c.updateMatrixWorld();
  for(const height of [0,1.46]){const projected=new T.Vector3(0,height,0).project(c);assert.ok(Math.abs(projected.y)<1,'body must fit vertically');}
});
test('focusing conserves far-field flux and concentrates central illumination',()=>{
  for(const beam of [10,30,60,80])for(const edge of [.05,.45,.95]){
    const l={...defaults().lights[0],type:'fresnel',beam,edge,aperture:.12};
    const min=Math.cos(beam*DEG/2),steps=5000;let integral=0;
    for(let i=0;i<steps;i++)integral+=spotProfile(l,min+(i+.5)/steps*(1-min));
    close(integral/steps*(1-min)*2*Math.PI*spotIntensity(l),flux(l),.005);
  }
  const a={...defaults().lights[0],type:'fresnel',heightY:1.62,azimuth:0,beam:15,edge:.45,aperture:.02};
  assert.ok(meter(a)>meter({...a,beam:60})*10);close(meter({...a,power:1})/meter(a),2);
});
test('spot uniform geometry and photometry match the meter including finite aperture offset',()=>{
  const s=presetState('fresnel'),item=aimedLights(s)[0],area=new ShapedAreaLight(),spot=new PhysicalSpotLight();
  configureLight(area,spot,item);spot.updateMatrixWorld(true);const data=new LightsInfoUniformStruct();data.updateFrom([spot]);
  const d=data.tex.image.data,normal=new T.Vector3(d[8],d[9],d[10]).cross(new T.Vector3(d[12],d[13],d[14])).normalize();
  const sampled=new T.Vector3();
  // Cone cosine is packed in the last channel of the fifth pixel.
  const packedCone=d[19];sampled.set(d[0],d[1],d[2]).addScaledVector(normal,-d[16]/Math.tan(Math.acos(packedCone)));
  const p=position(item);close(sampled.x,p.x,.00001);close(sampled.y,p.y,.00001);close(sampled.z,p.z,.00001);
  close(d[7],spotIntensity(item),.001);assert.equal(area.intensity,0);assert.equal(spot.distance,0);assert.equal(spot.decay,2);data.tex.dispose();
});
test('every original head and hairstyle has finite shaded geometry and a BVH face hit',()=>{
  for(const character of ['cute','fresh','elegant'])for(const [hair] of HAIRSTYLES){
    const m={...defaults().model,character,hair};const root=createCharacter(m);root.updateMatrixWorld(true);const meshes=[];
    root.traverseVisible(o=>{if(o.isMesh)meshes.push(o)});
    for(const mesh of meshes)for(const key of ['position','normal'])assert.ok(mesh.geometry.attributes[key].array.every(Number.isFinite));
    const gen=new StaticGeometryGenerator(meshes);gen.attributes=['position','normal'];const geo=gen.generate(),bvh=new MeshBVH(geo);
    const hit=bvh.raycastFirst(new T.Ray(new T.Vector3(0,1.62,1),new T.Vector3(0,0,-1)),T.DoubleSide);assert.ok(hit);assert.ok(hit.distance<1);
    disposeGenerated(root);geo.dispose();
  }
});
test('props have the declared heights and white-room panels persist independently',()=>{
  for(const [type,height] of [['ladder',.758],['stool',.53],['cube',.5]]){const prop=createProp({...defaults().prop,type});const b=new T.Box3().setFromObject(prop);close(b.max.y,height,.01);disposeGenerated(prop);}
  const s=presetState('white');assert.equal(s.room.boardSide,-1);assert.equal(s.room.board,'white');assert.equal(s.room.board2,'white');assert.equal(s.room.background,0);
  s.room.board2='black';assert.equal(validateState(s).room.board,'white');
  const card=makeSheet(s,'data:image/png;base64,A','','data:image/png;base64,B');assert.ok(card.includes('灯心高度图'));assert.ok(card.includes('完整参数'));assert.ok(card.includes('&quot;board2&quot;: &quot;black&quot;'));
});
function canvasStub(w,h){return {width:w,height:h,addEventListener(){},getContext(){return {}},getBoundingClientRect(){return {left:0,top:0,width:w,height:h}},setPointerCapture(){},hasPointerCapture(){return false}};}
test('diagram drags update height/depth and pose drags commit a reachable wrist',()=>{
  const s=defaults(),height=new ElevationDiagram(canvasStub(560,360),()=>s,()=>{},(id,values)=>Object.assign(s.lights.find(l=>l.id===id),values));
  height.drag='key';const {cx,base,scale}=height.transform();height.move({clientX:cx+scale*.8,clientY:base-scale*2.6});close(s.lights[0].heightY,2.6);close(position(s.lights[0]).z,.8,.015);
  s.model.body=true;const editor=new PoseEditor(canvasStub(560,650),()=>s,(key,p)=>s.model.pose[key]=p,()=>{});editor.drag='rightHand';editor.move({clientX:550,clientY:5});
  const actual=rigPose(s.model).limbs.rightHand.end;close(actual.x,s.model.pose.rightHand.x);close(actual.y-s.model.pose.rootY,s.model.pose.rightHand.y);
});

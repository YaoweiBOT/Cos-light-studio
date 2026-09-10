import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {deflateRawSync} from 'node:zlib';
import {Box3} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {normalize,sanitize,readZip,importModelFile,getExternalModel} from '../src/assets/external-model.js';
import {externalHeadY,facePoint} from '../src/assets/posing.js';
import {defaults,validateState} from '../src/assets/state.js';

// GLTFLoader's embedded-texture path expects browser blob URLs and image
// decoding; stub them so Node can parse the VRM down to geometry + materials.
globalThis.self = globalThis;
globalThis.URL.createObjectURL = () => 'blob:stub';
globalThis.URL.revokeObjectURL = () => {};
globalThis.createImageBitmap = async () => ({width: 4, height: 4});

// Build a real zip archive (store + deflate entries) to exercise the reader.
function u16(value){const b=Buffer.alloc(2);b.writeUInt16LE(value);return b;}
function u32(value){const b=Buffer.alloc(4);b.writeUInt32LE(value);return b;}
function zipOf(entries){
  const locals=[],centrals=[];let offset=0;
  for(const [name,data,method] of entries){
    const stored=method===0?data:deflateRawSync(data);
    const nameBytes=Buffer.from(name);
    locals.push(Buffer.concat([u32(0x04034b50),u16(20),u16(0),u16(method),u16(0),u16(0),u32(0),u32(stored.length),u32(data.length),u16(nameBytes.length),u16(0),nameBytes,stored]));
    centrals.push(Buffer.concat([u32(0x02014b50),u16(20),u16(20),u16(0),u16(method),u16(0),u16(0),u32(0),u32(stored.length),u32(data.length),u16(nameBytes.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),nameBytes]));
    offset+=locals[locals.length-1].length;
  }
  const local=Buffer.concat(locals),central=Buffer.concat(centrals);
  return Buffer.concat([local,central,u32(0x06054b50),u16(0),u16(0),u16(entries.length),u16(entries.length),u32(central.length),u32(local.length),u16(0)]);
}

test('zip reader handles stored and deflated entries plus folder suffix lookup',async()=>{
  const zipBuffer=zipOf([
    ['模型/model.pmx',Buffer.from('PMXDATA'),0],
    ['模型/tex/face.png',Buffer.from('fake-png-bytes'),8],
    ['说明.txt',Buffer.from('readme'),0]
  ]);
  const zip=await readZip(zipBuffer.buffer.slice(zipBuffer.byteOffset,zipBuffer.byteOffset+zipBuffer.byteLength));
  assert.ok(zip.names.includes('模型/model.pmx'));
  const pmx=await zip.resolve('model.pmx');          // 反斜杠/前缀文件夹都要能命中
  assert.equal(Buffer.from(pmx).toString(),'PMXDATA');
  const face=await zip.resolve('tex\\face.png');
  assert.equal(Buffer.from(face).toString(),'fake-png-bytes');
  assert.equal(await zip.resolve('missing.png'),null);
});

test('importing a single-file model feeds the custom character pipeline',async()=>{
  const vrm=await readFile(new URL('../assets/VRoid/Sendagaya_Shino.vrm',import.meta.url));
  const file=new File([vrm],'my-character.vrm',{type:'application/octet-stream'});
  const name=await importModelFile(file);
  assert.equal(name,'my-character.vrm');
  const group=await getExternalModel('custom');
  const box=new Box3().setFromObject(group);
  assert.ok(box.max.y>1.4&&box.max.y<1.9,'imported model normalized like the shipped one');
  assert.equal(group.userData.facingY,Math.PI,'imported VRM 0.x faces the camera');
  const s=defaults();s.model.character='custom';
  assert.equal(validateState(s).model.character,'custom');
  if(externalHeadY.custom)assert.equal(facePoint(s.model).y,externalHeadY.custom);
});

test('the shipped CC0 VRoid model decodes, is sanitized to PBR, and stands at study scale',async()=>{
  const data=await readFile(new URL('../assets/VRoid/Sendagaya_Shino.vrm',import.meta.url));
  const gltf=await new GLTFLoader().parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
  let meshes=0;gltf.scene.traverse(o=>{if(o.isMesh)meshes++;});
  assert.ok(meshes>0,'VRM contains meshes');
  sanitize(gltf.scene);
  const headY=normalize(gltf.scene);
  externalHeadY.vroid=headY;
  const materialKinds=new Set();
  gltf.scene.traverse(o=>{
    if(o.isMesh){
      materialKinds.add(o.material.type);
      assert.ok(o.geometry.attributes.position.array.every(Number.isFinite));
    }
  });
  assert.ok(materialKinds.size===1&&materialKinds.has('MeshPhysicalMaterial'),'all toon/unlit materials converted to PBR');
  const box=new Box3().setFromObject(gltf.scene);
  const height=box.max.y-box.min.y;
  assert.ok(height>1.4&&height<1.9,'figure normalized near adult height');
  assert.ok(Math.abs(box.min.y)<1e-6,'feet rest on the floor');
  assert.ok(headY>1.2&&headY<box.max.y,'head height measured below the crown');
});

test('external characters aim lights at the measured face and survive plan validation',()=>{
  const s=defaults();s.model.character='vroid';
  const v=validateState(s);
  assert.equal(v.model.character,'vroid');
  const custom=defaults();custom.model.character='custom';
  assert.equal(validateState(custom).model.character,'custom');
  if(externalHeadY.vroid){ // measured above in the same process
    assert.equal(facePoint(v.model).y,externalHeadY.vroid);
  }
});

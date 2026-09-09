import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdtemp,mkdir,rm,symlink} from 'node:fs/promises';
import {resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {once} from 'node:events';
import {Scene,Mesh,MeshStandardMaterial,Ray,Vector3,DoubleSide} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {PathTracingSceneGenerator} from 'three-gpu-pathtracer';
import {prepareHeadGeometry} from '../src/assets/geometry.js';
import {createLocalServer} from '../scripts/server.mjs';

test('the shipped scan decodes, has physical scale, and builds a ray-queryable BVH',async()=>{
  const data=await readFile(new URL('../assets/LeePerrySmith/LeePerrySmith.glb',import.meta.url));
  const gltf=await new GLTFLoader().parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
  gltf.scene.updateMatrixWorld(true);let source;
  gltf.scene.traverse(object=>{if(object.isMesh&&!source)source=object;});
  assert.ok(source,'scan contains a mesh');
  const geo=prepareHeadGeometry(source),height=geo.boundingBox.max.y-geo.boundingBox.min.y;
  assert.ok(Math.abs(height-.32)<1e-6);
  for(const attribute of Object.values(geo.attributes))assert.ok(!attribute.isInterleavedBufferAttribute);
  const triangles=(geo.index?.count||geo.attributes.position.count)/3;
  assert.ok(triangles>1000&&triangles<100000,'scan is present at expected study complexity');
  const scene=new Scene();scene.add(new Mesh(geo,new MeshStandardMaterial()));scene.updateMatrixWorld(true);
  const result=new PathTracingSceneGenerator(scene).generate();
  assert.ok(result.bvh);assert.ok(result.geometry.attributes.materialIndex);
  const hit=result.bvh.raycastFirst(new Ray(new Vector3(0,0,1),new Vector3(0,0,-1)),DoubleSide);
  assert.ok(hit&&hit.distance>.5&&hit.distance<1.5,'front ray intersects the actual head');
  geo.dispose();result.geometry.dispose();
});

test('loopback server serves modules with MIME types and blocks writes and file escapes',async()=>{
  const temp=await mkdtemp(resolve(tmpdir(),'cos-light-http-')),root=resolve(temp,'public');
  await mkdir(root);await writeFile(resolve(root,'index.html'),'<p>local</p>');
  await writeFile(resolve(root,'app.js'),'export const local=true;');await writeFile(resolve(temp,'secret.txt'),'outside-root');
  let hasLink=false;try{await symlink(resolve(temp,'secret.txt'),resolve(root,'escape.txt'));hasLink=true;}catch(e){if(!['EPERM','EACCES'].includes(e.code))throw e;}
  const server=await createLocalServer(root);server.listen(0,'127.0.0.1');await once(server,'listening');
  const base=`http://127.0.0.1:${server.address().port}`;
  try{
    const home=await fetch(base+'/');assert.equal(home.status,200);assert.equal(await home.text(),'<p>local</p>');
    const module=await fetch(base+'/app.js');assert.match(module.headers.get('content-type'),/javascript/);assert.match(await module.text(),/export/);
    const head=await fetch(base+'/app.js',{method:'HEAD'});assert.equal(await head.text(),'');assert.ok(Number(head.headers.get('content-length'))>0);
    assert.equal((await (await fetch(base+'/__health')).json()).application,'cos-light-studio');
    assert.equal((await fetch(base+'/app.js',{method:'POST',body:'changed'})).status,405);
    assert.equal((await fetch(base+'/..%2Fsecret.txt')).status,404);
    if(hasLink)assert.equal((await fetch(base+'/escape.txt')).status,404);
    assert.equal((await fetch(base+'/missing.js')).status,404);
    assert.equal((await fetch(base+'/%zz')).status,400);
  }finally{
    server.closeAllConnections();await new Promise(ok=>server.close(ok));await rm(temp,{recursive:true,force:true});
  }
});

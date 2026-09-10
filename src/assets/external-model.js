/* External humanoid models: shipped CC0 VRoid sample and user-imported files
   (e.g. fan-distributed game models). Imports live in the browser's IndexedDB
   only; they never touch the repository or any server. */
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {externalHeadY,EXTERNAL_IDS} from './posing.js';

const EXTERNAL_BASE=new URL('../models/',import.meta.url);
export const EXTERNAL_CHARACTERS=[['vroid','篠 · VRoid 官方示例（CC0）'],['custom','自定义 · 导入的模型']];
const CUSTOM_FILES=['model.pmx','model.vrm','model.glb'];

/* ---------- ZIP: store + deflate, enough for standard model archives. ---------- */
export async function readZip(buffer){
  const view=new DataView(buffer);
  let eocd=-1;
  const floor=Math.max(0,buffer.byteLength-22-65535);
  for(let i=buffer.byteLength-22;i>=floor;i--){
    if(view.getUint32(i,true)===0x06054b50){eocd=i;break;}
  }
  if(eocd<0)throw new Error('这不是有效的 zip 压缩包');
  const count=view.getUint16(eocd+10,true);
  let p=view.getUint32(eocd+16,true);
  const names=[];
  const meta=new Map();
  for(let n=0;n<count;n++){
    if(view.getUint32(p,true)!==0x02014b50)throw new Error('zip 目录损坏，请重新压缩');
    const method=view.getUint16(p+10,true);
    const size=view.getUint32(p+20,true);
    const nameLen=view.getUint16(p+28,true),extraLen=view.getUint16(p+30,true),commentLen=view.getUint16(p+32,true);
    const localOffset=view.getUint32(p+42,true);
    const name=new TextDecoder().decode(new Uint8Array(buffer,p+46,nameLen)).toLowerCase().replace(/\\/g,'/');
    const localNameLen=view.getUint16(localOffset+26,true),localExtraLen=view.getUint16(localOffset+28,true);
    meta.set(name,{method,size,start:localOffset+30+localNameLen+localExtraLen});
    names.push(name);
    p+=46+nameLen+extraLen+commentLen;
  }
  const keyOf=name=>String(name).toLowerCase().replace(/\\/g,'/');
  const read=async name=>{
    const key=keyOf(name),entry=meta.get(key);
    if(!entry)return null;
    const raw=buffer.slice(entry.start,entry.start+entry.size);
    if(entry.method===0)return raw;
    if(entry.method===8)return new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer();
    throw new Error(`zip 里的 ${key} 使用了不支持的压缩方式（${entry.method}），请用「仅存储」或「标准压缩」重新打包`);
  };
  return {
    names,
    read,
    // ZIP 根目录可能带一层文件夹；按路径后缀匹配真实条目。
    resolve:async name=>{
      const key=keyOf(name);
      if(meta.has(key))return read(key);
      for(const candidate of names)if(candidate.endsWith('/'+key))return read(candidate);
      return null;
    }
  };
}

/* ---------- IndexedDB persistence: the import survives page refreshes. ---------- */
const IDB_OPEN=()=>new Promise((resolve,reject)=>{
  const request=indexedDB.open('cos-light-models',1);
  request.onupgradeneeded=()=>request.result.createObjectStore('custom');
  request.onsuccess=()=>resolve(request.result);
  request.onerror=()=>reject(request.error);
});
const idbPut=async value=>{
  if(typeof indexedDB==='undefined')return;
  const db=await IDB_OPEN();
  await new Promise((resolve,reject)=>{
    const tx=db.transaction('custom','readwrite');
    tx.objectStore('custom').put(value,'model');
    tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
  });
};
const idbGet=async()=>{
  if(typeof indexedDB==='undefined')return null;
  const db=await IDB_OPEN();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction('custom','readonly');
    const request=tx.objectStore('custom').get('model');
    request.onsuccess=()=>resolve(request.result||null);
    request.onerror=()=>reject(request.error);
  });
};

/* ---------- Imported model state (this session + persisted). ---------- */
let imported=null,customAvailableFolder=false,importedModelName=null;
export const customImported=()=>!!imported;
// 模型的可读名字：优先取 PMX 内部记录的模型名，其次导入文件名。
export const importedName=()=>importedModelName;

async function parseSingle(buffer){
  const loader=new GLTFLoader();
  const gltf=await loader.parseAsync(buffer,'');
  const vrm0=!!gltf.parser?.json?.extensions?.VRM;
  return {scene:gltf.scene,facing:vrm0?Math.PI:0};
}
async function loadPMXSource(source){
  // Static T-pose build: PMX skin weights are ignored, only geometry, UVs and
  // per-material textures matter for a lighting study. three r181 dropped
  // MMDLoader, so parse directly with mmd-parser (MIT).
  const {default:MMDParser}=await import('mmd-parser');
  const pmx=new MMDParser.Parser().parsePmx(source.data,true);
  const internalName=String(pmx.metadata?.modelName||'').trim().replace(/\.(pmx|zip)$/i,'');
  if(internalName)importedModelName=internalName;
  
  const group=new THREE.Group();
  const textureLoader=new THREE.TextureLoader();
  // PMX stores faces as {indices:[a,b,c]} grouped per material in order.
  let faceCursor=0;
  for(const material of pmx.materials){
    const triCount=material.faceCount|0;
    const pos=new Float32Array(triCount*9),nor=new Float32Array(triCount*9),uv=new Float32Array(triCount*6);
    for(let f=0;f<triCount;f++){
      const face=pmx.faces[faceCursor+f].indices;
      for(let k=0;k<3;k++){
        let vi=face[k];if(vi<0)vi=-vi-1; // PMX 负索引表示翻转朝向
        const v=pmx.vertices[vi];if(!v)continue;
        const o=(f*3+k)*3,ou=(f*3+k)*2;
        pos[o]=v.position[0];pos[o+1]=v.position[1];pos[o+2]=v.position[2];
        nor[o]=v.normal[0];nor[o+1]=v.normal[1];nor[o+2]=v.normal[2];
        uv[ou]=v.uv[0];uv[ou+1]=1-v.uv[1];
      }
    }
    faceCursor+=triCount;
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
    geo.setAttribute('normal',new THREE.BufferAttribute(nor,3));
    geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));
    const mat=new THREE.MeshPhysicalMaterial({roughness:.62,metalness:0,side:THREE.DoubleSide});
    const d=material.diffuse||[1,1,1,1];
    mat.color.setRGB(d[0],d[1],d[2],THREE.SRGBColorSpace);
    mat.alphaTest=d[3]<.98?.5:0;
    if(material.textureIndex>=0&&pmx.textures[material.textureIndex]){
      const name=pmx.textures[material.textureIndex].replace(/\\/g,'/').split('*')[0];
      Promise.resolve(source.resolve(name)).then(url=>url?textureLoader.loadAsync(url):null).then(texture=>{
        texture.colorSpace=THREE.SRGBColorSpace;mat.map=texture;mat.needsUpdate=true;
      }).catch(()=>{/* missing texture keeps the diffuse colour */});
    }
    group.add(new THREE.Mesh(geo,mat));
  }
  return group;
}

/* ---------- PBR sanitization and study-scale normalization. ---------- */
export function sanitize(root){
  root.traverse(obj=>{
    if(!obj.isMesh)return;
    const src=Array.isArray(obj.material)?obj.material[0]:obj.material;
    if(src){src.map?.dispose?.();src.normalMap?.dispose?.();src.dispose?.();}
    const mat=new THREE.MeshPhysicalMaterial({
      color:src?.color?src.color.clone():new THREE.Color(.85,.85,.85),
      map:src?.map||null,
      normalMap:src?.normalMap||null,
      emissive:src?.emissive?src.emissive.clone():new THREE.Color(0,0,0),
      roughness:.62,
      metalness:0,
      side:THREE.DoubleSide
    });
    if(mat.map)mat.map.colorSpace=THREE.SRGBColorSpace;
    mat.alphaTest=(src?.transparent||src?.alphaTest>0)?.5:0;
    obj.material=mat;
    obj.frustumCulled=false;
  });
}
// Feet on y=0, centred on the stage axis, scaled so the figure reads as an adult.
export function normalize(root){
  root.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(root);
  const height=Math.max(.5,box.max.y-box.min.y);
  root.scale.setScalar(1.66/height);
  root.updateMatrixWorld(true);
  const scaled=new THREE.Box3().setFromObject(root);
  root.position.x-=(scaled.min.x+scaled.max.x)/2;
  root.position.z-=(scaled.min.z+scaled.max.z)/2;
  root.position.y-=scaled.min.y;
  root.updateMatrixWorld(true);
  const final=new THREE.Box3().setFromObject(root);
  return final.max.y-.045*(final.max.y-final.min.y);
}

/* ---------- Import from a picked file: zip / pmx / vrm / glb. ---------- */
export async function importModelFile(file){
  const lower=file.name.toLowerCase();
  if(lower.endsWith('.vrm')||lower.endsWith('.glb')){
    const buffer=await file.arrayBuffer();
    await idbPut({kind:'single',name:file.name,buffer});
    imported={kind:'single',name:file.name,buffer};
  }else if(lower.endsWith('.pmx')){
    const buffer=await file.arrayBuffer();
    await idbPut({kind:'pmx',name:file.name,buffer});
    imported={kind:'pmx',name:file.name,buffer};
    return file.name+'（注意：单独的 pmx 没有贴图会显示白模，建议导入包含贴图的 zip 包）';
  }else if(lower.endsWith('.zip')){
    const zip=await readZip(await file.arrayBuffer());
    const pmxName=zip.names.find(n=>n.endsWith('.pmx'));
    const gltfName=zip.names.find(n=>n.endsWith('.vrm')||n.endsWith('.glb'));
    if(pmxName){
      const buffer=await file.arrayBuffer();
      const zip=await readZip(buffer);
      await idbPut({kind:'zip-pmx',name:pmxName,buffer});
      imported={kind:'zip-pmx',name:pmxName,zip,buffer};
    }else if(gltfName){
      const data=await zip.read(gltfName);
      await idbPut({kind:'single',name:gltfName,buffer:data});
      imported={kind:'single',name:gltfName,buffer:data};
    }else throw new Error('压缩包里没有找到 .pmx / .vrm / .glb 模型文件');
  }else throw new Error('请选择 .zip / .pmx / .vrm / .glb 文件');
  return file.name;
}

/* ---------- Loading for the renderer. ---------- */
async function loadGLTFish(url){
  const response=await fetch(url);
  if(!response.ok)throw new Error(`本地人物模型缺失（${response.status}）：${url}`);
  const data=await response.arrayBuffer();
  return parseSingle(data);
}
async function loadFolderPMX(url){
  const response=await fetch(url);
  if(!response.ok)throw new Error(`本地人物模型缺失（${response.status}）：${url}`);
  return loadPMXSource({data:await response.arrayBuffer(),resolve:name=>new URL(name,new URL('.',url)).href});
}
async function loadImported(){
  if(!imported)imported=await idbGet();
  if(!imported)return null;
  if(imported.kind==='single')return parseSingle(imported.buffer);
  if(imported.kind==='pmx')return loadPMXSource({data:imported.buffer,resolve:()=>null});
  let zip=imported.zip;
  if(!zip){
    zip=await readZip(imported.buffer);
    imported.zip=zip;
  }
  const name=imported.name;
  const data=await zip.resolve(name);
  if(!data)throw new Error('导入记录里的模型文件缺失，请重新导入');
  return loadPMXSource({data,resolve:async textureName=>{
    const buffer=await zip.resolve(textureName);
    return buffer?URL.createObjectURL(new Blob([buffer])):null;
  }});
}
async function loadRaw(kind){
  if(kind==='vroid')return loadGLTFish(new URL('VRoid/Sendagaya_Shino.vrm',EXTERNAL_BASE).href);
  const loaded=await loadImported();
  if(loaded)return loaded;
  for(const name of CUSTOM_FILES){
    const url=new URL(`custom/${name}`,EXTERNAL_BASE).href;
    try{const head=await fetch(url,{method:'HEAD'});if(!head.ok)continue;}catch{continue;}
    return name.endsWith('.pmx')?loadFolderPMX(url):loadGLTFish(url);
  }
  throw new Error('还没有导入模型：点击「导入模型包」选择 zip / pmx / vrm / glb 文件。');
}

const cache={};
export async function getExternalModel(kind,load=loadRaw){
  if(cache[kind])return cache[kind];
  const raw=await load(kind);
  const scene=raw.scene||raw;
  sanitize(scene);
  externalHeadY[kind]=normalize(scene);
  scene.userData.facingY=raw.facing||0;
  cache[kind]=scene;
  return scene;
}
export async function probeCustom(){
  if(imported)return true;
  if(await idbGet())return true;
  for(const name of CUSTOM_FILES){
    try{const head=await fetch(new URL(`custom/${name}`,EXTERNAL_BASE).href,{method:'HEAD'});if(head.ok){customAvailableFolder=true;return true;}}catch{/* file:// or offline quirks fall through */}
  }
  return false;
}
export function disposeExternal(){
  for(const kind of Object.keys(cache)){
    cache[kind].traverse(obj=>{if(obj.isMesh)obj.geometry.dispose();});
    delete cache[kind];
  }
}

import * as THREE from 'three';
import MMDParser from 'mmd-parser';
import {MMD_CHARACTERS} from './character-catalog.js';
import {MMD_PROFILES} from './mmd-profiles.js';
import {rigPose} from './posing.js';
import {surfacePolicy,neutralTexture} from './surfaces.js';
import {JOINTS,boneForJoint} from './joints.js';

const BASE=new URL('../models/MMD/',import.meta.url);
const v=p=>new THREE.Vector3(p.x,p.y,p.z);
export const parsePMX=buffer=>new MMDParser.Parser().parsePmx(buffer,true);
export function separateMaterialVertices(geometry){
  const index=Array.from(geometry.index.array),owners=new Map(),copies=[],remap=new Map();
  const count=geometry.attributes.position.count;
  for(const group of geometry.groups)for(let i=group.start;i<group.start+group.count;i++){
    const original=index[i];
    if(!owners.has(original)){owners.set(original,group.materialIndex);continue;}
    if(owners.get(original)===group.materialIndex)continue;
    const key=original+':'+group.materialIndex;
    if(!remap.has(key)){remap.set(key,count+copies.length);copies.push(original);}
    index[i]=remap.get(key);
  }
  if(!copies.length)return;
  for(const [name,a] of Object.entries(geometry.attributes)){
    const array=new a.array.constructor((count+copies.length)*a.itemSize);array.set(a.array);
    copies.forEach((source,i)=>array.set(a.array.subarray(source*a.itemSize,(source+1)*a.itemSize),(count+i)*a.itemSize));
    geometry.setAttribute(name,new THREE.BufferAttribute(array,a.itemSize,a.normalized));
  }
  geometry.setIndex(index);
}
export function materialPolicy(source){
  const name=source.name;
  // These are duplicate shells used only for MMD's sphere-map highlights.
  // Treating the sphere map as albedo creates an opaque black helmet.
  const excluded=/[发髮]\s*[+＋]/.test(name)||source.diffuse[3]===0;
  const eye=/^(目|眼瞳|眼白|白目)/.test(name)&&!/[影眉睫]/.test(name);
  const hair=/[发髮]/.test(name)&&!/[饰飾带帶]/.test(name);
  const skin=/^(颜|顔|脸|肌|首)|皮肤/.test(name);
  return {excluded,roughness:eye?.3:hair?.52:skin?.68:.72,specularIntensity:eye?.35:hair?.35:.25};
}

/** Preserve PMX topology, vertex normals, UVs, weights and original bone hierarchy. */
export function buildMMDCharacter(data,id,textures=new Map()){
  const profile=MMD_PROFILES[id];if(!profile)throw new Error('未知的 MMD 人物');
  const root=new THREE.Group();root.name=id;
  const geometry=new THREE.BufferGeometry(),count=data.vertices.length;
  const positions=new Float32Array(count*3),normals=new Float32Array(count*3),uvs=new Float32Array(count*2),indices=new Uint16Array(count*4),weights=new Float32Array(count*4);
  data.vertices.forEach((vertex,i)=>{
    positions.set(vertex.position,i*3);normals.set(vertex.normal,i*3);uvs.set(vertex.uv,i*2);
    for(let j=0;j<4;j++){indices[i*4+j]=Math.max(0,vertex.skinIndices[j]||0);weights[i*4+j]=vertex.skinWeights[j]||0;}
  });
  geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('normal',new THREE.BufferAttribute(normals,3));
  geometry.setAttribute('uv',new THREE.BufferAttribute(uvs,2));geometry.setAttribute('skinIndex',new THREE.BufferAttribute(indices,4));geometry.setAttribute('skinWeight',new THREE.BufferAttribute(weights,4));
  const faces=[],materials=[];let offset=0;
  data.materials.forEach(source=>{
    const policy=materialPolicy(source),end=offset+source.faceCount;
    if(!policy.excluded){
      const start=faces.length;
      for(let i=offset;i<end;i++)faces.push(...data.faces[i].indices);
      const map=textures.get(source.textureIndex)||null;
      const mat=new THREE.MeshPhysicalMaterial({
        name:source.name,map,color:new THREE.Color().setRGB(...source.diffuse.slice(0,3),THREE.LinearSRGBColorSpace),
        // The path tracer chooses alpha-test OR stochastic transparency. Setting
        // a nonzero test would make the soft eye-shadow decals fully opaque.
        opacity:source.diffuse[3],transparent:true,alphaTest:0,
        side:THREE.DoubleSide,roughness:policy.roughness,metalness:0,
        specularIntensity:policy.specularIntensity,ior:1.45,emissive:0x000000,
      });
      mat.userData.originalMap=map;mat.userData.originalColor=mat.color.clone();
      mat.userData.originalRoughness=policy.roughness;mat.userData.originalSpecular=policy.specularIntensity;
      geometry.addGroup(start,faces.length-start,materials.length);materials.push(mat);
    }
    offset=end;
  });
  geometry.setIndex(faces);separateMaterialVertices(geometry);geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const mesh=new THREE.SkinnedMesh(geometry,materials);mesh.frustumCulled=false;mesh.name='Original PMX mesh';root.add(mesh);
  const bones=data.bones.map(source=>{const b=new THREE.Bone();b.name=source.name;b.position.fromArray(source.position);return b;});
  data.bones.forEach((source,i)=>{
    if(source.parentIndex>=0&&source.parentIndex<bones.length){
      bones[i].position.sub(new THREE.Vector3().fromArray(data.bones[source.parentIndex].position));bones[source.parentIndex].add(bones[i]);
    }else mesh.add(bones[i]);
  });
  root.updateMatrixWorld(true);const skeleton=new THREE.Skeleton(bones);mesh.bind(skeleton);mesh.normalizeSkinWeights();
  root.scale.setScalar(profile.scale);root.position.fromArray(profile.offset);
  root.userData={mmd:true,id,mesh,skeleton,bones,byName:new Map(bones.map(b=>[b.name,b])),profile,
    rest: bones.map(b=>b.position.clone()),boneData:data.bones,materials,textures,
    grantOrder:data.bones.map((b,i)=>({b,i})).filter(x=>x.b.grant).sort((a,b)=>a.b.transformationClass-b.b.transformationClass||a.i-b.i),
    masks:new Map(),vertices:count,triangles:faces.length/3};
  root.updateMatrixWorld(true);return root;
}

export async function loadMMDCharacter(id,onProgress){
  const item=MMD_CHARACTERS.find(x=>x.id===id);if(!item)throw new Error('没有这个角色');
  onProgress?.(`正在读取 ${item.name} 的原始模型和贴图`);
  const base=new URL(id+'/',BASE),response=await fetch(new URL(item.file,base));
  if(!response.ok){const e=new Error(`${item.name} 的本地 PMX 文件缺失。请使用包含角色素材的个人版，或按 README 放入自己的模型包。`);e.missing=response.status===404;throw e;}
  const data=parsePMX(await response.arrayBuffer()),textures=new Map();
  const needed=[...new Set(data.materials.filter(m=>!materialPolicy(m).excluded).map(m=>m.textureIndex).filter(i=>i>=0))];
  try{
    await Promise.all(needed.map(async i=>{
      const name=data.textures[i].replaceAll('\\','/');
      if(name.split('/').includes('..')||name.startsWith('/')||name.includes(':'))throw new Error('模型贴图路径无效');
      const tex=await new THREE.TextureLoader().loadAsync(new URL(name,base).href);
      tex.name=name;tex.colorSpace=THREE.SRGBColorSpace;tex.flipY=false;
      tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.anisotropy=4;textures.set(i,tex);
    }));
    return buildMMDCharacter(data,id,textures);
  }catch(e){textures.forEach(t=>t.dispose());throw new Error(`${item.name} 贴图加载失败，请保留压缩包中的文件夹结构。${e.message||''}`);}
}

function aimBone(root,bone,child,target){
  root.updateMatrixWorld(true);
  const origin=bone.getWorldPosition(new THREE.Vector3()),direction=child.getWorldPosition(new THREE.Vector3()).sub(origin).normalize();
  const desired=v(target).sub(origin).normalize(),rotation=new THREE.Quaternion().setFromUnitVectors(direction,desired);
  const world=bone.getWorldQuaternion(new THREE.Quaternion()).premultiply(rotation);
  bone.quaternion.copy(bone.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(world));
}

export function poseMMDCharacter(root,model){
  const u=root.userData,p=u.profile,pose=model.pose;
  root.rotation.set(0,0,0);root.position.fromArray(p.offset);root.position.y+=(model.body?pose.rootY-p.pelvis.y:0);
  u.bones.forEach((b,i)=>{b.position.copy(u.rest[i]);b.quaternion.identity();});
  root.updateMatrixWorld(true);
  if(pose.id!=='rest'){
    const rig=rigPose(model);
    for(const [side,jp] of [['left','右'],['right','左']])for(const [part,names] of [['Hand',['腕','ひじ','手首']],['Foot',['足','ひざ','足首']]]){
      const [a,b,c]=names.map(n=>u.byName.get(jp+n));if(!a||!b||!c)continue;
      const solution=rig.limbs[side+part];aimBone(root,a,b,solution.mid);aimBone(root,b,c,solution.end);
    }
  }
  const head=u.byName.get('頭');if(head)head.rotation.set(model.pitch*Math.PI/180,model.yaw*Math.PI/180,0,'YXZ');
  for(const joint of JOINTS.filter(j=>!j.kind)){
    const delta=model.joints?.[joint.id],bone=boneForJoint(u.byName,joint);
    if(delta&&bone)bone.quaternion.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(delta.x*Math.PI/180,delta.y*Math.PI/180,delta.z*Math.PI/180,'XYZ')));
  }
  // PMX append transforms: notably the D leg chains that hold the actual weights.
  // Preserve parent-relative rotations instead of reparenting or rebuilding limbs.
  for(const {b,i} of u.grantOrder){
    const g=b.grant,source=u.bones[g.parentIndex];if(!source)continue;
    if(g.affectRotation)u.bones[i].quaternion.multiply(new THREE.Quaternion().slerp(source.quaternion,g.ratio));
    if(g.affectPosition)u.bones[i].position.add(source.position.clone().sub(u.rest[g.parentIndex]).multiplyScalar(g.ratio));
  }
  // The long open sleeves are physics chains in the source. With no Bullet
  // simulation, retain their authored hanging orientation as the shoulder moves.
  if(u.id==='yixuan')for(const name of ['左袖_0_1','右袖_0_1']){
    const b=u.byName.get(name);if(b){root.updateMatrixWorld(true);b.quaternion.copy(b.parent.getWorldQuaternion(new THREE.Quaternion()).invert());}
  }
  root.rotation.y=model.bodyYaw*Math.PI/180;
  // Rotate the normalization offset with the model to keep its eyes centered.
  const offset=new THREE.Vector3(p.offset[0],0,p.offset[2]).applyAxisAngle(new THREE.Vector3(0,1,0),root.rotation.y);
  root.position.x=offset.x+(model.x||0);root.position.y+=model.y||0;root.position.z=offset.z+(model.z||0);
  root.updateMatrixWorld(true);u.skeleton.update();
  applyMMDSurface(root,model);
}

export function applyMMDSurface(root,model) {
  const u=root.userData,policy=surfacePolicy(model.material,model.roughness);
  u.materials.forEach(mat=>{
    const map=mat.userData.originalMap;
    if(!policy.textured&&map&&!u.masks.has(map))u.masks.set(map,neutralTexture(map));
    mat.map=policy.textured?map:u.masks.get(map)||null;
    if(policy.textured)mat.color.copy(mat.userData.originalColor);
    else mat.color.setRGB(policy.color,policy.color,policy.color,THREE.LinearSRGBColorSpace);
    mat.roughness=model.material==='skin'?mat.userData.originalRoughness:policy.roughness;
    mat.specularIntensity=model.material==='skin'?mat.userData.originalSpecular:policy.specular;
    mat.needsUpdate=true;
  });
}

export function disposeMMDCharacter(root){
  if(!root)return;root.removeFromParent();root.userData.mesh.geometry.dispose();root.userData.skeleton.dispose();
  root.userData.materials.forEach(m=>m.dispose());root.userData.textures.forEach(t=>t.dispose());
  root.userData.masks.forEach(t=>t.dispose());
}

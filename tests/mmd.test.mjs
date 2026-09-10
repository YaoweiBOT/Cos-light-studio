import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as T from 'three';
import {PathTracingSceneGenerator} from 'three-gpu-pathtracer';
import {parsePMX,buildMMDCharacter,poseMMDCharacter,materialPolicy,disposeMMDCharacter} from '../src/assets/mmd-character.js';
import {MMD_CHARACTERS} from '../src/assets/character-catalog.js';
import {MMD_PROFILES} from '../src/assets/mmd-profiles.js';
import {defaults,validateState} from '../src/assets/state.js';
import {posePreset,POSES,rigPose,pointToPoseTarget} from '../src/assets/posing.js';
import {preserveMaterialGroups} from '../src/assets/tracer-compat.js';
import {JOINTS,boneForJoint} from '../src/assets/joints.js';
const near=(a,b,t=1e-5)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
const counts={yixuan:[35988,36828],jiayin:[44479,39344],velina:[46186,52755]};

for(const c of MMD_CHARACTERS){
  const path=new URL(`../assets/MMD/${c.id}/${c.file}`,import.meta.url);
  test(`${c.id}: original textures, material boundaries, real skeleton poses and production BVH`,{skip:!fs.existsSync(path)},()=>{
    const b=fs.readFileSync(path),data=parsePMX(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength));
    assert.equal(data.vertices.length,counts[c.id][0]);
    const maps=new Map();data.materials.filter(m=>!materialPolicy(m).excluded).forEach(m=>{
      if(m.textureIndex<0)return;
      const file=data.textures[m.textureIndex].replaceAll('\\','/');
      assert.ok(fs.existsSync(new URL(`../assets/MMD/${c.id}/${file}`,import.meta.url)),file);
      const texture=new T.Texture();texture.flipY=false;maps.set(m.textureIndex,texture);
    });
    const root=buildMMDCharacter(data,c.id,maps),u=root.userData,geo=u.mesh.geometry;
    assert.equal(u.triangles,counts[c.id][1]);
    // The source vertex data remains unchanged; only material-boundary copies
    // are appended because the production tracer assigns materials per vertex.
    for(let i=0;i<data.vertices.length;i++){
      for(let a=0;a<3;a++)near(geo.attributes.position.array[i*3+a],data.vertices[i].position[a]);
      for(let a=0;a<2;a++)near(geo.attributes.uv.array[i*2+a],data.vertices[i].uv[a]);
    }
    const sourceMats=data.materials.filter(m=>!materialPolicy(m).excluded);
    sourceMats.forEach((m,i)=>{
      assert.equal(u.materials[i].map,maps.get(m.textureIndex));
      assert.equal(u.materials[i].alphaTest,0);assert.equal(u.materials[i].transparent,true);
      near(u.materials[i].opacity,m.diffuse[3]);assert.equal(u.materials[i].emissive.getHex(),0);
    });
    const model={...defaults().model,character:c.id};
    for(const [id] of POSES){
      model.pose=posePreset(id,c.id);poseMMDCharacter(root,model);const rig=rigPose(model);
      for(const [side,jp] of [['left','右'],['right','左']])for(const [part,n] of [['Hand','手首'],['Foot','足首']]){
        const key=side+part,point=u.byName.get(jp+n).getWorldPosition(new T.Vector3()),end=rig.limbs[key].end;
        near(point.x,end.x);near(point.y,end.y);near(point.z,end.z);
        const encoded=pointToPoseTarget(model,key,end),p={...model,pose:{...model.pose,id:'custom',[key]:encoded}};
        const back=rigPose(p).limbs[key].end;near(back.x,end.x);near(back.y,end.y);near(back.z,end.z);
      }
      for(const bone of u.bones)assert.ok(bone.matrixWorld.elements.every(Number.isFinite));
    }
    model.pose=posePreset('relaxed',c.id);poseMMDCharacter(root,model);
    const generator=preserveMaterialGroups(new PathTracingSceneGenerator([root])),result=generator.generate();
    assert.ok(result.bvh);assert.equal(result.materials.length,u.materials.length);
    const baked=result.geometry,index=baked.index.array,mat=baked.attributes.materialIndex.array;
    assert.equal(baked.groups.length,geo.groups.length,'must preserve every original PMX material region');
    assert.equal(new Set(mat).size,sourceMats.length,'every source material must actually be used, not only exist in the list');
    geo.groups.forEach((source,i)=>{
      assert.deepEqual(baked.groups[i],source);
      for(let k=source.start;k<source.start+source.count;k++)assert.equal(result.materials[mat[index[k]]].name,sourceMats[i].name);
    });
    for(const group of baked.groups)for(let i=group.start;i<group.start+group.count;i++)assert.equal(mat[index[i]],group.materialIndex);
    assert.ok(result.bvh.raycastFirst(new T.Ray(new T.Vector3(0,1.61,2),new T.Vector3(0,0,-1)),T.DoubleSide));
    // A second pose must rebuild the same number of triangles without NaNs.
    model.pose=posePreset('wave',c.id);poseMMDCharacter(root,model);const moved=generator.generate();
    assert.equal(moved.geometry.index.count,u.triangles*3);assert.ok(moved.geometry.attributes.position.array.every(Number.isFinite));
    assert.equal(moved.geometry.groups.length,geo.groups.length,'refit must not append duplicate groups');
    const unchanged=generator.generate();assert.equal(unchanged.geometry.groups.length,geo.groups.length);
    const fingers=JOINTS.filter(j=>j.detail==='hands'&&boneForJoint(u.byName,j));
    assert.ok(fingers.length>=28,'authored finger and palm nodes must exist');
    const finger=fingers.find(j=>j.id.includes('Index')),bone=boneForJoint(u.byName,finger);
    model.joints={[finger.id]:{x:22,y:5,z:0}};poseMMDCharacter(root,model);
    assert.ok(bone.quaternion.angleTo(new T.Quaternion())>.1,'finger control must rotate actual authored bone');
    disposeMMDCharacter(root);baked.dispose();
  });
}
test('old procedural selections migrate to a supplied character with original materials',()=>{
  const old=defaults();old.version=2;old.model.character='cute';old.model.body=false;old.model.material='clay';
  const next=validateState(old);assert.equal(next.model.character,'jiayin');assert.equal(next.model.material,'skin');assert.equal(next.model.body,true);
  near(next.model.pose.rootY,MMD_PROFILES.jiayin.pelvis.y);
  assert.deepEqual(validateState(next),next);
});

test('real multi-material PMX keeps regions even mixed with room meshes and repeated refits',()=>{
  const scene=new T.Scene();
  const multi=new T.Mesh(new T.BoxGeometry(),Array.from({length:6},(_,i)=>new T.MeshStandardMaterial({name:'face-'+i})));
  const scalar=new T.Mesh(new T.BoxGeometry(),new T.MeshStandardMaterial({name:'room'}));
  scene.add(multi,scalar);scene.updateMatrixWorld(true);
  const generator=preserveMaterialGroups(new PathTracingSceneGenerator(scene));
  for(let n=0;n<4;n++){
    multi.rotation.y=n*.1;scene.updateMatrixWorld(true);
    const r=generator.generate(),meshes=generator.staticGeometryGenerator._getMeshes();
    assert.equal(r.geometry.groups.length,7);let offset=0;
    for(const mesh of meshes){
      const g=mesh.geometry,a=r.geometry.attributes.materialIndex,ix=r.geometry.index;
      for(let k=0;k<g.index.count;k++){
        const sourceGroup=g.groups.find(group=>k>=group.start&&k<group.start+group.count);
        const expected=Array.isArray(mesh.material)?mesh.material[sourceGroup.materialIndex]:mesh.material;
        assert.equal(r.materials[a.getX(ix.getX(offset+k))],expected);
      }
      offset+=g.index.count;
    }
  }
});

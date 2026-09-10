import * as T from 'three';
import {surfacePolicy} from './surfaces.js';

// Only the authored Lee scan remains. No generated face, body, wig or clothes.
const V=p=>new T.Vector3(p.x,p.y,p.z);
function material(color,roughness=.55,metalness=0){return new T.MeshPhysicalMaterial({color,roughness,metalness,ior:1.43});}
function segment(group,mat,a,b,r1,r2){
  const pa=V(a),pb=V(b),delta=pb.clone().sub(pa),mesh=new T.Mesh(new T.CylinderGeometry(r2,r1,delta.length(),20,1),mat);
  mesh.position.copy(pa).add(pb).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());group.add(mesh);return mesh;
}
export function createCharacter(model,scanGeometry){
  if(model.character!=='scan'||!scanGeometry)throw new Error('仅支持原始扫描和已导入的 PMX；旧自制人物已移除。');
  const root=new T.Group(),head=new T.Group();
  root.name='Lee scanned head';root.rotation.y=model.bodyYaw*Math.PI/180;
  root.position.set(model.x||0,model.y||0,model.z||0);
  head.position.set(0,1.62,0);head.rotation.set(model.pitch*Math.PI/180,model.yaw*Math.PI/180,0,'YXZ');
  const policy=surfacePolicy(model.material,model.roughness);
  const skin=new T.MeshPhysicalMaterial({roughness:policy.roughness,specularIntensity:policy.specular,ior:1.43});
  const value=policy.textured?.55:policy.color;skin.color.setRGB(value,value,value,T.LinearSRGBColorSpace);
  head.add(new T.Mesh(scanGeometry,skin));root.add(head);
  root.userData={head,skin,scan:true};return root;
}
export function createProp(config){
  const group=new T.Group();group.name='Studio prop';group.position.set(config.x,0,config.z);group.rotation.y=config.yaw*Math.PI/180;
  const metal=material(0xa4aab2,.32,.75),tread=material(0x2c3039,.8),wood=material(0x9e7952,.65);
  function box(size,pos,mat){const m=new T.Mesh(new T.BoxGeometry(...size),mat);m.position.set(...pos);group.add(m);}
  if(config.type==='ladder'){
    for(const s of [-1,1])for(const front of [-1,1])segment(group,metal,{x:s*.25,y:.025,z:front*.34},{x:s*.20,y:.75,z:0},.019,.019);
    for(let i=1;i<=3;i++){
      const h=i*.24,z=.31*(1-i/3);box([.43,.035,.22],[0,h-.0175,z],metal);box([.40,.006,.205],[0,h+.003,z],tread);
    }
    for(const s of [-1,1])segment(group,metal,{x:s*.235,y:.26,z:-.23},{x:s*.235,y:.26,z:.23},.012,.012);
    for(const s of [-1,1])for(const f of [-1,1])box([.065,.03,.075],[s*.25,.015,f*.34],tread);
  }else if(config.type==='stool'){
    const seat=new T.Mesh(new T.CylinderGeometry(.20,.20,.05,48),wood);seat.position.y=.505;group.add(seat);
    for(const x of [-1,1])for(const z of [-1,1])segment(group,metal,{x:x*.15,y:.02,z:z*.15},{x:x*.11,y:.48,z:z*.11},.018,.018);
  }else if(config.type==='cube')box([.5,.5,.5],[0,.25,0],wood);
  return group;
}

export function disposeGenerated(group,shared=[]){
  if(!group)return;const geometries=new Set(),materials=new Set();
  group.traverse(o=>{if(o.geometry&&!shared.includes(o.geometry))geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));});
  geometries.forEach(x=>x.dispose());materials.forEach(x=>x.dispose());group.removeFromParent();
}

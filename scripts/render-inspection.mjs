// Offline asset QA only. Direct-light CPU ray tracing of the same posed Three.js
// geometry, UVs and alpha layers. This is NOT the application's GPU renderer.
// Input texture pixels are decoded with Pillow into model-qa/textures.json.
import fs from 'node:fs';
import {resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import * as T from 'three';
import {StaticGeometryGenerator,MeshBVH} from 'three-mesh-bvh';
import {parsePMX,buildMMDCharacter,poseMMDCharacter,materialPolicy} from '../src/assets/mmd-character.js';
import {MMD_CHARACTERS} from '../src/assets/character-catalog.js';
import {defaults} from '../src/assets/state.js';
import {posePreset} from '../src/assets/posing.js';
const id=process.argv[2]||'jiayin',framing=process.argv[3]||'head',pose=process.argv[4]||'relaxed';
const output=resolve(process.argv[5]||'../model-qa'),c=MMD_CHARACTERS.find(c=>c.id===id);
const bytes=fs.readFileSync(`assets/MMD/${id}/${c.file}`),data=parsePMX(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));
const pixels=JSON.parse(fs.readFileSync(resolve(output,'textures.json')))[id];
for(const p of Object.values(pixels))p.data=fs.readFileSync(p.path);
const maps=new Map();data.textures.forEach((name,i)=>maps.set(i,pixels[name.replaceAll('\\','/')]));
const root=buildMMDCharacter(data,id),m=defaults().model;m.character=id;m.pose=posePreset(pose,id);poseMMDCharacter(root,m);
const gen=new StaticGeometryGenerator(root);gen.attributes=['position','normal','uv'];const geo=gen.generate(),materials=root.userData.materials;
// The BVH utility assigns one group per mesh; restore this PMX mesh's material
// groups before ray queries. The application's path tracer uses its own merger.
geo.clearGroups();for(const g of root.userData.mesh.geometry.groups)geo.addGroup(g.start,g.count,g.materialIndex);
const original=data.materials.filter(m=>!materialPolicy(m).excluded);
const bvh=new MeshBVH(geo,{maxLeafSize:6});
const lut=Array.from({length:256},(_,i)=>{const n=i/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4;});
function texel(hit){
  const source=original[hit.face.materialIndex],p=maps.get(source.textureIndex);
  if(!p)return [1,1,1,source.diffuse[3]];
  const x=((hit.uv.x%1+1)%1)*p.w-.5,y=((hit.uv.y%1+1)%1)*p.h-.5,x0=Math.floor(x),y0=Math.floor(y),fx=x-x0,fy=y-y0;
  const result=[0,0,0,0];
  for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++){
    const at=((((y0+dy)%p.h+p.h)%p.h)*p.w+((x0+dx)%p.w+p.w)%p.w)*4,w=(dx?fx:1-fx)*(dy?fy:1-fy);
    for(let ch=0;ch<4;ch++)result[ch]+=(ch===3?p.data[at+ch]/255:lut[p.data[at+ch]])*w;
  }
  result[3]*=source.diffuse[3];return result;
}
let seed=831;const random=()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296;};
const lights=[{p:new T.Vector3(-.8,2.2,1.15),size:.85,power:4.1},{p:new T.Vector3(.8,1.85,1.45),size:1.1,power:1.25},{p:new T.Vector3(.8,2.1,-.7),size:.65,power:2}];
for(const l of lights){l.normal=new T.Vector3(0,1.5,0).sub(l.p).normalize();l.u=new T.Vector3(0,1,0).cross(l.normal).normalize();l.v=l.normal.clone().cross(l.u).normalize();}
function visibility(origin,direction,distance){
  const ray=new T.Ray(origin.clone(),direction),limit=distance;let transmission=1,travel=0;
  for(let i=0;i<24;i++){
    const hit=bvh.raycastFirst(ray,materials,.00002,limit-travel);if(!hit)break;
    const alpha=texel(hit)[3];if(alpha>=.035){transmission*=1-alpha;if(transmission<.015)return 0;}
    const step=hit.distance+.000025;ray.origin.addScaledVector(direction,step);travel+=step;
  }
  return transmission;
}
function trace(ray){
  const color=[0,0,0];let remaining=1;
  for(let layer=0;layer<24;layer++){
    const hit=bvh.raycastFirst(ray,materials,.00001,100);
    if(!hit){for(let ch=0;ch<3;ch++)color[ch]+=.012*remaining;break;}
    const tex=texel(hit),alpha=tex[3];
    if(alpha>=.035){
      const normal=hit.normal.normalize(),shade=[.045,.045,.045],view=ray.direction.clone().negate();
      const origin=hit.point.clone().addScaledVector(normal,.000025);
      for(const l of lights){
        const light=l.p.clone().addScaledVector(l.u,(random()-.5)*l.size).addScaledVector(l.v,(random()-.5)*l.size),to=light.sub(hit.point),d=to.length();to.divideScalar(d);
        const cosine=Math.max(0,normal.dot(to)),emitter=Math.max(0,-l.normal.dot(to));if(cosine<.001||emitter<.001)continue;
        const vis=visibility(origin,to,d);if(!vis)continue;
        const gain=l.power*emitter/(d*d)*vis;
        for(let ch=0;ch<3;ch++)shade[ch]+=cosine*gain;
      }
      for(let ch=0;ch<3;ch++)color[ch]+=tex[ch]*shade[ch]*alpha*remaining;
      remaining*=1-alpha;if(remaining<.005)break;
    }
    ray.origin.copy(hit.point).addScaledVector(ray.direction,.000025);
  }
  return color;
}
const width=framing==='head'?480:460,height=framing==='head'?600:690,samples=Number(process.argv[6]||6);
const camera=new T.Vector3(0,framing==='head'?1.58:1.03,framing==='head'?1.8:4),target=new T.Vector3(0,framing==='head'?1.58:.90,0);
const forward=target.clone().sub(camera).normalize(),right=forward.clone().cross(new T.Vector3(0,1,0)).normalize(),up=right.clone().cross(forward).normalize();
const span=framing==='head'?.60:2.05,dist=camera.distanceTo(target),buf=Buffer.alloc(width*height*3);
function display(n){n=(n*(2.51*n+.03))/(n*(2.43*n+.59)+.14);n=Math.max(0,Math.min(1,n));return Math.round(255*(n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055));}
for(let y=0;y<height;y++){
  for(let x=0;x<width;x++){
    const sum=[0,0,0];
    for(let s=0;s<samples;s++){
      const d=forward.clone().multiplyScalar(dist).addScaledVector(right,((x+random())/width-.5)*span*width/height).addScaledVector(up,(.5-(y+random())/height)*span).normalize();
      const value=trace(new T.Ray(camera.clone(),d));for(let ch=0;ch<3;ch++)sum[ch]+=value[ch]/samples;
    }
    for(let ch=0;ch<3;ch++)buf[(y*width+x)*3+ch]=display(sum[ch]);
  }
  if(y%150===0)console.log(id,framing,`${Math.round(y/height*100)}%`);
}
const file=resolve(output,`${id}-${framing}-${pose}`);fs.writeFileSync(file+'.rgb',buf);
spawnSync('python',['-c','from PIL import Image;import sys;w,h=map(int,sys.argv[1:3]);p=sys.argv[3];Image.frombytes("RGB",(w,h),open(p+".rgb","rb").read()).save(p+".png")',String(width),String(height),file],{stdio:'inherit'});
console.log(file+'.png');

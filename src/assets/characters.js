import * as T from 'three';
import {rigPose} from './posing.js';

// Original procedural meshes, MIT. Stylized adult mannequins, not human scans.
const V=p=>new T.Vector3(p.x,p.y,p.z);
const sphere=new T.SphereGeometry(1,28,20);
function ellipsoid(group,material,p,size){const mesh=new T.Mesh(sphere,material);mesh.position.set(...p);mesh.scale.set(...size);group.add(mesh);return mesh;}
function material(color,roughness=.55,metalness=0){return new T.MeshPhysicalMaterial({color,roughness,metalness,ior:1.43});}
function tube(group,mat,points,radius=.004){const c=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));const m=new T.Mesh(new T.TubeGeometry(c,24,radius,7,false),mat);group.add(m);return m;}
function almondEye(group,mat,x,y,width,height){
  const vertices=[],indices=[],cols=32,rows=12;
  for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++){
    const u=i/cols*2-1,v=j/rows*2-1,edge=Math.sqrt(Math.max(0,1-u*u));
    vertices.push(x+u*width,y+v*height*edge*(v<0?.72:1),.070+.009*(1-u*u)*(1-v*v));
    if(i<cols&&j<rows){const k=j*(cols+1)+i;indices.push(k,k+1,k+cols+1,k+1,k+cols+2,k+cols+1);}
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();group.add(new T.Mesh(geo,mat));
}
function segment(group,mat,a,b,r1,r2){
  const pa=V(a),pb=V(b),delta=pb.clone().sub(pa),mesh=new T.Mesh(new T.CylinderGeometry(r2,r1,delta.length(),20,1),mat);
  mesh.position.copy(pa).add(pb).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());group.add(mesh);return mesh;
}
const g=(x,y,cx,cy,wx,wy)=>Math.exp(-(((x-cx)/wx)**2+((y-cy)/wy)**2));
export function sculptedFace(style){
  const geo=new T.SphereGeometry(1,112,80),p=geo.attributes.position;
  const cute=style==='cute',elegant=style==='elegant',rx=cute?.099:elegant?.087:.092,ry=elegant?.15:.142;
  for(let i=0;i<p.count;i++){
    const nx=p.getX(i),ny=p.getY(i),nz=p.getZ(i),y=ny*ry;
    const chin=1-(elegant?.30:.22)*Math.max(0,-ny);
    const x=nx*rx*chin;
    let z=nz*(cute?.086:.083);
    if(nz>0){
      const front=Math.min(1,nz*4);
      const cheek=(cute?.018:.012)*(g(x,y,-.045,-.026,.028,.035)+g(x,y,.045,-.026,.028,.035));
      const sockets=-.016*(g(x,y,-.038,.023,.025,.016)+g(x,y,.038,.023,.025,.016));
      const nose=(elegant?.026:.019)*g(x,y,0,.013,.014,.047)+.024*g(x,y,0,-.021,.018,.015);
      const brow=.009*(g(x,y,-.038,.046,.035,.010)+g(x,y,.038,.046,.035,.010));
      const mouth=.010*g(x,y,0,-.066,.027,.017)-.004*g(x,y,0,-.085,.03,.009);
      z+=(cheek+sockets+nose+brow+mouth)*front;
    }
    p.setXYZ(i,x,y,z);
  }
  geo.computeVertexNormals();geo.computeBoundingBox();return geo;
}
function strand(group,mat,points,width,depth){
  const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),frames=curve.computeFrenetFrames(28,false),vertices=[],indices=[];
  for(let i=0;i<=28;i++){
    const t=i/28,pt=curve.getPointAt(t),taper=.035+.965*Math.pow(1-t,.42);
    for(let j=0;j<=8;j++){
      const a=j/8*Math.PI*2,pos=pt.clone().addScaledVector(frames.normals[i],Math.cos(a)*width*taper).addScaledVector(frames.binormals[i],Math.sin(a)*depth*taper);
      vertices.push(pos.x,pos.y,pos.z);
      if(i<28&&j<8){const v=i*9+j;indices.push(v,v+1,v+9,v+1,v+10,v+9);}
    }
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();const mesh=new T.Mesh(geo,mat);group.add(mesh);
}
function makeHair(group,style,mat){
  if(style==='none')return;
  const verts=[],indices=[],uN=72,vN=32;
  for(let j=0;j<=vN;j++)for(let i=0;i<=uN;i++){
    const phi=i/uN*Math.PI*2,front=Math.max(0,Math.cos(phi)),limit=2.25-1.23*front**2,theta=.001+j/vN*limit;
    verts.push(.108*Math.sin(theta)*Math.sin(phi),.155*Math.cos(theta),.098*Math.sin(theta)*Math.cos(phi)-.01);
    if(j<vN&&i<uN){const k=j*(uN+1)+i;indices.push(k,k+uN+1,k+1,k+1,k+uN+1,k+uN+2);}
  }
  const cap=new T.BufferGeometry();cap.setAttribute('position',new T.Float32BufferAttribute(verts,3));cap.setIndex(indices);cap.computeVertexNormals();group.add(new T.Mesh(cap,mat));
  // Distinct curved fringe locks cast physical shadows on the forehead.
  for(let i=-3;i<=3;i++){
    const x=i*.025,endY=style==='short'?.05+Math.abs(i)*.008:style==='side'?.055-i*.013:.040-Math.abs(i)*.006;
    strand(group,mat,[[x*.65,.128,.047],[x,.094,.087],[x+(style==='side'?.027:0),endY,.092]],.022,.009);
  }
  for(const s of [-1,1]){
    const end=style==='bob'?-.16:style==='long'?-.40:style==='short'?-.065:-.22;
    for(let k=0;k<3;k++)strand(group,mat,[[s*(.076+k*.008),.090,.044-k*.021],[s*(.108+k*.008),-.018,.044-k*.018],[s*(.10+k*.009),end+k*.009,.040-k*.018]],.017,.012);
  }
  if(['long','bob'].includes(style))for(let i=-5;i<=5;i++){
    const x=i*.018;strand(group,mat,[[x,.075,-.081],[x*1.12,-.10,-.095],[x*1.16,style==='long'?-.47:-.18,-.07]],.023,.014);
  }
  if(['twin','ponytail','side'].includes(style)){
    const sides=style==='twin'?[-1,1]:style==='side'?[1]:[0];
    for(const s of sides){
      const root=[s*.098,.087,s===0?-.103:-.025];
      for(let k=-2;k<=2;k++)strand(group,mat,[root,[s*.17+k*.008,.015,-.10],[s*.21+k*.010,-.25,-.075],[s*.17+k*.011,-.47,0]],.029,.018);
    }
  }
  if(style==='buns')for(const s of [-1,1]){
    ellipsoid(group,mat,[s*.106,.096,-.028],[.045,.048,.040]);
    strand(group,mat,[[s*.11,.04,-.025],[s*.135,-.10,-.012],[s*.11,-.23,.015]],.022,.012);
  }
  if(style==='short')for(let i=0;i<12;i++){
    const a=i/12*Math.PI*2;strand(group,mat,[[Math.sin(a)*.06,.12,Math.cos(a)*.04],[Math.sin(a)*.105,.085,Math.cos(a)*.087],[Math.sin(a)*.127,.020,Math.cos(a)*.102]],.020,.012);
  }
}
export function createCharacter(model,scanGeometry=null){
  const root=new T.Group(),body=new T.Group(),head=new T.Group(),rig=rigPose(model);
  root.name='Original adult character';root.add(body,head);root.rotation.y=model.bodyYaw*Math.PI/180;
  head.position.copy(V(rig.joints.head));head.rotation.set(model.pitch*Math.PI/180,model.yaw*Math.PI/180,0,'YXZ');
  const neutral=model.material!=='skin';
  const skin=material(neutral?model.material==='gray'?0x767676:0xbfc3c2:0xe7b8a3,model.roughness);
  skin.color.multiplyScalar(model.skinTone);
  const hairPalette={ink:0x252735,silver:0xcdd5e3,pink:0xda91b5,blue:0x78accd,violet:0x8770b5,blonde:0xc4a373,red:0x923b53};
  const hair=material(hairPalette[model.hairColor],.35),lip=material(neutral?0xa8a4a3:0xb76c7b,.5),liner=material(0x342731,.75);
  const white=material(0xdedbdb,.28),iris=material(model.character==='elegant'?0x8170a0:0x638c9d,.25),pupil=material(0x12141a,.14);
  if(model.character==='scan'&&scanGeometry){head.add(new T.Mesh(scanGeometry,skin));}
  else{
    head.add(new T.Mesh(sculptedFace(model.character),skin));
    for(const side of [-1,1]){
      const x=side*.038,eyeY=.022,eyeWidth=model.character==='cute'?.026:.024,eyeHeight=model.character==='elegant'?.010:.013;
      ellipsoid(head,skin,[side*.092,-.009,0],[.018,.031,.017]);
      almondEye(head,white,x,eyeY,eyeWidth,eyeHeight);
      ellipsoid(head,iris,[x,eyeY,.080],[.0095,eyeHeight*.86,.0015]);
      ellipsoid(head,pupil,[x,eyeY,.0815],[.0043,eyeHeight*.58,.0008]);
      for(const top of [1,-1]){
        const points=[];for(let i=0;i<=12;i++){const t=Math.PI*i/12;points.push([x+Math.cos(t)*eyeWidth,eyeY+Math.sin(t)*eyeHeight*top*(top<0?.72:1),.0705]);}
        tube(head,top===1?liner:skin,points,top===1?.0013:.0015);
      }
      tube(head,liner,[[x-side*.019,.051,.080],[x,.056,.081],[x+side*.023,.050,.071]],.0026);
    }
    tube(head,lip,[[-.021,-.067,.075],[-.009,-.065,.085],[0,-.066,.087],[.009,-.065,.085],[.021,-.067,.075]],.0015);
    ellipsoid(head,lip,[0,-.069,.084],[.017,.0035,.003]);
  }
  makeHair(head,model.hair,hair);
  body.visible=model.body;
  if(model.body){
    const y=model.pose.rootY,shirt=material(model.clothing==='suit'?0x333746:model.clothing==='dress'?0xa188b8:0xd5d9dc,.78),dark=material(0x28334a,.72),trim=material(0xa2526d,.7),shoe=material(0x24252c,.4);
    // A joined clothed torso, shoulders and neck, with solid garment thickness.
    const profile=[[.135,y-.10],[.151,y+.025],[.124,y+.14],[.155,y+.32],[.175,y+.40],[.14,y+.44],[.07,y+.46]].map(([r,h])=>new T.Vector2(r,h));
    const torso=new T.Mesh(new T.LatheGeometry(profile,48),shirt);torso.scale.z=.62;body.add(torso);
    segment(body,skin,{x:0,y:y+.43,z:0},{x:0,y:y+.62,z:0},.055,.043);
    for(const limb of Object.keys(rig.limbs)){
      const chain=rig.limbs[limb],hand=limb.endsWith('Hand');
      const r1=hand?.048:.076,r2=hand?.037:.054,r3=hand?.024:.029;
      segment(body,hand?shirt:skin,chain.start,chain.mid,r1,r2);segment(body,skin,chain.mid,chain.end,r2,r3);
      ellipsoid(body,skin,Object.values(chain.mid),[r2,r2,r2]);
      if(hand){
        const direction=V(chain.end).sub(V(chain.mid)).normalize(),palm=new T.Group();palm.position.copy(V(chain.end));palm.quaternion.setFromUnitVectors(new T.Vector3(0,-1,0),direction);body.add(palm);
        ellipsoid(palm,skin,[0,-.038,0],[.032,.045,.017]);
        for(let f=0;f<4;f++)ellipsoid(palm,skin,[(f-1.5)*.014,-.080+(f===0||f===3?.008:0),0],[.007,.024,.007]);
        const thumb=ellipsoid(palm,skin,[.038,-.041,.008],[.010,.023,.010]);thumb.rotation.z=.6;
      }else ellipsoid(body,shoe,[chain.end.x,chain.end.y-.025,chain.end.z+.055],[.054,.055,.108]);
    }
    if(model.clothing!=='suit'){
      const skirtGeo=new T.CylinderGeometry(.147,model.clothing==='dress'?.255:.225,model.clothing==='dress'?.36:.25,64,8,false);
      const pos=skirtGeo.attributes.position;
      for(let i=0;i<pos.count;i++){const a=Math.atan2(pos.getZ(i),pos.getX(i)),f=1+.025*Math.cos(a*18);pos.setX(i,pos.getX(i)*f);pos.setZ(i,pos.getZ(i)*f*.80);}
      skirtGeo.computeVertexNormals();const skirt=new T.Mesh(skirtGeo,model.clothing==='dress'?shirt:dark);skirt.position.y=y-.065;body.add(skirt);
      for(const s of [-1,1]){const collar=new T.Mesh(new T.BoxGeometry(.065,.12,.018),dark);collar.position.set(s*.051,y+.371,.105);collar.rotation.z=s*-.40;body.add(collar);}
      ellipsoid(body,trim,[0,y+.31,.119],[.022,.030,.016]);
      for(const s of [-1,1]){const bow=ellipsoid(body,trim,[s*.035,y+.31,.119],[.039,.022,.012]);bow.rotation.z=s*.2;}
    }else{
      for(const side of ['leftFoot','rightFoot']){const chain=rig.limbs[side];segment(body,shirt,chain.start,chain.mid,.083,.059);segment(body,shirt,chain.mid,chain.end,.059,.038);}
    }
  }
  root.userData={rig,head,skin,scan:model.character==='scan'};
  return root;
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
  if(!group)return;const geometries=new Set(),materials=new Set();group.traverse(o=>{if(o.geometry&&!shared.includes(o.geometry)&&o.geometry!==sphere)geometries.add(o.geometry);if(o.material)materials.add(o.material);});
  geometries.forEach(x=>x.dispose());materials.forEach(x=>x.dispose());group.removeFromParent();
}

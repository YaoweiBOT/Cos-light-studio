import {LinearSRGBColorSpace} from 'three';
import {position,aim,cctToLinear,radiance,spotIntensity,sub,unit,DEG} from './physics.js';
// One stable area + spot pair per lamp avoids stale light-type buffers on edits.
export function configureLight(area,spot,item){
  const p=position(item),a=aim(item),n=unit(sub(a,p));
  const rgb=cctToLinear(item.kelvin,item.tint),isSpot=item.type==='fresnel';
  area.position.set(p.x,p.y,p.z);area.lookAt(a.x,a.y,a.z);area.rotateZ(item.roll*DEG);
  area.color.setRGB(...rgb,LinearSRGBColorSpace);area.intensity=isSpot?0:radiance(item);
  area.width=item.width;area.height=item.height;area.isCircular=item.shape==='disk';
  spot.angle=item.beam*DEG/2;spot.penumbra=item.edge;spot.radius=item.aperture/2;
  // v0.0.24 samples a disk shifted forward by radius / tan(angle).
  // Compensate here so the sampled emitting disk stays at the user's lamp centre.
  const correction=spot.radius/Math.tan(spot.angle);
  spot.position.set(p.x-n.x*correction,p.y-n.y*correction,p.z-n.z*correction);
  spot.target.position.set(a.x,a.y,a.z);spot.target.updateMatrixWorld(true);
  spot.color.setRGB(...rgb,LinearSRGBColorSpace);spot.intensity=isSpot?spotIntensity(item):0;
  spot.decay=2;spot.distance=0;
}

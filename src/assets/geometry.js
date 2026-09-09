import {BufferAttribute,Vector3} from 'three';

// Shared by the renderer and the CPU asset/BVH integration test.
export function prepareHeadGeometry(source){
  const geo=source.geometry.clone();
  if(!geo.attributes.position?.count)throw new Error('扫描中没有可用的顶点');
  for(const [name,attribute] of Object.entries(geo.attributes)){
    if(!attribute.isInterleavedBufferAttribute)continue;
    const array=new attribute.data.array.constructor(attribute.count*attribute.itemSize);
    for(let i=0;i<attribute.count;i++)for(let j=0;j<attribute.itemSize;j++){
      array[i*attribute.itemSize+j]=attribute.data.array[i*attribute.data.stride+attribute.offset+j];
    }
    geo.setAttribute(name,new BufferAttribute(array,attribute.itemSize,attribute.normalized));
  }
  geo.applyMatrix4(source.matrixWorld);geo.computeBoundingBox();
  const box=geo.boundingBox,center=new Vector3();box.getCenter(center);
  const height=box.max.y-box.min.y;
  if(!Number.isFinite(height)||height<=0)throw new Error('扫描高度无效');
  const scale=.32/height;
  geo.translate(-center.x,-center.y,-center.z);geo.scale(scale,scale,scale);
  geo.computeVertexNormals();geo.computeBoundingBox();
  return geo;
}

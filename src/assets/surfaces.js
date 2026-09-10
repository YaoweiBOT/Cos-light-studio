import * as T from 'three';

export const SURFACES = [['skin','原始配色 · 物理受光'],['gray','18% 灰 · 纯漫反射'],['clay','中性雕塑 · 看光型'],['diffuse','原色漫反射 · 去高光'],['glossy','灰色亮面 · 看高光']];
export function surfacePolicy(mode,roughness=.68) {
  if(mode==='gray')return {textured:false,color:.18,roughness:1,specular:0};
  if(mode==='clay')return {textured:false,color:.5,roughness:.8,specular:.2};
  if(mode==='glossy')return {textured:false,color:.18,roughness:.18,specular:1};
  return {textured:true,color:1,roughness:mode==='diffuse'?1:roughness,specular:mode==='diffuse'?0:.3};
}

// Removing a color map also removes its alpha. Make a white-RGB mask with the
// ORIGINAL alpha so gray mode never turns lashes / hair cards into solid boxes.
export function neutralTexture(texture) {
  const canvas=document.createElement('canvas'),im=texture.image;
  canvas.width=im.width;canvas.height=im.height;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(im,0,0);
  const pixels=ctx.getImageData(0,0,canvas.width,canvas.height);
  whitenRGBA(pixels.data);
  ctx.putImageData(pixels,0,0);
  const mask=new T.CanvasTexture(canvas);mask.flipY=texture.flipY;mask.wrapS=texture.wrapS;mask.wrapT=texture.wrapT;mask.name=texture.name+' / alpha-only';
  return mask;
}
export function whitenRGBA(data) {
  for(let i=0;i<data.length;i+=4)data[i]=data[i+1]=data[i+2]=255;
  return data;
}

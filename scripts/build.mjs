import {build} from 'esbuild';
import {mkdir,rm,cp,copyFile,readFile,writeFile,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ROOT,DIST,exists,sourceDigest} from './common.mjs';
export async function buildApp(){
  await rm(DIST,{recursive:true,force:true});await mkdir(resolve(DIST,'assets'),{recursive:true});
  await copyFile(resolve(ROOT,'src/index.html'),resolve(DIST,'index.html'));
  for(const name of ['style.css','favicon.svg'])await copyFile(resolve(ROOT,'src/assets',name),resolve(DIST,'assets',name));
  const result=await build({
    absWorkingDir:ROOT,entryPoints:['src/assets/boot.js'],outdir:'dist/assets',
    bundle:true,splitting:true,format:'esm',platform:'browser',target:['es2022'],
    entryNames:'[name]',chunkNames:'[name]-[hash]',minify:true,sourcemap:false,
    legalComments:'linked',metafile:true,logLevel:'info'
  });
  const externals=Object.values(result.metafile.outputs).flatMap(o=>o.imports).filter(i=>i.external);
  if(externals.length)throw new Error('构建仍含外部模块，不能作为离线版本：'+externals.map(i=>i.path).join(', '));
  if(await exists(resolve(ROOT,'assets/LeePerrySmith/LeePerrySmith.glb')))await cp(resolve(ROOT,'assets/LeePerrySmith'),resolve(DIST,'models/LeePerrySmith'),{recursive:true});
  else console.warn('没有找到扫描素材；可以使用材质球。运行 npm run assets 后重新构建即可加入人脸。');
  if(await exists(resolve(ROOT,'assets/VRoid/Sendagaya_Shino.vrm')))await cp(resolve(ROOT,'assets/VRoid'),resolve(DIST,'models/VRoid'),{recursive:true});
  else console.warn('没有找到 VRoid CC0 示例人物，人物下拉将缺少该选项。');
  if(await exists(resolve(ROOT,'assets/MMD')))await cp(resolve(ROOT,'assets/MMD'),resolve(DIST,'models/MMD'),{recursive:true});
  await mkdir(resolve(DIST,'licenses'),{recursive:true});
  await copyFile(resolve(ROOT,'LICENSE'),resolve(DIST,'licenses/Cos-Light-Studio-MIT.txt'));
  await copyFile(resolve(ROOT,'THIRD_PARTY_NOTICES.md'),resolve(DIST,'licenses/THIRD_PARTY_NOTICES.md'));
  for(const name of ['three','three-mesh-bvh','three-gpu-pathtracer','xatlas-web','mmd-parser']){
    const pkg=resolve(ROOT,'node_modules',name);
    for(const file of await readdir(pkg))if(/^licen[sc]e(?:\.|$)/i.test(file))await copyFile(resolve(pkg,file),resolve(DIST,'licenses',name+'-'+file));
  }
  await writeFile(resolve(DIST,'build-manifest.json'),JSON.stringify({application:'cos-light-studio',version:'0.5.0',sourceDigest:await sourceDigest(),bundled:true,hasMMD:await exists(resolve(DIST,'models/MMD')),externalImports:externals.length,hasScannedHead:await exists(resolve(DIST,'models/LeePerrySmith/LeePerrySmith.glb')),outputs:Object.keys(result.metafile.outputs)},null,2)+'\n');
  console.log('本地构建完成：全部渲染代码已打包，不依赖运行时 CDN。');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))buildApp().catch(e=>{console.error(e.message);process.exitCode=1;});

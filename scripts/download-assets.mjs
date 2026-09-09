import {mkdir,writeFile,rename,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash,randomUUID} from 'node:crypto';
import {ROOT,exists} from './common.mjs';
const dir=resolve(ROOT,'assets/LeePerrySmith');
const names=['LeePerrySmith_License.txt','LeePerrySmith.glb','Map-COL.jpg','Infinite-Level_02_Tangent_SmoothUV.jpg'];
const bases=[
  'https://raw.githubusercontent.com/mrdoob/three.js/r170/examples/models/gltf/LeePerrySmith/',
  'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r170/examples/models/gltf/LeePerrySmith/'
];
export async function downloadAssets(){
  await mkdir(dir,{recursive:true});
  if(!process.argv.includes('--force')&&await exists(resolve(dir,'asset-manifest.json'))){
    try{
      const manifest=JSON.parse(await readFile(resolve(dir,'asset-manifest.json'),'utf8'));
      let valid=true;
      for(const name of names){const data=await readFile(resolve(dir,name));if(createHash('sha256').update(data).digest('hex')!==manifest.files?.[name]?.sha256)valid=false;}
      if(valid){console.log('本地扫描素材完整，无需下载。');return;}
    }catch{}
  }
  const manifest={source:'Three.js r170 examples',creator:'Lee Perry-Smith / Infinite Realities',license:'CC-BY-3.0',files:{}};
  // Fetch and verify the asset's own license before distributing its bytes.
  for(const name of names){
    let data,url,lastError;
    for(const base of bases){
      try{
        url=base+name;const r=await fetch(url,{signal:AbortSignal.timeout(30000)});
        if(!r.ok)throw new Error(`HTTP ${r.status}`);
        data=Buffer.from(await r.arrayBuffer());
        if(data.length>32*1024*1024||data.length<50)throw new Error('素材体积异常');
        if(name.endsWith('.glb')&&data.toString('ascii',0,4)!=='glTF')throw new Error('返回内容不是 GLB');
        if(name.endsWith('.jpg')&&(data[0]!==255||data[1]!==216))throw new Error('返回内容不是 JPEG');
        if(name.endsWith('.txt')&&!data.toString().includes('Creative Commons Attribution 3.0 Unported'))throw new Error('素材许可与已审核的 CC BY 3.0 不一致');
        break;
      }catch(e){data=null;lastError=e;}
    }
    if(!data)throw new Error(`无法下载 ${name}：${lastError?.message}。可将原始素材手动放入 assets/LeePerrySmith/，保留许可文件。`);
    const temporary=resolve(dir,`.${name}.${randomUUID()}.tmp`);await writeFile(temporary,data);await rename(temporary,resolve(dir,name));
    manifest.files[name]={url,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')};
    console.log(`已准备 ${name} (${Math.round(data.length/1024)} KB)`);
  }
  await writeFile(resolve(dir,'asset-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))downloadAssets().catch(e=>{console.error(e.message);process.exitCode=1;});

import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {ROOT,DIST,exists,filesUnder,sourceDigest} from './common.mjs';

export async function checkRelease(){
  const manifest=JSON.parse(await readFile(resolve(DIST,'build-manifest.json'),'utf8'));
  assert.equal(manifest.sourceDigest,await sourceDigest(),'源码与 dist 不一致，请重新构建');
  assert.equal(manifest.externalImports,0);assert.equal(manifest.bundled,true);assert.equal(manifest.hasScannedHead,true);
  for(const file of manifest.outputs)assert.ok(await exists(resolve(ROOT,file)),`缺少构建文件 ${file}`);
  const html=await readFile(resolve(DIST,'index.html'),'utf8');
  assert.match(html,/script type="module" src="\.\/assets\/boot\.js"/);
  assert.match(html,/connect-src 'self' blob:/);
  assert.ok(!/<script[^>]+src=["']https?:/i.test(html),'不能从外部加载运行时代码');
  assert.ok(!/<link[^>]+href=["']https?:/i.test(html),'不能从外部加载字体或样式');
  assert.ok(!/@import\s+url\(\s*['"]?https?:/i.test(await readFile(resolve(DIST,'assets/style.css'),'utf8')));
  const assetManifest=JSON.parse(await readFile(resolve(ROOT,'assets/LeePerrySmith/asset-manifest.json'),'utf8'));
  assert.equal(assetManifest.license,'CC-BY-3.0');
  for(const [name,info] of Object.entries(assetManifest.files)){
    for(const dir of ['assets/LeePerrySmith','dist/models/LeePerrySmith']){
      const data=await readFile(resolve(ROOT,dir,name));
      assert.equal(data.length,info.bytes);assert.equal(createHash('sha256').update(data).digest('hex'),info.sha256,`${dir}/${name} 校验失败`);
    }
  }
  const licenses=await filesUnder(resolve(DIST,'licenses'));
  for(const name of ['Cos-Light-Studio-MIT','THIRD_PARTY_NOTICES','three-LICENSE','three-mesh-bvh-LICENSE','three-gpu-pathtracer-LICENSE','xatlas-web-LICENSE'])assert.ok(licenses.some(p=>p.includes(name)),`缺少许可：${name}`);
  console.log('发布校验通过：构建匹配、零外部模块、本地模型与贴图校验一致、许可齐全。');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))checkRelease().catch(e=>{console.error(e.message);process.exitCode=1;});

import {readFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {spawn} from 'node:child_process';
import {ROOT,DIST,exists,sourceDigest} from './common.mjs';
import {createLocalServer,openBrowser} from './server.mjs';

async function installDependencies(){
  console.log('首次准备开发依赖，需要联网；不会修改全局 npm 配置。');
  const candidates=[resolve(dirname(process.execPath),'node_modules/npm/bin/npm-cli.js'),resolve(dirname(process.execPath),'../lib/node_modules/npm/bin/npm-cli.js')];
  const cli=(await Promise.all(candidates.map(async p=>await exists(p)?p:null))).find(Boolean);
  const args=[await exists(resolve(ROOT,'package-lock.json'))?'ci':'install','--ignore-scripts','--no-audit','--no-fund'];
  await new Promise((ok,fail)=>{
    const p=cli?spawn(process.execPath,[cli,...args],{cwd:ROOT,stdio:'inherit'}):spawn(process.platform==='win32'?'npm.cmd':'npm',args,{cwd:ROOT,stdio:'inherit',shell:process.platform==='win32'});
    p.on('error',fail);p.on('exit',code=>code===0?ok():fail(new Error('依赖安装失败，请检查 npm 网络连接后重试。')));
  });
}
async function main(){
  const [major,minor]=process.versions.node.split('.').map(Number);
  if(major<22||(major===22&&minor<12))throw new Error('开发启动需要 Node.js 22.12 或更高版本。预构建包也可以用 Python 3 启动。');
  let ready=false;
  if(await exists(resolve(DIST,'build-manifest.json')))try{ready=JSON.parse(await readFile(resolve(DIST,'build-manifest.json'),'utf8')).sourceDigest===await sourceDigest();}catch{}
  if(!ready){
    if(!await exists(resolve(ROOT,'node_modules/esbuild/package.json')))await installDependencies();
    const {buildApp}=await import('./build.mjs');await buildApp();
  }
  const arg=process.argv.find(x=>x.startsWith('--port=')),port=arg?Number(arg.split('=')[1]):5273;
  if(!Number.isInteger(port)||port<1024||port>65535)throw new Error('端口须介于 1024 与 65535。');
  const url=`http://127.0.0.1:${port}/`;
  try{const r=await fetch(url+'__health',{signal:AbortSignal.timeout(600)});if((await r.json()).application==='cos-light-studio'){console.log(`黑棚已在运行：${url}`);if(!process.argv.includes('--no-open'))openBrowser(url);return;}}catch{}
  const server=await createLocalServer();
  server.on('error',e=>{console.error(e.code==='EADDRINUSE'?`端口 ${port} 被其他程序占用。可运行 node scripts/start.mjs --port=5274；不同端口的浏览器存档相互独立。`:e.message);process.exitCode=1;});
  server.listen(port,'127.0.0.1',()=>{console.log(`\n黑棚已启动：${url}\n保留此窗口。按 Ctrl+C 关闭。所有渲染在本机完成。\n`);if(!process.argv.includes('--no-open'))openBrowser(url);});
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});

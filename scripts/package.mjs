import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import {resolve,relative,basename} from 'node:path';
import {spawn} from 'node:child_process';
import {deflateRawSync} from 'node:zlib';
import {ROOT,filesUnder,sourceDigest} from './common.mjs';
import {buildApp} from './build.mjs';
import {checkRelease} from './check.mjs';

// Standard ZIP (deflate), implemented with Node built-ins to avoid an extra
// archiver executable or runtime dependency. Release files are small (<4 GiB).
const crcTable=Array.from({length:256},(_,n)=>{for(let i=0;i<8;i++)n=(n&1)?0xedb88320^(n>>>1):n>>>1;return n>>>0;});
function crc32(data){let crc=0xffffffff;for(const byte of data)crc=crcTable[(crc^byte)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;}
async function zipFiles(files,target,publicDigest=null){
  const chunks=[],central=[];let offset=0;
  for(const file of files){
    const name=Buffer.from('cos-light-studio-local/'+relative(ROOT,file).replaceAll('\\','/'));
    let data=await readFile(file);
    if(publicDigest&&relative(ROOT,file).replaceAll('\\','/')==='dist/build-manifest.json'){
      const manifest=JSON.parse(data);manifest.sourceDigest=publicDigest;manifest.hasMMD=false;
      data=Buffer.from(JSON.stringify(manifest,null,2)+'\n');
    }
    const compressed=deflateRawSync(data,{level:9}),crc=crc32(data);
    const header=Buffer.alloc(30);header.writeUInt32LE(0x04034b50);header.writeUInt16LE(20,4);header.writeUInt16LE(0x800,6);header.writeUInt16LE(8,8);
    header.writeUInt16LE(0x5d2a,12); // deterministic DOS date: 2026-09-10
    header.writeUInt32LE(crc,14);header.writeUInt32LE(compressed.length,18);header.writeUInt32LE(data.length,22);header.writeUInt16LE(name.length,26);
    chunks.push(header,name,compressed);
    const entry=Buffer.alloc(46);entry.writeUInt32LE(0x02014b50);entry.writeUInt16LE(0x0314,4);entry.writeUInt16LE(20,6);entry.writeUInt16LE(0x800,8);entry.writeUInt16LE(8,10);entry.writeUInt16LE(0x5d2a,14);
    entry.writeUInt32LE(crc,16);entry.writeUInt32LE(compressed.length,20);entry.writeUInt32LE(data.length,24);entry.writeUInt16LE(name.length,28);
    const mode=0o100000|((await stat(file)).mode&0o777);entry.writeUInt32LE((mode*65536)>>>0,38);entry.writeUInt32LE(offset,42);
    central.push(entry,name);offset+=header.length+name.length+compressed.length;
  }
  const directory=Buffer.concat(central),end=Buffer.alloc(22);end.writeUInt32LE(0x06054b50);end.writeUInt16LE(files.length,8);end.writeUInt16LE(files.length,10);end.writeUInt32LE(directory.length,12);end.writeUInt32LE(offset,16);
  await writeFile(target,Buffer.concat([...chunks,directory,end]));
}
async function main(){
  await buildApp();
  const tests=(await filesUnder(resolve(ROOT,'tests'))).filter(p=>p.endsWith('.test.mjs'));
  await new Promise((ok,fail)=>{const child=spawn(process.execPath,['--test',...tests],{cwd:ROOT,stdio:'inherit'});child.on('error',fail);child.on('exit',code=>code===0?ok():fail(new Error('测试失败，未打包')));});
  await checkRelease();
  const roots=['README.md','MODEL_IMPORT_GUIDE.zh-CN.md','UPDATE_GUIDE.zh-CN.md','RELEASE_NOTES_v0.5.0.md','START_HERE.txt','LICENSE','THIRD_PARTY_NOTICES.md','.gitignore','.gitattributes','package.json','package-lock.json','vite.config.js','start-windows.cmd','import-models-windows.cmd','start-macos.command','start-linux.sh'];
  const files=roots.map(p=>resolve(ROOT,p));
  for(const dir of ['src','assets','dist','scripts','tests'])files.push(...(await filesUnder(resolve(ROOT,dir))).filter(p=>!p.includes('__pycache__')&&!p.endsWith('.pyc')));
  await mkdir(resolve(ROOT,'releases'),{recursive:true});
  const publicFiles=files.filter(p=>!/^((assets\/MMD)|(dist\/models\/MMD))\//.test(relative(ROOT,p).replaceAll('\\','/')));
  const publicTarget=resolve(ROOT,'releases/cos-light-studio-source-v0.5.0.zip');
  await zipFiles(publicFiles.sort(),publicTarget,await sourceDigest({includeMMD:false}));
  console.log(`${basename(publicTarget)} · ${publicFiles.length} 个文件 · ${((await stat(publicTarget)).size/1024/1024).toFixed(2)} MiB`);
  if(process.argv.includes('--personal')){
    const target=resolve(ROOT,'releases/cos-light-studio-personal-v0.5.0.zip');
    await zipFiles(files.sort(),target);
    console.log(`${basename(target)} · ${files.length} 个文件 · ${((await stat(target)).size/1024/1024).toFixed(2)} MiB`);
  }
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});

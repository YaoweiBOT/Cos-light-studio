import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import {resolve,relative,basename} from 'node:path';
import {spawn} from 'node:child_process';
import {deflateRawSync} from 'node:zlib';
import {ROOT,filesUnder} from './common.mjs';
import {buildApp} from './build.mjs';
import {checkRelease} from './check.mjs';

// Standard ZIP (deflate), implemented with Node built-ins to avoid an extra
// archiver executable or runtime dependency. Release files are small (<4 GiB).
const crcTable=Array.from({length:256},(_,n)=>{for(let i=0;i<8;i++)n=(n&1)?0xedb88320^(n>>>1):n>>>1;return n>>>0;});
function crc32(data){let crc=0xffffffff;for(const byte of data)crc=crcTable[(crc^byte)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;}
async function zipFiles(files,target){
  const chunks=[],central=[];let offset=0;
  for(const file of files){
    const name=Buffer.from('cos-light-studio-local/'+relative(ROOT,file).replaceAll('\\','/'));
    const data=await readFile(file),compressed=deflateRawSync(data,{level:9}),crc=crc32(data);
    const header=Buffer.alloc(30);header.writeUInt32LE(0x04034b50);header.writeUInt16LE(20,4);header.writeUInt16LE(0x800,6);header.writeUInt16LE(8,8);
    header.writeUInt16LE(0x5d28,12); // deterministic DOS date: 2026-09-08
    header.writeUInt32LE(crc,14);header.writeUInt32LE(compressed.length,18);header.writeUInt32LE(data.length,22);header.writeUInt16LE(name.length,26);
    chunks.push(header,name,compressed);
    const entry=Buffer.alloc(46);entry.writeUInt32LE(0x02014b50);entry.writeUInt16LE(0x0314,4);entry.writeUInt16LE(20,6);entry.writeUInt16LE(0x800,8);entry.writeUInt16LE(8,10);entry.writeUInt16LE(0x5d28,14);
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
  await new Promise((ok,fail)=>{const child=spawn(process.execPath,['--test',...tests],{cwd:ROOT,stdio:'inherit'});child.on('error',fail);child.on('exit',code=>code===0?ok():fail(new Error('娴嬭瘯澶辫触锛屾湭鎵撳寘')));});
  await checkRelease();
  const roots=['README.md','START_HERE.txt','LICENSE','THIRD_PARTY_NOTICES.md','.gitignore','.gitattributes','package.json','package-lock.json','start-windows.cmd','start-macos.command','start-linux.sh'];
  const files=roots.map(p=>resolve(ROOT,p));
  for(const dir of ['src','assets','dist','scripts','tests'])files.push(...(await filesUnder(resolve(ROOT,dir))).filter(p=>!p.includes('__pycache__')&&!p.endsWith('.pyc')));
  await mkdir(resolve(ROOT,'releases'),{recursive:true});const target=resolve(ROOT,'releases/cos-light-studio-local-v0.3.0.zip');
  await zipFiles(files.sort(),target);
  console.log(`${basename(target)} 路 ${files.length} 涓枃浠?路 ${((await stat(target)).size/1024/1024).toFixed(2)} MiB`);
  console.log(target);
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});

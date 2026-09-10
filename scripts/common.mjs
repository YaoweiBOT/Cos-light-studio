import {readdir,readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,relative,join} from 'node:path';
import {fileURLToPath} from 'node:url';
export const ROOT=fileURLToPath(new URL('../',import.meta.url));
export const DIST=resolve(ROOT,'dist');
export async function exists(file){try{await stat(file);return true;}catch{return false;}}
export async function filesUnder(dir){
  const out=[];
  for(const item of await readdir(dir,{withFileTypes:true})){
    const p=join(dir,item.name);
    if(item.isSymbolicLink())throw new Error(`不支持打包符号链接：${p}`);
    if(item.isDirectory())out.push(...await filesUnder(p));else if(item.isFile())out.push(p);
  }
  return out.sort();
}
export async function sourceDigest({includeMMD=true}={}){
  const hash=createHash('sha256');
  const files=[...await filesUnder(resolve(ROOT,'src')),...await filesUnder(resolve(ROOT,'assets'))].filter(p=>includeMMD||!relative(ROOT,p).replaceAll('\\','/').startsWith('assets/MMD/'));
  for(const name of ['package.json','package-lock.json','scripts/build.mjs','LICENSE','THIRD_PARTY_NOTICES.md'])if(await exists(resolve(ROOT,name)))files.push(resolve(ROOT,name));
  for(const file of files.sort()){hash.update(relative(ROOT,file).replaceAll('\\','/'));hash.update(await readFile(file));}
  return hash.digest('hex');
}

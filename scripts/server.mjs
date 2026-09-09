import http from 'node:http';
import {readFile,stat,realpath} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {spawn} from 'node:child_process';
import {DIST} from './common.mjs';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.glb':'model/gltf-binary','.txt':'text/plain; charset=utf-8','.md':'text/plain; charset=utf-8'};
export async function createLocalServer(root=DIST){
  const realRoot=await realpath(root);
  return http.createServer(async(req,res)=>{
    res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Cache-Control','no-cache');
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
    let path;
    try{path=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);}catch{res.writeHead(400);res.end('Bad request');return;}
    if(path==='/__health'){res.writeHead(200,{'Content-Type':'application/json'});res.end(req.method==='HEAD'?undefined:JSON.stringify({application:'cos-light-studio',version:'0.3.0'}));return;}
    if(path==='/'||path.endsWith('/'))path+='index.html';
    let filename=resolve(realRoot,'.'+path);
    try{
      filename=await realpath(filename);
      if(!filename.startsWith(realRoot+sep)||!(await stat(filename)).isFile()){res.writeHead(404);res.end('Not found');return;}
      const data=await readFile(filename);res.writeHead(200,{'Content-Type':mime[extname(filename)]||'application/octet-stream','Content-Length':data.length});res.end(req.method==='HEAD'?undefined:data);
    }catch{res.writeHead(404);res.end('Not found');}
  });
}
export function openBrowser(url){
  const child=process.platform==='win32'?spawn('rundll32.exe',['url.dll,FileProtocolHandler',url],{detached:true,stdio:'ignore'}):spawn(process.platform==='darwin'?'open':'xdg-open',[url],{detached:true,stdio:'ignore'});
  child.on('error',()=>{});child.unref();
}

import{a as ha}from"./chunk-UQLXH7HP.js";import{$ as N,$a as Us,A as xs,Aa as de,Ba as O,Bb as js,C as vs,Ca as yi,Da as se,Ea as Q,F as ys,Fa as st,Ga as be,Ha as Fs,I as Rt,Ia as er,J as qt,Ja as Se,K as Ee,Ka as It,L as Te,La as Cs,M as Yt,Ma as Bs,N as bs,Na as q,O as $t,Oa as Ls,P as it,Pa as tr,Q as ne,Qa as ot,R as le,Ra as bi,S as z,Sa as Ns,T as te,Ta as _e,U as Ts,Ua as We,V as At,Va as rr,W as vi,Wa as zs,X as ws,Xa as Os,Y as Ss,Ya as ks,Z as jt,Za as Hs,_ as Ue,a as as,aa as re,ab as me,b as xi,ba as C,bb as Gs,c as cs,ca as Ge,da as _s,db as ir,ea as Xt,eb as Ws,fa as Qt,fb as sr,ga as Kt,ha as Rs,hb as or,ia as Zt,ib as Vs,j as ls,ja as he,ka as V,la as we,ma as M,n as Vt,na as As,o as us,oa as Is,pa as Me,qa as ye,r as Ie,ra as Es,s as He,sa as Ms,ta as ee,tb as qs,u as fs,ua as Ps,ub as Ys,v as hs,va as U,w as ds,wa as Ds,x as ms,xa as Pe,y as ps,ya as ie,yb as $s,z as gs,za as Jt}from"./chunk-LXNSOZL3.js";import{b as ua,c as fa}from"./chunk-OOJM4CTU.js";var Xs=Math.pow(2,-24),Et=Symbol("SKIP_GENERATION"),nr={strategy:0,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Et]:!1};function G(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Ti(i){let e=-1,t=-1/0;for(let r=0;r<3;r++){let s=i[r+3]-i[r];s>t&&(t=s,e=r)}return e}function wi(i,e){e.set(i)}function Si(i,e,t){let r,s;for(let n=0;n<3;n++){let o=n+3;r=i[n],s=e[n],t[n]=r<s?r:s,r=i[o],s=e[o],t[o]=r>s?r:s}}function Mt(i,e,t){for(let r=0;r<3;r++){let s=e[i+2*r],n=e[i+2*r+1],o=s-n,a=s+n;o<t[r]&&(t[r]=o),a>t[r+3]&&(t[r+3]=a)}}function nt(i){let e=i[3]-i[0],t=i[4]-i[1],r=i[5]-i[2];return 2*(e*t+t*r+r*e)}function L(i,e){return e[i+15]===65535}function Y(i,e){return e[i+6]}function j(i,e){return e[i+14]}function k(i){return i+8}function H(i,e){let t=e[i+6];return i+t*8}function De(i,e){return e[i+7]}function ar(i,e,t,r,s){let n=1/0,o=1/0,a=1/0,l=-1/0,h=-1/0,f=-1/0,u=1/0,c=1/0,m=1/0,g=-1/0,b=-1/0,d=-1/0,v=i.offset||0;for(let p=(e-v)*6,x=(e+t-v)*6;p<x;p+=6){let y=i[p+0],T=i[p+1],S=y-T,w=y+T;S<n&&(n=S),w>l&&(l=w),y<u&&(u=y),y>g&&(g=y);let A=i[p+2],I=i[p+3],R=A-I,E=A+I;R<o&&(o=R),E>h&&(h=E),A<c&&(c=A),A>b&&(b=A);let _=i[p+4],P=i[p+5],D=_-P,F=_+P;D<a&&(a=D),F>f&&(f=F),_<m&&(m=_),_>d&&(d=_)}r[0]=n,r[1]=o,r[2]=a,r[3]=l,r[4]=h,r[5]=f,s[0]=u,s[1]=c,s[2]=m,s[3]=g,s[4]=b,s[5]=d}var Re=32,pa=(i,e)=>i.candidate-e.candidate,Fe=new Array(Re).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),cr=new Float32Array(6);function Zs(i,e,t,r,s,n){let o=-1,a=0;if(n===0)o=Ti(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(n===1)o=Ti(i),o!==-1&&(a=ga(t,r,s,o));else if(n===2){let l=nt(i),h=1.25*s,f=t.offset||0,u=(r-f)*6,c=(r+s-f)*6;for(let m=0;m<3;m++){let g=e[m],v=(e[m+3]-g)/Re;if(s<Re/4){let p=[...Fe];p.length=s;let x=0;for(let T=u;T<c;T+=6,x++){let S=p[x];S.candidate=t[T+2*m],S.count=0;let{bounds:w,leftCacheBounds:A,rightCacheBounds:I}=S;for(let R=0;R<3;R++)I[R]=1/0,I[R+3]=-1/0,A[R]=1/0,A[R+3]=-1/0,w[R]=1/0,w[R+3]=-1/0;Mt(T,t,w)}p.sort(pa);let y=s;for(let T=0;T<y;T++){let S=p[T];for(;T+1<y&&p[T+1].candidate===S.candidate;)p.splice(T+1,1),y--}for(let T=u;T<c;T+=6){let S=t[T+2*m];for(let w=0;w<y;w++){let A=p[w];S>=A.candidate?Mt(T,t,A.rightCacheBounds):(Mt(T,t,A.leftCacheBounds),A.count++)}}for(let T=0;T<y;T++){let S=p[T],w=S.count,A=s-S.count,I=S.leftCacheBounds,R=S.rightCacheBounds,E=0;w!==0&&(E=nt(I)/l);let _=0;A!==0&&(_=nt(R)/l);let P=1+1.25*(E*w+_*A);P<h&&(o=m,h=P,a=S.candidate)}}else{for(let y=0;y<Re;y++){let T=Fe[y];T.count=0,T.candidate=g+v+y*v;let S=T.bounds;for(let w=0;w<3;w++)S[w]=1/0,S[w+3]=-1/0}for(let y=u;y<c;y+=6){let w=~~((t[y+2*m]-g)/v);w>=Re&&(w=Re-1);let A=Fe[w];A.count++,Mt(y,t,A.bounds)}let p=Fe[Re-1];wi(p.bounds,p.rightCacheBounds);for(let y=Re-2;y>=0;y--){let T=Fe[y],S=Fe[y+1];Si(T.bounds,S.rightCacheBounds,T.rightCacheBounds)}let x=0;for(let y=0;y<Re-1;y++){let T=Fe[y],S=T.count,w=T.bounds,I=Fe[y+1].rightCacheBounds;S!==0&&(x===0?wi(w,cr):Si(w,cr,cr)),x+=S;let R=0,E=0;x!==0&&(R=nt(cr)/l);let _=s-x;_!==0&&(E=nt(I)/l);let P=1+1.25*(R*x+E*_);P<h&&(o=m,h=P,a=T.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${n} used.`);return{axis:o,pos:a}}function ga(i,e,t,r){let s=0,n=i.offset;for(let o=e,a=e+t;o<a;o++)s+=i[(o-n)*6+r*2];return s/t}var at=class{constructor(){this.boundingData=new Float32Array(6)}};function Js(i,e,t,r,s,n){let o=r,a=r+s-1,l=n.pos,h=n.axis*2,f=t.offset||0;for(;;){for(;o<=a&&t[(o-f)*6+h]<l;)o++;for(;o<=a&&t[(a-f)*6+h]>=l;)a--;if(o<a){for(let u=0;u<e;u++){let c=i[o*e+u];i[o*e+u]=i[a*e+u],i[a*e+u]=c}for(let u=0;u<6;u++){let c=o-f,m=a-f,g=t[c*6+u];t[c*6+u]=t[m*6+u],t[m*6+u]=g}o++,a--}else return o}}var eo,lr,_i,to,xa=Math.pow(2,32);function ur(i){return"count"in i?1:1+ur(i.left)+ur(i.right)}function ro(i,e,t){return eo=new Float32Array(t),lr=new Uint32Array(t),_i=new Uint16Array(t),to=new Uint8Array(t),Ri(i,e)}function Ri(i,e){let t=i/4,r=i/2,s="count"in e,n=e.boundingData;for(let o=0;o<6;o++)eo[t+o]=n[o];if(s)return e.buffer?(to.set(new Uint8Array(e.buffer),i),i+e.buffer.byteLength):(lr[t+6]=e.offset,_i[r+14]=e.count,_i[r+15]=65535,i+32);{let{left:o,right:a,splitAxis:l}=e,h=i+32,f=Ri(h,o),u=i/32,m=f/32-u;if(m>xa)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return lr[t+6]=m,lr[t+7]=l,Ri(f,a)}}function va(i,e,t,r,s){let{maxDepth:n,verbose:o,maxLeafSize:a,strategy:l,onProgress:h}=s,f=i.primitiveBuffer,u=i.primitiveBufferStride,c=new Float32Array(6),m=!1,g=new at;return ar(e,t,r,g.boundingData,c),d(g,t,r,c),g;function b(v){h&&h(v/r)}function d(v,p,x,y=null,T=0){if(!m&&T>=n&&(m=!0,o&&console.warn(`BVH: Max depth of ${n} reached when generating BVH. Consider increasing maxDepth.`)),x<=a||T>=n)return b(p+x),v.offset=p,v.count=x,v;let S=Zs(v.boundingData,y,e,p,x,l);if(S.axis===-1)return b(p+x),v.offset=p,v.count=x,v;let w=Js(f,u,e,p,x,S);if(w===p||w===p+x)b(p+x),v.offset=p,v.count=x;else{v.splitAxis=S.axis;let A=new at,I=p,R=w-p;v.left=A,ar(e,I,R,A.boundingData,c),d(A,I,R,c,T+1);let E=new at,_=w,P=x-R;v.right=E,ar(e,_,P,E.boundingData,c),d(E,_,P,c,T+1)}return v}}function io(i,e){let t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=i.getRootRanges(e.range),s=r[0],n=r[r.length-1],o={offset:s.offset,count:n.offset+n.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=r.map(l=>{let h=va(i,a,l.offset,l.count,e),f=ur(h),u=new t(32*f);return ro(0,h,u),u})}var Ce=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var Ai=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=r=>{t&&e.push(t),t=r,this.float32Array=new Float32Array(r),this.uint16Array=new Uint16Array(r),this.uint32Array=new Uint32Array(r)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},B=new Ai;var Be,lt,ct=[],fr=new Ce(()=>new ee);function so(i,e,t,r,s,n){Be=fr.getPrimitive(),lt=fr.getPrimitive(),ct.push(Be,lt),B.setBuffer(i._roots[e]);let o=Ii(0,i.geometry,t,r,s,n);B.clearBuffer(),fr.releasePrimitive(Be),fr.releasePrimitive(lt),ct.pop(),ct.pop();let a=ct.length;return a>0&&(lt=ct[a-1],Be=ct[a-2]),o}function Ii(i,e,t,r,s=null,n=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:h}=B,f=i*2;if(L(f,l)){let c=Y(i,h),m=j(f,l);return G(i,a,Be),r(c,m,!1,o,n+i/8,Be)}else{let R=function(_){let{uint16Array:P,uint32Array:D}=B,F=_*2;for(;!L(F,P);)_=k(_),F=_*2;return Y(_,D)},E=function(_){let{uint16Array:P,uint32Array:D}=B,F=_*2;for(;!L(F,P);)_=H(_,D),F=_*2;return Y(_,D)+j(F,P)},c=k(i),m=H(i,h),g=c,b=m,d,v,p,x;if(s&&(p=Be,x=lt,G(g,a,p),G(b,a,x),d=s(p),v=s(x),v<d)){g=m,b=c;let _=d;d=v,v=_,p=x}p||(p=Be,G(g,a,p));let y=L(g*2,l),T=t(p,y,d,o+1,n+g/8),S;if(T===2){let _=R(g),D=E(g)-_;S=r(_,D,!0,o+1,n+g/8,p)}else S=T&&Ii(g,e,t,r,s,n,o+1);if(S)return!0;x=lt,G(b,a,x);let w=L(b*2,l),A=t(x,w,v,o+1,n+b/8),I;if(A===2){let _=R(b),D=E(b)-_;I=r(_,D,!0,o+1,n+b/8,x)}else I=A&&Ii(b,e,t,r,s,n,o+1);return!!I}}function Pt(i){return i.index?i.index.count:i.attributes.position.count}function Le(i){return Pt(i)/3}function Ei(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function oo(i,e){if(!i.index){let t=i.attributes.position.count,r=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Ei(t,r);i.setIndex(new O(s,1));for(let n=0;n<t;n++)s[n]=n}}function ba(i,e,t){let r=Pt(i)/t,s=e||i.drawRange,n=s.start/t,o=(s.start+s.count)/t,a=Math.max(0,n),l=Math.min(r,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function Ta(i,e){return i.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Dt(i,e,t){let r=ba(i,e,t),s=Ta(i,t);if(!s.length)return[r];let n=[],o=r.offset,a=r.offset+r.count,l=Pt(i)/t,h=[];for(let c of s){let{offset:m,count:g}=c,b=m,d=isFinite(g)?g:l-m,v=m+d;b<a&&v>o&&(h.push({pos:Math.max(o,b),isStart:!0}),h.push({pos:Math.min(a,v),isStart:!1}))}h.sort((c,m)=>c.pos!==m.pos?c.pos-m.pos:c.type==="end"?-1:1);let f=0,u=null;for(let c of h){let m=c.pos;f!==0&&m!==u&&n.push({offset:u,count:m-u}),f+=c.isStart?1:-1,u=m}return n}var no=new ee,dr=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...nr,...e},io(this,e)}getRootRanges(e){return Dt(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let r=0,s=t.length;r<s;r++)t[r]+=e;else{let r=this._roots;for(let s=0;s<r.length;s++){let n=r[s],o=new Uint32Array(n),a=new Uint16Array(n),l=n.byteLength/32;for(let h=0;h<l;h++){let f=8*h,u=2*f;L(u,a)&&(o[f+6]+=e)}}}}traverse(e,t=0){let r=this._roots[t],s=new Uint32Array(r),n=new Uint16Array(r);o(0);function o(a,l=0){let h=a*2,f=L(h,n);if(f){let u=s[a+6],c=n[h+14];e(l,f,new Float32Array(r,a*4,6),u,c)}else{let u=k(a),c=H(a,s),m=De(a,s);e(l,f,new Float32Array(r,a*4,6),m)||(o(u,l+1),o(c,l+1))}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(r=>{G(0,new Float32Array(r),no),e.union(no)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:r,intersectsRange:s,intersectsPrimitive:n,scratchPrimitive:o,iterate:a}=e;if(s&&n){let u=s;s=(c,m,g,b,d)=>u(c,m,g,b,d)?!0:a(c,m,this,n,g,b,o)}else s||(n?s=(u,c,m,g)=>a(u,c,this,n,m,g,o):s=(u,c,m)=>m);let l=!1,h=0,f=this._roots;for(let u=0,c=f.length;u<c;u++){let m=f[u];if(l=so(this,u,r,s,t,h),l)break;h+=m.byteLength/32}return l}};var ue=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let r=1/0,s=-1/0;for(let n=0,o=e.length;n<o;n++){let l=e[n][t];r=l<r?l:r,s=l>s?l:s}this.min=r,this.max=s}setFromPoints(e,t){let r=1/0,s=-1/0;for(let n=0,o=t.length;n<o;n++){let a=t[n],l=e.dot(a);r=l<r?l:r,s=l>s?l:s}this.min=r,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}};ue.prototype.setFromBox=(function(){let i=new M;return function(t,r){let s=r.min,n=r.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){i.x=s.x*l+n.x*(1-l),i.y=s.y*h+n.y*(1-h),i.z=s.z*f+n.z*(1-f);let u=t.dot(i);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();var wa=(function(){let i=new M,e=new M,t=new M;return function(s,n,o){let a=s.start,l=i,h=n.start,f=e;t.subVectors(a,h),i.subVectors(s.end,s.start),e.subVectors(n.end,n.start);let u=t.dot(f),c=f.dot(l),m=f.dot(f),g=t.dot(l),d=l.dot(l)*m-c*c,v,p;d!==0?v=(u*c-g*m)/d:v=0,p=(u+v*c)/m,o.x=v,o.y=p}})(),Ft=(function(){let i=new V,e=new M,t=new M;return function(s,n,o,a){wa(s,n,i);let l=i.x,h=i.y;if(l>=0&&l<=1&&h>=0&&h<=1){s.at(l,o),n.at(h,a);return}else if(l>=0&&l<=1){h<0?n.at(0,a):n.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){l<0?s.at(0,o):s.at(1,o),n.closestPointToPoint(o,!0,a);return}else{let f;l<0?f=s.start:f=s.end;let u;h<0?u=n.start:u=n.end;let c=e,m=t;if(s.closestPointToPoint(u,!0,e),n.closestPointToPoint(f,!0,t),c.distanceToSquared(u)<=m.distanceToSquared(f)){o.copy(c),a.copy(u);return}else{o.copy(f),a.copy(m);return}}}})(),ao=(function(){let i=new M,e=new M,t=new tr,r=new me;return function(n,o){let{radius:a,center:l}=n,{a:h,b:f,c:u}=o;if(r.start=h,r.end=f,r.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(r.start=h,r.end=u,r.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(r.start=f,r.end=u,r.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let b=o.getPlane(t);if(Math.abs(b.distanceToPoint(l))<=a){let v=b.projectPoint(l,e);if(o.containsPoint(v))return!0}return!1}})();var Sa=["x","y","z"],Ae=1e-15,co=Ae*Ae;function pe(i){return Math.abs(i)<Ae}var J=class extends Pe{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new M),this.satBounds=new Array(4).fill().map(()=>new ue),this.points=[this.a,this.b,this.c],this.plane=new tr,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new me,this.needsUpdate=!0}intersectsSphere(e){return ao(e,this)}update(){let e=this.a,t=this.b,r=this.c,s=this.points,n=this.satAxes,o=this.satBounds,a=n[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);let h=n[1],f=o[1];h.subVectors(e,t),f.setFromPoints(h,s);let u=n[2],c=o[2];u.subVectors(t,r),c.setFromPoints(u,s);let m=n[3],g=o[3];m.subVectors(r,e),g.setFromPoints(m,s);let b=h.length(),d=u.length(),v=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<Ae?d<Ae||v<Ae?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(r)):d<Ae?v<Ae?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):v<Ae&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(r),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};J.prototype.closestPointToSegment=(function(){let i=new M,e=new M,t=new me;return function(s,n=null,o=null){let{start:a,end:l}=s,h=this.points,f,u=1/0;for(let c=0;c<3;c++){let m=(c+1)%3;t.start.copy(h[c]),t.end.copy(h[m]),Ft(t,s,i,e),f=i.distanceToSquared(e),f<u&&(u=f,n&&n.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<u&&(u=f,n&&n.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),f=l.distanceToSquared(i),f<u&&(u=f,n&&n.copy(i),o&&o.copy(l)),Math.sqrt(u)}})();J.prototype.intersectsTriangle=(function(){let i=new J,e=new ue,t=new ue,r=new M,s=new M,n=new M,o=new M,a=new me,l=new me,h=new M,f=new V,u=new V;function c(x,y,T,S){let w=r;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?w.copy(x.plane.normal):w.copy(y.plane.normal);let A=x.satBounds,I=x.satAxes;for(let _=1;_<4;_++){let P=A[_],D=I[_];if(e.setFromPoints(D,y.points),P.isSeparated(e)||(o.copy(w).cross(D),e.setFromPoints(o,x.points),t.setFromPoints(o,y.points),e.isSeparated(t)))return!1}let R=y.satBounds,E=y.satAxes;for(let _=1;_<4;_++){let P=R[_],D=E[_];if(e.setFromPoints(D,x.points),P.isSeparated(e)||(o.crossVectors(w,D),e.setFromPoints(o,x.points),t.setFromPoints(o,y.points),e.isSeparated(t)))return!1}return T&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),T.start.set(0,0,0),T.end.set(0,0,0)),!0}function m(x,y,T,S,w,A,I,R,E,_,P){let D=I/(I-R);_.x=S+(w-S)*D,P.start.subVectors(y,x).multiplyScalar(D).add(x),D=I/(I-E),_.y=S+(A-S)*D,P.end.subVectors(T,x).multiplyScalar(D).add(x)}function g(x,y,T,S,w,A,I,R,E,_,P){if(w>0)m(x.c,x.a,x.b,S,y,T,E,I,R,_,P);else if(A>0)m(x.b,x.a,x.c,T,y,S,R,I,E,_,P);else if(R*E>0||I!=0)m(x.a,x.b,x.c,y,T,S,I,R,E,_,P);else if(R!=0)m(x.b,x.a,x.c,T,y,S,R,I,E,_,P);else if(E!=0)m(x.c,x.a,x.b,S,y,T,E,I,R,_,P);else return!0;return!1}function b(x,y,T,S){let w=y.degenerateSegment,A=x.plane.distanceToPoint(w.start),I=x.plane.distanceToPoint(w.end);return pe(A)?pe(I)?c(x,y,T,S):(T&&(T.start.copy(w.start),T.end.copy(w.start)),x.containsPoint(w.start)):pe(I)?(T&&(T.start.copy(w.end),T.end.copy(w.end)),x.containsPoint(w.end)):x.plane.intersectLine(w,r)!=null?(T&&(T.start.copy(r),T.end.copy(r)),x.containsPoint(r)):!1}function d(x,y,T){let S=y.a;return pe(x.plane.distanceToPoint(S))&&x.containsPoint(S)?(T&&(T.start.copy(S),T.end.copy(S)),!0):!1}function v(x,y,T){let S=x.degenerateSegment,w=y.a;return S.closestPointToPoint(w,!0,r),w.distanceToSquared(r)<co?(T&&(T.start.copy(w),T.end.copy(w)),!0):!1}function p(x,y,T,S){if(x.isDegenerateIntoSegment)if(y.isDegenerateIntoSegment){let w=x.degenerateSegment,A=y.degenerateSegment,I=s,R=n;w.delta(I),A.delta(R);let E=r.subVectors(A.start,w.start),_=I.x*R.y-I.y*R.x;if(pe(_))return!1;let P=(E.x*R.y-E.y*R.x)/_,D=-(I.x*E.y-I.y*E.x)/_;if(P<0||P>1||D<0||D>1)return!1;let F=w.start.z+I.z*P,$=A.start.z+R.z*D;return pe(F-$)?(T&&(T.start.copy(w.start).addScaledVector(I,P),T.end.copy(w.start).addScaledVector(I,P)),!0):!1}else return y.isDegenerateIntoPoint?v(x,y,T):b(y,x,T,S);else{if(x.isDegenerateIntoPoint)return y.isDegenerateIntoPoint?y.a.distanceToSquared(x.a)<co?(T&&(T.start.copy(x.a),T.end.copy(x.a)),!0):!1:y.isDegenerateIntoSegment?v(y,x,T):d(y,x,T);if(y.isDegenerateIntoPoint)return d(x,y,T);if(y.isDegenerateIntoSegment)return b(x,y,T,S)}}return function(y,T=null,S=!1){this.needsUpdate&&this.update(),y.isExtendedTriangle?y.needsUpdate&&y.update():(i.copy(y),i.update(),y=i);let w=p(this,y,T,S);if(w!==void 0)return w;let A=this.plane,I=y.plane,R=I.distanceToPoint(this.a),E=I.distanceToPoint(this.b),_=I.distanceToPoint(this.c);pe(R)&&(R=0),pe(E)&&(E=0),pe(_)&&(_=0);let P=R*E,D=R*_;if(P>0&&D>0)return!1;let F=A.distanceToPoint(y.a),$=A.distanceToPoint(y.b),Je=A.distanceToPoint(y.c);pe(F)&&(F=0),pe($)&&($=0),pe(Je)&&(Je=0);let et=F*$,_t=F*Je;if(et>0&&_t>0)return!1;s.copy(A.normal),n.copy(I.normal);let tt=s.cross(n),ke=0,pi=Math.abs(tt.x),ns=Math.abs(tt.y);ns>pi&&(pi=ns,ke=1),Math.abs(tt.z)>pi&&(ke=2);let rt=Sa[ke],sa=this.a[rt],oa=this.b[rt],na=this.c[rt],aa=y.a[rt],ca=y.b[rt],la=y.c[rt];if(g(this,sa,oa,na,P,D,R,E,_,f,a))return c(this,y,T,S);if(g(y,aa,ca,la,et,_t,F,$,Je,u,l))return c(this,y,T,S);if(f.y<f.x){let gi=f.y;f.y=f.x,f.x=gi,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(u.y<u.x){let gi=u.y;u.y=u.x,u.x=gi,h.copy(l.start),l.start.copy(l.end),l.end.copy(h)}return f.y<u.x||u.y<f.x?!1:(T&&(u.x>f.x?T.start.copy(l.start):T.start.copy(a.start),u.y<f.y?T.end.copy(l.end):T.end.copy(a.end)),!0)}})();J.prototype.distanceToPoint=(function(){let i=new M;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();J.prototype.distanceToTriangle=(function(){let i=new M,e=new M,t=["a","b","c"],r=new me,s=new me;return function(o,a=null,l=null){let h=a||l?r:null;if(this.intersectsTriangle(o,h))return(a||l)&&(a&&h.getCenter(a),l&&h.getCenter(l)),0;let f=1/0;for(let u=0;u<3;u++){let c,m=t[u],g=o[m];this.closestPointToPoint(g,i),c=g.distanceToSquared(i),c<f&&(f=c,a&&a.copy(i),l&&l.copy(g));let b=this[m];o.closestPointToPoint(b,i),c=b.distanceToSquared(i),c<f&&(f=c,a&&a.copy(b),l&&l.copy(i))}for(let u=0;u<3;u++){let c=t[u],m=t[(u+1)%3];r.set(this[c],this[m]);for(let g=0;g<3;g++){let b=t[g],d=t[(g+1)%3];s.set(o[b],o[d]),Ft(r,s,i,e);let v=i.distanceToSquared(e);v<f&&(f=v,a&&a.copy(i),l&&l.copy(e))}}return Math.sqrt(f)}})();var X=class{constructor(e,t,r){this.isOrientedBox=!0,this.min=new M,this.max=new M,this.matrix=new U,this.invMatrix=new U,this.points=new Array(8).fill().map(()=>new M),this.satAxes=new Array(3).fill().map(()=>new M),this.satBounds=new Array(3).fill().map(()=>new ue),this.alignedSatBounds=new Array(3).fill().map(()=>new ue),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),r&&this.matrix.copy(r)}set(e,t,r){this.min.copy(e),this.max.copy(t),this.matrix.copy(r),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};X.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,r=this.max,s=this.points;for(let h=0;h<=1;h++)for(let f=0;f<=1;f++)for(let u=0;u<=1;u++){let c=1*h|2*f|4*u,m=s[c];m.x=h?r.x:t.x,m.y=f?r.y:t.y,m.z=u?r.z:t.z,m.applyMatrix4(e)}let n=this.satBounds,o=this.satAxes,a=s[0];for(let h=0;h<3;h++){let f=o[h],u=n[h],c=1<<h,m=s[c];f.subVectors(a,m),u.setFromPoints(f,s)}let l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();X.prototype.intersectsBox=(function(){let i=new ue;return function(t){this.needsUpdate&&this.update();let r=t.min,s=t.max,n=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=r.x,i.max=s.x,a[0].isSeparated(i)||(i.min=r.y,i.max=s.y,a[1].isSeparated(i))||(i.min=r.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let h=o[l],f=n[l];if(i.setFromBox(h,t),f.isSeparated(i))return!1}return!0}})();X.prototype.intersectsTriangle=(function(){let i=new J,e=new Array(3),t=new ue,r=new ue,s=new M;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let c=0;c<3;c++){let m=a[c],g=l[c];if(t.setFromPoints(g,e),m.isSeparated(t))return!1}let h=o.satBounds,f=o.satAxes,u=this.points;for(let c=0;c<3;c++){let m=h[c],g=f[c];if(t.setFromPoints(g,u),m.isSeparated(t))return!1}for(let c=0;c<3;c++){let m=l[c];for(let g=0;g<4;g++){let b=f[g];if(s.crossVectors(m,b),t.setFromPoints(s,e),r.setFromPoints(s,u),t.isSeparated(r))return!1}}return!0}})();X.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();X.prototype.distanceToPoint=(function(){let i=new M;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();X.prototype.distanceToBox=(function(){let i=["x","y","z"],e=new Array(12).fill().map(()=>new me),t=new Array(12).fill().map(()=>new me),r=new M,s=new M;return function(o,a=0,l=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||h)&&(o.getCenter(s),this.closestPointToPoint(s,r),o.closestPointToPoint(r,s),l&&l.copy(r),h&&h.copy(s)),0;let f=a*a,u=o.min,c=o.max,m=this.points,g=1/0;for(let d=0;d<8;d++){let v=m[d];s.copy(v).clamp(u,c);let p=v.distanceToSquared(s);if(p<g&&(g=p,l&&l.copy(v),h&&h.copy(s),p<f))return Math.sqrt(p)}let b=0;for(let d=0;d<3;d++)for(let v=0;v<=1;v++)for(let p=0;p<=1;p++){let x=(d+1)%3,y=(d+2)%3,T=v<<x|p<<y,S=1<<d|v<<x|p<<y,w=m[T],A=m[S];e[b].set(w,A);let R=i[d],E=i[x],_=i[y],P=t[b],D=P.start,F=P.end;D[R]=u[R],D[E]=v?u[E]:c[E],D[_]=p?u[_]:c[E],F[R]=c[R],F[E]=v?u[E]:c[E],F[_]=p?u[_]:c[E],b++}for(let d=0;d<=1;d++)for(let v=0;v<=1;v++)for(let p=0;p<=1;p++){s.x=d?c.x:u.x,s.y=v?c.y:u.y,s.z=p?c.z:u.z,this.closestPointToPoint(s,r);let x=s.distanceToSquared(r);if(x<g&&(g=x,l&&l.copy(r),h&&h.copy(s),x<f))return Math.sqrt(x)}for(let d=0;d<12;d++){let v=e[d];for(let p=0;p<12;p++){let x=t[p];Ft(v,x,r,s);let y=r.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(r),h&&h.copy(s),y<f))return Math.sqrt(y)}}return Math.sqrt(g)}})();var Mi=class extends Ce{constructor(){super(()=>new J)}},oe=new Mi;var Ct=new M,Pi=new M;function lo(i,e,t={},r=0,s=1/0){let n=r*r,o=s*s,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:f=>(Ct.copy(e).clamp(f.min,f.max),Ct.distanceToSquared(e)),intersectsBounds:(f,u,c)=>c<a&&c<o,intersectsTriangle:(f,u)=>{f.closestPointToPoint(e,Ct);let c=e.distanceToSquared(Ct);return c<a&&(Pi.copy(Ct),a=c,l=u),c<n}}),a===1/0)return null;let h=Math.sqrt(a);return t.point?t.point.copy(Pi):t.point=Pi.clone(),t.distance=h,t.faceIndex=l,t}var mr=parseInt("181")>=169,_a=parseInt("181")<=161,Ve=new M,qe=new M,Ye=new M,pr=new V,gr=new V,xr=new V,uo=new M,fo=new M,ho=new M,Bt=new M;function Ra(i,e,t,r,s,n,o,a){let l;if(n===qt?l=i.intersectTriangle(r,t,e,!0,s):l=i.intersectTriangle(e,t,r,n!==Ee,s),l===null)return null;let h=i.origin.distanceTo(s);return h<o||h>a?null:{distance:h,point:s.clone()}}function mo(i,e,t,r,s,n,o,a,l,h,f){Ve.fromBufferAttribute(e,n),qe.fromBufferAttribute(e,o),Ye.fromBufferAttribute(e,a);let u=Ra(i,Ve,qe,Ye,Bt,l,h,f);if(u){if(r){pr.fromBufferAttribute(r,n),gr.fromBufferAttribute(r,o),xr.fromBufferAttribute(r,a),u.uv=new V;let m=Pe.getInterpolation(Bt,Ve,qe,Ye,pr,gr,xr,u.uv);mr||(u.uv=m)}if(s){pr.fromBufferAttribute(s,n),gr.fromBufferAttribute(s,o),xr.fromBufferAttribute(s,a),u.uv1=new V;let m=Pe.getInterpolation(Bt,Ve,qe,Ye,pr,gr,xr,u.uv1);mr||(u.uv1=m),_a&&(u.uv2=u.uv1)}if(t){uo.fromBufferAttribute(t,n),fo.fromBufferAttribute(t,o),ho.fromBufferAttribute(t,a),u.normal=new M;let m=Pe.getInterpolation(Bt,Ve,qe,Ye,uo,fo,ho,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),mr||(u.normal=m)}let c={a:n,b:o,c:a,normal:new M,materialIndex:0};if(Pe.getNormal(Ve,qe,Ye,c.normal),u.face=c,u.faceIndex=n,mr){let m=new M;Pe.getBarycoord(Bt,Ve,qe,Ye,m),u.barycoord=m}}return u}function po(i){return i&&i.isMaterial?i.side:i}function ut(i,e,t,r,s,n,o){let a=r*3,l=a+0,h=a+1,f=a+2,{index:u,groups:c}=i;i.index&&(l=u.getX(l),h=u.getX(h),f=u.getX(f));let{position:m,normal:g,uv:b,uv1:d}=i.attributes;if(Array.isArray(e)){let v=r*3;for(let p=0,x=c.length;p<x;p++){let{start:y,count:T,materialIndex:S}=c[p];if(v>=y&&v<y+T){let w=po(e[S]),A=mo(t,m,g,b,d,l,h,f,w,n,o);if(A)if(A.faceIndex=r,A.face.materialIndex=S,s)s.push(A);else return A}}}else{let v=po(e),p=mo(t,m,g,b,d,l,h,f,v,n,o);if(p)if(p.faceIndex=r,p.face.materialIndex=0,s)s.push(p);else return p}return null}function W(i,e,t,r){let s=i.a,n=i.b,o=i.c,a=e,l=e+1,h=e+2;t&&(a=t.getX(a),l=t.getX(l),h=t.getX(h)),s.x=r.getX(a),s.y=r.getY(a),s.z=r.getZ(a),n.x=r.getX(l),n.y=r.getY(l),n.z=r.getZ(l),o.x=r.getX(h),o.y=r.getY(h),o.z=r.getZ(h)}function xo(i,e,t,r,s,n,o,a){let{geometry:l,_indirectBuffer:h}=i;for(let f=r,u=r+s;f<u;f++)ut(l,e,t,f,n,o,a)}function vo(i,e,t,r,s,n,o){let{geometry:a,_indirectBuffer:l}=i,h=1/0,f=null;for(let u=r,c=r+s;u<c;u++){let m;m=ut(a,e,t,u,null,n,o),m&&m.distance<h&&(f=m,h=m.distance)}return f}function yo(i,e,t,r,s,n,o){let{geometry:a}=t,{index:l}=a,h=a.attributes.position;for(let f=i,u=e+i;f<u;f++){let c;if(c=f,W(o,c*3,l,h),o.needsUpdate=!0,r(o,c,s,n))return!0}return!1}function bo(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,r=t.index?t.index.array:null,s=t.attributes.position,n,o,a,l,h=0,f=i._roots;for(let c=0,m=f.length;c<m;c++)n=f[c],o=new Uint32Array(n),a=new Uint16Array(n),l=new Float32Array(n),u(0,h),h+=n.byteLength;function u(c,m,g=!1){let b=c*2;if(L(b,a)){let d=o[c+6],v=a[b+14],p=1/0,x=1/0,y=1/0,T=-1/0,S=-1/0,w=-1/0;for(let A=3*d,I=3*(d+v);A<I;A++){let R=r[A],E=s.getX(R),_=s.getY(R),P=s.getZ(R);E<p&&(p=E),E>T&&(T=E),_<x&&(x=_),_>S&&(S=_),P<y&&(y=P),P>w&&(w=P)}return l[c+0]!==p||l[c+1]!==x||l[c+2]!==y||l[c+3]!==T||l[c+4]!==S||l[c+5]!==w?(l[c+0]=p,l[c+1]=x,l[c+2]=y,l[c+3]=T,l[c+4]=S,l[c+5]=w,!0):!1}else{let d=k(c),v=H(c,o),p=g,x=!1,y=!1;if(e){if(!p){let R=d/8+m/32,E=v/8+m/32;x=e.has(R),y=e.has(E),p=!x&&!y}}else x=!0,y=!0;let T=p||x,S=p||y,w=!1;T&&(w=u(d,m,p));let A=!1;S&&(A=u(v,m,p));let I=w||A;if(I)for(let R=0;R<3;R++){let E=d+R,_=v+R,P=l[E],D=l[E+3],F=l[_],$=l[_+3];l[c+R]=P<F?P:F,l[c+R+3]=D>$?D:$}return I}}}function ge(i,e,t,r,s){let n,o,a,l,h,f,u=1/t.direction.x,c=1/t.direction.y,m=1/t.direction.z,g=t.origin.x,b=t.origin.y,d=t.origin.z,v=e[i],p=e[i+3],x=e[i+1],y=e[i+3+1],T=e[i+2],S=e[i+3+2];return u>=0?(n=(v-g)*u,o=(p-g)*u):(n=(p-g)*u,o=(v-g)*u),c>=0?(a=(x-b)*c,l=(y-b)*c):(a=(y-b)*c,l=(x-b)*c),n>l||a>o||((a>n||isNaN(n))&&(n=a),(l<o||isNaN(o))&&(o=l),m>=0?(h=(T-d)*m,f=(S-d)*m):(h=(S-d)*m,f=(T-d)*m),n>f||h>o)?!1:((h>n||n!==n)&&(n=h),(f<o||o!==o)&&(o=f),n<=s&&o>=r)}function To(i,e,t,r,s,n,o,a){let{geometry:l,_indirectBuffer:h}=i;for(let f=r,u=r+s;f<u;f++){let c=h?h[f]:f;ut(l,e,t,c,n,o,a)}}function wo(i,e,t,r,s,n,o){let{geometry:a,_indirectBuffer:l}=i,h=1/0,f=null;for(let u=r,c=r+s;u<c;u++){let m;m=ut(a,e,t,l?l[u]:u,null,n,o),m&&m.distance<h&&(f=m,h=m.distance)}return f}function So(i,e,t,r,s,n,o){let{geometry:a}=t,{index:l}=a,h=a.attributes.position;for(let f=i,u=e+i;f<u;f++){let c;if(c=t.resolveTriangleIndex(f),W(o,c*3,l,h),o.needsUpdate=!0,r(o,c,s,n))return!0}return!1}function _o(i,e,t,r,s,n,o){B.setBuffer(i._roots[e]),Di(0,i,t,r,s,n,o),B.clearBuffer()}function Di(i,e,t,r,s,n,o){let{float32Array:a,uint16Array:l,uint32Array:h}=B,f=i*2;if(L(f,l)){let c=Y(i,h),m=j(f,l);xo(e,t,r,c,m,s,n,o)}else{let c=k(i);ge(c,a,r,n,o)&&Di(c,e,t,r,s,n,o);let m=H(i,h);ge(m,a,r,n,o)&&Di(m,e,t,r,s,n,o)}}var Aa=["x","y","z"];function Ro(i,e,t,r,s,n){B.setBuffer(i._roots[e]);let o=Fi(0,i,t,r,s,n);return B.clearBuffer(),o}function Fi(i,e,t,r,s,n){let{float32Array:o,uint16Array:a,uint32Array:l}=B,h=i*2;if(L(h,a)){let u=Y(i,l),c=j(h,a);return vo(e,t,r,u,c,s,n)}else{let u=De(i,l),c=Aa[u],g=r.direction[c]>=0,b,d;g?(b=k(i),d=H(i,l)):(b=H(i,l),d=k(i));let p=ge(b,o,r,s,n)?Fi(b,e,t,r,s,n):null;if(p){let T=p.point[c];if(g?T<=o[d+u]:T>=o[d+u+3])return p}let y=ge(d,o,r,s,n)?Fi(d,e,t,r,s,n):null;return p&&y?p.distance<=y.distance?p:y:p||y||null}}var vr=new ee,ft=new J,ht=new J,Lt=new U,Ao=new X,yr=new X;function Io(i,e,t,r){B.setBuffer(i._roots[e]);let s=Ci(0,i,t,r);return B.clearBuffer(),s}function Ci(i,e,t,r,s=null){let{float32Array:n,uint16Array:o,uint32Array:a}=B,l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Ao.set(t.boundingBox.min,t.boundingBox.max,r),s=Ao),L(l,o)){let f=e.geometry,u=f.index,c=f.attributes.position,m=t.index,g=t.attributes.position,b=Y(i,a),d=j(l,o);if(Lt.copy(r).invert(),t.boundsTree)return G(i,n,yr),yr.matrix.copy(Lt),yr.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>yr.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(r),p.b.applyMatrix4(r),p.c.applyMatrix4(r),p.needsUpdate=!0;for(let x=b*3,y=(d+b)*3;x<y;x+=3)if(W(ht,x,u,c),ht.needsUpdate=!0,p.intersectsTriangle(ht))return!0;return!1}});{let v=Le(t);for(let p=b*3,x=(d+b)*3;p<x;p+=3){W(ft,p,u,c),ft.a.applyMatrix4(Lt),ft.b.applyMatrix4(Lt),ft.c.applyMatrix4(Lt),ft.needsUpdate=!0;for(let y=0,T=v*3;y<T;y+=3)if(W(ht,y,m,g),ht.needsUpdate=!0,ft.intersectsTriangle(ht))return!0}}}else{let f=k(i),u=H(i,a);return G(f,n,vr),!!(s.intersectsBox(vr)&&Ci(f,e,t,r,s)||(G(u,n,vr),s.intersectsBox(vr)&&Ci(u,e,t,r,s)))}}var br=new U,Bi=new X,Nt=new X,Ia=new M,Ea=new M,Ma=new M,Pa=new M;function Eo(i,e,t,r={},s={},n=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Bi.set(e.boundingBox.min,e.boundingBox.max,t),Bi.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,h=a.index,f=e.attributes.position,u=e.index,c=oe.getPrimitive(),m=oe.getPrimitive(),g=Ia,b=Ea,d=null,v=null;s&&(d=Ma,v=Pa);let p=1/0,x=null,y=null;return br.copy(t).invert(),Nt.matrix.copy(br),i.shapecast({boundsTraverseOrder:T=>Bi.distanceToBox(T),intersectsBounds:(T,S,w)=>w<p&&w<o?(S&&(Nt.min.copy(T.min),Nt.max.copy(T.max),Nt.needsUpdate=!0),!0):!1,intersectsRange:(T,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>Nt.distanceToBox(A),intersectsBounds:(A,I,R)=>R<p&&R<o,intersectsRange:(A,I)=>{for(let R=A,E=A+I;R<E;R++){W(m,3*R,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let _=T,P=T+S;_<P;_++){W(c,3*_,h,l),c.needsUpdate=!0;let D=c.distanceToTriangle(m,g,d);if(D<p&&(b.copy(g),v&&v.copy(d),p=D,x=_,y=R),D<n)return!0}}}});{let w=Le(e);for(let A=0,I=w;A<I;A++){W(m,3*A,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let R=T,E=T+S;R<E;R++){W(c,3*R,h,l),c.needsUpdate=!0;let _=c.distanceToTriangle(m,g,d);if(_<p&&(b.copy(g),v&&v.copy(d),p=_,x=R,y=A),_<n)return!0}}}}}),oe.releasePrimitive(c),oe.releasePrimitive(m),p===1/0?null:(r.point?r.point.copy(b):r.point=b.clone(),r.distance=p,r.faceIndex=x,s&&(s.point?s.point.copy(v):s.point=v.clone(),s.point.applyMatrix4(br),b.applyMatrix4(br),s.distance=b.sub(s.point).length(),s.faceIndex=y),r)}function Mo(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,r=t.index?t.index.array:null,s=t.attributes.position,n,o,a,l,h=0,f=i._roots;for(let c=0,m=f.length;c<m;c++)n=f[c],o=new Uint32Array(n),a=new Uint16Array(n),l=new Float32Array(n),u(0,h),h+=n.byteLength;function u(c,m,g=!1){let b=c*2;if(L(b,a)){let d=o[c+6],v=a[b+14],p=1/0,x=1/0,y=1/0,T=-1/0,S=-1/0,w=-1/0;for(let A=d,I=d+v;A<I;A++){let R=3*i.resolveTriangleIndex(A);for(let E=0;E<3;E++){let _=R+E;_=r?r[_]:_;let P=s.getX(_),D=s.getY(_),F=s.getZ(_);P<p&&(p=P),P>T&&(T=P),D<x&&(x=D),D>S&&(S=D),F<y&&(y=F),F>w&&(w=F)}}return l[c+0]!==p||l[c+1]!==x||l[c+2]!==y||l[c+3]!==T||l[c+4]!==S||l[c+5]!==w?(l[c+0]=p,l[c+1]=x,l[c+2]=y,l[c+3]=T,l[c+4]=S,l[c+5]=w,!0):!1}else{let d=k(c),v=H(c,o),p=g,x=!1,y=!1;if(e){if(!p){let R=d/8+m/32,E=v/8+m/32;x=e.has(R),y=e.has(E),p=!x&&!y}}else x=!0,y=!0;let T=p||x,S=p||y,w=!1;T&&(w=u(d,m,p));let A=!1;S&&(A=u(v,m,p));let I=w||A;if(I)for(let R=0;R<3;R++){let E=d+R,_=v+R,P=l[E],D=l[E+3],F=l[_],$=l[_+3];l[c+R]=P<F?P:F,l[c+R+3]=D>$?D:$}return I}}}function Po(i,e,t,r,s,n,o){B.setBuffer(i._roots[e]),Li(0,i,t,r,s,n,o),B.clearBuffer()}function Li(i,e,t,r,s,n,o){let{float32Array:a,uint16Array:l,uint32Array:h}=B,f=i*2;if(L(f,l)){let c=Y(i,h),m=j(f,l);To(e,t,r,c,m,s,n,o)}else{let c=k(i);ge(c,a,r,n,o)&&Li(c,e,t,r,s,n,o);let m=H(i,h);ge(m,a,r,n,o)&&Li(m,e,t,r,s,n,o)}}var Da=["x","y","z"];function Do(i,e,t,r,s,n){B.setBuffer(i._roots[e]);let o=Ni(0,i,t,r,s,n);return B.clearBuffer(),o}function Ni(i,e,t,r,s,n){let{float32Array:o,uint16Array:a,uint32Array:l}=B,h=i*2;if(L(h,a)){let u=Y(i,l),c=j(h,a);return wo(e,t,r,u,c,s,n)}else{let u=De(i,l),c=Da[u],g=r.direction[c]>=0,b,d;g?(b=k(i),d=H(i,l)):(b=H(i,l),d=k(i));let p=ge(b,o,r,s,n)?Ni(b,e,t,r,s,n):null;if(p){let T=p.point[c];if(g?T<=o[d+u]:T>=o[d+u+3])return p}let y=ge(d,o,r,s,n)?Ni(d,e,t,r,s,n):null;return p&&y?p.distance<=y.distance?p:y:p||y||null}}var Tr=new ee,dt=new J,mt=new J,zt=new U,Fo=new X,wr=new X;function Co(i,e,t,r){B.setBuffer(i._roots[e]);let s=zi(0,i,t,r);return B.clearBuffer(),s}function zi(i,e,t,r,s=null){let{float32Array:n,uint16Array:o,uint32Array:a}=B,l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Fo.set(t.boundingBox.min,t.boundingBox.max,r),s=Fo),L(l,o)){let f=e.geometry,u=f.index,c=f.attributes.position,m=t.index,g=t.attributes.position,b=Y(i,a),d=j(l,o);if(zt.copy(r).invert(),t.boundsTree)return G(i,n,wr),wr.matrix.copy(zt),wr.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:p=>wr.intersectsBox(p),intersectsTriangle:p=>{p.a.applyMatrix4(r),p.b.applyMatrix4(r),p.c.applyMatrix4(r),p.needsUpdate=!0;for(let x=b,y=d+b;x<y;x++)if(W(mt,3*e.resolveTriangleIndex(x),u,c),mt.needsUpdate=!0,p.intersectsTriangle(mt))return!0;return!1}});{let v=Le(t);for(let p=b,x=d+b;p<x;p++){let y=e.resolveTriangleIndex(p);W(dt,3*y,u,c),dt.a.applyMatrix4(zt),dt.b.applyMatrix4(zt),dt.c.applyMatrix4(zt),dt.needsUpdate=!0;for(let T=0,S=v*3;T<S;T+=3)if(W(mt,T,m,g),mt.needsUpdate=!0,dt.intersectsTriangle(mt))return!0}}}else{let f=k(i),u=H(i,a);return G(f,n,Tr),!!(s.intersectsBox(Tr)&&zi(f,e,t,r,s)||(G(u,n,Tr),s.intersectsBox(Tr)&&zi(u,e,t,r,s)))}}var Sr=new U,Oi=new X,Ot=new X,Fa=new M,Ca=new M,Ba=new M,La=new M;function Bo(i,e,t,r={},s={},n=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Oi.set(e.boundingBox.min,e.boundingBox.max,t),Oi.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,h=a.index,f=e.attributes.position,u=e.index,c=oe.getPrimitive(),m=oe.getPrimitive(),g=Fa,b=Ca,d=null,v=null;s&&(d=Ba,v=La);let p=1/0,x=null,y=null;return Sr.copy(t).invert(),Ot.matrix.copy(Sr),i.shapecast({boundsTraverseOrder:T=>Oi.distanceToBox(T),intersectsBounds:(T,S,w)=>w<p&&w<o?(S&&(Ot.min.copy(T.min),Ot.max.copy(T.max),Ot.needsUpdate=!0),!0):!1,intersectsRange:(T,S)=>{if(e.boundsTree){let w=e.boundsTree;return w.shapecast({boundsTraverseOrder:A=>Ot.distanceToBox(A),intersectsBounds:(A,I,R)=>R<p&&R<o,intersectsRange:(A,I)=>{for(let R=A,E=A+I;R<E;R++){let _=w.resolveTriangleIndex(R);W(m,3*_,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let P=T,D=T+S;P<D;P++){let F=i.resolveTriangleIndex(P);W(c,3*F,h,l),c.needsUpdate=!0;let $=c.distanceToTriangle(m,g,d);if($<p&&(b.copy(g),v&&v.copy(d),p=$,x=P,y=R),$<n)return!0}}}})}else{let w=Le(e);for(let A=0,I=w;A<I;A++){W(m,3*A,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let R=T,E=T+S;R<E;R++){let _=i.resolveTriangleIndex(R);W(c,3*_,h,l),c.needsUpdate=!0;let P=c.distanceToTriangle(m,g,d);if(P<p&&(b.copy(g),v&&v.copy(d),p=P,x=R,y=A),P<n)return!0}}}}}),oe.releasePrimitive(c),oe.releasePrimitive(m),p===1/0?null:(r.point?r.point.copy(b):r.point=b.clone(),r.distance=p,r.faceIndex=x,s&&(s.point?s.point.copy(v):s.point=v.clone(),s.point.applyMatrix4(Sr),b.applyMatrix4(Sr),s.distance=b.sub(s.point).length(),s.faceIndex=y),r)}var kt=new B.constructor,_r=new B.constructor,Ne=new Ce(()=>new ee),pt=new ee,gt=new ee,ki=new ee,Hi=new ee,Ui=!1;function Lo(i,e,t,r){if(Ui)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ui=!0;let s=i._roots,n=e._roots,o,a=0,l=0,h=new U().copy(t).invert();for(let f=0,u=s.length;f<u;f++){kt.setBuffer(s[f]),l=0;let c=Ne.getPrimitive();G(0,kt.float32Array,c),c.applyMatrix4(h);for(let m=0,g=n.length;m<g&&(_r.setBuffer(n[m]),o=xe(0,0,t,h,r,a,l,0,0,c),_r.clearBuffer(),l+=n[m].byteLength/32,!o);m++);if(Ne.releasePrimitive(c),kt.clearBuffer(),a+=s[f].byteLength/32,o)break}return Ui=!1,o}function xe(i,e,t,r,s,n=0,o=0,a=0,l=0,h=null,f=!1){let u,c;f?(u=_r,c=kt):(u=kt,c=_r);let m=u.float32Array,g=u.uint32Array,b=u.uint16Array,d=c.float32Array,v=c.uint32Array,p=c.uint16Array,x=i*2,y=e*2,T=L(x,b),S=L(y,p),w=!1;if(S&&T)f?w=s(Y(e,v),j(e*2,p),Y(i,g),j(i*2,b),l,o+e/8,a,n+i/8):w=s(Y(i,g),j(i*2,b),Y(e,v),j(e*2,p),a,n+i/8,l,o+e/8);else if(S){let A=Ne.getPrimitive();G(e,d,A),A.applyMatrix4(t);let I=k(i),R=H(i,g);G(I,m,pt),G(R,m,gt);let E=A.intersectsBox(pt),_=A.intersectsBox(gt);w=E&&xe(e,I,r,t,s,o,n,l,a+1,A,!f)||_&&xe(e,R,r,t,s,o,n,l,a+1,A,!f),Ne.releasePrimitive(A)}else{let A=k(e),I=H(e,v);G(A,d,ki),G(I,d,Hi);let R=h.intersectsBox(ki),E=h.intersectsBox(Hi);if(R&&E)w=xe(i,A,t,r,s,n,o,a,l+1,h,f)||xe(i,I,t,r,s,n,o,a,l+1,h,f);else if(R)if(T)w=xe(i,A,t,r,s,n,o,a,l+1,h,f);else{let _=Ne.getPrimitive();_.copy(ki).applyMatrix4(t);let P=k(i),D=H(i,g);G(P,m,pt),G(D,m,gt);let F=_.intersectsBox(pt),$=_.intersectsBox(gt);w=F&&xe(A,P,r,t,s,o,n,l,a+1,_,!f)||$&&xe(A,D,r,t,s,o,n,l,a+1,_,!f),Ne.releasePrimitive(_)}else if(E)if(T)w=xe(i,I,t,r,s,n,o,a,l+1,h,f);else{let _=Ne.getPrimitive();_.copy(Hi).applyMatrix4(t);let P=k(i),D=H(i,g);G(P,m,pt),G(D,m,gt);let F=_.intersectsBox(pt),$=_.intersectsBox(gt);w=F&&xe(I,P,r,t,s,o,n,l,a+1,_,!f)||$&&xe(I,D,r,t,s,o,n,l,a+1,_,!f),Ne.releasePrimitive(_)}}return w}function Gi(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}function No(){return typeof SharedArrayBuffer<"u"}function Na(i,e){let t=i[i.length-1],r=t.offset+t.count>2**16,s=i.reduce((h,f)=>h+f.count,0),n=r?4:2,o=e?new SharedArrayBuffer(s*n):new ArrayBuffer(s*n),a=r?new Uint32Array(o):new Uint16Array(o),l=0;for(let h=0;h<i.length;h++){let{offset:f,count:u}=i[h];for(let c=0;c<u;c++)a[l+c]=f+c;l+=u}return a}var Rr=class extends dr{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!No())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?r=>this._indirectBuffer[r]:r=>r,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...nr,...t},t[Et]||this.init(t)}init(e){let{geometry:t,primitiveStride:r}=this;if(e.indirect){let s=Dt(t,e.range,r),n=Na(s,e.useSharedArrayBuffer);this._indirectBuffer=n}else oo(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ee))}computePrimitiveBounds(){throw new Error("BVH: computePrimitiveBounds() not implemented")}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Dt(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}shapecast(e){let{iterateDirect:t,iterateIndirect:r,...s}=e,n=this.indirect?r:t;return super.shapecast({...s,iterate:n})}};var Ar=new X,Ir=new Ps,zo=new M,Oo=new U,ko=new M,Er=class i extends Rr{static serialize(e,t={}){t={cloneBuffers:!0,...t};let r=e.geometry,s=e._roots,n=e._indirectBuffer,o=r.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=s.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=n?n.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=n),a}static deserialize(e,t,r={}){r={setIndex:!0,indirect:!!e.indirectBuffer,...r};let{index:s,roots:n,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(n));let a=new i(t,{...r,[Et]:!0});if(a._roots=n,a._indirectBuffer=o||null,r.setIndex){let h=t.getIndex();if(h===null){let f=new O(e.index,1,!1);t.setIndex(f)}else h.array!==s&&(h.array.set(s),h.needsUpdate=!0)}return a;function l(h){for(let f=0;f<h.length;f++){let u=h[f],c=new Uint32Array(u),m=new Uint16Array(u);for(let g=0,b=u.byteLength/32;g<b;g++){let d=8*g,v=2*d;L(v,m)||(c[d+6]=c[d+6]/8-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(t={...t,maxLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}computePrimitiveBounds(e,t,r){let s=this.geometry,n=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=o.normalized;if(e<0||t+e-r.offset>r.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let h=o.array,f=o.offset||0,u=3;o.isInterleavedBufferAttribute&&(u=o.data.stride);let c=["getX","getY","getZ"],m=r.offset;for(let g=e,b=e+t;g<b;g++){let v=(n?n[g]:g)*3,p=(g-m)*6,x=v+0,y=v+1,T=v+2;a&&(x=a[x],y=a[y],T=a[T]),l||(x=x*u+f,y=y*u+f,T=T*u+f);for(let S=0;S<3;S++){let w,A,I;l?(w=o[c[S]](x),A=o[c[S]](y),I=o[c[S]](T)):(w=h[x+S],A=h[y+S],I=h[T+S]);let R=w;A<R&&(R=A),I<R&&(R=I);let E=w;A>E&&(E=A),I>E&&(E=I);let _=(E-R)/2,P=S*2;r[p+P+0]=R+_,r[p+P+1]=_+(Math.abs(R)+_)*Xs}}return r}raycastObject3D(e,t,r=[]){let{material:s}=e;if(s===void 0)return;Oo.copy(e.matrixWorld).invert(),Ir.copy(t.ray).applyMatrix4(Oo),ko.setFromMatrixScale(e.matrixWorld),zo.copy(Ir.direction).multiply(ko);let n=zo.length(),o=t.near/n,a=t.far/n;if(t.firstHitOnly===!0){let l=this.raycastFirst(Ir,s,o,a);l=Gi(l,e,t),l&&r.push(l)}else{let l=this.raycast(Ir,s,o,a);for(let h=0,f=l.length;h<f;h++){let u=Gi(l[h],e,t);u&&r.push(u)}}return r}refit(e=null){return(this.indirect?Mo:bo)(this,e)}raycast(e,t=Rt,r=0,s=1/0){let n=this._roots,o=[],a=this.indirect?Po:_o;for(let l=0,h=n.length;l<h;l++)a(this,l,t,e,o,r,s);return o}raycastFirst(e,t=Rt,r=0,s=1/0){let n=this._roots,o=null,a=this.indirect?Do:Ro;for(let l=0,h=n.length;l<h;l++){let f=a(this,l,t,e,r,s);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(e,t){let r=!1,s=this._roots,n=this.indirect?Co:Io;for(let o=0,a=s.length;o<a&&(r=n(this,o,e,t),!r);o++);return r}shapecast(e){let t=oe.getPrimitive(),r=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterateDirect:yo,iterateIndirect:So});return oe.releasePrimitive(t),r}bvhcast(e,t,r){let{intersectsRanges:s,intersectsTriangles:n}=r,o=oe.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,h=this.indirect?g=>{let b=this.resolveTriangleIndex(g);W(o,b*3,a,l)}:g=>{W(o,g*3,a,l)},f=oe.getPrimitive(),u=e.geometry.index,c=e.geometry.attributes.position,m=e.indirect?g=>{let b=e.resolveTriangleIndex(g);W(f,b*3,u,c)}:g=>{W(f,g*3,u,c)};if(n){let g=(b,d,v,p,x,y,T,S)=>{for(let w=v,A=v+p;w<A;w++){m(w),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let I=b,R=b+d;I<R;I++)if(h(I),o.needsUpdate=!0,n(o,f,I,w,x,y,T,S))return!0}return!1};if(s){let b=s;s=function(d,v,p,x,y,T,S,w){return b(d,v,p,x,y,T,S,w)?!0:g(d,v,p,x,y,T,S,w)}}else s=g}return Lo(this,e,t,s)}intersectsBox(e,t){return Ar.set(e.min,e.max,t),Ar.needsUpdate=!0,this.shapecast({intersectsBounds:r=>Ar.intersectsBox(r),intersectsTriangle:r=>Ar.intersectsTriangle(r)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,r={},s={},n=0,o=1/0){return(this.indirect?Bo:Eo)(this,e,t,r,s,n,o)}closestPointToPoint(e,t={},r=0,s=1/0){return lo(this,e,t,r,s)}};function za(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Oa(i){switch(i){case 1:return Ge;case 2:return Xt;case 3:return C;case 4:return C}}function Ho(i){switch(i){case 1:return _s;case 2:return Qt;case 3:return Kt;case 4:return Kt}}var Mr=class extends q{constructor(){super(),this.minFilter=z,this.magFilter=z,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,r=e.itemSize,s=e.count;if(t!==null){if(r*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*r/t}let n=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,h=l.BYTES_PER_ELEMENT,f=this._forcedType,u=n;if(f===null)switch(l){case Float32Array:f=N;break;case Uint8Array:case Uint16Array:case Uint32Array:f=Ue;break;case Int8Array:case Int16Array:case Int32Array:f=jt;break}let c,m,g,b,d=za(n);switch(f){case N:g=1,m=Oa(n),a&&h===1?(b=l,d+="8",l===Uint8Array?c=At:(c=vi,d+="_SNORM")):(b=Float32Array,d+="32F",c=N);break;case jt:d+=h*8+"I",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Ho(n),h===1?(b=Int8Array,c=vi):h===2?(b=Int16Array,c=ws):(b=Int32Array,c=jt);break;case Ue:d+=h*8+"UI",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Ho(n),h===1?(b=Uint8Array,c=At):h===2?(b=Uint16Array,c=Ss):(b=Uint32Array,c=Ue);break}u===3&&(m===C||m===Kt)&&(u=4);let v=Math.ceil(Math.sqrt(o))||1,p=u*v*v,x=new b(p),y=e.normalized;e.normalized=!1;for(let T=0;T<o;T++){let S=u*T;x[S]=e.getX(T)/g,n>=2&&(x[S+1]=e.getY(T)/g),n>=3&&(x[S+2]=e.getZ(T)/g,u===4&&(x[S+3]=1)),n>=4&&(x[S+3]=e.getW(T)/g)}e.normalized=y,this.internalFormat=d,this.format=m,this.type=c,this.image.width=v,this.image.height=v,this.image.data=x,this.needsUpdate=!0,this.dispose(),e.itemSize=r,e.count=s}},xt=class extends Mr{constructor(){super(),this._forcedType=Ue}};var vt=class extends Mr{constructor(){super(),this._forcedType=N}};var Pr=class{constructor(){this.index=new xt,this.position=new vt,this.bvhBounds=new q,this.bvhContents=new q,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(Ha(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let r=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==r.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let s=Ei(Pt(t));this._cachedIndexAttr=new O(s,1,!1)}ka(t,r,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:r,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),r&&r.dispose(),s&&s.dispose()}};function ka(i,e,t){let r=t.array,s=i.index?i.index.array:null;for(let n=0,o=e.length;n<o;n++){let a=3*n,l=3*e[n];for(let h=0;h<3;h++)r[a+h]=s?s[l+h]:l+h}}function Ha(i,e,t){let r=i._roots;if(r.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let s=r[0],n=new Uint16Array(s),o=new Uint32Array(s),a=new Float32Array(s),l=s.byteLength/32,h=2*Math.ceil(Math.sqrt(l/2)),f=new Float32Array(4*h*h),u=Math.ceil(Math.sqrt(l)),c=new Uint32Array(2*u*u);for(let m=0;m<l;m++){let g=m*32/4,b=g*2,d=g;for(let v=0;v<3;v++)f[8*m+0+v]=a[d+0+v],f[8*m+4+v]=a[d+3+v];if(L(b,n)){let v=j(b,n),p=Y(g,o),x=-65536|v;c[m*2+0]=x,c[m*2+1]=p}else{let v=o[g+6],p=De(g,o);c[m*2+0]=p,c[m*2+1]=v}}e.image.data=f,e.image.width=h,e.image.height=h,e.format=C,e.type=N,e.internalFormat="RGBA32F",e.minFilter=z,e.magFilter=z,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=c,t.image.width=u,t.image.height=u,t.format=Qt,t.type=Ue,t.internalFormat="RG32UI",t.minFilter=z,t.magFilter=z,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}var $e={};ua($e,{bvh_distance_functions:()=>Uo,bvh_ray_functions:()=>Vi,bvh_struct_definitions:()=>Go,common_functions:()=>Wi});var Wi=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var Uo=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0 - v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point, float maxDistance,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = maxDistance * maxDistance;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`;var Vi=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var Go=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var Nf=`
	${Wi}
	${Vi}
`;function Dr(i,e,t=0){if(i.isInterleavedBufferAttribute){let r=i.itemSize;for(let s=0,n=i.count;s<n;s++){let o=s+t;e.setX(o,i.getX(s)),r>=2&&e.setY(o,i.getY(s)),r>=3&&e.setZ(o,i.getZ(s)),r>=4&&e.setW(o,i.getW(s))}}else{let r=e.array,s=r.constructor,n=r.BYTES_PER_ELEMENT*i.itemSize*t;new s(r.buffer,n,i.array.length).set(i.array)}}function je(i,e=null){let t=i.array.constructor,r=i.normalized,s=i.itemSize,n=e===null?i.count:e;return new O(new t(s*n),s,r)}function ze(i,e){if(!i&&!e)return!0;if(!!i!=!!e)return!1;let t=i.count===e.count,r=i.normalized===e.normalized,s=i.array.constructor===e.array.constructor,n=i.itemSize===e.itemSize;return!(!t||!r||!s||!n)}function Ua(i){let e=i[0].index!==null,t=new Set(Object.keys(i[0].attributes));if(!i[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let r=0;r<i.length;++r){let s=i[r],n=0;if(e!==(s.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let o in s.attributes){if(!t.has(o))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+o+'" attribute exists among all geometries, or in none of them.');n++}if(n!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function Ga(i){let e=0;for(let t=0,r=i.length;t<r;t++)e+=i[t].getIndex().count;return e}function Wa(i){let e=0;for(let t=0,r=i.length;t<r;t++)e+=i[t].getAttribute("position").count;return e}function Va(i,e,t){i.index&&i.index.count!==e&&i.setIndex(null);let r=i.attributes;for(let s in r)r[s].count!==t&&i.deleteAttribute(s)}function Wo(i,e={},t=new se){let{useGroups:r=!1,forceUpdate:s=!1,skipAssigningAttributes:n=[],overwriteIndex:o=!0}=e;Ua(i);let a=i[0].index!==null,l=a?Ga(i):-1,h=Wa(i);if(Va(t,l,h),r){let u=0;for(let c=0,m=i.length;c<m;c++){let g=i[c],b;a?b=g.getIndex().count:b=g.getAttribute("position").count,t.addGroup(u,b,c),u+=b}}if(a){let u=!1;if(t.index||(t.setIndex(new O(new Uint32Array(l),1,!1)),u=!0),u||o){let c=0,m=0,g=t.getIndex();for(let b=0,d=i.length;b<d;b++){let v=i[b],p=v.getIndex();if(!(!s&&!u&&n[b]))for(let y=0;y<p.count;++y)g.setX(c+y,p.getX(y)+m);c+=p.count,m+=v.getAttribute("position").count}}}let f=Object.keys(i[0].attributes);for(let u=0,c=f.length;u<c;u++){let m=!1,g=f[u];if(!t.getAttribute(g)){let v=i[0].getAttribute(g);t.setAttribute(g,je(v,h)),m=!0}let b=0,d=t.getAttribute(g);for(let v=0,p=i.length;v<p;v++){let x=i[v],y=!s&&!m&&n[v],T=x.getAttribute(g);if(!y)if(g==="color"&&d.itemSize!==T.itemSize)for(let S=b,w=T.count;S<w;S++)T.setXYZW(S,d.getX(S),d.getY(S),d.getZ(S),1);else Dr(T,d,b);b+=T.count}}}function Vo(i,e,t){let r=i.index,n=i.attributes.position.count,o=r?r.count:n,a=i.groups;a.length===0&&(a=[{count:o,start:0,materialIndex:0}]);let l=i.getAttribute("materialIndex");if(!l||l.count!==n){let f;t.length<=255?f=new Uint8Array(n):f=new Uint16Array(n),l=new O(f,1,!1),i.deleteAttribute("materialIndex"),i.setAttribute("materialIndex",l)}let h=l.array;for(let f=0;f<a.length;f++){let u=a[f],c=u.start,m=u.count,g=Math.min(m,o-c),b=Array.isArray(e)?e[u.materialIndex]:e,d=t.indexOf(b);for(let v=0;v<g;v++){let p=c+v;r&&(p=r.getX(p)),h[p]=d}}}function qo(i,e){if(!i.index){let t=i.attributes.position.count,r=new Array(t);for(let s=0;s<t;s++)r[s]=s;i.setIndex(r)}if(!i.attributes.normal&&e&&e.includes("normal")&&i.computeVertexNormals(),!i.attributes.uv&&e&&e.includes("uv")){let t=i.attributes.position.count;i.setAttribute("uv",new O(new Float32Array(t*2),2,!1))}if(!i.attributes.uv2&&e&&e.includes("uv2")){let t=i.attributes.position.count;i.setAttribute("uv2",new O(new Float32Array(t*2),2,!1))}if(!i.attributes.tangent&&e&&e.includes("tangent"))if(i.attributes.uv&&i.attributes.normal)i.computeTangents();else{let t=i.attributes.position.count;i.setAttribute("tangent",new O(new Float32Array(t*4),4,!1))}if(!i.attributes.color&&e&&e.includes("color")){let t=i.attributes.position.count,r=new Float32Array(t*4);r.fill(1),i.setAttribute("color",new O(r,4))}}function yt(i){let e=0;if(i.byteLength!==0){let t=new Uint8Array(i);for(let r=0;r<i.byteLength;r++){let s=t[r];e=(e<<5)-e+s,e|=0}}return e}function Yo(i){let e=i.uuid,t=Object.values(i.attributes);i.index&&(t.push(i.index),e+=`index|${i.index.version}`);let r=Object.keys(t).sort();for(let s of r){let n=t[s];e+=`${s}_${n.version}|`}return e}function $o(i){let e=i.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${yt(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}var Fr=class{constructor(e=null){this.matrixWorld=new U,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,r=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=Yo(t),this.primitiveCount=r,this.skeletonHash=$o(e)}didChange(e){let t=e.geometry,r=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===Yo(t)&&this.skeletonHash===$o(e)&&this.primitiveCount===r)}};var Xe=new M,Qe=new M,Ke=new M,jo=new Me,Cr=new M,qi=new M,Xo=new Me,Qo=new Me,Br=new U,Ko=new U;function Zo(i,e,t){let r=i.skeleton,s=i.geometry,n=r.bones,o=r.boneInverses;Xo.fromBufferAttribute(s.attributes.skinIndex,e),Qo.fromBufferAttribute(s.attributes.skinWeight,e),Br.elements.fill(0);for(let a=0;a<4;a++){let l=Qo.getComponent(a);if(l!==0){let h=Xo.getComponent(a);Ko.multiplyMatrices(n[h].matrixWorld,o[h]),qa(Br,Ko,l)}}return Br.multiply(i.bindMatrix).premultiply(i.bindMatrixInverse),t.transformDirection(Br),t}function Yi(i,e,t,r,s){Cr.set(0,0,0);for(let n=0,o=i.length;n<o;n++){let a=e[n],l=i[n];a!==0&&(qi.fromBufferAttribute(l,r),t?Cr.addScaledVector(qi,a):Cr.addScaledVector(qi.sub(s),a))}s.add(Cr)}function qa(i,e,t){let r=i.elements,s=e.elements;for(let n=0,o=s.length;n<o;n++)r[n]+=s[n]*t}function Ya(i){let{index:e,attributes:t}=i;if(e)for(let r=0,s=e.count;r<s;r+=3){let n=e.getX(r),o=e.getX(r+2);e.setX(r,o),e.setX(r+2,n)}else for(let r in t){let s=t[r],n=s.itemSize;for(let o=0,a=s.count;o<a;o+=3)for(let l=0;l<n;l++){let h=s.getComponent(o,l),f=s.getComponent(o+2,l);s.setComponent(o,l,f),s.setComponent(o+2,l,h)}}return i}function Jo(i,e={},t=new se){e={applyWorldTransforms:!0,attributes:[],...e};let r=i.geometry,s=e.applyWorldTransforms,n=e.attributes.includes("normal"),o=e.attributes.includes("tangent"),a=r.attributes,l=t.attributes;for(let p in t.attributes)(!e.attributes.includes(p)||!(p in r.attributes))&&t.deleteAttribute(p);!t.index&&r.index&&(t.index=r.index.clone()),l.position||t.setAttribute("position",je(a.position)),n&&!l.normal&&a.normal&&t.setAttribute("normal",je(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",je(a.tangent)),ze(r.index,t.index),ze(a.position,l.position),n&&ze(a.normal,l.normal),o&&ze(a.tangent,l.tangent);let h=a.position,f=n?a.normal:null,u=o?a.tangent:null,c=r.morphAttributes.position,m=r.morphAttributes.normal,g=r.morphAttributes.tangent,b=r.morphTargetsRelative,d=i.morphTargetInfluences,v=new As;v.getNormalMatrix(i.matrixWorld),r.index&&t.index.array.set(r.index.array);for(let p=0,x=a.position.count;p<x;p++)Xe.fromBufferAttribute(h,p),f&&Qe.fromBufferAttribute(f,p),u&&(jo.fromBufferAttribute(u,p),Ke.fromBufferAttribute(u,p)),d&&(c&&Yi(c,d,b,p,Xe),m&&Yi(m,d,b,p,Qe),g&&Yi(g,d,b,p,Ke)),i.isSkinnedMesh&&(i.applyBoneTransform(p,Xe),f&&Zo(i,p,Qe),u&&Zo(i,p,Ke)),s&&Xe.applyMatrix4(i.matrixWorld),l.position.setXYZ(p,Xe.x,Xe.y,Xe.z),f&&(s&&Qe.applyNormalMatrix(v),l.normal.setXYZ(p,Qe.x,Qe.y,Qe.z)),u&&(s&&Ke.transformDirection(i.matrixWorld),l.tangent.setXYZW(p,Ke.x,Ke.y,Ke.z,jo.w));for(let p in e.attributes){let x=e.attributes[p];x==="position"||x==="tangent"||x==="normal"||!(x in a)||(l[x]||t.setAttribute(x,je(a[x])),ze(a[x],l[x]),Dr(a[x],l[x]))}return i.matrixWorld.determinant()<0&&Ya(t),t}var Lr=class extends se{constructor(){super(),this.version=0,this.hash=null,this._diff=new Fr}isCompatible(e,t){let r=e.geometry;for(let s=0;s<t.length;s++){let n=t[s],o=r.attributes[n],a=this.attributes[n];if(o&&!ze(o,a))return!1}return!0}updateFrom(e,t){let r=this._diff;return r.didChange(e)?(Jo(e,t,this),r.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};var zr=0,$i=1,ji=2;function $a(i,e){for(let t=0,r=i.length;t<r;t++)i[t].traverseVisible(n=>{n.isMesh&&e(n)})}function ja(i){let e=[];for(let t=0,r=i.length;t<r;t++){let s=i[t];Array.isArray(s.material)?e.push(...s.material):e.push(s.material)}return e}function Xa(i,e,t){if(i.length===0){e.setIndex(null);let r=e.attributes;for(let s in r)e.deleteAttribute(s);for(let s in t.attributes)e.setAttribute(t.attributes[s],new O(new Float32Array(0),4,!1))}else Wo(i,t,e);for(let r in e.attributes)e.attributes[r].needsUpdate=!0}var Nr=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new Jt,t=new se;t.setAttribute("position",new O(new Float32Array(9),3)),this._dummyMesh=new Q(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return $a(this.objects,t=>{e.push(t)}),e.sort((t,r)=>t.uuid>r.uuid?1:t.uuid<r.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),r=new Set(e.keys()),s={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let n=0,o=t.length;n<o;n++){let a=t[n],l=a.uuid;r.delete(l);let h=e.get(l);(!h||!h.isCompatible(a,this.attributes))&&(h&&h.dispose(),h=new Lr,e.set(l,h)),h.updateFrom(a,s)&&this.generateMissingAttributes&&qo(h,this.attributes)}r.forEach(n=>{e.delete(n)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new se){let{useGroups:t,overwriteIndex:r,_intermediateGeometry:s,_geometryMergeSets:n}=this,o=this._getMeshes(),a=[],l=[],h=n.get(e)||[];this._updateIntermediateGeometries();let f=!1;o.length!==h.length&&(f=!0);for(let c=0,m=o.length;c<m;c++){let g=o[c],b=s.get(g.uuid);l.push(b);let d=h[c];!d||d.uuid!==b.uuid?(a.push(!1),f=!0):d.version!==b.version?a.push(!1):a.push(!0)}Xa(l,e,{useGroups:t,forceUpdate:f,skipAssigningAttributes:a,overwriteIndex:r}),f&&e.dispose(),n.set(e,l.map(c=>({version:c.version,uuid:c.uuid})));let u=zr;return f?u=ji:a.includes(!1)&&(u=$i),{changeType:u,materials:ja(o),geometry:e}}};function Qa(i){let e=new Set;for(let t=0,r=i.length;t<r;t++){let s=i[t];for(let n in s){let o=s[n];o&&o.isTexture&&e.add(o)}}return Array.from(e)}function Ka(i){let e=[],t=new Set;for(let s=0,n=i.length;s<n;s++)i[s].traverse(o=>{o.visible&&(o.isRectAreaLight||o.isSpotLight||o.isPointLight||o.isDirectionalLight)&&(e.push(o),o.iesMap&&t.add(o.iesMap))});let r=Array.from(t).sort((s,n)=>s.uuid<n.uuid?1:s.uuid>n.uuid?-1:0);return{lights:e,iesTextures:r}}var Or=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new se,this.staticGeometryGenerator=new Nr(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:r,attributes:s}=this,n=t.objects;t.attributes=s,n.forEach(c=>{c.traverse(m=>{m.isSkinnedMesh&&m.skeleton&&m.skeleton.update()})});let o=t.generate(r),a=o.materials,l=o.changeType!==zr||this._materialUuids===null||this._materialUuids.length!==length;if(!l){for(let c=0,m=a.length;c<m;c++)if(a[c].uuid!==this._materialUuids[c]){l=!0;break}}let h=Qa(a),{lights:f,iesTextures:u}=Ka(n);if(l&&(Vo(r,a,a),this._materialUuids=a.map(c=>c.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(o.changeType===ji){let c={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(r,c):this.bvh=new Er(r,c)}else o.changeType===$i&&this.bvh.refit()}return{bvhChanged:o.changeType!==zr,bvh:this.bvh,needsMaterialIndexUpdate:l,lights:f,iesTextures:u,geometry:r,materials:a,textures:h,objects:n}}};var Za=new Os(-1,1,1,-1,0,1),Xi=class extends se{constructor(){super(),this.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yi([0,2,0,0,2,0],2))}},Ja=new Xi,fe=class{constructor(e){this._mesh=new Q(Ja,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Za)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Oe=class extends be{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(let t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(r){this.uniforms[t].value=r}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}};var kr=class extends Oe{constructor(e){super({blending:Te,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}};function Hr(i=1){let e="uint";return i>1&&(e="uvec"+i),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function Ur(i=1){let e="uint",t="float",r="",s=".r",n="1u";return i>1&&(e="uvec"+i,t="vec"+i,r=i+"",i===2?(s=".rg",n="uvec2( 1u, 2u )"):i===3?(s=".rgb",n="uvec3( 1u, 2u, 3u )"):(s="",n="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${r}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${s};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${n} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}var Gr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Hr(1)}
	${Hr(2)}
	${Hr(3)}
	${Hr(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,en=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,tn=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${Ur(1)}
	${Ur(2)}
	${Ur(3)}
	${Ur(4)}

`;var Qi=class extends Oe{constructor(){super({blending:Te,uniforms:{resolution:{value:new V}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Gr}
				${en}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},Wr=class{generate(e,t=256){let r=new ye(t,t,{type:N,format:C,minFilter:z,magFilter:z,generateMipmaps:!1}),s=e.getRenderTarget();e.setRenderTarget(r);let n=new fe(new Qi);return n.material.resolution.set(t,t),n.render(e),e.setRenderTarget(s),n.dispose(),r}};var bt=class extends er{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}};var Vr=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof bt?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function qr(i){let e=new Uint16Array(i.length);for(let t=0,r=i.length;t<r;++t)e[t]=de.toHalfFloat(i[t]);return e}function rn(i,e,t=0,r=i.length){let s=t,n=t+r-1;for(;s<n;){let o=s+n>>1;i[o]<e?s=o+1:n=o}return s-t}function ec(i,e,t){return .2126*i+.7152*e+.0722*t}function tc(i,e=re){let t=i.clone();t.source=new Is({...t.image});let{width:r,height:s,data:n}=t.image,o=n;if(t.type!==e){e===re?o=new Uint16Array(n.length):o=new Float32Array(n.length);let a;n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array?a=2**(8*n.BYTES_PER_ELEMENT-1)-1:a=2**(8*n.BYTES_PER_ELEMENT)-1;for(let l=0,h=n.length;l<h;l++){let f=n[l];t.type===re&&(f=de.fromHalfFloat(n[l])),t.type!==N&&t.type!==re&&(f/=a),e===re&&(o[l]=de.toHalfFloat(f))}t.image.data=o,t.type=e}if(t.flipY){let a=o;o=o.slice();for(let l=0;l<s;l++)for(let h=0;h<r;h++){let f=s-l-1,u=4*(l*r+h),c=4*(f*r+h);o[c+0]=a[u+0],o[c+1]=a[u+1],o[c+2]=a[u+2],o[c+3]=a[u+3]}t.flipY=!1,t.image.data=o}return t}var Yr=class{constructor(){let e=new q(qr(new Float32Array([0,0,0,0])),1,1);e.type=re,e.format=C,e.minFilter=te,e.magFilter=te,e.wrapS=ne,e.wrapT=ne,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new q(qr(new Float32Array([0,1])),1,2);t.type=re,t.format=Ge,t.minFilter=te,t.magFilter=te,t.generateMipmaps=!1,t.needsUpdate=!0;let r=new q(qr(new Float32Array([0,0,1,1])),2,2);r.type=re,r.format=Ge,r.minFilter=te,r.magFilter=te,r.generateMipmaps=!1,r.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=r,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=tc(e);t.wrapS=ne,t.wrapT=le;let{width:r,height:s,data:n}=t.image,o=new Float32Array(r*s),a=new Float32Array(r*s),l=new Float32Array(s),h=new Float32Array(s),f=0,u=0;for(let d=0;d<s;d++){let v=0;for(let p=0;p<r;p++){let x=d*r+p,y=de.fromHalfFloat(n[4*x+0]),T=de.fromHalfFloat(n[4*x+1]),S=de.fromHalfFloat(n[4*x+2]),w=ec(y,T,S);v+=w,f+=w,o[x]=w,a[x]=v}if(v!==0)for(let p=d*r,x=d*r+r;p<x;p++)o[p]/=v,a[p]/=v;u+=v,l[d]=v,h[d]=u}if(u!==0)for(let d=0,v=l.length;d<v;d++)l[d]/=u,h[d]/=u;let c=new Uint16Array(s),m=new Uint16Array(r*s);for(let d=0;d<s;d++){let v=(d+1)/s,p=rn(h,v);c[d]=de.toHalfFloat((p+.5)/s)}for(let d=0;d<s;d++)for(let v=0;v<r;v++){let p=d*r+v,x=(v+1)/r,y=rn(a,x,d*r,r);m[p]=de.toHalfFloat((y+.5)/r)}this.dispose();let{marginalWeights:g,conditionalWeights:b}=this;g.image={width:s,height:1,data:c},g.needsUpdate=!0,b.image={width:r,height:s,data:m},b.needsUpdate=!0,this.totalSum=f,this.map=t}};var Ki=6,rc=0,ic=1,sc=2,oc=3,nc=4,ve=new M,ae=new M,sn=new U,Tt=new we,on=new M,wt=new M,ac=new M(0,1,0),$r=class{constructor(){let e=new q(new Float32Array(4),1,1);e.format=C,e.type=N,e.wrapS=le,e.wrapT=le,e.generateMipmaps=!1,e.minFilter=z,e.magFilter=z,this.tex=e,this.count=0}updateFrom(e,t=[]){let r=this.tex,s=Math.max(e.length*Ki,1),n=Math.ceil(Math.sqrt(s));r.image.width!==n&&(r.dispose(),r.image.data=new Float32Array(n*n*4),r.image.width=n,r.image.height=n);let o=r.image.data;for(let l=0,h=e.length;l<h;l++){let f=e[l],u=l*Ki*4,c=0;for(let g=0;g<Ki*4;g++)o[u+g]=0;f.getWorldPosition(ae),o[u+c++]=ae.x,o[u+c++]=ae.y,o[u+c++]=ae.z;let m=rc;if(f.isRectAreaLight&&f.isCircular?m=ic:f.isSpotLight?m=sc:f.isDirectionalLight?m=oc:f.isPointLight&&(m=nc),o[u+c++]=m,o[u+c++]=f.color.r,o[u+c++]=f.color.g,o[u+c++]=f.color.b,o[u+c++]=f.intensity,f.getWorldQuaternion(Tt),f.isRectAreaLight)ve.set(f.width,0,0).applyQuaternion(Tt),o[u+c++]=ve.x,o[u+c++]=ve.y,o[u+c++]=ve.z,c++,ae.set(0,f.height,0).applyQuaternion(Tt),o[u+c++]=ae.x,o[u+c++]=ae.y,o[u+c++]=ae.z,o[u+c++]=ve.cross(ae).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){let g=f.radius||0;on.setFromMatrixPosition(f.matrixWorld),wt.setFromMatrixPosition(f.target.matrixWorld),sn.lookAt(on,wt,ac),Tt.setFromRotationMatrix(sn),ve.set(1,0,0).applyQuaternion(Tt),o[u+c++]=ve.x,o[u+c++]=ve.y,o[u+c++]=ve.z,c++,ae.set(0,1,0).applyQuaternion(Tt),o[u+c++]=ae.x,o[u+c++]=ae.y,o[u+c++]=ae.z,o[u+c++]=Math.PI*g*g,o[u+c++]=g,o[u+c++]=f.decay,o[u+c++]=f.distance,o[u+c++]=Math.cos(f.angle),o[u+c++]=Math.cos(f.angle*(1-f.penumbra)),o[u+c++]=f.iesMap?t.indexOf(f.iesMap):-1}else if(f.isPointLight){let g=ve.setFromMatrixPosition(f.matrixWorld);o[u+c++]=g.x,o[u+c++]=g.y,o[u+c++]=g.z,c++,c+=4,c+=1,o[u+c++]=f.decay,o[u+c++]=f.distance}else if(f.isDirectionalLight){let g=ve.setFromMatrixPosition(f.matrixWorld),b=ae.setFromMatrixPosition(f.target.matrixWorld);wt.subVectors(g,b).normalize(),o[u+c++]=wt.x,o[u+c++]=wt.y,o[u+c++]=wt.z}}this.count=e.length;let a=yt(o.buffer);return this.hash!==a?(this.hash=a,r.needsUpdate=!0,!0):!1}};function nn(i,e,t,r,s){if(e>r)throw new Error;let n=i.length/e,o=i.constructor.BYTES_PER_ELEMENT*8,a=1;switch(i.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**o-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(o-1)-1;break}for(let l=0;l<n;l++){let h=4*l,f=e*l;for(let u=0;u<r;u++)t[s+h+u]=e>=u+1?i[f+u]/a:0}}var jr=class extends Es{constructor(){super(),this._textures=[],this.type=N,this.format=C,this.internalFormat="RGBA32F"}updateAttribute(e,t){let r=this._textures[e];r.updateFrom(t);let s=r.image,n=this.image;if(s.width!==n.width||s.height!==n.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:o,height:a,data:l}=n,f=o*a*4*e,u=t.itemSize;u===3&&(u=4),nn(r.image.data,u,l,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,r=e.length;for(let u=0,c=r;u<c;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let s=this._textures;for(;s.length<r;){let u=new vt;s.push(u)}for(;s.length>r;)s.pop();for(let u=0,c=r;u<c;u++)s[u].updateFrom(e[u]);let o=s[0].image,a=this.image;(o.width!==a.width||o.height!==a.height||o.depth!==r)&&(a.width=o.width,a.height=o.height,a.depth=r,a.data=new Float32Array(a.width*a.height*a.depth*4));let{data:l,width:h,height:f}=a;for(let u=0,c=r;u<c;u++){let m=s[u],b=h*f*4*u,d=e[u].itemSize;d===3&&(d=4),nn(m.image.data,d,l,4,b)}this.dispose(),this.needsUpdate=!0}};var Xr=class extends jr{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,r,s){this.setAttributes([e,t,r,s])}};function Zi(i,e){return i.uuid<e.uuid?1:i.uuid>e.uuid?-1:0}function Qr(i){return`${i.source.uuid}:${i.colorSpace}`}function cc(i){let e=new Set,t=[];for(let r=0,s=i.length;r<s;r++){let n=i[r],o=Qr(n);e.has(o)||(e.add(o),t.push(n))}return t}function an(i){let e=i.map(r=>r.iesMap||null).filter(r=>r),t=new Set(e);return Array.from(t).sort(Zi)}function cn(i){let e=new Set;for(let r=0,s=i.length;r<s;r++){let n=i[r];for(let o in n){let a=n[o];a&&a.isTexture&&e.add(a)}}let t=Array.from(e);return cc(t).sort(Zi)}function ln(i){let e=[];return i.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(Zi)}var Zr=47,un=Zr*4,Ji=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},Kr=class extends q{constructor(){super(new Float32Array(4),1,1),this.format=C,this.type=N,this.wrapS=le,this.wrapT=le,this.minFilter=z,this.magFilter=z,this.generateMipmaps=!1,this.features=new Ji}updateFrom(e,t){function r(g,b,d=-1){if(b in g&&g[b]){let v=Qr(g[b]);return u[v]}else return d}function s(g,b,d){return b in g?g[b]:d}function n(g,b,d,v){let p=g[b]&&g[b].isTexture?g[b]:null;if(p){p.matrixAutoUpdate&&p.updateMatrix();let x=p.matrix.elements,y=0;d[v+y++]=x[0],d[v+y++]=x[3],d[v+y++]=x[6],y++,d[v+y++]=x[1],d[v+y++]=x[4],d[v+y++]=x[7],y++}return 8}let o=0,a=e.length*Zr,l=Math.ceil(Math.sqrt(a))||1,{image:h,features:f}=this,u={};for(let g=0,b=t.length;g<b;g++)u[Qr(t[g])]=g;h.width!==l&&(this.dispose(),h.data=new Float32Array(l*l*4),h.width=l,h.height=l);let c=h.data;f.reset();for(let g=0,b=e.length;g<b;g++){let d=e[g];if(d.isFogVolumeMaterial){f.setUsed("FOG");for(let x=0;x<un;x++)c[o+x]=0;c[o+0+0]=d.color.r,c[o+0+1]=d.color.g,c[o+0+2]=d.color.b,c[o+8+3]=s(d,"emissiveIntensity",0),c[o+12+0]=d.emissive.r,c[o+12+1]=d.emissive.g,c[o+12+2]=d.emissive.b,c[o+52+1]=d.density,c[o+52+3]=0,c[o+56+2]=4,o+=un;continue}c[o++]=d.color.r,c[o++]=d.color.g,c[o++]=d.color.b,c[o++]=r(d,"map"),c[o++]=s(d,"metalness",0),c[o++]=r(d,"metalnessMap"),c[o++]=s(d,"roughness",0),c[o++]=r(d,"roughnessMap"),c[o++]=s(d,"ior",1.5),c[o++]=s(d,"transmission",0),c[o++]=r(d,"transmissionMap"),c[o++]=s(d,"emissiveIntensity",0),"emissive"in d?(c[o++]=d.emissive.r,c[o++]=d.emissive.g,c[o++]=d.emissive.b):(c[o++]=0,c[o++]=0,c[o++]=0),c[o++]=r(d,"emissiveMap"),c[o++]=r(d,"normalMap"),"normalScale"in d?(c[o++]=d.normalScale.x,c[o++]=d.normalScale.y):(c[o++]=1,c[o++]=1),c[o++]=s(d,"clearcoat",0),c[o++]=r(d,"clearcoatMap"),c[o++]=s(d,"clearcoatRoughness",0),c[o++]=r(d,"clearcoatRoughnessMap"),c[o++]=r(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(c[o++]=d.clearcoatNormalScale.x,c[o++]=d.clearcoatNormalScale.y):(c[o++]=1,c[o++]=1),o++,c[o++]=s(d,"sheen",0),"sheenColor"in d?(c[o++]=d.sheenColor.r,c[o++]=d.sheenColor.g,c[o++]=d.sheenColor.b):(c[o++]=0,c[o++]=0,c[o++]=0),c[o++]=r(d,"sheenColorMap"),c[o++]=s(d,"sheenRoughness",0),c[o++]=r(d,"sheenRoughnessMap"),c[o++]=r(d,"iridescenceMap"),c[o++]=r(d,"iridescenceThicknessMap"),c[o++]=s(d,"iridescence",0),c[o++]=s(d,"iridescenceIOR",1.3);let v=s(d,"iridescenceThicknessRange",[100,400]);c[o++]=v[0],c[o++]=v[1],"specularColor"in d?(c[o++]=d.specularColor.r,c[o++]=d.specularColor.g,c[o++]=d.specularColor.b):(c[o++]=1,c[o++]=1,c[o++]=1),c[o++]=r(d,"specularColorMap"),c[o++]=s(d,"specularIntensity",1),c[o++]=r(d,"specularIntensityMap");let p=s(d,"thickness",0)===0&&s(d,"attenuationDistance",1/0)===1/0;if(c[o++]=Number(p),o++,"attenuationColor"in d?(c[o++]=d.attenuationColor.r,c[o++]=d.attenuationColor.g,c[o++]=d.attenuationColor.b):(c[o++]=1,c[o++]=1,c[o++]=1),c[o++]=s(d,"attenuationDistance",1/0),c[o++]=r(d,"alphaMap"),c[o++]=d.opacity,c[o++]=d.alphaTest,!p&&d.transmission>0)c[o++]=0;else switch(d.side){case Rt:c[o++]=1;break;case qt:c[o++]=-1;break;case Ee:c[o++]=0;break}c[o++]=Number(s(d,"matte",!1)),c[o++]=Number(s(d,"castShadow",!0)),c[o++]=Number(d.vertexColors)|Number(d.flatShading)<<1,c[o++]=Number(d.transparent),o+=n(d,"map",c,o),o+=n(d,"metalnessMap",c,o),o+=n(d,"roughnessMap",c,o),o+=n(d,"transmissionMap",c,o),o+=n(d,"emissiveMap",c,o),o+=n(d,"normalMap",c,o),o+=n(d,"clearcoatMap",c,o),o+=n(d,"clearcoatNormalMap",c,o),o+=n(d,"clearcoatRoughnessMap",c,o),o+=n(d,"sheenColorMap",c,o),o+=n(d,"sheenRoughnessMap",c,o),o+=n(d,"iridescenceMap",c,o),o+=n(d,"iridescenceThicknessMap",c,o),o+=n(d,"specularColorMap",c,o),o+=n(d,"specularIntensityMap",c,o),o+=n(d,"alphaMap",c,o)}let m=yt(c.buffer);return this.hash!==m?(this.hash=m,this.needsUpdate=!0,!0):!1}};var fn=new ie;function lc(i){return i?`${i.uuid}:${i.version}`:null}function uc(i,e){for(let t in e)t in i&&(i[t]=e[t])}var Ht=class extends Ms{constructor(e,t,r){let s={format:C,type:At,minFilter:te,magFilter:te,wrapS:ne,wrapT:ne,generateMipmaps:!1,...r};super(e,t,1,s),uc(this.texture,s),this.texture.setTextures=(...o)=>{this.setTextures(...o)},this.hashes=[null];let n=new fe(new es);this.fsQuad=n}setTextures(e,t,r=this.width,s=this.height){let n=e.getRenderTarget(),o=e.toneMapping,a=e.getClearAlpha();e.getClearColor(fn);let l=t.length||1;(r!==this.width||s!==this.height||this.depth!==l)&&(this.setSize(r,s,l),this.hashes=new Array(l).fill(null)),e.setClearColor(0,0),e.toneMapping=$t;let h=this.fsQuad,f=this.hashes,u=!1;for(let c=0,m=l;c<m;c++){let g=t[c],b=lc(g);g&&(f[c]!==b||g.isWebGLRenderTarget)&&(g.matrixAutoUpdate=!1,g.matrix.identity(),h.material.map=g,e.setRenderTarget(this,c),h.render(e),g.updateMatrix(),g.matrixAutoUpdate=!0,f[c]=b,u=!0)}return h.material.map=null,e.setClearColor(fn,a),e.setRenderTarget(n),e.toneMapping=o,u}dispose(){super.dispose(),this.fsQuad.dispose()}},es=class extends be{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function fc(i,e=Math.random()){for(let t=i.length-1;t>0;t--){let r=Math.floor(e()*(t+1)),s=i[t];i[t]=i[r],i[r]=s}return i}var Jr=class{constructor(e,t,r=Math.random){let s=e**t,n=new Uint16Array(s),o=s;for(let a=0;a<s;a++)n[a]=a;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let a=0;a<s;a++)n[a]=a;o=0},this.reshuffle=function(){o=0},this.next=function(){let{samples:a}=this;o>=n.length&&(fc(n,r),this.reshuffle());let l=n[o++];for(let h=0;h<t;h++)a[h]=(l%e+r())/e,l=Math.floor(l/e);return a}}};var ei=class{constructor(e,t,r=Math.random){let s=0;for(let l of t)s+=l;let n=new Float32Array(s),o=[],a=0;for(let l of t){let h=new Jr(e,l,r);h.samples=new Float32Array(n.buffer,a,h.samples.length),a+=h.samples.length*4,o.push(h)}this.samples=n,this.strataCount=e,this.next=function(){for(let l of o)l.next();return n},this.reshuffle=function(){for(let l of o)l.reshuffle()},this.reset=function(){for(let l of o)l.reset()}}};var ts=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},ti=class extends q{constructor(e=1,t=1,r=8){super(new Float32Array(1),1,1,C,N),this.minFilter=z,this.magFilter=z,this.strata=r,this.sampler=null,this.generator=new ts,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,r)}init(e=this.image.height,t=this.image.width,r=this.strata){let{image:s}=this;if(s.width===t&&s.height===e&&this.sampler!==null)return;let n=new Array(e*t).fill(4),o=new ei(r,n,this.random);s.width=t,s.height=e,s.data=o.samples,this.sampler=o,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function hn(i,e=Math.random){for(let t=i.length-1;t>0;t--){let r=~~((e()-1e-6)*t),s=i[t];i[t]=i[r],i[r]=s}}function dn(i,e){i.fill(0);for(let t=0;t<e;t++)i[t]=1}var Ut=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,r=1/0,s=-1;for(let n=0,o=t.length;n<o;n++){if(t[n]!==0)continue;let a=e[n];a<r&&(r=a,s=n)}return s}findCluster(){let{score:e,binaryPattern:t}=this,r=-1/0,s=-1;for(let n=0,o=t.length;n<o;n++){if(t[n]!==1)continue;let a=e[n];a>r&&(r=a,s=n)}return s}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),r=2*t+1,s=new Float32Array(r*r),n=e*e;for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){let l=(t+a)*r+o+t,h=o*o+a*a;s[l]=Math.E**(-h/(2*n))}this.lookupTable=s,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:r}=this;t.fill(0);for(let s=0,n=e.length;s<n;s++)if(e[s]===0){let o=~~(s/r),a=s-o*r;this.updateScore(a,o,1),e[s]=1}else e[s]=0}updateScore(e,t,r){let{size:s,score:n,lookupTable:o}=this,a=this.radius,l=2*a+1;for(let h=-a;h<=a;h++)for(let f=-a;f<=a;f++){let u=(a+f)*l+h+a,c=o[u],m=e+h;m=m<0?s+m:m%s;let g=t+f;g=g<0?s+g:g%s;let b=g*s+m;n[b]+=r*c}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,r=~~(e/t),s=e-r*t;this.updateScore(s,r,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,r=~~(e/t),s=e-r*t;this.updateScore(s,r,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}};var ri=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Ut(1),this.savedSamples=new Ut(1)}generate(){let{samples:e,savedSamples:t,sigma:r,majorityPointsRatio:s,size:n}=this;e.resize(n),e.setSigma(r);let o=Math.floor(n*n*s),a=e.binaryPattern;dn(a,o),hn(a,this.random);for(let u=0,c=a.length;u<c;u++)a[u]===1&&e.addPointIndex(u);for(;;){let u=e.findCluster();e.removePointIndex(u);let c=e.findVoid();if(u===c){e.addPointIndex(u);break}e.addPointIndex(c)}let l=new Uint32Array(n*n);t.copy(e);let h;for(h=e.count-1;h>=0;){let u=e.findCluster();e.removePointIndex(u),l[u]=h,h--}let f=n*n;for(h=t.count;h<f/2;){let u=t.findVoid();t.addPointIndex(u),l[u]=h,h++}for(t.invert();h<f;){let u=t.findCluster();t.removePointIndex(u),l[u]=h,h++}return{data:l,maxValue:f}}};function hc(i){return i>=3?4:i}function dc(i){switch(i){case 1:return Ge;case 2:return Xt;default:return C}}var ii=class extends q{constructor(e=64,t=1){super(new Float32Array(4),1,1,C,N),this.minFilter=z,this.magFilter=z,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,r=new ri;r.channels=e,r.size=t;let s=hc(e),n=dc(s);(this.image.width!==t||n!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*s),this.format=n,this.dispose());let o=this.image.data;for(let a=0,l=e;a<l;a++){let h=r.generate(),f=h.data,u=h.maxValue;for(let c=0,m=f.length;c<m;c++){let g=f[c]/u;o[c*s+a]=g}}this.needsUpdate=!0}};var mn=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`;var pn=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`;var gn=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`;var xn=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`;var vn=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`;var yn=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`;var bn=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`;var Tn=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`;var wn=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`;var Sn=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`;var _n=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`;var Rn=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`;var si=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`;var rs=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`;var An=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`;var In=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`;var En=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`;var Mn=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`;var Pn=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`;var Dn=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`;var Fn=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`;var Cn=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`;var Bn=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`;var Ln=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`;var Nn=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`;var zn=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`;var On=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;var oi=class extends Oe{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:Zr},uniforms:{resolution:{value:new V},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new Vr},cameraWorldMatrix:{value:new U},invProjectionMatrix:{value:new U},bvh:{value:new Pr},attributesArray:{value:new Xr},materialIndexAttribute:{value:new xt},materials:{value:new Kr},textures:{value:new Ht().texture},lights:{value:new $r},iesProfiles:{value:new Ht(360,180,{type:re,wrapS:le,wrapT:le}).texture},environmentIntensity:{value:1},environmentRotation:{value:new U},envMapInfo:{value:new Yr},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new U},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new ti},stratifiedOffsetTexture:{value:new ii(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${$e.common_functions}
				${$e.bvh_struct_definitions}
				${$e.bvh_ray_functions}

				// uniform structs
				${mn}
				${gn}
				${pn}
				${xn}
				${vn}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${An}

				#elif RANDOM_TYPE == 1 	// Sobol

					${rs}
					${Gr}
					${tn}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${rs}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${Rn}
				${wn}
				${si}
				${Sn}
				${_n}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${Tn}
				${yn}
				${bn}

				${Fn}
				${Mn}
				${Dn}
				${Pn}
				${En}
				${In}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${zn}
				${Bn}
				${On}
				${Cn}
				${Ln}
				${Nn}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}};function*pc(){let{_renderer:i,_fsQuad:e,_blendQuad:t,_primaryTarget:r,_blendTargets:s,_sobolTarget:n,_subframe:o,alpha:a,material:l}=this,h=new Me,f=new Me,u=t.material,[c,m]=s;for(;;){a?(u.opacity=this._opacityFactor/(this.samples+1),l.blending=Te,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=Yt);let[g,b,d,v]=o,p=r.width,x=r.height;l.resolution.set(p*d,x*v),l.sobolTexture=n.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let y=this.tiles.x||1,T=this.tiles.y||1,S=y*T,w=Math.ceil(p*d),A=Math.ceil(x*v),I=Math.floor(g*p),R=Math.floor(b*x),E=Math.ceil(w/y),_=Math.ceil(A/T);for(let P=0;P<T;P++)for(let D=0;D<y;D++){let F=i.getRenderTarget(),$=i.autoClear,Je=i.getScissorTest();i.getScissor(h),i.getViewport(f);let et=D,_t=P;if(!this.stableTiles){let ke=this._currentTile%(y*T);et=ke%y,_t=~~(ke/y),this._currentTile=ke+1}let tt=T-_t-1;r.scissor.set(I+et*E,R+tt*_,Math.min(E,w-et*E),Math.min(_,A-tt*_)),r.viewport.set(I,R,w,A),i.setRenderTarget(r),i.setScissorTest(!0),i.autoClear=!1,e.render(i),i.setViewport(f),i.setScissor(h),i.setScissorTest(Je),i.setRenderTarget(F),i.autoClear=$,a&&(u.target1=c.texture,u.target2=r.texture,i.setRenderTarget(m),t.render(i),i.setRenderTarget(F)),this.samples+=1/S,D===y-1&&P===T-1&&(this.samples=Math.round(this.samples)),yield}[c,m]=[m,c]}}var kn=new ie,Gt=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new V(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Me(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new fe(new oi),this._blendQuad=new fe(new kr),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new Wr().generate(e),this._primaryTarget=new ye(1,1,{format:C,type:N,magFilter:z,minFilter:z}),this._blendTargets=[new ye(1,1,{format:C,type:N,magFilter:z,minFilter:z}),new ye(1,1,{format:C,type:N,magFilter:z,minFilter:z})],this._compileFunction=()=>{let t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let r=0;e.projectionMatrix.elements[15]>0&&(r=1),e.isEquirectCamera&&(r=2),t.setDefine("CAMERA_TYPE",r),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:r}=this,s=e.getRenderTarget(),n=e.getClearAlpha();e.getClearColor(kn),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(r[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(r[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(kn,n),e.setRenderTarget(s),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=pc.call(this)),this._task.next())}};var Ze=new V,Hn=new V,ni=new Us,ai=new ie,ci=class extends q{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,C,N,it,ne,le,te,te),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:r}=this.image;for(let s=0;s<t;s++)for(let n=0;n<r;n++){Hn.set(t,r),Ze.set(s/t,n/r),Ze.x-=.5,Ze.y=1-Ze.y,ni.theta=Ze.x*2*Math.PI,ni.phi=Ze.y*Math.PI,ni.radius=1,this.generationCallback(ni,Ze,Hn,ai);let a=4*(n*t+s);e[a+0]=ai.r,e[a+1]=ai.g,e[a+2]=ai.b,e[a+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}};var Un=new M,li=class extends ci{constructor(e=512){super(e,e),this.topColor=new ie().set(16777215),this.bottomColor=new ie().set(0),this.exponent=2,this.generationCallback=(t,r,s,n)=>{Un.setFromSpherical(t);let o=Un.y*.5+.5;n.lerpColors(this.bottomColor,this.topColor,o**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}};var ui=class extends be{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}};var is=class extends be{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${si}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},Wt=class{constructor(e){this._renderer=e,this._quad=new fe(new is)}generate(e,t=null,r=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let s=e.images[0],n=this._renderer,o=this._quad;t===null&&(t=4*s.height),r===null&&(r=2*s.height);let a=new ye(t,r,{type:N,colorSpace:s.colorSpace}),l=s.height,h=Math.log2(l)-2,f=1/l,u=1/(3*Math.max(Math.pow(2,h),112));o.material.defines.CUBEUV_MAX_MIP=`${h}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=u,o.material.defines.CUBEUV_TEXEL_HEIGHT=f,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let c=n.getRenderTarget(),m=n.autoClear;n.autoClear=!0,n.setRenderTarget(a),o.render(n),n.setRenderTarget(c),n.autoClear=m;let g=new Uint16Array(t*r*4),b=new Float32Array(t*r*4);n.readRenderTargetPixels(a,0,0,t,r,b),a.dispose();for(let v=0,p=b.length;v<p;v++)g[v]=de.toHalfFloat(b[v]);let d=new q(g,t,r,C,re);return d.minFilter=Ts,d.magFilter=te,d.wrapS=ne,d.wrapT=ne,d.mapping=it,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}};function gc(i){return i.extensions.get("EXT_float_blend")}var St=new V,fi=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new Or,this._pathTracer=new Gt(e),this._queueReset=!1,this._clock=new Hs,this._compilePromise=null,this._lowResPathTracer=new Gt(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new fe(new ui({map:null,transparent:!0,blending:Te,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new V(1024,1024),this.rasterizeSceneCallback=(t,r)=>{this._renderer.render(t,r)},this.renderToCanvasCallback=(t,r,s)=>{let n=r.autoClear;r.autoClear=!1,s.render(r),r.autoClear=n},this.setScene(new It,new er)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,r={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let s=this._generator;if(s.setObjects(e),this._buildAsync)return s.generateAsync(r.onProgress).then(n=>this._updateFromResults(e,t,n));{let n=s.generate();return this._updateFromResults(e,t,n)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,r=this._materials,s=this.textureSize,n=cn(r);e.textures.setTextures(t,n,s.x,s.y),e.materials.updateFrom(r,n),this.reset()}updateLights(){let e=this.scene,t=this._renderer,r=this._pathTracer.material,s=ln(e),n=an(s);r.lights.updateFrom(s,n),r.iesProfiles.setTextures(t,n),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new li(16);let r=this._colorBackground;r.topColor.equals(e.background)||(r.topColor.set(e.background),r.bottomColor.set(e.background),r.update()),t.backgroundMap=r,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let r=new Wt(this._renderer).generate(e.background);this._internalBackground=r,t.backgroundMap=r,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment!==null?e.environmentIntensity??1:0,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){let r=new Wt(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(r)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,r){let{materials:s,geometry:n,bvh:o,bvhChanged:a,needsMaterialIndexUpdate:l}=r;this._materials=s;let f=this._pathTracer.material;return a&&(f.bvh.updateFrom(o),f.attributesArray.updateFrom(n.attributes.normal,n.attributes.tangent,n.attributes.uv,n.attributes.color)),l&&f.materialIndexAttribute.updateFrom(n.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),r}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,r=this._renderer,s=this._clock,n=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,n.material.opacity=0,s.start());let o=s.getDelta()*1e3,a=s.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=a&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!gc(r),e.alpha=t.alpha,this.renderToCanvas){let l=this._renderer,h=this.minSamples;if(a>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?n.material.opacity=Math.min(n.material.opacity+o/this.fadeDuration,1):n.material.opacity=1),!this.enablePathTracing||this.samples<h||n.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let f=n.material.opacity;n.material.opacity=1-n.material.opacity,n.material.map=e.target.texture,n.render(l),n.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&n.material.opacity>0&&(n.material.opacity<1&&(n.material.blending=this.dynamicLowRes?bs:Yt),n.material.map=t.target.texture,this.renderToCanvasCallback(t.target,l,n),n.material.blending=Te)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(St);let e=Math.floor(this.renderScale*St.x),t=Math.floor(this.renderScale*St.y);if(this._pathTracer.getSize(St),St.x!==e||St.y!==t){let r=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*r),Math.floor(t*r))}}}};var hi=class extends zs{constructor(...e){super(...e),this.iesMap=null,this.radius=0}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this.radius=e.radius,this}};var di=class extends ks{constructor(...e){super(...e),this.isCircular=!1}copy(e,t){return super.copy(e,t),this.isCircular=e.isCircular,this}};var Gn=i=>new M(i.x,i.y,i.z);function ss(i,e=.55,t=0){return new We({color:i,roughness:e,metalness:t,ior:1.43})}function os(i,e,t,r,s,n){let o=Gn(t),a=Gn(r),l=a.clone().sub(o),h=new Q(new ot(n,s,l.length(),20,1),e);return h.position.copy(o).add(a).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new M(0,1,0),l.normalize()),i.add(h),h}function Vn(i,e){if(i.character!=="scan"||!e)throw new Error("\u4EC5\u652F\u6301\u539F\u59CB\u626B\u63CF\u548C\u5DF2\u5BFC\u5165\u7684 PMX\uFF1B\u65E7\u81EA\u5236\u4EBA\u7269\u5DF2\u79FB\u9664\u3002");let t=new Se,r=new Se;t.name="Lee scanned head",t.rotation.y=i.bodyYaw*Math.PI/180,t.position.set(i.x||0,i.y||0,i.z||0),r.position.set(0,1.62,0),r.rotation.set(i.pitch*Math.PI/180,i.yaw*Math.PI/180,0,"YXZ");let s=ir(i.material,i.roughness),n=new We({roughness:s.roughness,specularIntensity:s.specular,ior:1.43}),o=s.textured?.55:s.color;return n.color.setRGB(o,o,o,he),r.add(new Q(e,n)),t.add(r),t.userData={head:r,skin:n,scan:!0},t}function qn(i){let e=new Se;e.name="Studio prop",e.position.set(i.x,0,i.z),e.rotation.y=i.yaw*Math.PI/180;let t=ss(10791602,.32,.75),r=ss(2895929,.8),s=ss(10385746,.65);function n(o,a,l){let h=new Q(new st(...o),l);h.position.set(...a),e.add(h)}if(i.type==="ladder"){for(let o of[-1,1])for(let a of[-1,1])os(e,t,{x:o*.25,y:.025,z:a*.34},{x:o*.2,y:.75,z:0},.019,.019);for(let o=1;o<=3;o++){let a=o*.24,l=.31*(1-o/3);n([.43,.035,.22],[0,a-.0175,l],t),n([.4,.006,.205],[0,a+.003,l],r)}for(let o of[-1,1])os(e,t,{x:o*.235,y:.26,z:-.23},{x:o*.235,y:.26,z:.23},.012,.012);for(let o of[-1,1])for(let a of[-1,1])n([.065,.03,.075],[o*.25,.015,a*.34],r)}else if(i.type==="stool"){let o=new Q(new ot(.2,.2,.05,48),s);o.position.y=.505,e.add(o);for(let a of[-1,1])for(let l of[-1,1])os(e,t,{x:a*.15,y:.02,z:l*.15},{x:a*.11,y:.48,z:l*.11},.018,.018)}else i.type==="cube"&&n([.5,.5,.5],[0,.25,0],s);return e}function mi(i,e=[]){if(!i)return;let t=new Set,r=new Set;i.traverse(s=>{s.geometry&&!e.includes(s.geometry)&&t.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(n=>r.add(n))}),t.forEach(s=>s.dispose()),r.forEach(s=>s.dispose()),i.removeFromParent()}function Yn(i,e,t){let r=ms(t),s=ps(t),n=xs(gs(s,r)),o=fs(t.kelvin,t.tint),a=t.type==="fresnel";i.position.set(r.x,r.y,r.z),i.lookAt(s.x,s.y,s.z),i.rotateZ(t.roll*He),i.color.setRGB(...o,he),i.intensity=a?0:ds(t),i.width=t.width,i.height=t.height,i.isCircular=t.shape==="disk",e.angle=t.beam*He/2,e.penumbra=t.edge,e.radius=t.aperture/2;let l=e.radius/Math.tan(e.angle);e.position.set(r.x-n.x*l,r.y-n.y*l,r.z-n.z*l),e.target.position.set(s.x,s.y,s.z),e.target.updateMatrixWorld(!0),e.color.setRGB(...o,he),e.intensity=a?vs(t):0,e.decay=2,e.distance=0}function $n(i){let e=i.geometry.clone();if(!e.attributes.position?.count)throw new Error("\u626B\u63CF\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u9876\u70B9");for(let[o,a]of Object.entries(e.attributes)){if(!a.isInterleavedBufferAttribute)continue;let l=new a.data.array.constructor(a.count*a.itemSize);for(let h=0;h<a.count;h++)for(let f=0;f<a.itemSize;f++)l[h*a.itemSize+f]=a.data.array[h*a.data.stride+a.offset+f];e.setAttribute(o,new O(l,a.itemSize,a.normalized))}e.applyMatrix4(i.matrixWorld),e.computeBoundingBox();let t=e.boundingBox,r=new M;t.getCenter(r);let s=t.max.y-t.min.y;if(!Number.isFinite(s)||s<=0)throw new Error("\u626B\u63CF\u9AD8\u5EA6\u65E0\u6548");let n=.32/s;return e.translate(-r.x,-r.y,-r.z),e.scale(n,n,n),e.computeVertexNormals(),e.computeBoundingBox(),e}var Xn=fa(ha(),1);var xc=new URL("../models/MMD/",import.meta.url),vc=i=>new M(i.x,i.y,i.z),yc=i=>new Xn.default.Parser().parsePmx(i,!0);function bc(i){let e=Array.from(i.index.array),t=new Map,r=[],s=new Map,n=i.attributes.position.count;for(let o of i.groups)for(let a=o.start;a<o.start+o.count;a++){let l=e[a];if(!t.has(l)){t.set(l,o.materialIndex);continue}if(t.get(l)===o.materialIndex)continue;let h=l+":"+o.materialIndex;s.has(h)||(s.set(h,n+r.length),r.push(l)),e[a]=s.get(h)}if(r.length){for(let[o,a]of Object.entries(i.attributes)){let l=new a.array.constructor((n+r.length)*a.itemSize);l.set(a.array),r.forEach((h,f)=>l.set(a.array.subarray(h*a.itemSize,(h+1)*a.itemSize),(n+f)*a.itemSize)),i.setAttribute(o,new O(l,a.itemSize,a.normalized))}i.setIndex(e)}}function Qn(i){let e=i.name,t=/[发髮]\s*[+＋]/.test(e)||i.diffuse[3]===0,r=/^(目|眼瞳|眼白|白目)/.test(e)&&!/[影眉睫]/.test(e),s=/[发髮]/.test(e)&&!/[饰飾带帶]/.test(e),n=/^(颜|顔|脸|肌|首)|皮肤/.test(e);return{excluded:t,roughness:r?.3:s?.52:n?.68:.72,specularIntensity:r||s?.35:.25}}function Tc(i,e,t=new Map){let r=cs[e];if(!r)throw new Error("\u672A\u77E5\u7684 MMD \u4EBA\u7269");let s=new Se;s.name=e;let n=new se,o=i.vertices.length,a=new Float32Array(o*3),l=new Float32Array(o*3),h=new Float32Array(o*2),f=new Uint16Array(o*4),u=new Float32Array(o*4);i.vertices.forEach((p,x)=>{a.set(p.position,x*3),l.set(p.normal,x*3),h.set(p.uv,x*2);for(let y=0;y<4;y++)f[x*4+y]=Math.max(0,p.skinIndices[y]||0),u[x*4+y]=p.skinWeights[y]||0}),n.setAttribute("position",new O(a,3)),n.setAttribute("normal",new O(l,3)),n.setAttribute("uv",new O(h,2)),n.setAttribute("skinIndex",new O(f,4)),n.setAttribute("skinWeight",new O(u,4));let c=[],m=[],g=0;i.materials.forEach(p=>{let x=Qn(p),y=g+p.faceCount;if(!x.excluded){let T=c.length;for(let A=g;A<y;A++)c.push(...i.faces[A].indices);let S=t.get(p.textureIndex)||null,w=new We({name:p.name,map:S,color:new ie().setRGB(...p.diffuse.slice(0,3),he),opacity:p.diffuse[3],transparent:!0,alphaTest:0,side:Ee,roughness:x.roughness,metalness:0,specularIntensity:x.specularIntensity,ior:1.45,emissive:0});w.userData.originalMap=S,w.userData.originalColor=w.color.clone(),w.userData.originalRoughness=x.roughness,w.userData.originalSpecular=x.specularIntensity,n.addGroup(T,c.length-T,m.length),m.push(w)}g=y}),n.setIndex(c),bc(n),n.computeBoundingBox(),n.computeBoundingSphere();let b=new Cs(n,m);b.frustumCulled=!1,b.name="Original PMX mesh",s.add(b);let d=i.bones.map(p=>{let x=new Bs;return x.name=p.name,x.position.fromArray(p.position),x});i.bones.forEach((p,x)=>{p.parentIndex>=0&&p.parentIndex<d.length?(d[x].position.sub(new M().fromArray(i.bones[p.parentIndex].position)),d[p.parentIndex].add(d[x])):b.add(d[x])}),s.updateMatrixWorld(!0);let v=new Ls(d);return b.bind(v),b.normalizeSkinWeights(),s.scale.setScalar(r.scale),s.position.fromArray(r.offset),s.userData={mmd:!0,id:e,mesh:b,skeleton:v,bones:d,byName:new Map(d.map(p=>[p.name,p])),profile:r,rest:d.map(p=>p.position.clone()),boneData:i.bones,materials:m,textures:t,grantOrder:i.bones.map((p,x)=>({b:p,i:x})).filter(p=>p.b.grant).sort((p,x)=>p.b.transformationClass-x.b.transformationClass||p.i-x.i),masks:new Map,vertices:o,triangles:c.length/3},s.updateMatrixWorld(!0),s}async function Kn(i,e){let t=as.find(l=>l.id===i);if(!t)throw new Error("\u6CA1\u6709\u8FD9\u4E2A\u89D2\u8272");e?.(`\u6B63\u5728\u8BFB\u53D6 ${t.name} \u7684\u539F\u59CB\u6A21\u578B\u548C\u8D34\u56FE`);let r=new URL(i+"/",xc),s=await fetch(new URL(t.file,r));if(!s.ok){let l=new Error(`${t.name} \u7684\u672C\u5730 PMX \u6587\u4EF6\u7F3A\u5931\u3002\u8BF7\u4F7F\u7528\u5305\u542B\u89D2\u8272\u7D20\u6750\u7684\u4E2A\u4EBA\u7248\uFF0C\u6216\u6309 README \u653E\u5165\u81EA\u5DF1\u7684\u6A21\u578B\u5305\u3002`);throw l.missing=s.status===404,l}let n=yc(await s.arrayBuffer()),o=new Map,a=[...new Set(n.materials.filter(l=>!Qn(l).excluded).map(l=>l.textureIndex).filter(l=>l>=0))];try{return await Promise.all(a.map(async l=>{let h=n.textures[l].replaceAll("\\","/");if(h.split("/").includes("..")||h.startsWith("/")||h.includes(":"))throw new Error("\u6A21\u578B\u8D34\u56FE\u8DEF\u5F84\u65E0\u6548");let f=await new rr().loadAsync(new URL(h,r).href);f.name=h,f.colorSpace=Zt,f.flipY=!1,f.wrapS=f.wrapT=ne,f.anisotropy=4,o.set(l,f)})),Tc(n,i,o)}catch(l){throw o.forEach(h=>h.dispose()),new Error(`${t.name} \u8D34\u56FE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u4FDD\u7559\u538B\u7F29\u5305\u4E2D\u7684\u6587\u4EF6\u5939\u7ED3\u6784\u3002${l.message||""}`)}}function jn(i,e,t,r){i.updateMatrixWorld(!0);let s=e.getWorldPosition(new M),n=t.getWorldPosition(new M).sub(s).normalize(),o=vc(r).sub(s).normalize(),a=new we().setFromUnitVectors(n,o),l=e.getWorldQuaternion(new we).premultiply(a);e.quaternion.copy(e.parent.getWorldQuaternion(new we).invert().multiply(l))}function Zn(i,e){let t=i.userData,r=t.profile,s=e.pose;if(i.rotation.set(0,0,0),i.position.fromArray(r.offset),i.position.y+=e.body?s.rootY-r.pelvis.y:0,t.bones.forEach((a,l)=>{a.position.copy(t.rest[l]),a.quaternion.identity()}),i.updateMatrixWorld(!0),s.id!=="rest"){let a=ls(e);for(let[l,h]of[["left","\u53F3"],["right","\u5DE6"]])for(let[f,u]of[["Hand",["\u8155","\u3072\u3058","\u624B\u9996"]],["Foot",["\u8DB3","\u3072\u3056","\u8DB3\u9996"]]]){let[c,m,g]=u.map(d=>t.byName.get(h+d));if(!c||!m||!g)continue;let b=a.limbs[l+f];jn(i,c,m,b.mid),jn(i,m,g,b.end)}}let n=t.byName.get("\u982D");n&&n.rotation.set(e.pitch*Math.PI/180,e.yaw*Math.PI/180,0,"YXZ");for(let a of sr.filter(l=>!l.kind)){let l=e.joints?.[a.id],h=or(t.byName,a);l&&h&&h.quaternion.multiply(new we().setFromEuler(new Ds(l.x*Math.PI/180,l.y*Math.PI/180,l.z*Math.PI/180,"XYZ")))}for(let{b:a,i:l}of t.grantOrder){let h=a.grant,f=t.bones[h.parentIndex];f&&(h.affectRotation&&t.bones[l].quaternion.multiply(new we().slerp(f.quaternion,h.ratio)),h.affectPosition&&t.bones[l].position.add(f.position.clone().sub(t.rest[h.parentIndex]).multiplyScalar(h.ratio)))}if(t.id==="yixuan")for(let a of["\u5DE6\u8896_0_1","\u53F3\u8896_0_1"]){let l=t.byName.get(a);l&&(i.updateMatrixWorld(!0),l.quaternion.copy(l.parent.getWorldQuaternion(new we).invert()))}i.rotation.y=e.bodyYaw*Math.PI/180;let o=new M(r.offset[0],0,r.offset[2]).applyAxisAngle(new M(0,1,0),i.rotation.y);i.position.x=o.x+(e.x||0),i.position.y+=e.y||0,i.position.z=o.z+(e.z||0),i.updateMatrixWorld(!0),t.skeleton.update(),wc(i,e)}function wc(i,e){let t=i.userData,r=ir(e.material,e.roughness);t.materials.forEach(s=>{let n=s.userData.originalMap;!r.textured&&n&&!t.masks.has(n)&&t.masks.set(n,Ws(n)),s.map=r.textured?n:t.masks.get(n)||null,r.textured?s.color.copy(s.userData.originalColor):s.color.setRGB(r.color,r.color,r.color,he),s.roughness=e.material==="skin"?s.userData.originalRoughness:r.roughness,s.specularIntensity=e.material==="skin"?s.userData.originalSpecular:r.specular,s.needsUpdate=!0})}function Jn(i){i&&(i.removeFromParent(),i.userData.mesh.geometry.dispose(),i.userData.skeleton.dispose(),i.userData.materials.forEach(e=>e.dispose()),i.userData.textures.forEach(e=>e.dispose()),i.userData.masks.forEach(e=>e.dispose()))}function ea(i){if(i.userDataMaterialGroups)return i;let e=i.staticGeometryGenerator,t=e.generate.bind(e);return e.generate=function(...r){let s=this._getMeshes(),n=t(...r),o=n.geometry;o.clearGroups();let a=0,l=0;for(let h of s){let f=h.geometry,u=f.index?.count??f.attributes.position.count,c=Array.isArray(h.material),m=c&&f.groups.length?f.groups:[{start:0,count:u,materialIndex:0}];for(let g of m)o.addGroup(a+g.start,Math.min(g.count,u-g.start),l+(c?g.materialIndex:0));a+=u,l+=c?h.material.length:1}return i._materialUuids=null,n},i.userDataMaterialGroups=!0,i}var Sc=new URL("../models/LeePerrySmith/",import.meta.url),ce=i=>new ie().setRGB(i,i,i,he),_c="varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",Rc=`
precision highp float;
uniform sampler2D source;
uniform vec3 wb;
uniform float expGain;
uniform int mode;
uniform vec2 imageSize;
varying vec2 vUv;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec3 srgb(vec3 x){return mix(12.92*x,1.055*pow(max(x,vec3(0.)),vec3(1./2.4))-.055,step(vec3(.0031308),x));}
vec3 falseColor(float y){
  if(y<.008)return vec3(.13,.09,.28);
  if(y<.035)return vec3(.16,.25,.60);
  if(y<.10)return vec3(.18,.65,.77);
  if(y<.26)return vec3(.31,.64,.43);
  if(y<.55)return vec3(.91,.75,.32);
  if(y<1.)return vec3(.88,.40,.22);
  return vec3(1.,.12,.43);
}
void main(){
  vec3 raw=max(texture2D(source,vUv).rgb,vec3(0.))*wb*expGain;
  vec3 outColor=srgb(aces(raw));
  if(mode==3)outColor=srgb(max(texture2D(source,vUv).rgb,vec3(0.)));
  if(mode==4)outColor=srgb(aces(vec3(dot(raw,vec3(.2126,.7152,.0722)))));
  if(mode==1 && max(max(raw.r,raw.g),raw.b)>=1.) {
    float stripe=step(.5,fract((gl_FragCoord.x+gl_FragCoord.y)/12.));
    outColor=mix(outColor,mix(vec3(.9,.18,.35),vec3(.15,.04,.1),stripe),.85);
  }
  if(mode==2)outColor=falseColor(dot(raw,vec3(.2126,.7152,.0722)));
  gl_FragColor=vec4(outColor,1.);
}`;async function ia(i,e){let t=await fetch(new URL(i,Sc),{signal:AbortSignal.timeout(15e3)});if(!t.ok)throw new Error(`\u672C\u5730\u7D20\u6750 ${i} \u7F3A\u5931\uFF08${t.status}\uFF09\u3002\u8BF7\u8FD0\u884C npm run assets\uFF0C\u7136\u540E\u91CD\u65B0\u542F\u52A8\u3002`);let r=await t.arrayBuffer();return e?.(i),r}async function ta(i,e=!1){let t=await ia(i),r=new Blob([t],{type:"image/jpeg"}),s=URL.createObjectURL(r);try{let n=await new rr().loadAsync(s);return n.colorSpace=e?Zt:Rs,n.flipY=!1,n}finally{URL.revokeObjectURL(s)}}var ra=class{constructor(e,t={}){this.container=e,this.callbacks=t,this.paused=!1,this.ready=!1,this.disposed=!1,this.frame=0,this.started=performance.now(),this.lastStats=0,this.dirty=!0,this.characterCache=new Map,this.characterLoads=new Map,this.applySerial=0,this.loadingCharacter=!1,this.interacting=!1,this.pendingFull=!1,this.basicMaterials=new Map;let r=document.createElement("canvas"),s={antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"},n=r.getContext("webgl2",s);if(!n)throw new Error("\u6D4F\u89C8\u5668\u6CA1\u6709\u542F\u7528 WebGL 2\u3002\u8BF7\u5728\u672C\u673A Chrome / Edge \u5F00\u542F\u786C\u4EF6\u52A0\u901F\uFF0C\u5E76\u66F4\u65B0\u663E\u5361\u9A71\u52A8\u540E\u91CD\u8BD5\u3002");this.renderer=new Gs({canvas:r,context:n,...s});let o=this.renderer.getContext();if(typeof WebGL2RenderingContext>"u"||!(o instanceof WebGL2RenderingContext)||!o.getExtension("EXT_color_buffer_float"))throw new Error("\u8FD9\u53F0\u8BBE\u5907\u6CA1\u6709\u53EF\u7528\u7684 WebGL 2 \u6D6E\u70B9\u6E32\u67D3\u3002\u8BF7\u5728\u684C\u9762\u7248 Chrome / Edge \u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002");this.renderer.debug.onShaderError=()=>{this.shaderError=new Error("\u8FD9\u53F0\u8BBE\u5907\u672A\u80FD\u7F16\u8BD1\u8DEF\u5F84\u8FFD\u8E2A\u7740\u8272\u5668\u3002\u8BF7\u66F4\u65B0\u663E\u5361\u9A71\u52A8\uFF0C\u5728\u684C\u9762 Chrome / Edge \u4E2D\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002")},this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.renderer.toneMapping=$t,this.renderer.outputColorSpace=he,this.renderer.domElement.setAttribute("aria-label","\u9010\u6B65\u6536\u655B\u7684\u7269\u7406\u8DEF\u5F84\u8FFD\u8E2A\u4EBA\u50CF"),e.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",a=>{a.preventDefault(),this.paused=!0,t.error?.(new Error("\u663E\u5361\u4E0A\u4E0B\u6587\u4E2D\u65AD\u3002\u8BF7\u4FDD\u5B58\u65B9\u6848\uFF0C\u518D\u5237\u65B0\u9875\u9762\uFF1B\u4E5F\u53EF\u4EE5\u964D\u4F4E\u753B\u8D28\u540E\u91CD\u8BD5\u3002"))}),this.scene=new It,this.scene.background=new ie(0),this.scene.environment=null,this.envTexture=new q(new Float32Array([1,1,1,1,1,1,1,1]),2,1,C,N),this.envTexture.mapping=it,this.envTexture.needsUpdate=!0,this.camera=new bt(35,2/3,.03,30),this.camera.position.set(0,Ie.y,1.65),this.camera.lookAt(0,Ie.y,0),this.pt=new fi(this.renderer),ea(this.pt._generator),this.pt.renderToCanvas=!1,this.pt.rasterizeScene=!1,this.pt.dynamicLowRes=!1,this.pt.minSamples=1,this.pt.renderDelay=60,this.pt.fadeDuration=0,this.pt.tiles.set(2,2),this.pt.textureSize.set(2048,2048),this.pt.filterGlossyFactor=.2,this.pt.transmissiveBounces=24,this.screenScene=new It,this.screenCamera=new Fs,this.screenMaterial=new be({vertexShader:_c,fragmentShader:Rc,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{source:{value:null},wb:{value:new M(1,1,1)},expGain:{value:.045},mode:{value:0},imageSize:{value:new V(1,1)}}}),this.screenScene.add(new Q(new bi(2,2),this.screenMaterial)),this.albedoTarget=new ye(1,1,{type:re}),this.lights=["key","rim","top"].map(()=>{let a=new di(16777215,1,1,1);return this.scene.add(a),a}),this.spots=["key","rim","top"].map(()=>{let a=new hi;return a.decay=2,a.distance=0,this.scene.add(a,a.target),a}),this.buildRoom(),this.buildObjects(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e)}buildRoom(){this.wallMat=new _e({color:ce(.025),roughness:1}),this.floorMat=new _e({color:ce(.035),roughness:.95});let e=(t,r,s,n,o=this.wallMat)=>{let a=new Q(new bi(t,r),o);return a.position.set(...s),a.rotation.set(...n),this.scene.add(a),a};e(8,6,[0,3,-2.6],[0,0,0]),e(8,8,[0,0,0],[-Math.PI/2,0,0],this.floorMat),e(8,6,[-4,3,0],[0,Math.PI/2,0]),e(8,6,[4,3,0],[0,-Math.PI/2,0]),e(8,8,[0,4.5,0],[Math.PI/2,0,0]),this.boardMat=new _e({color:ce(.8),roughness:.95,side:Ee}),this.board=new Q(new st(.025,1.1,.8),this.boardMat),this.board.visible=!1,this.scene.add(this.board),this.board2Mat=this.boardMat.clone(),this.board2=new Q(new st(.025,1,1),this.board2Mat),this.board2.visible=!1,this.scene.add(this.board2)}buildObjects(){this.pivot=new Se,this.pivot.position.set(Ie.x,Ie.y,Ie.z),this.scene.add(this.pivot),this.headMat=new We({color:ce(.55),roughness:.42,metalness:0,ior:1.42,specularIntensity:1}),this.head=null,this.skinMap=null,this.normalMap=null,this.references=new Se,this.scene.add(this.references),this.references.visible=!1,[new _e({color:ce(.18),roughness:1}),new _e({color:ce(.85),roughness:.35}),new _e({color:ce(.8),roughness:.14,metalness:1})].forEach((n,o)=>{let a=new Q(new Ns(.105,48,32),n);a.position.set((o-1)*.245,Ie.y,0),this.references.add(a)});let t=new Q(new st(.86,.03,.55),new _e({color:ce(.18),roughness:1}));t.position.set(0,Ie.y-.12,0),this.references.add(t);let r=new _e({color:ce(.035),roughness:.7});this.stand=new Q(new ot(.075,.105,.25,48),r),this.stand.position.set(0,-.235,-.018),this.pivot.add(this.stand);let s=new Q(new ot(.15,.15,.025,64),r);s.position.set(0,-.37,-.018),this.pivot.add(s)}async init(e){this.state=e,this.callbacks.progress?.("\u6B63\u5728\u52A0\u8F7D\u4EBA\u8138\u626B\u63CF \xB7 \u7EA6 0.4 MB");let t=null;try{let r=await ia("LeePerrySmith.glb"),s=await new $s().parseAsync(r,""),n;if(s.scene.updateMatrixWorld(!0),s.scene.traverse(a=>{a.isMesh&&!n&&(n=a)}),!n)throw new Error("\u626B\u63CF\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u4EBA\u8138\u7F51\u683C");let o=$n(n);this.head=new Q(o,this.headMat),this.pivot.add(this.head),this.callbacks.asset?.({scan:!0,textures:!1,triangles:Math.round((o.index?.count||o.attributes.position.count)/3)})}catch(r){t=r,this.callbacks.asset?.({scan:!1,textures:!1,error:r.message})}this.callbacks.progress?.("\u6B63\u5728\u51C6\u5907\u5149\u7EBF\u8FFD\u8E2A \xB7 \u9996\u6B21\u7740\u8272\u5668\u7F16\u8BD1\u7A0D\u6162");try{await this.apply(e,"scene")}catch(r){if(!r.missing||!this.head)throw r;Object.assign(e.model,{character:"scan",material:"clay",hair:"none",body:!1}),this.callbacks.model?.(),this.callbacks.notice?.("\u672C\u5305\u672A\u5305\u542B\u79C1\u6709\u89D2\u8272\u7D20\u6750\uFF0C\u5DF2\u6253\u5F00 Lee \u626B\u63CF\u3002\u6309 README \u52A0\u5165\u81EA\u5DF1\u7684\u6A21\u578B\u5305\u540E\u5373\u53EF\u5207\u6362\u3002"),await this.apply(e,"scene")}this.ready=!0,this.resize(),this.pt.updateCamera(),this.pt.reset(),this.animate(),t?this.callbacks.notice?.("Lee \u626B\u63CF\u7D20\u6750\u672A\u52A0\u8F7D\uFF1B\u5176\u4ED6\u5DF2\u5BFC\u5165\u7684\u89D2\u8272\u4ECD\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"):this.loadSkinTextures()}async loadSkinTextures(){let e=await Promise.allSettled([ta("Map-COL.jpg",!0),ta("Infinite-Level_02_Tangent_SmoothUV.jpg")]);if(this.disposed){e.forEach(t=>t.status==="fulfilled"&&t.value.dispose());return}this.skinMap=e[0].status==="fulfilled"?e[0].value:null,this.normalMap=e[1].status==="fulfilled"?e[1].value:null,this.callbacks.asset?.({scan:!!this.head,textures:!!this.skinMap,partial:!this.normalMap}),this.state.model.character==="scan"&&this.state.model.material==="skin"&&this.apply(this.state,"materials").catch(t=>this.callbacks.error?.(t))}async apply(e,t="lights"){this.state=e;let{camera:r,model:s,room:n,render:o}=e;if(t==="display"){this.updateDisplay(),this.dirty=!0;return}let a=++this.applySerial;if((xi(s.character)||Vt.includes(s.character))&&s.object==="head"&&!this.characterCache.has(s.character)){this.loadingCharacter=!0,this.callbacks.busy?.(!0);let d=s.character;try{this.characterLoads.has(d)||this.characterLoads.set(d,Vt.includes(d)?js(d):Kn(d,p=>this.callbacks.progress?.(p)));let v=await this.characterLoads.get(d);if(this.disposed)return;this.characterCache.set(d,v)}catch(v){if(this.characterLoads.delete(d),a!==this.applySerial)return;throw v}finally{a===this.applySerial&&(this.loadingCharacter=!1,this.callbacks.busy?.(!1))}if(a!==this.applySerial)return}this.loadingCharacter=!1;let l=us(s);qs(e).forEach((d,v)=>Yn(this.lights[v],this.spots[v],d));let h=JSON.stringify(s),f=!1,u=Vt.includes(s.character)&&s.object==="head"?s.character:null;if(u){let d=this.characterCache.get(u);d.userData.externalKind=u;let v=(d.userData.facingY||0)+(s.yaw+s.bodyYaw)*He;this.character!==d?(this.character&&(this.character.userData.externalKind||this.character.userData.mmd?this.character.removeFromParent():mi(this.character,[this.head?.geometry])),this.character=d,this.scene.add(d),this.characterSignature=h,f=!0):this.characterSignature!==h&&(this.characterSignature=h,f=!0),d.rotation.y!==v&&(d.rotation.y=v,f=!0)}else if(this.characterSignature!==h||!this.character){if(this.character&&(this.character.userData.externalKind||this.character.userData.mmd?this.character.removeFromParent():mi(this.character,[this.head?.geometry])),xi(s.character))this.character=this.characterCache.get(s.character),Zn(this.character,s);else{if(!this.head)throw new Error("Lee \u626B\u63CF\u7D20\u6750\u6CA1\u6709\u52A0\u8F7D\uFF0C\u8BF7\u9009\u62E9\u5DF2\u5BFC\u5165\u7684\u89D2\u8272\u6216\u6062\u590D\u626B\u63CF\u7D20\u6750\u3002");this.character=Vn(s,this.head.geometry)}this.scene.add(this.character),this.characterSignature=h,f=!0}let c=JSON.stringify(e.prop);c!==this.propSignature&&(mi(this.prop),this.prop=qn(e.prop),this.scene.add(this.prop),this.propSignature=c,f=!0),this.pivot.visible=!1,this.references.visible=s.object==="spheres",this.character.visible=!this.references.visible;let m=this.character.userData.skin,g=s.character==="scan"&&["skin","diffuse"].includes(s.material)&&this.skinMap;m&&(m.map=g?this.skinMap:null,m.normalMap=g?this.normalMap:null,g&&m.color.copy(ce(s.skinTone)),m.normalScale.set(.65,.65),m.needsUpdate=!0),this.wallMat.color.copy(ce(n.reflectance)),this.floorMat.color.copy(ce(n.floor)),this.scene.background.setRGB(n.background,n.background,n.background,he),this.scene.backgroundIntensity=1,this.scene.environment=n.background>0?this.envTexture:null,this.scene.environmentIntensity=n.background,this.board.visible=n.board!=="off",this.boardMat.color.copy(ce(n.board==="black"?.008:n.board==="silver"?.88:.8)),this.boardMat.metalness=n.board==="silver"?1:0,this.boardMat.roughness=n.board==="silver"?.23:.95,this.board.rotation.set(0,0,0),this.board.scale.set(1,n.boardSize/1.1,n.boardWidth/.8),n.board==="below"?(this.board.position.set(0,l.y-.4,.18),this.board.rotation.set(0,0,Math.PI/2),this.board.rotateY(-.18)):(this.board.position.set(n.boardSide*n.boardDistance,n.boardHeight,.1),this.board.rotation.y=n.boardSide*n.boardAngle*He),this.board2.visible=n.board2!=="off",this.board2Mat.color.copy(ce(n.board2==="black"?.008:n.board2==="silver"?.88:.8)),this.board2Mat.metalness=n.board2==="silver"?1:0,this.board2Mat.roughness=n.board2==="silver"?.23:.95,this.board2.position.set(-n.boardSide*n.board2Distance,n.board2Height,.1),this.board2.rotation.y=-n.boardSide*n.board2Angle*He,this.board2.scale.set(1,n.board2Size,n.board2Width);let b=Ys(r);this.camera.position.set(b.x,b.y,b.z),this.camera.lookAt(r.x||0,r.targetY,0),this.camera.filmGauge=Vs.find(d=>d.id===r.body)?.sensor??36,this.camera.setFocalLength(r.focal),this.camera.focusDistance=r.dof?r.focus:r.distance,r.dof?this.camera.fStop=r.aperture:this.camera.bokehSize=0,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),this.pt.bounces=o.bounces,this.scene.updateMatrixWorld(!0),this.interacting||o.mode==="albedo"?this.pendingFull=!0:this.pendingFull||t==="scene"||t==="geometry"||f?(this.pt.setScene(this.scene,this.camera),this.pendingFull=!1):t==="camera"?this.pt.updateCamera():t==="materials"?(this.pt.updateMaterials(),this.pt.updateEnvironment()):this.pt.updateLights(),this.pt.reset(),this.started=performance.now(),this.dirty=!0,this.updateDisplay(),this.quality!==o.quality&&(this.quality=o.quality,this.resize()),this.callbacks.applied?.()}updateDisplay(){let e=this.state.camera;this.screenMaterial.uniforms.wb.value.set(...hs(e.wb,e.tint)),this.screenMaterial.uniforms.expGain.value=ys(e),this.screenMaterial.uniforms.mode.value=this.interacting||this.state.render.mode==="albedo"?3:{beauty:0,clip:1,falsecolor:2,mono:4}[this.state.render.diagnostic]||0}resize(){if(!this.state)return;let e=this.container.getBoundingClientRect();if(e.width<1||e.height<1)return;let t={draft:.55,balanced:.9,fine:1.5}[this.state.render.quality],r={draft:480,balanced:900,fine:1600}[this.state.render.quality],s=Math.min(t,r/Math.max(e.width,e.height)),n=Math.max(128,Math.round(e.width*s)),o=Math.max(128,Math.round(e.height*s)),a=this.renderer.getSize(new V);a.x===n&&a.y===o||(this.renderer.setSize(n,o,!1),this.camera.aspect=n/o,this.albedoTarget.setSize(n,o),this.camera.setFocalLength(this.state.camera.focal),this.camera.updateProjectionMatrix(),this.ready&&(this.pt.updateCamera(),this.pt.reset()),this.dirty=!0,this.callbacks.resolution?.({width:n,height:o}))}animate(){if(!this.disposed&&(this.frame=requestAnimationFrame(()=>this.animate()),!(document.hidden||!this.ready||this.loadingCharacter)))try{let e=this.interacting||this.state.render.mode==="albedo";if(!e&&!this.paused&&this.pt.samples<this.state.render.maxSamples){if(this.pt.renderSample(),this.shaderError)throw this.shaderError;this.dirty=!0}this.dirty&&this.pt.target&&(e&&this.renderAlbedo(),this.screenMaterial.uniforms.source.value=e?this.albedoTarget.texture:this.pt.target.texture,this.renderer.setRenderTarget(null),this.renderer.render(this.screenScene,this.screenCamera),this.dirty=!1);let r=performance.now();r-this.lastStats>400&&(this.callbacks.stats?.({samples:e?1:Math.floor(this.pt.samples),elapsed:(r-this.started)/1e3,paused:this.paused,complete:!e&&this.pt.samples>=this.state.render.maxSamples,preview:e,interacting:this.interacting}),this.lastStats=r)}catch(e){this.paused=!0,this.ready=!1,this.callbacks.error?.(e)}}renderAlbedo(){let e=[],t=new Set,r=this.scene.background;try{this.scene.background=new ie(.025,.025,.025),this.scene.traverseVisible(s=>{if(!s.isMesh)return;let n=s.material,o=a=>{t.add(a);let l=this.basicMaterials.get(a);l||(l=new Jt,this.basicMaterials.set(a,l));let h=l.map!==a.map;return l.color.copy(a.color),l.map=a.map,l.opacity=a.opacity,l.transparent=a.transparent,l.side=a.side,l.alphaTest=a.alphaTest,l.depthWrite=a.depthWrite,h&&(l.needsUpdate=!0),l};s.material=Array.isArray(n)?n.map(o):o(n),e.push([s,n])}),this.renderer.setRenderTarget(this.albedoTarget),this.renderer.render(this.scene,this.camera)}finally{for(let[s,n]of e)s.material=n;this.scene.background=r;for(let[s,n]of this.basicMaterials)t.has(s)||(n.dispose(),this.basicMaterials.delete(s))}}setInteracting(e){this.interacting=e,this.updateDisplay(),this.dirty=!0,!e&&this.ready&&this.apply(this.state,"scene").catch(t=>this.callbacks.error?.(t))}jointPoints(e="body"){if(!this.character||this.state.model.object==="spheres")return[];if(!this.character.userData.mmd)return[{id:"head",label:"\u5934\u90E8",kind:"head",position:this.character.userData.head.getWorldPosition(new M)}];let t=this.character.userData;return sr.filter(r=>e==="hands"?r.detail==="hands":!r.detail).flatMap(r=>{let s=or(t.byName,r);return s?[{...r,position:s.getWorldPosition(new M)}]:[]})}setPaused(e){this.paused=e}reset(){this.pt.reset(),this.started=performance.now(),this.paused=!1,this.dirty=!0}async capture(){if(!this.ready||this.state.render.mode!=="albedo"&&this.pt.samples<1)throw new Error("\u8BF7\u7B49\u753B\u9762\u81F3\u5C11\u5B8C\u6210\u4E00\u6B21\u91C7\u6837");return new Promise((e,t)=>this.renderer.domElement.toBlob(r=>r?e(r):t(new Error("\u65E0\u6CD5\u5BFC\u51FA\u753B\u9762")),"image/png"))}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.pt.dispose(),this.albedoTarget.dispose(),this.basicMaterials.forEach(s=>s.dispose()),this.basicMaterials.clear(),this.characterCache.forEach(Jn),this.characterCache.clear();let e=new Set,t=new Set,r=new Set([this.skinMap,this.normalMap,this.envTexture]);for(let s of[this.scene,this.screenScene])s.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(o=>t.add(o))});e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),r.forEach(s=>s?.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}};export{ra as StudioRenderer};

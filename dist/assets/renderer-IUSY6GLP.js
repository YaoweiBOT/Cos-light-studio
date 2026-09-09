import{A as _d,D as yd,M as bd,a as Ox,h as ld,j as ud,m as Pi,n as Hs,p as hd,q as fd,r as dd,s as pd,t as md,u as xd,v as gd,x as vd}from"./chunk-FWYJHCQF.js";var op=0,sh=1,ap=2;var rh=1,cp=2,ci=3,rn=0,Wt=1,jt=2,Xt=0,Zn=1,Oo=2,oh=3,ah=4,lp=5,Oi=100,up=101,hp=102,fp=103,dp=104,pp=200,mp=201,xp=202,gp=203,ka=204,Va=205,vp=206,_p=207,yp=208,bp=209,Sp=210,Mp=211,Tp=212,wp=213,Ap=214,fc=0,dc=1,pc=2,ps=3,mc=4,xc=5,gc=6,vc=7,ch=0,Ep=1,Rp=2,Pn=0,Cp=1,Ip=2,Pp=3,Dp=4,Lp=5,Fp=6,Np=7,Yu="attached",Up="detached",lh=300,Ts=301,ws=302,li=303,_c=304,zo=306,Vt=1e3,Mt=1001,or=1002,Le=1003,yc=1004;var As=1005;var rt=1006,_r=1007;var Kn=1008,uh=1008,an=1009,yr=1010,ko=1011,Xi=1012,qi=1013,dn=1014,Ve=1015,Ht=1016,bc=1017,Sc=1018,br=1020,hh=35902,fh=35899,dh=1021,ph=1022,Ne=1023,ar=1026,Sr=1027,Jn=1028,Mr=1029,Yi=1030,Zi=1031;var $i=1033,Vo=33776,Ho=33777,Go=33778,Wo=33779,Mc=35840,Tc=35841,wc=35842,Ac=35843,Ec=36196,Rc=37492,Cc=37496,Ic=37808,Pc=37809,Dc=37810,Lc=37811,Fc=37812,Nc=37813,Uc=37814,Bc=37815,Oc=37816,zc=37817,kc=37818,Vc=37819,Hc=37820,Gc=37821,Wc=36492,Xc=36494,qc=36495,Yc=36283,Zc=36284,$c=36285,Kc=36286;var ms=2300,xs=2301,za=2302,Zu=2400,$u=2401,Ku=2402,Bp=2500;var mh=0,Xo=1,Tr=2,Op=3200,zp=3201;var xh=0,kp=1,jn="",Ot="srgb",wt="srgb-linear",co="linear",lt="srgb";var ds=7680;var Ju=519,Vp=512,Hp=513,Gp=514,gh=515,Wp=516,Xp=517,qp=518,Yp=519,Ha=35044;var vh="300 es",qn=2e3,lo=2001;function _h(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zp(){let s=cr("canvas");return s.style.display="block",s}var Sd={},lr=null;function uo(...s){let e="THREE."+s.shift();lr?lr("log",e,...s):console.log(e,...s)}function be(...s){let e="THREE."+s.shift();lr?lr("warn",e,...s):console.warn(e,...s)}function Ye(...s){let e="THREE."+s.shift();lr?lr("error",e,...s):console.error(e,...s)}function ur(...s){let e=s.join(" ");e in Sd||(Sd[e]=!0,be(...s))}function $p(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,so=Math.PI/180,gs=180/Math.PI;function Yn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ie(s,e,t){return Math.max(e,Math.min(t,s))}function yh(s,e){return(s%e+e)%e}function zx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kx(s,e,t){return s!==e?(t-s)/(e-s):0}function ro(s,e,t){return(1-t)*s+t*e}function Vx(s,e,t,n){return ro(s,e,1-Math.exp(-t*n))}function Hx(s,e=1){return e-Math.abs(yh(s,e*2)-e)}function Gx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qx(s,e){return s+Math.random()*(e-s)}function Yx(s){return s*(.5-Math.random())}function Zx(s){s!==void 0&&(Md=s);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $x(s){return s*so}function Kx(s){return s*gs}function Jx(s){return(s&s-1)===0&&s!==0}function jx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function eg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),f=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":s.set(a*f,c*h,c*u,a*l);break;case"YZY":s.set(c*u,a*f,c*h,a*l);break;case"ZXZ":s.set(c*h,c*u,a*f,a*l);break;case"XZX":s.set(a*f,c*x,c*d,a*l);break;case"YXY":s.set(c*d,a*f,c*x,a*l);break;case"ZYZ":s.set(c*x,c*d,a*f,a*l);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var bh={DEG2RAD:so,RAD2DEG:gs,generateUUID:Yn,clamp:Ie,euclideanModulo:yh,mapLinear:zx,inverseLerp:kx,lerp:ro,damp:Vx,pingpong:Hx,smoothstep:Gx,smootherstep:Wx,randInt:Xx,randFloat:qx,randFloatSpread:Yx,seededRandom:Zx,degToRad:$x,radToDeg:Kx,isPowerOfTwo:Jx,ceilPowerOfTwo:jx,floorPowerOfTwo:Qx,setQuaternionFromProperEuler:eg,normalize:ct,denormalize:Xn},Q=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ie(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],f=n[i+2],h=n[i+3],u=r[o+0],d=r[o+1],x=r[o+2],g=r[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(a>=1){e[t+0]=u,e[t+1]=d,e[t+2]=x,e[t+3]=g;return}if(h!==g||c!==u||l!==d||f!==x){let p=c*u+l*d+f*x+h*g;p<0&&(u=-u,d=-d,x=-x,g=-g,p=-p);let m=1-a;if(p<.9995){let v=Math.acos(p),_=Math.sin(v);m=Math.sin(m*v)/_,a=Math.sin(a*v)/_,c=c*m+u*a,l=l*m+d*a,f=f*m+x*a,h=h*m+g*a}else{c=c*m+u*a,l=l*m+d*a,f=f*m+x*a,h=h*m+g*a;let v=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=v,l*=v,f*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],f=n[i+3],h=r[o],u=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+f*h+c*d-l*u,e[t+1]=c*x+f*u+l*h-a*d,e[t+2]=l*x+f*d+a*u-c*h,e[t+3]=f*x-a*h-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(i/2),h=a(r/2),u=c(n/2),d=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=u*f*h+l*d*x,this._y=l*d*h-u*f*x,this._z=l*f*x+u*d*h,this._w=l*f*h-u*d*x;break;case"YXZ":this._x=u*f*h+l*d*x,this._y=l*d*h-u*f*x,this._z=l*f*x-u*d*h,this._w=l*f*h+u*d*x;break;case"ZXY":this._x=u*f*h-l*d*x,this._y=l*d*h+u*f*x,this._z=l*f*x+u*d*h,this._w=l*f*h-u*d*x;break;case"ZYX":this._x=u*f*h-l*d*x,this._y=l*d*h+u*f*x,this._z=l*f*x-u*d*h,this._w=l*f*h+u*d*x;break;case"YZX":this._x=u*f*h+l*d*x,this._y=l*d*h+u*f*x,this._z=l*f*x-u*d*h,this._w=l*f*h-u*d*x;break;case"XZY":this._x=u*f*h-l*d*x,this._y=l*d*h-u*f*x,this._z=l*f*x+u*d*h,this._w=l*f*h+u*d*x;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],h=t[10],u=n+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(f-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+i*l-r*c,this._y=i*f+o*c+r*a-n*l,this._z=r*f+o*l+n*c-i*a,this._w=o*f-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),f=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*f,this.y=n+c*f+a*l-r*h,this.z=i+c*h+r*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this.z=Ie(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this.z=Ie(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ie(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xu=new R,Td=new vn,Oe=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],h=n[7],u=n[2],d=n[5],x=n[8],g=i[0],p=i[3],m=i[6],v=i[1],_=i[4],y=i[7],M=i[2],S=i[5],w=i[8];return r[0]=o*g+a*v+c*M,r[3]=o*p+a*_+c*S,r[6]=o*m+a*y+c*w,r[1]=l*g+f*v+h*M,r[4]=l*p+f*_+h*S,r[7]=l*m+f*y+h*w,r[2]=u*g+d*v+x*M,r[5]=u*p+d*_+x*S,r[8]=u*m+d*y+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*r*f+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=f*o-a*l,u=a*c-f*r,d=l*r-o*c,x=t*h+n*u+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=h*g,e[1]=(i*l-f*n)*g,e[2]=(a*n-i*o)*g,e[3]=u*g,e[4]=(f*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gu.makeScale(e,t)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gu=new Oe,wd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tg(){let s={enabled:!0,workingColorSpace:wt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?co:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wt]:{primaries:e,whitePoint:n,transfer:co,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),s}var Qe=tg();function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gs,Ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=cr("canvas")),Gs.width=e.width,Gs.height=e.height;let i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ng=0,zi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vu(i[o].image)):r.push(vu(i[o]))}else r=vu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ga.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}var ig=0,_u=new R,Kt=class s extends bi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Mt,i=Mt,r=rt,o=Kn,a=Ne,c=an,l=s.DEFAULT_ANISOTROPY,f=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Yn(),this.name="",this.source=new zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_u).x}get height(){return this.source.getSize(_u).y}get depth(){return this.source.getSize(_u).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case Mt:e.x=e.x<0?0:1;break;case or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case Mt:e.y=e.y<0?0:1;break;case or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=lh;Kt.DEFAULT_ANISOTROPY=1;var Ge=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],f=c[4],h=c[8],u=c[1],d=c[5],x=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(f-u)<.01&&Math.abs(h-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+g)<.1&&Math.abs(x+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(d+1)/2,M=(m+1)/2,S=(f+u)/4,w=(h+g)/4,C=(x+p)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=w/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=C/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=w/r,i=C/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-x)*(p-x)+(h-g)*(h-g)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-g)/v,this.z=(u-f)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this.z=Ie(this.z,e.z,t.z),this.w=Ie(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this.z=Ie(this.z,e,t),this.w=Ie(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wa=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Kt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new zi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ki=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ho=class extends Gt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ki(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Xa=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ut=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),pa.subVectors(this.max,Kr),Ws.subVectors(e.a,Kr),Xs.subVectors(e.b,Kr),qs.subVectors(e.c,Kr),Di.subVectors(Xs,Ws),Li.subVectors(qs,Xs),ls.subVectors(Ws,qs);let t=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-ls.z,ls.y,Di.z,0,-Di.x,Li.z,0,-Li.x,ls.z,0,-ls.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-ls.y,ls.x,0];return!yu(t,Ws,Xs,qs,pa)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,Ws,Xs,qs,pa))?!1:(ma.crossVectors(Di,Li),t=[ma.x,ma.y,ma.z],yu(t,Ws,Xs,qs,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new R,new R,new R,new R,new R,new R,new R,new R],Hn=new R,da=new ut,Ws=new R,Xs=new R,qs=new R,Di=new R,Li=new R,ls=new R,Kr=new R,pa=new R,ma=new R,us=new R;function yu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){us.fromArray(s,r);let a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),f=n.dot(us);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var sg=new ut,Jr=new R,bu=new R,_n=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(bu)),this.expandByPoint(Jr.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pi=new R,Su=new R,xa=new R,Fi=new R,Mu=new R,ga=new R,Tu=new R,Si=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Su.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Su);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Fi.dot(this.direction),c=-Fi.dot(xa),l=Fi.lengthSq(),f=Math.abs(1-o*o),h,u,d,x;if(f>0)if(h=o*c-a,u=o*a-c,x=r*f,h>=0)if(u>=-x)if(u<=x){let g=1/f;h*=g,u*=g,d=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*c)+l;else u<=-x?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+u*(u+2*c)+l):u<=x?(h=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+u*(u+2*c)+l);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Su).addScaledVector(xa,u),d}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),f>=0?(r=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){Mu.subVectors(t,e),ga.subVectors(n,e),Tu.crossVectors(Mu,ga);let o=this.direction.dot(Tu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);let c=a*this.direction.dot(ga.crossVectors(Fi,ga));if(c<0)return null;let l=a*this.direction.dot(Mu.cross(Fi));if(l<0||c+l>o)return null;let f=-a*Fi.dot(Tu);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class s{constructor(e,t,n,i,r,o,a,c,l,f,h,u,d,x,g,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,f,h,u,d,x,g,p)}set(e,t,n,i,r,o,a,c,l,f,h,u,d,x,g,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=f,m[10]=h,m[14]=u,m[3]=d,m[7]=x,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*f,d=o*h,x=a*f,g=a*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=d+x*l,t[5]=u-g*l,t[9]=-a*c,t[2]=g-u*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*f,d=c*h,x=l*f,g=l*h;t[0]=u+g*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=d*a-x,t[6]=g+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*f,d=c*h,x=l*f,g=l*h;t[0]=u-g*a,t[4]=-o*h,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*f,t[9]=g-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*f,d=o*h,x=a*f,g=a*h;t[0]=c*f,t[4]=x*l-d,t[8]=u*l+g,t[1]=c*h,t[5]=g*l+u,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,x=a*c,g=a*l;t[0]=c*f,t[4]=g-u*h,t[8]=x*h+d,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=d*h+x,t[10]=u-g*h}else if(e.order==="XZY"){let u=o*c,d=o*l,x=a*c,g=a*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=u*h+g,t[5]=o*f,t[9]=d*h-x,t[2]=x*h-d,t[6]=a*f,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,og)}lookAt(e,t,n){let i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ni.crossVectors(n,En),Ni.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ni.crossVectors(n,En)),Ni.normalize(),va.crossVectors(En,Ni),i[0]=Ni.x,i[4]=va.x,i[8]=En.x,i[1]=Ni.y,i[5]=va.y,i[9]=En.y,i[2]=Ni.z,i[6]=va.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],h=n[5],u=n[9],d=n[13],x=n[2],g=n[6],p=n[10],m=n[14],v=n[3],_=n[7],y=n[11],M=n[15],S=i[0],w=i[4],C=i[8],T=i[12],b=i[1],I=i[5],P=i[9],L=i[13],U=i[2],z=i[6],H=i[10],ee=i[14],X=i[3],te=i[7],ne=i[11],ve=i[15];return r[0]=o*S+a*b+c*U+l*X,r[4]=o*w+a*I+c*z+l*te,r[8]=o*C+a*P+c*H+l*ne,r[12]=o*T+a*L+c*ee+l*ve,r[1]=f*S+h*b+u*U+d*X,r[5]=f*w+h*I+u*z+d*te,r[9]=f*C+h*P+u*H+d*ne,r[13]=f*T+h*L+u*ee+d*ve,r[2]=x*S+g*b+p*U+m*X,r[6]=x*w+g*I+p*z+m*te,r[10]=x*C+g*P+p*H+m*ne,r[14]=x*T+g*L+p*ee+m*ve,r[3]=v*S+_*b+y*U+M*X,r[7]=v*w+_*I+y*z+M*te,r[11]=v*C+_*P+y*H+M*ne,r[15]=v*T+_*L+y*ee+M*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],u=e[10],d=e[14],x=e[3],g=e[7],p=e[11],m=e[15];return x*(+r*c*h-i*l*h-r*a*u+n*l*u+i*a*d-n*c*d)+g*(+t*c*d-t*l*u+r*o*u-i*o*d+i*l*f-r*c*f)+p*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*f-n*l*f)+m*(-i*a*f-t*c*h+t*a*u+i*o*h-n*o*u+n*c*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=e[9],u=e[10],d=e[11],x=e[12],g=e[13],p=e[14],m=e[15],v=h*p*l-g*u*l+g*c*d-a*p*d-h*c*m+a*u*m,_=x*u*l-f*p*l-x*c*d+o*p*d+f*c*m-o*u*m,y=f*g*l-x*h*l+x*a*d-o*g*d-f*a*m+o*h*m,M=x*h*c-f*g*c-x*a*u+o*g*u+f*a*p-o*h*p,S=t*v+n*_+i*y+r*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=v*w,e[1]=(g*u*r-h*p*r-g*i*d+n*p*d+h*i*m-n*u*m)*w,e[2]=(a*p*r-g*c*r+g*i*l-n*p*l-a*i*m+n*c*m)*w,e[3]=(h*c*r-a*u*r-h*i*l+n*u*l+a*i*d-n*c*d)*w,e[4]=_*w,e[5]=(f*p*r-x*u*r+x*i*d-t*p*d-f*i*m+t*u*m)*w,e[6]=(x*c*r-o*p*r-x*i*l+t*p*l+o*i*m-t*c*m)*w,e[7]=(o*u*r-f*c*r+f*i*l-t*u*l-o*i*d+t*c*d)*w,e[8]=y*w,e[9]=(x*h*r-f*g*r-x*n*d+t*g*d+f*n*m-t*h*m)*w,e[10]=(o*g*r-x*a*r+x*n*l-t*g*l-o*n*m+t*a*m)*w,e[11]=(f*a*r-o*h*r-f*n*l+t*h*l+o*n*d-t*a*d)*w,e[12]=M*w,e[13]=(f*g*i-x*h*i+x*n*u-t*g*u-f*n*p+t*h*p)*w,e[14]=(x*a*i-o*g*i-x*n*c+t*g*c+o*n*p-t*a*p)*w,e[15]=(o*h*i-f*a*i+f*n*c-t*h*c-o*n*u+t*a*u)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,f*a+n,f*c-i*o,0,l*c-i*a,f*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,f=o+o,h=a+a,u=r*l,d=r*f,x=r*h,g=o*f,p=o*h,m=a*h,v=c*l,_=c*f,y=c*h,M=n.x,S=n.y,w=n.z;return i[0]=(1-(g+m))*M,i[1]=(d+y)*M,i[2]=(x-_)*M,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(u+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(x+_)*w,i[9]=(p-v)*w,i[10]=(1-(u+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ys.set(i[0],i[1],i[2]).length(),o=Ys.set(i[4],i[5],i[6]).length(),a=Ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);let l=1/r,f=1/o,h=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=qn,c=!1){let l=this.elements,f=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),x,g;if(c)x=r/(o-r),g=o*r/(o-r);else if(a===qn)x=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===lo)x=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=qn,c=!1){let l=this.elements,f=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i),x,g;if(c)x=1/(o-r),g=o/(o-r);else if(a===qn)x=-2/(o-r),g=-(o+r)/(o-r);else if(a===lo)x=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ys=new R,Gn=new he,rg=new R(0,0,0),og=new R(1,1,1),Ni=new R,va=new R,En=new R,Ed=new he,Rd=new vn,$n=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],f=i[9],h=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ag=0,Cd=new R,Zs=new vn,mi=new he,_a=new R,jr=new R,cg=new R,lg=new vn,Id=new R(1,0,0),Pd=new R(0,1,0),Dd=new R(0,0,1),Ld={type:"added"},ug={type:"removed"},$s={type:"childadded",child:null},wu={type:"childremoved",child:null},Ct=class s extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new $n,n=new vn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new Oe}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_a.copy(e):_a.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(jr,_a,this.up):mi.lookAt(_a,jr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(mi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),$s.child=e,this.dispatchEvent($s),$s.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ug),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ct.DEFAULT_UP=new R(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new R,xi=new R,Au=new R,gi=new R,Ks=new R,Js=new R,Fd=new R,Eu=new R,Ru=new R,Cu=new R,Iu=new Ge,Pu=new Ge,Du=new Ge,sn=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),xi.subVectors(n,t),Au.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(xi),c=Wn.dot(Au),l=xi.dot(xi),f=xi.dot(Au),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(l*c-a*f)*u,x=(o*f-a*c)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Iu.setScalar(0),Pu.setScalar(0),Du.setScalar(0),Iu.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,n),Du.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Iu,r.x),o.addScaledVector(Pu,r.y),o.addScaledVector(Du,r.z),o}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),xi.subVectors(e,t),Wn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ks.subVectors(i,n),Js.subVectors(r,n),Eu.subVectors(e,n);let c=Ks.dot(Eu),l=Js.dot(Eu);if(c<=0&&l<=0)return t.copy(n);Ru.subVectors(e,i);let f=Ks.dot(Ru),h=Js.dot(Ru);if(f>=0&&h<=f)return t.copy(i);let u=c*h-f*l;if(u<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Ks,o);Cu.subVectors(e,r);let d=Ks.dot(Cu),x=Js.dot(Cu);if(x>=0&&d<=x)return t.copy(r);let g=d*l-c*x;if(g<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Js,a);let p=f*x-d*h;if(p<=0&&h-f>=0&&d-x>=0)return Fd.subVectors(r,i),a=(h-f)/(h-f+(d-x)),t.copy(i).addScaledVector(Fd,a);let m=1/(p+g+u);return o=g*m,a=u*m,t.copy(n).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Lu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=yh(e,1),t=Ie(t,0,1),n=Ie(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lu(o,r,e+1/3),this.g=Lu(o,r,e),this.b=Lu(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Qe.workingToColorSpace(nn.copy(this),e),Math.round(Ie(nn.r*255,0,255))*65536+Math.round(Ie(nn.g*255,0,255))*256+Math.round(Ie(nn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(nn.copy(this),t);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,f=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=f<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ot){Qe.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,i=nn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(ya);let n=ro(Ui.h,ya.h,t),i=ro(Ui.s,ya.s,t),r=ro(Ui.l,ya.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new _e;_e.NAMES=Kp;var hg=0,yn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Zn,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Va,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=fg();function fg(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,f=0;for(;(l&8388608)===0;)l<<=1,f-=8388608;l&=-8388609,f+=947912704,r[c]=l|f}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function dg(s){Math.abs(s)>65504&&be("DataUtils.toHalfFloat(): Value out of range."),s=Ie(s,-65504,65504),_i.floatView[0]=s;let e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function pg(s){let e=s>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(s&1023)]+_i.exponentTable[e],_i.floatView[0]}var hn=class{static toHalfFloat(e){return dg(e)}static fromHalfFloat(e){return pg(e)}},zt=new R,ba=new Q,mg=0,He=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=Ve,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}};var po=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mo=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},xg=0,Nn=new he,Fu=new Ct,js=new R,Rn=new ut,Qr=new ut,$t=new R,et=class s extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?mo:po)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Rn.min,Qr.min),Rn.expandByPoint($t),$t.addVectors(Rn.max,Qr.max),Rn.expandByPoint($t)):(Rn.expandByPoint(Qr.min),Rn.expandByPoint(Qr.max))}Rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)$t.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),$t.add(js)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new R,c[C]=new R;let l=new R,f=new R,h=new R,u=new Q,d=new Q,x=new Q,g=new R,p=new R;function m(C,T,b){l.fromBufferAttribute(n,C),f.fromBufferAttribute(n,T),h.fromBufferAttribute(n,b),u.fromBufferAttribute(r,C),d.fromBufferAttribute(r,T),x.fromBufferAttribute(r,b),f.sub(l),h.sub(l),d.sub(u),x.sub(u);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(h,-d.y).multiplyScalar(I),p.copy(h).multiplyScalar(d.x).addScaledVector(f,-x.x).multiplyScalar(I),a[C].add(g),a[T].add(g),a[b].add(g),c[C].add(p),c[T].add(p),c[b].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,T=v.length;C<T;++C){let b=v[C],I=b.start,P=b.count;for(let L=I,U=I+P;L<U;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new R,y=new R,M=new R,S=new R;function w(C){M.fromBufferAttribute(i,C),S.copy(M);let T=a[C];_.copy(T),_.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(S,T);let I=y.dot(c[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,I)}for(let C=0,T=v.length;C<T;++C){let b=v[C],I=b.start,P=b.count;for(let L=I,U=I+P;L<U;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,f=new R,h=new R;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),f.subVectors(o,r),h.subVectors(i,r),f.cross(h),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(f),c.add(f),l.add(f),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,r),h.subVectors(i,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){let l=a.array,f=a.itemSize,h=a.normalized,u=new l.constructor(c.length*f),d=0,x=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*f;for(let m=0;m<f;m++)u[x++]=l[d++]}return new He(u,f,h)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let f=0,h=l.length;f<h;f++){let u=l[f],d=e(u,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];f.push(d.toJSON(e.data))}f.length>0&&(i[c]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let f=i[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],h=r[l];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,f=o.length;l<f;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nd=new he,hs=new Si,Sa=new _n,Ud=new R,Ma=new R,Ta=new R,wa=new R,Nu=new R,Aa=new R,Bd=new R,Ea=new R,ze=class extends Ct{constructor(e=new et,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=a[c],h=r[c];f!==0&&(Nu.fromBufferAttribute(h,e),o?Aa.addScaledVector(Nu,f):Aa.addScaledVector(Nu.sub(t),f))}t.add(Aa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(Sa.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Sa,Ud)===null||hs.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Nd.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let p=u[x],m=o[p.materialIndex],v=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,M=_;y<M;y+=3){let S=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);i=Ra(this,m,e,n,l,f,h,S,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let x=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=x,m=g;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);i=Ra(this,o,e,n,l,f,h,v,_,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let p=u[x],m=o[p.materialIndex],v=Math.max(p.start,d.start),_=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,M=_;y<M;y+=3){let S=y,w=y+1,C=y+2;i=Ra(this,m,e,n,l,f,h,S,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let x=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=x,m=g;p<m;p+=3){let v=p,_=p+1,y=p+2;i=Ra(this,o,e,n,l,f,h,v,_,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function gg(s,e,t,n,i,r,o,a){let c;if(e.side===Wt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===rn,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:s}}function Ra(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ma),s.getVertexPosition(c,Ta),s.getVertexPosition(l,wa);let f=gg(s,e,t,n,Ma,Ta,wa,Bd);if(f){let h=new R;sn.getBarycoord(Bd,Ma,Ta,wa,h),i&&(f.uv=sn.getInterpolatedAttribute(i,a,c,l,h,new Q)),r&&(f.uv1=sn.getInterpolatedAttribute(r,a,c,l,h,new Q)),o&&(f.normal=sn.getInterpolatedAttribute(o,a,c,l,h,new R),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};sn.getNormal(Ma,Ta,wa,u.normal),f.face=u,f.barycoord=h}return f}var In=class s extends et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],f=[],h=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(h,2));function x(g,p,m,v,_,y,M,S,w,C,T){let b=y/w,I=M/C,P=y/2,L=M/2,U=S/2,z=w+1,H=C+1,ee=0,X=0,te=new R;for(let ne=0;ne<H;ne++){let ve=ne*I-L;for(let Xe=0;Xe<z;Xe++){let at=Xe*b-P;te[g]=at*v,te[p]=ve*_,te[m]=U,l.push(te.x,te.y,te.z),te[g]=0,te[p]=0,te[m]=S>0?1:-1,f.push(te.x,te.y,te.z),h.push(Xe/w),h.push(1-ne/C),ee+=1}}for(let ne=0;ne<C;ne++)for(let ve=0;ve<w;ve++){let Xe=u+ve+z*ne,at=u+ve+z*(ne+1),xt=u+(ve+1)+z*(ne+1),tt=u+(ve+1)+z*ne;c.push(Xe,at,tt),c.push(at,xt,tt),X+=6}a.addGroup(d,X,T),d+=X,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function cn(s){let e={};for(let t=0;t<s.length;t++){let n=Es(s[t]);for(let i in n)e[i]=n[i]}return e}function vg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Jp={clone:Es,merge:cn},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new R,Od=new Q,zd=new Q,Lt=class extends vs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Od,zd),t.subVectors(zd,Od)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,er=1,qa=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Lt(Qs,er,e,t);i.layers=this.layers,this.add(i);let r=new Lt(Qs,er,e,t);r.layers=this.layers,this.add(r);let o=new Lt(Qs,er,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Qs,er,e,t);a.layers=this.layers,this.add(a);let c=new Lt(Qs,er,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},xo=class extends Kt{constructor(e=[],t=Ts,n,i,r,o,a,c,l,f){super(e,t,n,i,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new In(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Xt});r.uniforms.tEquirect.value=t;let o=new ze(i,r),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=rt),new qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},kt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},bg={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,x=.005;l.inputState.pinching&&u>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Vi=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new R,dr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var kd=new R,Vd=new Ge,Hd=new Ge,Sg=new R,Gd=new he,Ca=new R,Uu=new _n,Wd=new he,Bu=new Si,go=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ut),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uu.copy(this.boundingSphere),Uu.applyMatrix4(i),e.ray.intersectsSphere(Uu)!==!1&&(Wd.copy(i).invert(),Bu.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&Bu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ge,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Up?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Vd.fromBufferAttribute(i.attributes.skinIndex,e),Hd.fromBufferAttribute(i.attributes.skinWeight,e),kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Hd.getComponent(r);if(o!==0){let a=Vd.getComponent(r);Gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sg.copy(kd).applyMatrix4(Gd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},pr=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},ht=class extends Kt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Le,f=Le,h,u){super(null,o,a,c,l,f,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xd=new he,Mg=new he,vo=class s{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new he;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Mg;Xd.multiplyMatrices(a,t[r]),Xd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ht(t,e,e,Ne,Ve);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(be("Skeleton: No bone found with UUID:",r),o=new pr),this.bones.push(o),this.boneInverses.push(new he().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Hi=class extends He{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},tr=new he,qd=new he,Ia=[],Yd=new ut,Tg=new he,eo=new ze,to=new _n,_o=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Yd.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),to.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,tr),qd.multiplyMatrices(n,tr),eo.matrixWorld=qd,eo.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){let c=Ia[o];c.instanceId=r,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ht(new Float32Array(i*this.count),i,this.count,Jn,Ve));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ou=new R,wg=new R,Ag=new Oe,gn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ou.subVectors(n,t).cross(wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ou),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ag.getNormalMatrix(e),i=this.coplanarPoint(Ou).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new _n,Eg=new Q(.5,.5),Pa=new R,mr=class{constructor(e=new gn,t=new gn,n=new gn,i=new gn,r=new gn,o=new gn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],f=r[4],h=r[5],u=r[6],d=r[7],x=r[8],g=r[9],p=r[10],m=r[11],v=r[12],_=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-o,d-f,m-x,M-v).normalize(),i[1].setComponents(l+o,d+f,m+x,M+v).normalize(),i[2].setComponents(l+a,d+h,m+g,M+_).normalize(),i[3].setComponents(l-a,d-h,m-g,M-_).normalize(),n)i[4].setComponents(c,u,p,y).normalize(),i[5].setComponents(l-c,d-u,m-p,M-y).normalize();else if(i[4].setComponents(l-c,d-u,m-p,M-y).normalize(),t===qn)i[5].setComponents(l+c,d+u,m+p,M+y).normalize();else if(t===lo)i[5].setComponents(c,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=Eg.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Pa.x=i.normal.x>0?e.max.x:e.min.x,Pa.y=i.normal.y>0?e.max.y:e.min.y,Pa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new R,$a=new R,Zd=new he,no=new Si,Da=new _n,zu=new R,$d=new R,_s=class extends Ct{constructor(e=new et,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Za.fromBufferAttribute(t,i-1),$a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Za.distanceTo($a);e.setAttribute("lineDistance",new st(n,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Zd.copy(i).invert(),no.copy(e.ray).applyMatrix4(Zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let g=d,p=x-1;g<p;g+=l){let m=f.getX(g),v=f.getX(g+1),_=La(this,e,no,c,m,v,g);_&&t.push(_)}if(this.isLineLoop){let g=f.getX(x-1),p=f.getX(d),m=La(this,e,no,c,g,p,x-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let g=d,p=x-1;g<p;g+=l){let m=La(this,e,no,c,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){let g=La(this,e,no,c,x-1,d,x-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function La(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Za.fromBufferAttribute(a,i),$a.fromBufferAttribute(a,r),t.distanceSqToSegment(Za,$a,zu,$d)>n)return;zu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(zu);if(!(l<e.near||l>e.far))return{distance:l,point:$d.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Kd=new R,Jd=new R,yo=class extends _s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Kd.fromBufferAttribute(t,i),Jd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kd.distanceTo(Jd);e.setAttribute("lineDistance",new st(n,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bo=class extends _s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},gr=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jd=new he,ju=new Si,Fa=new _n,Na=new R,So=class extends Ct{constructor(e=new et,t=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;jd.copy(i).invert(),ju.copy(e.ray).applyMatrix4(jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=u,g=d;x<g;x++){let p=l.getX(x);Na.fromBufferAttribute(h,p),Qd(Na,p,c,i,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let x=u,g=d;x<g;x++)Na.fromBufferAttribute(h,x),Qd(Na,x,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qd(s,e,t,n,i,r,o){let a=ju.distanceSqToPoint(s);if(a<t){let c=new R;ju.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Mo=class extends Kt{constructor(e,t,n=dn,i,r,o,a=Le,c=Le,l,f=ar,h=1){if(f!==ar&&f!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,i,r,o,a,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},To=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ii=class s extends et{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let f=[],h=[],u=[],d=[],x=0,g=[],p=n/2,m=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function v(){let y=new R,M=new R,S=0,w=(t-e)/n;for(let C=0;C<=r;C++){let T=[],b=C/r,I=b*(t-e)+e;for(let P=0;P<=i;P++){let L=P/i,U=L*c+a,z=Math.sin(U),H=Math.cos(U);M.x=I*z,M.y=-b*n+p,M.z=I*H,h.push(M.x,M.y,M.z),y.set(z,w,H).normalize(),u.push(y.x,y.y,y.z),d.push(L,1-b),T.push(x++)}g.push(T)}for(let C=0;C<i;C++)for(let T=0;T<r;T++){let b=g[T][C],I=g[T+1][C],P=g[T+1][C+1],L=g[T][C+1];(e>0||T!==0)&&(f.push(b,I,L),S+=3),(t>0||T!==r-1)&&(f.push(I,P,L),S+=3)}l.addGroup(m,S,0),m+=S}function _(y){let M=x,S=new Q,w=new R,C=0,T=y===!0?e:t,b=y===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,p*b,0),u.push(0,b,0),d.push(.5,.5),x++;let I=x;for(let P=0;P<=i;P++){let U=P/i*c+a,z=Math.cos(U),H=Math.sin(U);w.x=T*H,w.y=p*b,w.z=T*z,h.push(w.x,w.y,w.z),u.push(0,b,0),S.x=z*.5+.5,S.y=H*.5*b+.5,d.push(S.x,S.y),x++}for(let P=0;P<i;P++){let L=M+P,U=I+P;y===!0?f.push(U,U+1,L):f.push(U+1,U,L),C+=3}l.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let f=n[i],u=n[i+1]-f,d=(o-f)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Q:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],o=[],a=new R,c=new he;for(let d=0;d<=e;d++){let x=d/e;i[d]=this.getTangentAt(x,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,f=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);f<=l&&(l=f,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ie(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ie(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],d*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wo=class extends Un{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Q){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*f-d*h+this.aX,l=u*h+d*f+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ka=class extends wo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,f,h){let u=(o-r)/l-(a-r)/(l+f)+(a-o)/f,d=(a-o)/f-(c-o)/(f+h)+(c-a)/h;u*=f,d*=f,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ua=new R,ku=new Mh,Vu=new Mh,Hu=new Mh,ys=class extends Un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,f;this.closed||a>0?l=i[(a-1)%r]:(Ua.subVectors(i[0],i[1]).add(i[0]),l=Ua);let h=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?f=i[(a+2)%r]:(Ua.subVectors(i[r-1],i[r-2]).add(i[r-1]),f=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d);g<1e-4&&(g=1),x<1e-4&&(x=g),p<1e-4&&(p=g),ku.initNonuniformCatmullRom(l.x,h.x,u.x,f.x,x,g,p),Vu.initNonuniformCatmullRom(l.y,h.y,u.y,f.y,x,g,p),Hu.initNonuniformCatmullRom(l.z,h.z,u.z,f.z,x,g,p)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(l.x,h.x,u.x,f.x,this.tension),Vu.initCatmullRom(l.y,h.y,u.y,f.y,this.tension),Hu.initCatmullRom(l.z,h.z,u.z,f.z,this.tension));return n.set(ku.calc(c),Vu.calc(c),Hu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ep(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Rg(s,e){let t=1-s;return t*t*e}function Cg(s,e){return 2*(1-s)*s*e}function Ig(s,e){return s*s*e}function oo(s,e,t,n){return Rg(s,e)+Cg(s,t)+Ig(s,n)}function Pg(s,e){let t=1-s;return t*t*t*e}function Dg(s,e){let t=1-s;return 3*t*t*s*e}function Lg(s,e){return 3*(1-s)*s*s*e}function Fg(s,e){return s*s*s*e}function ao(s,e,t,n,i){return Pg(s,e)+Dg(s,t)+Lg(s,n)+Fg(s,i)}var Ja=class extends Un{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,i.x,r.x,o.x,a.x),ao(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Un{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,i.x,r.x,o.x,a.x),ao(e,i.y,r.y,o.y,a.y),ao(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends Un{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends Un{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Un{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,i.x,r.x,o.x),oo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends Un{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,i.x,r.x,o.x),oo(e,i.y,r.y,o.y),oo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],f=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ep(a,c.x,l.x,f.x,h.x),ep(a,c.y,l.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Q().fromArray(i))}return this}},Ng=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:ys,CubicBezierCurve:Ja,CubicBezierCurve3:ja,EllipseCurve:wo,LineCurve:Qa,LineCurve3:ec,QuadraticBezierCurve:tc,QuadraticBezierCurve3:Ao,SplineCurve:nc});var Eo=class s extends et{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ie(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],f=1/t,h=new R,u=new Q,d=new R,x=new R,g=new R,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(x)}for(let v=0;v<=t;v++){let _=n+v*f*i,y=Math.sin(_),M=Math.cos(_);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*y,h.y=e[S].y,h.z=e[S].x*M,o.push(h.x,h.y,h.z),u.x=v/t,u.y=S/(e.length-1),a.push(u.x,u.y);let w=c[3*S+0]*y,C=c[3*S+1],T=c[3*S+0]*M;l.push(w,C,T)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,M=y,S=y+e.length,w=y+e.length+1,C=y+1;r.push(M,S,C),r.push(w,C,S)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Gi=class s extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,f=c+1,h=e/a,u=t/c,d=[],x=[],g=[],p=[];for(let m=0;m<f;m++){let v=m*u-o;for(let _=0;_<l;_++){let y=_*h-r;x.push(y,-v,0),g.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let _=v+l*m,y=v+l*(m+1),M=v+1+l*(m+1),S=v+1+l*m;d.push(_,y,S),d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wi=class s extends et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,f=[],h=new R,u=new R,d=[],x=[],g=[],p=[];for(let m=0;m<=n;m++){let v=[],_=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){let S=M/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+_*a),x.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),p.push(S+y,1-_),v.push(l++)}f.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let _=f[m][v+1],y=f[m][v],M=f[m+1][v],S=f[m+1][v+1];(m!==0||o>0)&&d.push(_,y,S),(m!==n-1||c<Math.PI)&&d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ro=class s extends et{constructor(e=new Ao(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new Q,f=new R,h=[],u=[],d=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function g(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),v(),m()}function p(_){f=e.getPointAt(_/t,f);let y=o.normals[_],M=o.binormals[_];for(let S=0;S<=i;S++){let w=S/i*Math.PI*2,C=Math.sin(w),T=-Math.cos(w);c.x=T*y.x+C*M.x,c.y=T*y.y+C*M.y,c.z=T*y.z+C*M.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=f.x+n*c.x,a.y=f.y+n*c.y,a.z=f.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){let M=(i+1)*(_-1)+(y-1),S=(i+1)*_+(y-1),w=(i+1)*_+y,C=(i+1)*(_-1)+y;x.push(M,S,C),x.push(S,w,C)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)l.x=_/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Ng[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var on=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends on{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ic=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ba(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ug(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function jp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zu,endingEnd:Zu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $u:r=e,a=2*t-n;break;case Ku:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $u:o=e,c=2*n-t;break;case Ku:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(i-t),g=x*x,p=g*x,m=-u*p+2*u*g-u*x,v=(1+u)*p+(-1.5-2*u)*g+(-.5+u)*x+1,_=(-1-d)*p+(1.5+d)*g+.5*x,y=d*p-d*g;for(let M=0;M!==a;++M)r[M]=m*o[f+M]+v*o[l+M]+_*o[c+M]+y*o[h+M];return r}},oc=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=(n-t)/(i-t),h=1-f;for(let u=0;u!==a;++u)r[u]=o[l+u]*h+o[c+u]*f;return r}},ac=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ye("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ug(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===za,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,u=h-n,d=h+n;for(let x=0;x!==n;++x){let g=t[h+x];if(g!==t[u+x]||g!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=xs;var Ti=class extends bn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=ms;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};Co.prototype.ValueTypeName="color";var si=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};si.prototype.ValueTypeName="number";var cc=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let f=l+a;l!==f;l+=4)vn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ri=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends bn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ms;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};oi.prototype.ValueTypeName="vector";var Io=class{constructor(e="",t=-1,n=[],i=Bp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zg(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let f=Bg(c);c=tp(c,1,f),l=tp(l,1,f),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new si(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],f=l.name.match(r);if(f&&f.length>1){let h=f[1],u=i[h];u||(i[h]=u=[]),u.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ye("AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,x,g){if(d.length!==0){let p=[],m=[];jp(d,p,m,x),p.length!==0&&g.push(new h(u,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},x;for(x=0;x<u.length;x++)if(u[x].morphTargets)for(let g=0;g<u[x].morphTargets.length;g++)d[u[x].morphTargets[g]]=-1;for(let g in d){let p=[],m=[];for(let v=0;v!==u[x].morphTargets.length;++v){let _=u[x];p.push(_.time),m.push(_.morphTarget===g?1:0)}i.push(new si(".morphTargetInfluence["+g+"]",p,m))}c=d.length*o}else{let d=".bones["+t[h].name+"]";n(oi,d+".position",u,"pos",i),n(ri,d+".quaternion",u,"rot",i),n(oi,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Og(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return Co;case"quaternion":return ri;case"bool":case"boolean":return Ti;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function zg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Og(s.type);if(s.times===void 0){let t=[],n=[];jp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},lc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&i.onStart!==void 0&&i.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){let h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],x=l[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qp=new lc,ai=class{constructor(e){this.manager=e!==void 0?e:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},Qu=class extends Error{constructor(e,t){super(e),this.response=t}},vr=class extends ai{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ni.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let f=vi[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,x=d!==0,g=0,p=new ReadableStream({start(m){v();function v(){h.read().then(({done:_,value:y})=>{if(_)m.close();else{g+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:d});for(let S=0,w=f.length;S<w;S++){let C=f[S];C.onProgress&&C.onProgress(M)}m.enqueue(y),v()}},_=>{m.error(_)})}}});return new Response(p)}else throw new Qu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{ni.add(`file:${e}`,l);let f=vi[e];delete vi[e];for(let h=0,u=f.length;h<u;h++){let d=f[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let f=vi[e];if(f===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,u=f.length;h<u;h++){let d=f[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var nr=new WeakMap,uc=class extends ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=nr.get(o);h===void 0&&(h=[],nr.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=cr("img");function c(){f(),t&&t(this);let h=nr.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}nr.delete(this),r.manager.itemEnd(e)}function l(h){f(),i&&i(h),ni.remove(`image:${e}`);let u=nr.get(this)||[];for(let d=0;d<u.length;d++){let x=u[d];x.onError&&x.onError(h)}nr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var bs=class extends ai{constructor(e){super(e)}load(e,t,n,i){let r=new Kt,o=new uc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ss=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Gu=new he,np=new R,ip=new R,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),Gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eh=class extends Po{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ms=class extends Ss{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sp=new he,io=new R,Wu=new R,th=class extends Po{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),n.position.copy(io),Wu.copy(n.position),Wu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wu),n.updateMatrixWorld(),i.makeTranslation(-io.x,-io.y,-io.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp,n.coordinateSystem,n.reversedDepth)}},Do=class extends Ss{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ai=class extends vs{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nh=class extends Po{constructor(){super(new Ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fo=class extends Ss{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};var Ei=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xu=new WeakMap,No=class extends ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Xu.has(o)===!0)i&&i(Xu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ni.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Xu.set(c,l),ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hc=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Th="\\[\\]\\.:\\/",kg=new RegExp("["+Th+"]","g"),wh="[^"+Th+"]",Vg="[^"+Th.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",wh),Gg=/(WCOD+)?/.source.replace("WCOD",Vg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),qg=new RegExp("^"+Hg+Gg+Wg+Xg+"$"),Yg=["material","materials","bones","map"],ih=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(e){let t=qg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=ih;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $M=new Float32Array(1);var Bo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ie(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rp=new R,Oa=new R,ir=new R,sr=new R,qu=new R,Zg=new R,$g=new R,fn=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){rp.subVectors(e,this.start),Oa.subVectors(this.end,this.start);let n=Oa.dot(Oa),r=Oa.dot(rp)/n;return t&&(r=Ie(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Zg,n=$g){let i=10000000000000001e-32,r,o,a=this.start,c=e.start,l=this.end,f=e.end;ir.subVectors(l,a),sr.subVectors(f,c),qu.subVectors(a,c);let h=ir.dot(ir),u=sr.dot(sr),d=sr.dot(qu);if(h<=i&&u<=i)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(h<=i)r=0,o=d/u,o=Ie(o,0,1);else{let x=ir.dot(qu);if(u<=i)o=0,r=Ie(-x/h,0,1);else{let g=ir.dot(sr),p=h*u-g*g;p!==0?r=Ie((g*d-x*u)/p,0,1):r=0,o=(g*r+d)/u,o<0?(o=0,r=Ie(-x/h,0,1)):o>1&&(o=1,r=Ie((g-x)/h,0,1))}}return t.copy(a).add(ir.multiplyScalar(r)),n.copy(c).add(sr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ah(s,e,t,n){let i=Kg(n);switch(t){case dh:return s*e;case Jn:return s*e/i.components*i.byteLength;case Mr:return s*e/i.components*i.byteLength;case Yi:return s*e*2/i.components*i.byteLength;case Zi:return s*e*2/i.components*i.byteLength;case ph:return s*e*3/i.components*i.byteLength;case Ne:return s*e*4/i.components*i.byteLength;case $i:return s*e*4/i.components*i.byteLength;case Vo:case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:case Ac:return Math.max(s,16)*Math.max(e,8)/4;case Mc:case wc:return Math.max(s,8)*Math.max(e,8)/2;case Ec:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yc:case Zc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $c:case Kc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kg(s){switch(s){case an:case yr:return{byteLength:1,components:1};case Xi:case ko:case Ht:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case dn:case qi:case Ve:return{byteLength:4,components:1};case hh:case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Sm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jg(s){let e=new WeakMap;function t(a,c){let l=a.array,f=a.usage,h=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,f),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let f=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,f);else{h.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<h.length;d++){let x=h[u],g=h[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,h[u]=g)}h.length=u+1;for(let d=0,x=h.length;d<x;d++){let g=h[d];s.bufferSubData(l,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_y=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:jg,alphahash_pars_fragment:Qg,alphamap_fragment:ev,alphamap_pars_fragment:tv,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:sv,aomap_pars_fragment:rv,batching_pars_vertex:ov,batching_vertex:av,begin_vertex:cv,beginnormal_vertex:lv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:fv,clipping_planes_fragment:dv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:xv,color_fragment:gv,color_pars_fragment:vv,color_pars_vertex:_v,color_vertex:yv,common:bv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:Tv,displacementmap_vertex:wv,emissivemap_fragment:Av,emissivemap_pars_fragment:Ev,colorspace_fragment:Rv,colorspace_pars_fragment:Cv,envmap_fragment:Iv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Wv,envmap_vertex:Fv,fog_vertex:Nv,fog_pars_vertex:Uv,fog_fragment:Bv,fog_pars_fragment:Ov,gradientmap_pars_fragment:zv,lightmap_pars_fragment:kv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Hv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Zv,lights_physical_fragment:$v,lights_physical_pars_fragment:Kv,lights_fragment_begin:Jv,lights_fragment_maps:jv,lights_fragment_end:Qv,logdepthbuf_fragment:e_,logdepthbuf_pars_fragment:t_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:s_,map_pars_fragment:r_,map_particle_fragment:o_,map_particle_pars_fragment:a_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:l_,morphinstance_vertex:u_,morphcolor_vertex:h_,morphnormal_vertex:f_,morphtarget_pars_vertex:d_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:x_,normal_pars_fragment:g_,normal_pars_vertex:v_,normal_vertex:__,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:b_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:T_,opaque_fragment:w_,packing:A_,premultiplied_alpha_fragment:E_,project_vertex:R_,dithering_fragment:C_,dithering_pars_fragment:I_,roughnessmap_fragment:P_,roughnessmap_pars_fragment:D_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:F_,shadowmap_vertex:N_,shadowmask_pars_fragment:U_,skinbase_vertex:B_,skinning_pars_vertex:O_,skinning_vertex:z_,skinnormal_vertex:k_,specularmap_fragment:V_,specularmap_pars_fragment:H_,tonemapping_fragment:G_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:q_,uv_pars_fragment:Y_,uv_pars_vertex:Z_,uv_vertex:$_,worldpos_vertex:K_,background_vert:J_,background_frag:j_,backgroundCube_vert:Q_,backgroundCube_frag:ey,cube_vert:ty,cube_frag:ny,depth_vert:iy,depth_frag:sy,distanceRGBA_vert:ry,distanceRGBA_frag:oy,equirect_vert:ay,equirect_frag:cy,linedashed_vert:ly,linedashed_frag:uy,meshbasic_vert:hy,meshbasic_frag:fy,meshlambert_vert:dy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:xy,meshnormal_vert:gy,meshnormal_frag:vy,meshphong_vert:_y,meshphong_frag:yy,meshphysical_vert:by,meshphysical_frag:Sy,meshtoon_vert:My,meshtoon_frag:Ty,points_vert:wy,points_frag:Ay,shadow_vert:Ey,shadow_frag:Ry,sprite_vert:Cy,sprite_frag:Iy},ae={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ui={basic:{uniforms:cn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:cn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new _e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:cn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:cn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:cn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new _e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:cn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:cn([ae.points,ae.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:cn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:cn([ae.common,ae.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:cn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:cn([ae.sprite,ae.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:cn([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:cn([ae.lights,ae.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ui.physical={uniforms:cn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Jc={r:0,b:0,g:0},Rs=new $n,Py=new he;function Dy(s,e,t,n,i,r,o){let a=new _e(0),c=r===!0?0:1,l,f,h=null,u=0,d=null;function x(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function g(_){let y=!1,M=x(_);M===null?m(a,c):M&&M.isColor&&(m(M,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,y){let M=x(y);M&&(M.isCubeTexture||M.mapping===zo)?(f===void 0&&(f=new ze(new In(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Es(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Rs.copy(y.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Rs)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,(h!==M||u!==M.version||d!==s.toneMapping)&&(f.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ze(new Gi(2,2),new Ft({name:"BackgroundMaterial",uniforms:Es(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(Jc,Sh(s)),n.buffers.color.setClear(Jc.r,Jc.g,Jc.b,y,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:g,addToRenderList:p,dispose:v}}function Ly(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(b,I,P,L,U){let z=!1,H=h(L,P,I);r!==H&&(r=H,l(r.object)),z=d(b,L,P,U),z&&x(b,L,P,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(b,I,P,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function f(b){return s.deleteVertexArray(b)}function h(b,I,P){let L=P.wireframe===!0,U=n[b.id];U===void 0&&(U={},n[b.id]=U);let z=U[I.id];z===void 0&&(z={},U[I.id]=z);let H=z[L];return H===void 0&&(H=u(c()),z[L]=H),H}function u(b){let I=[],P=[],L=[];for(let U=0;U<t;U++)I[U]=0,P[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:P,attributeDivisors:L,object:b,attributes:{},index:null}}function d(b,I,P,L){let U=r.attributes,z=I.attributes,H=0,ee=P.getAttributes();for(let X in ee)if(ee[X].location>=0){let ne=U[X],ve=z[X];if(ve===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function x(b,I,P,L){let U={},z=I.attributes,H=0,ee=P.getAttributes();for(let X in ee)if(ee[X].location>=0){let ne=z[X];ne===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));let ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),U[X]=ve,H++}r.attributes=U,r.attributesNum=H,r.index=L}function g(){let b=r.newAttributes;for(let I=0,P=b.length;I<P;I++)b[I]=0}function p(b){m(b,0)}function m(b,I){let P=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;P[b]=1,L[b]===0&&(s.enableVertexAttribArray(b),L[b]=1),U[b]!==I&&(s.vertexAttribDivisor(b,I),U[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let P=0,L=I.length;P<L;P++)I[P]!==b[P]&&(s.disableVertexAttribArray(P),I[P]=0)}function _(b,I,P,L,U,z,H){H===!0?s.vertexAttribIPointer(b,I,P,U,z):s.vertexAttribPointer(b,I,P,L,U,z)}function y(b,I,P,L){g();let U=L.attributes,z=P.getAttributes(),H=I.defaultAttributeValues;for(let ee in z){let X=z[ee];if(X.location>=0){let te=U[ee];if(te===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){let ne=te.normalized,ve=te.itemSize,Xe=e.get(te);if(Xe===void 0)continue;let at=Xe.buffer,xt=Xe.type,tt=Xe.bytesPerElement,q=xt===s.INT||xt===s.UNSIGNED_INT||te.gpuType===qi;if(te.isInterleavedBufferAttribute){let $=te.data,de=$.stride,Ue=te.offset;if($.isInstancedInterleavedBuffer){for(let Se=0;Se<X.locationSize;Se++)m(X.location+Se,$.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<X.locationSize;Se++)p(X.location+Se);s.bindBuffer(s.ARRAY_BUFFER,at);for(let Se=0;Se<X.locationSize;Se++)_(X.location+Se,ve/X.locationSize,xt,ne,de*tt,(Ue+ve/X.locationSize*Se)*tt,q)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)m(X.location+$,te.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<X.locationSize;$++)p(X.location+$);s.bindBuffer(s.ARRAY_BUFFER,at);for(let $=0;$<X.locationSize;$++)_(X.location+$,ve/X.locationSize,xt,ne,ve*tt,ve/X.locationSize*$*tt,q)}}else if(H!==void 0){let ne=H[ee];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(X.location,ne);break;case 3:s.vertexAttrib3fv(X.location,ne);break;case 4:s.vertexAttrib4fv(X.location,ne);break;default:s.vertexAttrib1fv(X.location,ne)}}}}v()}function M(){C();for(let b in n){let I=n[b];for(let P in I){let L=I[P];for(let U in L)f(L[U].object),delete L[U];delete I[P]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let P in I){let L=I[P];for(let U in L)f(L[U].object),delete L[U];delete I[P]}delete n[b.id]}function w(b){for(let I in n){let P=n[I];if(P[b.id]===void 0)continue;let L=P[b.id];for(let U in L)f(L[U].object),delete L[U];delete P[b.id]}}function C(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Fy(s,e,t){let n;function i(l){n=l}function r(l,f){s.drawArrays(n,l,f),t.update(f,n,1)}function o(l,f,h){h!==0&&(s.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function a(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let d=0;for(let x=0;x<h;x++)d+=f[x];t.update(d,n,1)}function c(l,f,h,u){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],f[x],u[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,f,0,u,0,h);let x=0;for(let g=0;g<h;g++)x+=f[g]*u[g];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ny(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Ne&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==an&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ve&&!C)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=c(l);f!==l&&(be("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:M,maxSamples:S}}function Uy(s){let e=this,t=null,n=0,i=!1,r=!1,o=new gn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){let x=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||x===null||x.length===0||r&&!p)r?f(null):l();else{let v=r?0:n,_=v*4,y=m.clippingState||null;c.value=y,y=f(x,u,_,d);for(let M=0;M!==_;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,u,d,x){let g=h!==null?h.length:0,p=null;if(g!==0){if(p=c.value,x!==!0||p===null){let m=d+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=d;_!==g;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function By(s){let e=new WeakMap;function t(o,a){return a===li?o.mapping=Ts:a===_c&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===li||a===_c)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ya(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ki=4,em=[.125,.215,.35,.446,.526,.582],Is=20,Oy=256,qo=new Ai,tm=new _e,Eh=null,Rh=0,Ch=0,Ih=!1,zy=new R,Qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=zy}=r;Eh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Rh,Ch),this._renderer.xr.enabled=Ih,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rt,minFilter:rt,generateMipmaps:!1,type:Ht,format:Ne,colorSpace:wt,depthBuffer:!1},i=nm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ky(r)),this._blurMaterial=Hy(r,e,t)}return i}_compileMaterial(e){let t=new ze(new et,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,i,r){let c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tm),h.toneMapping=Pn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new In,new Cn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,p=g.material,m=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(tm),m=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[_],r.y,r.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[_]));let M=this._cubeSize;wr(i,y*M,_>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(g,c),h.render(e,c)}h.toneMapping=d,h.autoClear=u,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ts||e.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){let v=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=Vy(this._lodMax,v,_)}let o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-f*f),u=.05+l*.95,d=h*u,{_lodMax:x}=this,g=this._sizeLods[n],p=3*g*(n>x-Ki?n-x+Ki:0),m=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=x-t,wr(r,p,m,3*g,2*g),i.setRenderTarget(r),i.render(a,qo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,wr(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(a,qo)}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let f=3,h=this._lodMeshes[i];h.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),g=r/x,p=isFinite(r)?1+Math.floor(f*g):Is;p>Is&&be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Is}`);let m=[],v=0;for(let w=0;w<Is;++w){let C=w/g,T=Math.exp(-C*C/2);m.push(T),w===0?v+=T:w<p&&(v+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=x,u.mipInt.value=_-n;let y=this._sizeLods[i],M=3*y*(i>_-Ki?i-_+Ki:0),S=4*(this._cubeSize-y);wr(t,M,S,3*y,2*y),c.setRenderTarget(t),c.render(h,qo)}};function ky(s){let e=[],t=[],n=[],i=s,r=s-Ki+1+em.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ki?c=em[o-s+Ki-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),f=-l,h=1+l,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,x=6,g=3,p=2,m=1,v=new Float32Array(g*x*d),_=new Float32Array(p*x*d),y=new Float32Array(m*x*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,C=S>2?0:-1,T=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(T,g*x*S),_.set(u,p*x*S);let b=[S,S,S,S,S,S];y.set(b,m*x*S)}let M=new et;M.setAttribute("position",new He(v,g)),M.setAttribute("uv",new He(_,p)),M.setAttribute("faceIndex",new He(y,m)),n.push(new ze(M,null)),i>Ki&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nm(s,e,t){let n=new Gt(s,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vy(s,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Oy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Hy(s,e,t){let n=new Float32Array(Is),i=new R(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function im(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function sm(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===li||c===_c,f=c===Ts||c===ws;if(l||f){let h=e.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Qc(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return l&&d&&d.height>0||f&&d&&i(d)?(t===null&&(t=new Qc(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0,l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ur("WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(s,e,t,n){let i={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete i[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(h){let u=h.attributes;for(let d in u)e.update(u[d],s.ARRAY_BUFFER)}function l(h){let u=[],d=h.index,x=h.attributes.position,g=0;if(d!==null){let v=d.array;g=d.version;for(let _=0,y=v.length;_<y;_+=3){let M=v[_+0],S=v[_+1],w=v[_+2];u.push(M,S,S,w,w,M)}}else if(x!==void 0){let v=x.array;g=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let M=_+0,S=_+1,w=_+2;u.push(M,S,S,w,w,M)}}else return;let p=new(_h(u)?mo:po)(u,1);p.version=g;let m=r.get(h);m&&e.remove(m),r.set(h,p)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function qy(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,x){x!==0&&(s.drawElementsInstanced(n,d,r,u*o,x),t.update(d,n,x))}function f(u,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,x);let p=0;for(let m=0;m<x;m++)p+=d[m];t.update(p,n,1)}function h(u,d,x,g){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,g,0,x);let m=0;for(let v=0;v<x;v++)m+=d[v]*g[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Yy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zy(s,e,t){let n=new WeakMap,i=new Ge;function r(o,a,c){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;d===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let y=a.attributes.position.count*_,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*M*4*h),w=new ki(S,y,M,h);w.type=Ve,w.needsUpdate=!0;let C=_*4;for(let b=0;b<h;b++){let I=p[b],P=m[b],L=v[b],U=y*M*4*b;for(let z=0;z<I.count;z++){let H=z*C;d===!0&&(i.fromBufferAttribute(I,z),S[U+H+0]=i.x,S[U+H+1]=i.y,S[U+H+2]=i.z,S[U+H+3]=0),x===!0&&(i.fromBufferAttribute(P,z),S[U+H+4]=i.x,S[U+H+5]=i.y,S[U+H+6]=i.z,S[U+H+7]=0),g===!0&&(i.fromBufferAttribute(L,z),S[U+H+8]=i.x,S[U+H+9]=i.y,S[U+H+10]=i.z,S[U+H+11]=L.itemSize===4?i.w:1)}}u={count:h,texture:w,size:new Q(y,M)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function $y(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,f=c.geometry,h=e.get(c,f);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Mm=new Kt,rm=new Mo(1,1),Tm=new ki,wm=new Xa,Am=new xo,om=[],am=[],cm=new Float32Array(16),lm=new Float32Array(9),um=new Float32Array(4);function Er(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=om[i];if(r===void 0&&(r=new Float32Array(i),om[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function il(s,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ky(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function Qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function eb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;um.set(n),s.uniformMatrix2fv(this.addr,!1,um),Yt(t,n)}}function tb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;lm.set(n),s.uniformMatrix3fv(this.addr,!1,lm),Yt(t,n)}}function nb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;cm.set(n),s.uniformMatrix4fv(this.addr,!1,cm),Yt(t,n)}}function ib(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function rb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function ob(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function ab(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function ub(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function hb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(rm.compareFunction=gh,r=rm):r=Mm,t.setTexture2D(e||r,i)}function fb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wm,i)}function db(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Am,i)}function pb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tm,i)}function mb(s){switch(s){case 5126:return Ky;case 35664:return Jy;case 35665:return jy;case 35666:return Qy;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return cb;case 36295:return lb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}function xb(s,e){s.uniform1fv(this.addr,e)}function gb(s,e){let t=Er(e,this.size,2);s.uniform2fv(this.addr,t)}function vb(s,e){let t=Er(e,this.size,3);s.uniform3fv(this.addr,t)}function _b(s,e){let t=Er(e,this.size,4);s.uniform4fv(this.addr,t)}function yb(s,e){let t=Er(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bb(s,e){let t=Er(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sb(s,e){let t=Er(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mb(s,e){s.uniform1iv(this.addr,e)}function Tb(s,e){s.uniform2iv(this.addr,e)}function wb(s,e){s.uniform3iv(this.addr,e)}function Ab(s,e){s.uniform4iv(this.addr,e)}function Eb(s,e){s.uniform1uiv(this.addr,e)}function Rb(s,e){s.uniform2uiv(this.addr,e)}function Cb(s,e){s.uniform3uiv(this.addr,e)}function Ib(s,e){s.uniform4uiv(this.addr,e)}function Pb(s,e,t){let n=this.cache,i=e.length,r=il(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mm,r[o])}function Db(s,e,t){let n=this.cache,i=e.length,r=il(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wm,r[o])}function Lb(s,e,t){let n=this.cache,i=e.length,r=il(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Am,r[o])}function Fb(s,e,t){let n=this.cache,i=e.length,r=il(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tm,r[o])}function Nb(s){switch(s){case 5126:return xb;case 35664:return gb;case 35665:return vb;case 35666:return _b;case 35674:return yb;case 35675:return bb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Tb;case 35668:case 35672:return wb;case 35669:case 35673:return Ab;case 5125:return Eb;case 36294:return Rb;case 36295:return Cb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Fb}}var Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mb(t.type)}},Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nb(t.type)}},Fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function hm(s,e){s.seq.push(e),s.map[e.id]=e}function Ub(s,e,t){let n=s.name,i=n.length;for(Ph.lastIndex=0;;){let r=Ph.exec(n),o=Ph.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){hm(t,l===void 0?new Dh(a,s,e):new Lh(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Fh(a),hm(t,h)),t=h}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ub(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function fm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Bb=37297,Ob=0;function zb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var dm=new Oe;function kb(s){Qe._getMatrix(dm,Qe.workingColorSpace,s);let e=`mat3( ${dm.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case co:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+zb(s.getShaderSource(e),a)}else return r}function Vb(s,e){let t=kb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hb(s,e){let t;switch(e){case Cp:t="Linear";break;case Ip:t="Reinhard";break;case Pp:t="Cineon";break;case Dp:t="ACESFilmic";break;case Fp:t="AgX";break;case Np:t="Neutral";break;case Lp:t="Custom";break;default:be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jc=new R;function Gb(){Qe.getLuminanceCoefficients(jc);let s=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function Xb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Yo(s){return s!==""}function mm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(s){return s.replace(Yb,$b)}var Zb=new Map;function $b(s,e){let t=We[e];if(t===void 0){let n=Zb.get(e);if(n!==void 0)t=We[n],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nh(t)}var Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(Kb,Jb)}function Jb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Qb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case ws:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eS(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function tS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Ep:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function nS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iS(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=jb(t),l=Qb(t),f=eS(t),h=tS(t),u=nS(t),d=Wb(t),x=Xb(r),g=i.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Yo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Yo).join(`
`),m.length>0&&(m+=`
`)):(p=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),m=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?We.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Vb("linearToOutputTexel",t.outputColorSpace),Gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),o=Nh(o),o=mm(o,t),o=xm(o,t),a=Nh(a),a=mm(a,t),a=xm(a,t),o=gm(o),a=gm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=v+p+o,y=v+m+a,M=fm(i,i.VERTEX_SHADER,_),S=fm(i,i.FRAGMENT_SHADER,y);i.attachShader(g,M),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(I){if(s.debug.checkShaderErrors){let P=i.getProgramInfoLog(g)||"",L=i.getShaderInfoLog(M)||"",U=i.getShaderInfoLog(S)||"",z=P.trim(),H=L.trim(),ee=U.trim(),X=!0,te=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,S);else{let ne=pm(i,M,"vertex"),ve=pm(i,S,"fragment");Ye("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+ne+`
`+ve)}else z!==""?be("WebGLProgram: Program Info Log:",z):(H===""||ee==="")&&(te=!1);te&&(I.diagnostics={runnable:X,programLog:z,vertexShader:{log:H,prefix:p},fragmentShader:{log:ee,prefix:m}})}i.deleteShader(M),i.deleteShader(S),C=new Ar(i,g),T=qb(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,Bb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ob++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=S,this}var sS=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=sS++,this.code=e,this.usedTimes=0}};function rS(s,e,t,n,i,r,o){let a=new fo,c=new Uh,l=new Set,f=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return l.add(T),T===0?"uv":`uv${T}`}function p(T,b,I,P,L){let U=P.fog,z=L.geometry,H=T.isMeshStandardMaterial?P.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||H),X=ee&&ee.mapping===zo?ee.image.height:null,te=x[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&be("WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=ne!==void 0?ne.length:0,Xe=0;z.morphAttributes.position!==void 0&&(Xe=1),z.morphAttributes.normal!==void 0&&(Xe=2),z.morphAttributes.color!==void 0&&(Xe=3);let at,xt,tt,q;if(te){let ft=ui[te];at=ft.vertexShader,xt=ft.fragmentShader}else at=T.vertexShader,xt=T.fragmentShader,c.update(T),tt=c.getVertexShaderID(T),q=c.getFragmentShaderID(T);let $=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,Se=L.isBatchedMesh===!0,qe=!!T.map,Bt=!!T.matcap,Ze=!!ee,Tt=!!T.aoMap,F=!!T.lightMap,Ke=!!T.bumpMap,Je=!!T.normalMap,bt=!!T.displacementMap,ge=!!T.emissiveMap,At=!!T.metalnessMap,we=!!T.roughnessMap,ke=T.anisotropy>0,D=T.clearcoat>0,A=T.dispersion>0,k=T.iridescence>0,Y=T.sheen>0,K=T.transmission>0,W=ke&&!!T.anisotropyMap,Me=D&&!!T.clearcoatMap,ce=D&&!!T.clearcoatNormalMap,Ae=D&&!!T.clearcoatRoughnessMap,ye=k&&!!T.iridescenceMap,J=k&&!!T.iridescenceThicknessMap,se=Y&&!!T.sheenColorMap,Pe=Y&&!!T.sheenRoughnessMap,Re=!!T.specularMap,fe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,N=K&&!!T.transmissionMap,le=K&&!!T.thicknessMap,re=!!T.gradientMap,oe=!!T.alphaMap,j=T.alphaTest>0,Z=!!T.alphaHash,me=!!T.extensions,Be=Pn;T.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Be=s.toneMapping);let St={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:at,fragmentShader:xt,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Se,batchingColor:Se&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:wt,alphaToCoverage:!!T.alphaToCoverage,map:qe,matcap:Bt,envMap:Ze,envMapMode:Ze&&ee.mapping,envMapCubeUVHeight:X,aoMap:Tt,lightMap:F,bumpMap:Ke,normalMap:Je,displacementMap:u&&bt,emissiveMap:ge,normalMapObjectSpace:Je&&T.normalMapType===kp,normalMapTangentSpace:Je&&T.normalMapType===xh,metalnessMap:At,roughnessMap:we,anisotropy:ke,anisotropyMap:W,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ae,dispersion:A,iridescence:k,iridescenceMap:ye,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:se,sheenRoughnessMap:Pe,specularMap:Re,specularColorMap:fe,specularIntensityMap:Fe,transmission:K,transmissionMap:N,thicknessMap:le,gradientMap:re,opaque:T.transparent===!1&&T.blending===Zn&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:j,alphaHash:Z,combine:T.combine,mapUv:qe&&g(T.map.channel),aoMapUv:Tt&&g(T.aoMap.channel),lightMapUv:F&&g(T.lightMap.channel),bumpMapUv:Ke&&g(T.bumpMap.channel),normalMapUv:Je&&g(T.normalMap.channel),displacementMapUv:bt&&g(T.displacementMap.channel),emissiveMapUv:ge&&g(T.emissiveMap.channel),metalnessMapUv:At&&g(T.metalnessMap.channel),roughnessMapUv:we&&g(T.roughnessMap.channel),anisotropyMapUv:W&&g(T.anisotropyMap.channel),clearcoatMapUv:Me&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(T.sheenRoughnessMap.channel),specularMapUv:Re&&g(T.specularMap.channel),specularColorMapUv:fe&&g(T.specularColorMap.channel),specularIntensityMapUv:Fe&&g(T.specularIntensityMap.channel),transmissionMapUv:N&&g(T.transmissionMap.channel),thicknessMapUv:le&&g(T.thicknessMap.channel),alphaMapUv:oe&&g(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||ke),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(qe||oe),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:qe&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===lt,decodeVideoTextureEmissive:ge&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jt,flipSided:T.side===Wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:me&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&T.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let I in T.defines)b.push(I),b.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(v(b,T),_(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function v(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function _(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let b=x[T.type],I;if(b){let P=ui[b];I=Jp.clone(P.uniforms)}else I=T.uniforms;return I}function M(T,b){let I;for(let P=0,L=f.length;P<L;P++){let U=f[P];if(U.cacheKey===b){I=U,++I.usedTimes;break}}return I===void 0&&(I=new iS(s,b,T,r),f.push(I)),I}function S(T){if(--T.usedTimes===0){let b=f.indexOf(T);f[b]=f[f.length-1],f.pop(),T.destroy()}}function w(T){c.remove(T)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:w,programs:f,dispose:C}}function oS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function aS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,d,x,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:u,material:d,groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=d,m.groupOrder=x,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,u,d,x,g,p){let m=o(h,u,d,x,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(h,u,d,x,g,p){let m=o(h,u,d,x,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,u){t.length>1&&t.sort(h||aS),n.length>1&&n.sort(u||_m),i.length>1&&i.sort(u||_m)}function f(){for(let h=e,u=s.length;h<u;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:f,sort:l}}function cS(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ym,s.set(n,[o])):i>=r.length?(o=new ym,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function lS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new _e};break;case"SpotLight":t={position:new R,direction:new R,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function uS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var hS=0;function fS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dS(s){let e=new lS,t=uS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,r=new he,o=new he;function a(l){let f=0,h=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,x=0,g=0,p=0,m=0,v=0,_=0,y=0,M=0,S=0,w=0;l.sort(fS);for(let T=0,b=l.length;T<b;T++){let I=l[T],P=I.color,L=I.intensity,U=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=P.r*L,h+=P.g*L,u+=P.b*L;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],L);w++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,X=t.get(I);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=H,d++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(P).multiplyScalar(L),H.distance=U,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[g]=H;let ee=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,ee.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[g]=ee.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=z,y++}g++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(P).multiplyScalar(L),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=H,p++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let ee=I.shadow,X=t.get(I);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=I.shadow.matrix,_++}n.point[x]=H,x++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(L),H.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==v||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==M||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,C.directionalLength=d,C.pointLength=x,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=M,C.numLightProbes=w,n.version=hS++)}function c(l,f){let h=0,u=0,d=0,x=0,g=0,p=f.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let _=l[m];if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(_.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function bm(s){let e=new dS(s),t=[],n=[];function i(f){l.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function pS(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new bm(s),e.set(i,[a])):r>=o.length?(a=new bm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gS(s,e,t){let n=new mr,i=new Q,r=new Q,o=new Ge,a=new ic({depthPacking:zp}),c=new sc,l={},f=t.maxTextureSize,h={[rn]:Wt,[Wt]:rn,[jt]:jt},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:mS,fragmentShader:xS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new et;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ze(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let m=this.type;this.render=function(S,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let T=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Xt),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=m!==ci&&this.type===ci,U=m===ci&&this.type!==ci;for(let z=0,H=S.length;z<H;z++){let ee=S[z],X=ee.shadow;if(X===void 0){be("WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let te=X.getFrameExtents();if(i.multiply(te),r.copy(X.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/te.x),i.x=r.x*te.x,X.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/te.y),i.y=r.y*te.y,X.mapSize.y=r.y)),X.map===null||L===!0||U===!0){let ve=this.type!==ci?{minFilter:Le,magFilter:Le}:{};X.map!==null&&X.map.dispose(),X.map=new Gt(i.x,i.y,ve),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let ne=X.getViewportCount();for(let ve=0;ve<ne;ve++){let Xe=X.getViewport(ve);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),P.viewport(o),X.updateMatrices(ee,ve),n=X.getFrustum(),y(w,C,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ci&&v(X,C),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(T,b,I)};function v(S,w){let C=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Gt(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,C,u,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,C,d,g,null)}function _(S,w,C,T){let b=null,I=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)b=I;else if(b=C.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let P=b.uuid,L=w.uuid,U=l[P];U===void 0&&(U={},l[P]=U);let z=U[L];z===void 0&&(z=b.clone(),U[L]=z,w.addEventListener("dispose",M)),b=z}if(b.visible=w.visible,b.wireframe=w.wireframe,T===ci?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let P=s.properties.get(b);P.light=C}return b}function y(S,w,C,T,b){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ci)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let L=e.update(S),U=S.material;if(Array.isArray(U)){let z=L.groups;for(let H=0,ee=z.length;H<ee;H++){let X=z[H],te=U[X.materialIndex];if(te&&te.visible){let ne=_(S,te,T,b);S.onBeforeShadow(s,S,w,C,L,ne,X),s.renderBufferDirect(C,null,L,ne,S,X),S.onAfterShadow(s,S,w,C,L,ne,X)}}}else if(U.visible){let z=_(S,U,T,b);S.onBeforeShadow(s,S,w,C,L,z,null),s.renderBufferDirect(C,null,L,z,S,null),S.onAfterShadow(s,S,w,C,L,z,null)}}let P=S.children;for(let L=0,U=P.length;L<U;L++)y(P[L],w,C,T,b)}function M(S){S.target.removeEventListener("dispose",M);for(let C in l){let T=l[C],b=S.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var vS={[fc]:dc,[pc]:gc,[mc]:vc,[ps]:xc,[dc]:fc,[gc]:pc,[vc]:mc,[xc]:ps};function _S(s,e){function t(){let N=!1,le=new Ge,re=null,oe=new Ge(0,0,0,0);return{setMask:function(j){re!==j&&!N&&(s.colorMask(j,j,j,j),re=j)},setLocked:function(j){N=j},setClear:function(j,Z,me,Be,St){St===!0&&(j*=Be,Z*=Be,me*=Be),le.set(j,Z,me,Be),oe.equals(le)===!1&&(s.clearColor(j,Z,me,Be),oe.copy(le))},reset:function(){N=!1,re=null,oe.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,re=null,oe=null,j=null;return{setReversed:function(Z){if(le!==Z){let me=e.get("EXT_clip_control");Z?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),le=Z;let Be=j;j=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(Z){Z?$(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(Z){re!==Z&&!N&&(s.depthMask(Z),re=Z)},setFunc:function(Z){if(le&&(Z=vS[Z]),oe!==Z){switch(Z){case fc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case pc:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case mc:s.depthFunc(s.EQUAL);break;case xc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case vc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Z}},setLocked:function(Z){N=Z},setClear:function(Z){j!==Z&&(le&&(Z=1-Z),s.clearDepth(Z),j=Z)},reset:function(){N=!1,re=null,oe=null,j=null,le=!1}}}function i(){let N=!1,le=null,re=null,oe=null,j=null,Z=null,me=null,Be=null,St=null;return{setTest:function(ft){N||(ft?$(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(ft){le!==ft&&!N&&(s.stencilMask(ft),le=ft)},setFunc:function(ft,ti,Vn){(re!==ft||oe!==ti||j!==Vn)&&(s.stencilFunc(ft,ti,Vn),re=ft,oe=ti,j=Vn)},setOp:function(ft,ti,Vn){(Z!==ft||me!==ti||Be!==Vn)&&(s.stencilOp(ft,ti,Vn),Z=ft,me=ti,Be=Vn)},setLocked:function(ft){N=ft},setClear:function(ft){St!==ft&&(s.clearStencil(ft),St=ft)},reset:function(){N=!1,le=null,re=null,oe=null,j=null,Z=null,me=null,Be=null,St=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,f={},h={},u=new WeakMap,d=[],x=null,g=!1,p=null,m=null,v=null,_=null,y=null,M=null,S=null,w=new _e(0,0,0),C=0,T=!1,b=null,I=null,P=null,L=null,U=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=ee>=2);let te=null,ne={},ve=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),at=new Ge().fromArray(ve),xt=new Ge().fromArray(Xe);function tt(N,le,re,oe){let j=new Uint8Array(4),Z=s.createTexture();s.bindTexture(N,Z),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<re;me++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,j):s.texImage2D(le+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,j);return Z}let q={};q[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(s.DEPTH_TEST),o.setFunc(ps),Ke(!1),Je(sh),$(s.CULL_FACE),Tt(Xt);function $(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}function de(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}function Ue(N,le){return h[N]!==le?(s.bindFramebuffer(N,le),h[N]=le,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=le),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Se(N,le){let re=d,oe=!1;if(N){re=u.get(le),re===void 0&&(re=[],u.set(le,re));let j=N.textures;if(re.length!==j.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,me=j.length;Z<me;Z++)re[Z]=s.COLOR_ATTACHMENT0+Z;re.length=j.length,oe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,oe=!0);oe&&s.drawBuffers(re)}function qe(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let Bt={[Oi]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[hp]:s.FUNC_REVERSE_SUBTRACT};Bt[fp]=s.MIN,Bt[dp]=s.MAX;let Ze={[pp]:s.ZERO,[mp]:s.ONE,[xp]:s.SRC_COLOR,[ka]:s.SRC_ALPHA,[Sp]:s.SRC_ALPHA_SATURATE,[yp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[gp]:s.ONE_MINUS_SRC_COLOR,[Va]:s.ONE_MINUS_SRC_ALPHA,[bp]:s.ONE_MINUS_DST_COLOR,[_p]:s.ONE_MINUS_DST_ALPHA,[Mp]:s.CONSTANT_COLOR,[Tp]:s.ONE_MINUS_CONSTANT_COLOR,[wp]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(N,le,re,oe,j,Z,me,Be,St,ft){if(N===Xt){g===!0&&(de(s.BLEND),g=!1);return}if(g===!1&&($(s.BLEND),g=!0),N!==lp){if(N!==p||ft!==T){if((m!==Oi||y!==Oi)&&(s.blendEquation(s.FUNC_ADD),m=Oi,y=Oi),ft)switch(N){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFunc(s.ONE,s.ONE);break;case oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case oh:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}v=null,_=null,M=null,S=null,w.set(0,0,0),C=0,p=N,T=ft}return}j=j||le,Z=Z||re,me=me||oe,(le!==m||j!==y)&&(s.blendEquationSeparate(Bt[le],Bt[j]),m=le,y=j),(re!==v||oe!==_||Z!==M||me!==S)&&(s.blendFuncSeparate(Ze[re],Ze[oe],Ze[Z],Ze[me]),v=re,_=oe,M=Z,S=me),(Be.equals(w)===!1||St!==C)&&(s.blendColor(Be.r,Be.g,Be.b,St),w.copy(Be),C=St),p=N,T=!1}function F(N,le){N.side===jt?de(s.CULL_FACE):$(s.CULL_FACE);let re=N.side===Wt;le&&(re=!re),Ke(re),N.blending===Zn&&N.transparent===!1?Tt(Xt):Tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let oe=N.stencilWrite;a.setTest(oe),oe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function Je(N){N!==op?($(s.CULL_FACE),N!==I&&(N===sh?s.cullFace(s.BACK):N===ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),I=N}function bt(N){N!==P&&(H&&s.lineWidth(N),P=N)}function ge(N,le,re){N?($(s.POLYGON_OFFSET_FILL),(L!==le||U!==re)&&(s.polygonOffset(le,re),L=le,U=re)):de(s.POLYGON_OFFSET_FILL)}function At(N){N?$(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function we(N){N===void 0&&(N=s.TEXTURE0+z-1),te!==N&&(s.activeTexture(N),te=N)}function ke(N,le,re){re===void 0&&(te===null?re=s.TEXTURE0+z-1:re=te);let oe=ne[re];oe===void 0&&(oe={type:void 0,texture:void 0},ne[re]=oe),(oe.type!==N||oe.texture!==le)&&(te!==re&&(s.activeTexture(re),te=re),s.bindTexture(N,le||q[N]),oe.type=N,oe.texture=le)}function D(){let N=ne[te];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Y(){try{s.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function K(){try{s.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ce(){try{s.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ae(){try{s.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ye(){try{s.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function J(){try{s.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function se(N){at.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),at.copy(N))}function Pe(N){xt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function Re(N,le){let re=l.get(le);re===void 0&&(re=new WeakMap,l.set(le,re));let oe=re.get(N);oe===void 0&&(oe=s.getUniformBlockIndex(le,N.name),re.set(N,oe))}function fe(N,le){let oe=l.get(le).get(N);c.get(le)!==oe&&(s.uniformBlockBinding(le,oe,N.__bindingPointIndex),c.set(le,oe))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},te=null,ne={},h={},u=new WeakMap,d=[],x=null,g=!1,p=null,m=null,v=null,_=null,y=null,M=null,S=null,w=new _e(0,0,0),C=0,T=!1,b=null,I=null,P=null,L=null,U=null,at.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:de,bindFramebuffer:Ue,drawBuffers:Se,useProgram:qe,setBlending:Tt,setMaterial:F,setFlipSided:Ke,setCullFace:Je,setLineWidth:bt,setPolygonOffset:ge,setScissorTest:At,activeTexture:we,bindTexture:ke,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:k,texImage2D:ye,texImage3D:J,updateUBOMapping:Re,uniformBlockBinding:fe,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:Me,scissor:se,viewport:Pe,reset:Fe}}function yS(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,f=new WeakMap,h,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return d?new OffscreenCanvas(D,A):cr("canvas")}function g(D,A,k){let Y=1,K=ke(D);if((K.width>k||K.height>k)&&(Y=k/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let W=Math.floor(Y*K.width),Me=Math.floor(Y*K.height);h===void 0&&(h=x(W,Me));let ce=A?x(W,Me):h;return ce.width=W,ce.height=Me,ce.getContext("2d").drawImage(D,0,0,W,Me),be("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Me+")."),ce}else return"data"in D&&be("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function p(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(D,A,k,Y,K=!1){if(D!==null){if(s[D]!==void 0)return s[D];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let W=A;if(A===s.RED&&(k===s.FLOAT&&(W=s.R32F),k===s.HALF_FLOAT&&(W=s.R16F),k===s.UNSIGNED_BYTE&&(W=s.R8)),A===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(W=s.R8UI),k===s.UNSIGNED_SHORT&&(W=s.R16UI),k===s.UNSIGNED_INT&&(W=s.R32UI),k===s.BYTE&&(W=s.R8I),k===s.SHORT&&(W=s.R16I),k===s.INT&&(W=s.R32I)),A===s.RG&&(k===s.FLOAT&&(W=s.RG32F),k===s.HALF_FLOAT&&(W=s.RG16F),k===s.UNSIGNED_BYTE&&(W=s.RG8)),A===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(W=s.RG8UI),k===s.UNSIGNED_SHORT&&(W=s.RG16UI),k===s.UNSIGNED_INT&&(W=s.RG32UI),k===s.BYTE&&(W=s.RG8I),k===s.SHORT&&(W=s.RG16I),k===s.INT&&(W=s.RG32I)),A===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(W=s.RGB8UI),k===s.UNSIGNED_SHORT&&(W=s.RGB16UI),k===s.UNSIGNED_INT&&(W=s.RGB32UI),k===s.BYTE&&(W=s.RGB8I),k===s.SHORT&&(W=s.RGB16I),k===s.INT&&(W=s.RGB32I)),A===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),k===s.UNSIGNED_INT&&(W=s.RGBA32UI),k===s.BYTE&&(W=s.RGBA8I),k===s.SHORT&&(W=s.RGBA16I),k===s.INT&&(W=s.RGBA32I)),A===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),A===s.RGBA){let Me=K?co:Qe.getTransfer(Y);k===s.FLOAT&&(W=s.RGBA32F),k===s.HALF_FLOAT&&(W=s.RGBA16F),k===s.UNSIGNED_BYTE&&(W=Me===lt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(D,A){let k;return D?A===null||A===dn||A===br?k=s.DEPTH24_STENCIL8:A===Ve?k=s.DEPTH32F_STENCIL8:A===Xi&&(k=s.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===dn||A===br?k=s.DEPTH_COMPONENT24:A===Ve?k=s.DEPTH_COMPONENT32F:A===Xi&&(k=s.DEPTH_COMPONENT16),k}function M(D,A){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Le&&D.minFilter!==rt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function S(D){let A=D.target;A.removeEventListener("dispose",S),C(A),A.isVideoTexture&&f.delete(A)}function w(D){let A=D.target;A.removeEventListener("dispose",w),b(A)}function C(D){let A=n.get(D);if(A.__webglInit===void 0)return;let k=D.source,Y=u.get(k);if(Y){let K=Y[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(D),Object.keys(Y).length===0&&u.delete(k)}n.remove(D)}function T(D){let A=n.get(D);s.deleteTexture(A.__webglTexture);let k=D.source,Y=u.get(k);delete Y[A.__cacheKey],o.memory.textures--}function b(D){let A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let K=0;K<A.__webglFramebuffer[Y].length;K++)s.deleteFramebuffer(A.__webglFramebuffer[Y][K]);else s.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)s.deleteFramebuffer(A.__webglFramebuffer[Y]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let k=D.textures;for(let Y=0,K=k.length;Y<K;Y++){let W=n.get(k[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(D)}let I=0;function P(){I=0}function L(){let D=I;return D>=i.maxTextures&&be("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),I+=1,D}function U(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function z(D,A){let k=n.get(D);if(D.isVideoTexture&&At(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){let Y=D.image;if(Y===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,D,A);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+A)}function H(D,A){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){q(k,D,A);return}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+A)}function ee(D,A){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){q(k,D,A);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+A)}function X(D,A){let k=n.get(D);if(D.version>0&&k.__version!==D.version){$(k,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+A)}let te={[Vt]:s.REPEAT,[Mt]:s.CLAMP_TO_EDGE,[or]:s.MIRRORED_REPEAT},ne={[Le]:s.NEAREST,[yc]:s.NEAREST_MIPMAP_NEAREST,[As]:s.NEAREST_MIPMAP_LINEAR,[rt]:s.LINEAR,[_r]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},ve={[Vp]:s.NEVER,[Yp]:s.ALWAYS,[Hp]:s.LESS,[gh]:s.LEQUAL,[Gp]:s.EQUAL,[qp]:s.GEQUAL,[Wp]:s.GREATER,[Xp]:s.NOTEQUAL};function Xe(D,A){if(A.type===Ve&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===rt||A.magFilter===_r||A.magFilter===As||A.magFilter===Kn||A.minFilter===rt||A.minFilter===_r||A.minFilter===As||A.minFilter===Kn)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,te[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,te[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,te[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ne[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ne[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Le||A.minFilter!==As&&A.minFilter!==Kn||A.type===Ve&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function at(D,A){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",S));let Y=A.source,K=u.get(Y);K===void 0&&(K={},u.set(Y,K));let W=U(A);if(W!==D.__cacheKey){K[W]===void 0&&(K[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[W].usedTimes++;let Me=K[D.__cacheKey];Me!==void 0&&(K[D.__cacheKey].usedTimes--,Me.usedTimes===0&&T(A)),D.__cacheKey=W,D.__webglTexture=K[W].texture}return k}function xt(D,A,k){return Math.floor(Math.floor(D/k)/A)}function tt(D,A,k,Y){let W=D.updateRanges;if(W.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,k,Y,A.data);else{W.sort((J,se)=>J.start-se.start);let Me=0;for(let J=1;J<W.length;J++){let se=W[Me],Pe=W[J],Re=se.start+se.count,fe=xt(Pe.start,A.width,4),Fe=xt(se.start,A.width,4);Pe.start<=Re+1&&fe===Fe&&xt(Pe.start+Pe.count-1,A.width,4)===fe?se.count=Math.max(se.count,Pe.start+Pe.count-se.start):(++Me,W[Me]=Pe)}W.length=Me+1;let ce=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let J=0,se=W.length;J<se;J++){let Pe=W[J],Re=Math.floor(Pe.start/4),fe=Math.ceil(Pe.count/4),Fe=Re%A.width,N=Math.floor(Re/A.width),le=fe,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Fe,N,le,re,k,Y,A.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function q(D,A,k){let Y=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=s.TEXTURE_3D);let K=at(D,A),W=A.source;t.bindTexture(Y,D.__webglTexture,s.TEXTURE0+k);let Me=n.get(W);if(W.version!==Me.__version||K===!0){t.activeTexture(s.TEXTURE0+k);let ce=Qe.getPrimaries(Qe.workingColorSpace),Ae=A.colorSpace===jn?null:Qe.getPrimaries(A.colorSpace),ye=A.colorSpace===jn||ce===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let J=g(A.image,!1,i.maxTextureSize);J=we(A,J);let se=r.convert(A.format,A.colorSpace),Pe=r.convert(A.type),Re=_(A.internalFormat,se,Pe,A.colorSpace,A.isVideoTexture);Xe(Y,A);let fe,Fe=A.mipmaps,N=A.isVideoTexture!==!0,le=Me.__version===void 0||K===!0,re=W.dataReady,oe=M(A,J);if(A.isDepthTexture)Re=y(A.format===Sr,A.type),le&&(N?t.texStorage2D(s.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,se,Pe,null));else if(A.isDataTexture)if(Fe.length>0){N&&le&&t.texStorage2D(s.TEXTURE_2D,oe,Re,Fe[0].width,Fe[0].height);for(let j=0,Z=Fe.length;j<Z;j++)fe=Fe[j],N?re&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,fe.width,fe.height,se,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,j,Re,fe.width,fe.height,0,se,Pe,fe.data);A.generateMipmaps=!1}else N?(le&&t.texStorage2D(s.TEXTURE_2D,oe,Re,J.width,J.height),re&&tt(A,J,se,Pe)):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,se,Pe,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){N&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Re,Fe[0].width,Fe[0].height,J.depth);for(let j=0,Z=Fe.length;j<Z;j++)if(fe=Fe[j],A.format!==Ne)if(se!==null)if(N){if(re)if(A.layerUpdates.size>0){let me=Ah(fe.width,fe.height,A.format,A.type);for(let Be of A.layerUpdates){let St=fe.data.subarray(Be*me/fe.data.BYTES_PER_ELEMENT,(Be+1)*me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,Be,fe.width,fe.height,1,se,St)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,J.depth,se,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Re,fe.width,fe.height,J.depth,0,fe.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,J.depth,se,Pe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,Re,fe.width,fe.height,J.depth,0,se,Pe,fe.data)}else{N&&le&&t.texStorage2D(s.TEXTURE_2D,oe,Re,Fe[0].width,Fe[0].height);for(let j=0,Z=Fe.length;j<Z;j++)fe=Fe[j],A.format!==Ne?se!==null?N?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,j,Re,fe.width,fe.height,0,fe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?re&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,fe.width,fe.height,se,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,j,Re,fe.width,fe.height,0,se,Pe,fe.data)}else if(A.isDataArrayTexture)if(N){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Re,J.width,J.height,J.depth),re)if(A.layerUpdates.size>0){let j=Ah(J.width,J.height,A.format,A.type);for(let Z of A.layerUpdates){let me=J.data.subarray(Z*j/J.data.BYTES_PER_ELEMENT,(Z+1)*j/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,se,Pe,me)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,Pe,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,se,Pe,J.data);else if(A.isData3DTexture)N?(le&&t.texStorage3D(s.TEXTURE_3D,oe,Re,J.width,J.height,J.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,Pe,J.data)):t.texImage3D(s.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,se,Pe,J.data);else if(A.isFramebufferTexture){if(le)if(N)t.texStorage2D(s.TEXTURE_2D,oe,Re,J.width,J.height);else{let j=J.width,Z=J.height;for(let me=0;me<oe;me++)t.texImage2D(s.TEXTURE_2D,me,Re,j,Z,0,se,Pe,null),j>>=1,Z>>=1}}else if(Fe.length>0){if(N&&le){let j=ke(Fe[0]);t.texStorage2D(s.TEXTURE_2D,oe,Re,j.width,j.height)}for(let j=0,Z=Fe.length;j<Z;j++)fe=Fe[j],N?re&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,se,Pe,fe):t.texImage2D(s.TEXTURE_2D,j,Re,se,Pe,fe);A.generateMipmaps=!1}else if(N){if(le){let j=ke(J);t.texStorage2D(s.TEXTURE_2D,oe,Re,j.width,j.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,Pe,J)}else t.texImage2D(s.TEXTURE_2D,0,Re,se,Pe,J);p(A)&&m(Y),Me.__version=W.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function $(D,A,k){if(A.image.length!==6)return;let Y=at(D,A),K=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+k);let W=n.get(K);if(K.version!==W.__version||Y===!0){t.activeTexture(s.TEXTURE0+k);let Me=Qe.getPrimaries(Qe.workingColorSpace),ce=A.colorSpace===jn?null:Qe.getPrimaries(A.colorSpace),Ae=A.colorSpace===jn||Me===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ye=A.isCompressedTexture||A.image[0].isCompressedTexture,J=A.image[0]&&A.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!ye&&!J?se[Z]=g(A.image[Z],!0,i.maxCubemapSize):se[Z]=J?A.image[Z].image:A.image[Z],se[Z]=we(A,se[Z]);let Pe=se[0],Re=r.convert(A.format,A.colorSpace),fe=r.convert(A.type),Fe=_(A.internalFormat,Re,fe,A.colorSpace),N=A.isVideoTexture!==!0,le=W.__version===void 0||Y===!0,re=K.dataReady,oe=M(A,Pe);Xe(s.TEXTURE_CUBE_MAP,A);let j;if(ye){N&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Fe,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){j=se[Z].mipmaps;for(let me=0;me<j.length;me++){let Be=j[me];A.format!==Ne?Re!==null?N?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Be.width,Be.height,Re,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Fe,Be.width,Be.height,0,Be.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Be.width,Be.height,Re,fe,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Fe,Be.width,Be.height,0,Re,fe,Be.data)}}}else{if(j=A.mipmaps,N&&le){j.length>0&&oe++;let Z=ke(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){N?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,Re,fe,se[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,se[Z].width,se[Z].height,0,Re,fe,se[Z].data);for(let me=0;me<j.length;me++){let St=j[me].image[Z].image;N?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,St.width,St.height,Re,fe,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Fe,St.width,St.height,0,Re,fe,St.data)}}else{N?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,fe,se[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,Re,fe,se[Z]);for(let me=0;me<j.length;me++){let Be=j[me];N?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Re,fe,Be.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Fe,Re,fe,Be.image[Z])}}}p(A)&&m(s.TEXTURE_CUBE_MAP),W.__version=K.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function de(D,A,k,Y,K,W){let Me=r.convert(k.format,k.colorSpace),ce=r.convert(k.type),Ae=_(k.internalFormat,Me,ce,k.colorSpace),ye=n.get(A),J=n.get(k);if(J.__renderTarget=A,!ye.__hasExternalTextures){let se=Math.max(1,A.width>>W),Pe=Math.max(1,A.height>>W);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,W,Ae,se,Pe,A.depth,0,Me,ce,null):t.texImage2D(K,W,Ae,se,Pe,0,Me,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ge(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,K,J.__webglTexture,0,bt(A)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,K,J.__webglTexture,W),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(D,A,k){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){let Y=A.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=y(A.stencilBuffer,K),Me=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=bt(A);ge(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,W,A.width,A.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,W,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,W,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,D)}else{let Y=A.textures;for(let K=0;K<Y.length;K++){let W=Y[K],Me=r.convert(W.format,W.colorSpace),ce=r.convert(W.type),Ae=_(W.internalFormat,Me,ce,W.colorSpace),ye=bt(A);k&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Ae,A.width,A.height):ge(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,Ae,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);let K=Y.__webglTexture,W=bt(A);if(A.depthTexture.format===ar)ge(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(A.depthTexture.format===Sr)ge(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function qe(D){let A=n.get(D),k=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let Y=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=Y}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Y=D.texture.mipmaps;Y&&Y.length>0?Se(A.__webglFramebuffer[0],D):Se(A.__webglFramebuffer,D)}else if(k){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ue(A.__webglDepthbuffer[Y],D,!1);else{let K=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,W)}}else{let Y=D.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ue(A.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,W)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(D,A,k){let Y=n.get(D);A!==void 0&&de(Y.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&qe(D)}function Ze(D){let A=D.texture,k=n.get(D),Y=n.get(A);D.addEventListener("dispose",w);let K=D.textures,W=D.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=A.version,o.memory.textures++),W){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)k.__webglFramebuffer[ce][Ae]=s.createFramebuffer()}else k.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)k.__webglFramebuffer[ce]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ce=0,Ae=K.length;ce<Ae;ce++){let ye=n.get(K[ce]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&ge(D)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){let Ae=K[ce];k.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);let ye=r.convert(Ae.format,Ae.colorSpace),J=r.convert(Ae.type),se=_(Ae.internalFormat,ye,J,Ae.colorSpace,D.isXRRenderTarget===!0),Pe=bt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,se,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)de(k.__webglFramebuffer[ce][Ae],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae);else de(k.__webglFramebuffer[ce],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(A)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,Ae=K.length;ce<Ae;ce++){let ye=K[ce],J=n.get(ye),se=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),Xe(se,ye),de(k.__webglFramebuffer,D,ye,s.COLOR_ATTACHMENT0+ce,se,0),p(ye)&&m(se)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Xe(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)de(k.__webglFramebuffer[Ae],D,A,s.COLOR_ATTACHMENT0,ce,Ae);else de(k.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,ce,0);p(A)&&m(ce),t.unbindTexture()}D.depthBuffer&&qe(D)}function Tt(D){let A=D.textures;for(let k=0,Y=A.length;k<Y;k++){let K=A[k];if(p(K)){let W=v(D),Me=n.get(K).__webglTexture;t.bindTexture(W,Me),m(W),t.unbindTexture()}}}let F=[],Ke=[];function Je(D){if(D.samples>0){if(ge(D)===!1){let A=D.textures,k=D.width,Y=D.height,K=s.COLOR_BUFFER_BIT,W=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(D),ce=A.length>1;if(ce)for(let ye=0;ye<A.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Ae=D.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<A.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);let J=n.get(A[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,K,s.NEAREST),c===!0&&(F.length=0,Ke.length=0,F.push(s.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(F.push(W),Ke.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<A.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);let J=n.get(A[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function bt(D){return Math.min(i.maxSamples,D.samples)}function ge(D){let A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function At(D){let A=o.render.frame;f.get(D)!==A&&(f.set(D,A),D.update())}function we(D,A){let k=D.colorSpace,Y=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==wt&&k!==jn&&(Qe.getTransfer(k)===lt?(Y!==Ne||K!==an)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",k)),A}function ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Bt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function bS(s,e){function t(n,i=jn){let r,o=Qe.getTransfer(i);if(n===an)return s.UNSIGNED_BYTE;if(n===bc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===yr)return s.BYTE;if(n===ko)return s.SHORT;if(n===Xi)return s.UNSIGNED_SHORT;if(n===qi)return s.INT;if(n===dn)return s.UNSIGNED_INT;if(n===Ve)return s.FLOAT;if(n===Ht)return s.HALF_FLOAT;if(n===dh)return s.ALPHA;if(n===ph)return s.RGB;if(n===Ne)return s.RGBA;if(n===ar)return s.DEPTH_COMPONENT;if(n===Sr)return s.DEPTH_STENCIL;if(n===Jn)return s.RED;if(n===Mr)return s.RED_INTEGER;if(n===Yi)return s.RG;if(n===Zi)return s.RG_INTEGER;if(n===$i)return s.RGBA_INTEGER;if(n===Vo||n===Ho||n===Go||n===Wo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Tc||n===wc||n===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===Rc)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Pc||n===Dc||n===Lc||n===Fc||n===Nc||n===Uc||n===Bc||n===Oc||n===zc||n===kc||n===Vc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===Xc||n===qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wc)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Zc||n===$c||n===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var SS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new To(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:SS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends bi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,h=null,u=null,d=null,x=null,g=typeof XRWebGLBinding<"u",p=new Oh,m={},v=t.getContextAttributes(),_=null,y=null,M=[],S=[],w=new Q,C=null,T=new Lt;T.viewport=new Ge;let b=new Lt;b.viewport=new Ge;let I=[T,b],P=new hc,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=M[q];return $===void 0&&($=new hr,M[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=M[q];return $===void 0&&($=new hr,M[q]=$),$.getGripSpace()},this.getHand=function(q){let $=M[q];return $===void 0&&($=new hr,M[q]=$),$.getHandSpace()};function z(q){let $=S.indexOf(q.inputSource);if($===-1)return;let de=M[$];de!==void 0&&(de.update(q.inputSource,q.frame,l||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",ee);for(let q=0;q<M.length;q++){let $=S[q];$!==null&&(S[q]=null,M[q].disconnect($))}L=null,U=null,p.reset();for(let q in m)delete m[q];e.setRenderTarget(_),d=null,u=null,h=null,i=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Sr:ar,Ue=v.stencil?br:dn);let qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(qe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Gt(u.textureWidth,u.textureHeight,{format:Ne,type:an,depthTexture:new Mo(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Gt(d.framebufferWidth,d.framebufferHeight,{format:Ne,type:an,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(q){for(let $=0;$<q.removed.length;$++){let de=q.removed[$],Ue=S.indexOf(de);Ue>=0&&(S[Ue]=null,M[Ue].disconnect(de))}for(let $=0;$<q.added.length;$++){let de=q.added[$],Ue=S.indexOf(de);if(Ue===-1){for(let qe=0;qe<M.length;qe++)if(qe>=S.length){S.push(de),Ue=qe;break}else if(S[qe]===null){S[qe]=de,Ue=qe;break}if(Ue===-1)break}let Se=M[Ue];Se&&Se.connect(de)}}let X=new R,te=new R;function ne(q,$,de){X.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);let Ue=X.distanceTo(te),Se=$.projectionMatrix.elements,qe=de.projectionMatrix.elements,Bt=Se[14]/(Se[10]-1),Ze=Se[14]/(Se[10]+1),Tt=(Se[9]+1)/Se[5],F=(Se[9]-1)/Se[5],Ke=(Se[8]-1)/Se[0],Je=(qe[8]+1)/qe[0],bt=Bt*Ke,ge=Bt*Je,At=Ue/(-Ke+Je),we=At*-Ke;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ke=Bt+At,D=Ze+At,A=bt-we,k=ge+(Ue-we),Y=Tt*Ze/D*ke,K=F*Ze/D*ke;q.projectionMatrix.makePerspective(A,k,Y,K,ke,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ve(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let $=q.near,de=q.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(de=p.depthFar)),P.near=b.near=T.near=$,P.far=b.far=T.far=de,(L!==P.near||U!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,U=P.far),P.layers.mask=q.layers.mask|6,T.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;let Ue=q.parent,Se=P.cameras;ve(P,Ue);for(let qe=0;qe<Se.length;qe++)ve(Se[qe],Ue);Se.length===2?ne(P,T,b):P.projectionMatrix.copy(T.projectionMatrix),Xe(q,P,Ue)};function Xe(q,$,de){de===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=gs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(q){return m[q]};let at=null;function xt(q,$){if(f=$.getViewerPose(l||o),x=$,f!==null){let de=f.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ue=!1;de.length!==P.cameras.length&&(P.cameras.length=0,Ue=!0);for(let Ze=0;Ze<de.length;Ze++){let Tt=de[Ze],F=null;if(d!==null)F=d.getViewport(Tt);else{let Je=h.getViewSubImage(u,Tt);F=Je.viewport,Ze===0&&(e.setRenderTargetTextures(y,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(y))}let Ke=I[Ze];Ke===void 0&&(Ke=new Lt,Ke.layers.enable(Ze),Ke.viewport=new Ge,I[Ze]=Ke),Ke.matrix.fromArray(Tt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Tt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(F.x,F.y,F.width,F.height),Ze===0&&(P.matrix.copy(Ke.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ue===!0&&P.cameras.push(Ke)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let Ze=h.getDepthInformation(de[0]);Ze&&Ze.isValid&&Ze.texture&&p.init(Ze,i.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let Ze=0;Ze<de.length;Ze++){let Tt=de[Ze].camera;if(Tt){let F=m[Tt];F||(F=new To,m[Tt]=F);let Ke=h.getCameraImage(Tt);F.sourceTexture=Ke}}}}for(let de=0;de<M.length;de++){let Ue=S[de],Se=M[de];Ue!==null&&Se!==void 0&&Se.update(Ue,$,l||o)}at&&at(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}let tt=new Sm;tt.setAnimationLoop(xt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}},Cs=new $n,TS=new he;function wS(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Sh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),f(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),_=v.envMap,y=v.envMapRotation;_&&(p.envMap.value=_,Cs.copy(y),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),p.envMapRotation.value.setFromMatrix4(TS.makeRotationFromEuler(Cs)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function f(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AS(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(x(v),y=f(v),i[v.id]=y,v.addEventListener("dispose",p));let M=_.program;n.updateUBOMapping(v,M);let S=e.render.frame;r[v.id]!==S&&(u(v),r[v.id]=S)}function f(v){let _=h();v.__bindingPointIndex=_;let y=s.createBuffer(),M=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=i[v.id],y=v.uniforms,M=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,w=y.length;S<w;S++){let C=Array.isArray(y[S])?y[S]:[y[S]];for(let T=0,b=C.length;T<b;T++){let I=C[T];if(d(I,S,T,M)===!0){let P=I.__offset,L=Array.isArray(I.value)?I.value:[I.value],U=0;for(let z=0;z<L.length;z++){let H=L[z],ee=g(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,P+U,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,U),U+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,y,M){let S=v.value,w=_+"_"+y;if(M[w]===void 0)return typeof S=="number"||typeof S=="boolean"?M[w]=S:M[w]=S.clone(),!0;{let C=M[w];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return M[w]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function x(v){let _=v.uniforms,y=0,M=16;for(let w=0,C=_.length;w<C;w++){let T=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,I=T.length;b<I;b++){let P=T[b],L=Array.isArray(P.value)?P.value:[P.value];for(let U=0,z=L.length;U<z;U++){let H=L[U],ee=g(H),X=y%M,te=X%ee.boundary,ne=X+te;y+=te,ne!==0&&M-ne<ee.storage&&(y+=M-ne),P.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=ee.storage}}}let S=y%M;return S>0&&(y+=M-S),v.__size=y,v.__cache={},this}function g(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var ES=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Ri=null;function RS(){return Ri===null&&(Ri=new ht(ES,32,32,Yi,Ht),Ri.minFilter=rt,Ri.magFilter=rt,Ri.wrapS=Mt,Ri.wrapT=Mt,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var el=class{constructor(e={}){let{canvas:t=Zp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Set([$i,Zi,Mr]),g=new Set([an,dn,Xi,br,bc,Sc]),p=new Uint32Array(4),m=new Int32Array(4),v=null,_=null,y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,w=!1;this._outputColorSpace=Ot;let C=0,T=0,b=null,I=-1,P=null,L=new Ge,U=new Ge,z=null,H=new _e(0),ee=0,X=t.width,te=t.height,ne=1,ve=null,Xe=null,at=new Ge(0,0,X,te),xt=new Ge(0,0,X,te),tt=!1,q=new mr,$=!1,de=!1,Ue=new he,Se=new R,qe=new Ge,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Tt(){return b===null?ne:1}let F=n;function Ke(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){let B="webgl2";if(F=Ke(B,E),F===null)throw Ke(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let Je,bt,ge,At,we,ke,D,A,k,Y,K,W,Me,ce,Ae,ye,J,se,Pe,Re,fe,Fe,N,le;function re(){Je=new Wy(F),Je.init(),Fe=new bS(F,Je),bt=new Ny(F,Je,e,Fe),ge=new _S(F,Je),bt.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),At=new Yy(F),we=new oS,ke=new yS(F,Je,ge,we,bt,Fe,At),D=new By(S),A=new Gy(S),k=new Jg(F),N=new Ly(F,k),Y=new Xy(F,k,At,N),K=new $y(F,Y,k,At),Pe=new Zy(F,bt,ke),ye=new Uy(we),W=new rS(S,D,A,Je,bt,N,ye),Me=new wS(S,we),ce=new cS,Ae=new pS(Je),se=new Dy(S,D,A,ge,K,d,c),J=new gS(S,K,bt),le=new AS(F,At,bt,ge),Re=new Fy(F,Je,At),fe=new qy(F,Je,At),At.programs=W.programs,S.capabilities=bt,S.extensions=Je,S.properties=we,S.renderLists=ce,S.shadowMap=J,S.state=ge,S.info=At}re();let oe=new zh(S,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(X,te,!1))},this.getSize=function(E){return E.set(X,te)},this.setSize=function(E,B,V=!0){if(oe.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,te=B,t.width=Math.floor(E*ne),t.height=Math.floor(B*ne),V===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(X*ne,te*ne).floor()},this.setDrawingBufferSize=function(E,B,V){X=E,te=B,ne=V,t.width=Math.floor(E*V),t.height=Math.floor(B*V),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(at)},this.setViewport=function(E,B,V,G){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,B,V,G),ge.viewport(L.copy(at).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,B,V,G){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,B,V,G),ge.scissor(U.copy(xt).multiplyScalar(ne).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){ge.setScissorTest(tt=E)},this.setOpaqueSort=function(E){ve=E},this.setTransparentSort=function(E){Xe=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,V=!0){let G=0;if(E){let O=!1;if(b!==null){let ie=b.texture.format;O=x.has(ie)}if(O){let ie=b.texture.type,ue=g.has(ie),xe=se.getClearColor(),pe=se.getClearAlpha(),Ce=xe.r,De=xe.g,Te=xe.b;ue?(p[0]=Ce,p[1]=De,p[2]=Te,p[3]=pe,F.clearBufferuiv(F.COLOR,0,p)):(m[0]=Ce,m[1]=De,m[2]=Te,m[3]=pe,F.clearBufferiv(F.COLOR,0,m))}else G|=F.COLOR_BUFFER_BIT}B&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",me,!1),se.dispose(),ce.dispose(),Ae.dispose(),we.dispose(),D.dispose(),A.dispose(),K.dispose(),N.dispose(),le.dispose(),W.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",nd),oe.removeEventListener("sessionend",id),as.stop()};function j(E){E.preventDefault(),uo("WebGLRenderer: Context Lost."),w=!0}function Z(){uo("WebGLRenderer: Context Restored."),w=!1;let E=At.autoReset,B=J.enabled,V=J.autoUpdate,G=J.needsUpdate,O=J.type;re(),At.autoReset=E,J.enabled=B,J.autoUpdate=V,J.needsUpdate=G,J.type=O}function me(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){let B=E.target;B.removeEventListener("dispose",Be),St(B)}function St(E){ft(E),we.remove(E)}function ft(E){let B=we.get(E).programs;B!==void 0&&(B.forEach(function(V){W.releaseProgram(V)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,V,G,O,ie){B===null&&(B=Bt);let ue=O.isMesh&&O.matrixWorld.determinant()<0,xe=Dx(E,B,V,G,O);ge.setMaterial(G,ue);let pe=V.index,Ce=1;if(G.wireframe===!0){if(pe=Y.getWireframeAttribute(V),pe===void 0)return;Ce=2}let De=V.drawRange,Te=V.attributes.position,je=De.start*Ce,dt=(De.start+De.count)*Ce;ie!==null&&(je=Math.max(je,ie.start*Ce),dt=Math.min(dt,(ie.start+ie.count)*Ce)),pe!==null?(je=Math.max(je,0),dt=Math.min(dt,pe.count)):Te!=null&&(je=Math.max(je,0),dt=Math.min(dt,Te.count));let Pt=dt-je;if(Pt<0||Pt===1/0)return;N.setup(O,G,xe,V,pe);let Dt,gt=Re;if(pe!==null&&(Dt=k.get(pe),gt=fe,gt.setIndex(Dt)),O.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Tt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(O.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),ge.setLineWidth(Ee*Tt()),O.isLineSegments?gt.setMode(F.LINES):O.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else O.isPoints?gt.setMode(F.POINTS):O.isSprite&&gt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ur("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ee=O._multiDrawStarts,Et=O._multiDrawCounts,it=O._multiDrawCount,wn=pe?k.get(pe).bytesPerElement:1,Vs=we.get(G).currentProgram.getUniforms();for(let An=0;An<it;An++)Vs.setValue(F,"_gl_DrawID",An),gt.render(Ee[An]/wn,Et[An])}else if(O.isInstancedMesh)gt.renderInstances(je,Pt,O.count);else if(V.isInstancedBufferGeometry){let Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,Ee);gt.renderInstances(je,Pt,Et)}else gt.render(je,Pt)};function ti(E,B,V){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,fa(E,B,V),E.side=rn,E.needsUpdate=!0,fa(E,B,V),E.side=jt):fa(E,B,V)}this.compile=function(E,B,V=null){V===null&&(V=E),_=Ae.get(V),_.init(B),M.push(_),V.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights();let G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ie=O.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let xe=ie[ue];ti(xe,V,O),G.add(xe)}else ti(ie,V,O),G.add(ie)}),_=M.pop(),G},this.compileAsync=function(E,B,V=null){let G=this.compile(E,B,V);return new Promise(O=>{function ie(){if(G.forEach(function(ue){we.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){O(E);return}setTimeout(ie,10)}Je.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Vn=null;function Px(E){Vn&&Vn(E)}function nd(){as.stop()}function id(){as.start()}let as=new Sm;as.setAnimationLoop(Px),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(E){Vn=E,oe.setAnimationLoop(E),E===null?as.stop():as.start()},oe.addEventListener("sessionstart",nd),oe.addEventListener("sessionend",id),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,B,b),_=Ae.get(E,M.length),_.init(B),M.push(_),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(Ue,qn,B.reversedDepth),de=this.localClippingEnabled,$=ye.init(this.clippingPlanes,de),v=ce.get(E,y.length),v.init(),y.push(v),oe.enabled===!0&&oe.isPresenting===!0){let ie=S.xr.getDepthSensingMesh();ie!==null&&pu(ie,B,-1/0,S.sortObjects)}pu(E,B,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ve,Xe),Ze=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ze&&se.addToRenderList(v,E),this.info.render.frame++,$===!0&&ye.beginShadows();let V=_.state.shadowsArray;J.render(V,E,B),$===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=v.opaque,O=v.transmissive;if(_.setupLights(),B.isArrayCamera){let ie=B.cameras;if(O.length>0)for(let ue=0,xe=ie.length;ue<xe;ue++){let pe=ie[ue];rd(G,O,E,pe)}Ze&&se.render(E);for(let ue=0,xe=ie.length;ue<xe;ue++){let pe=ie[ue];sd(v,E,pe,pe.viewport)}}else O.length>0&&rd(G,O,E,B),Ze&&se.render(E),sd(v,E,B);b!==null&&T===0&&(ke.updateMultisampleRenderTarget(b),ke.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(S,E,B),N.resetDefaultState(),I=-1,P=null,M.pop(),M.length>0?(_=M[M.length-1],$===!0&&ye.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function pu(E,B,V,G){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){G&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);let ue=K.update(E),xe=E.material;xe.visible&&v.push(E,ue,xe,V,qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let ue=K.update(E),xe=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),qe.copy(ue.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(xe)){let pe=ue.groups;for(let Ce=0,De=pe.length;Ce<De;Ce++){let Te=pe[Ce],je=xe[Te.materialIndex];je&&je.visible&&v.push(E,ue,je,V,qe.z,Te)}}else xe.visible&&v.push(E,ue,xe,V,qe.z,null)}}let ie=E.children;for(let ue=0,xe=ie.length;ue<xe;ue++)pu(ie[ue],B,V,G)}function sd(E,B,V,G){let{opaque:O,transmissive:ie,transparent:ue}=E;_.setupLightsView(V),$===!0&&ye.setGlobalState(S.clippingPlanes,V),G&&ge.viewport(L.copy(G)),O.length>0&&ha(O,B,V),ie.length>0&&ha(ie,B,V),ue.length>0&&ha(ue,B,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function rd(E,B,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[G.id]===void 0&&(_.state.transmissionRenderTarget[G.id]=new Gt(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Ht:an,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ie=_.state.transmissionRenderTarget[G.id],ue=G.viewport||L;ie.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);let xe=S.getRenderTarget(),pe=S.getActiveCubeFace(),Ce=S.getActiveMipmapLevel();S.setRenderTarget(ie),S.getClearColor(H),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&se.render(V);let De=S.toneMapping;S.toneMapping=Pn;let Te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),_.setupLightsView(G),$===!0&&ye.setGlobalState(S.clippingPlanes,G),ha(E,V,G),ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie),Je.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let dt=0,Pt=B.length;dt<Pt;dt++){let Dt=B[dt],{object:gt,geometry:Ee,material:Et,group:it}=Dt;if(Et.side===jt&&gt.layers.test(G.layers)){let wn=Et.side;Et.side=Wt,Et.needsUpdate=!0,od(gt,V,G,Ee,Et,it),Et.side=wn,Et.needsUpdate=!0,je=!0}}je===!0&&(ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie))}S.setRenderTarget(xe,pe,Ce),S.setClearColor(H,ee),Te!==void 0&&(G.viewport=Te),S.toneMapping=De}function ha(E,B,V){let G=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ie=E.length;O<ie;O++){let ue=E[O],{object:xe,geometry:pe,group:Ce}=ue,De=ue.material;De.allowOverride===!0&&G!==null&&(De=G),xe.layers.test(V.layers)&&od(xe,B,V,pe,De,Ce)}}function od(E,B,V,G,O,ie){E.onBeforeRender(S,B,V,G,O,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(S,B,V,G,E,ie),O.transparent===!0&&O.side===jt&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,S.renderBufferDirect(V,B,G,O,E,ie),O.side=rn,O.needsUpdate=!0,S.renderBufferDirect(V,B,G,O,E,ie),O.side=jt):S.renderBufferDirect(V,B,G,O,E,ie),E.onAfterRender(S,B,V,G,O,ie)}function fa(E,B,V){B.isScene!==!0&&(B=Bt);let G=we.get(E),O=_.state.lights,ie=_.state.shadowsArray,ue=O.state.version,xe=W.getParameters(E,O.state,ie,B,V),pe=W.getProgramCacheKey(xe),Ce=G.programs;G.environment=E.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(E.isMeshStandardMaterial?A:D).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Be),Ce=new Map,G.programs=Ce);let De=Ce.get(pe);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===ue)return cd(E,xe),De}else xe.uniforms=W.getUniforms(E),E.onBeforeCompile(xe,S),De=W.acquireProgram(xe,pe),Ce.set(pe,De),G.uniforms=xe.uniforms;let Te=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ye.uniform),cd(E,xe),G.needsLights=Fx(E),G.lightsStateVersion=ue,G.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function ad(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Ar.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function cd(E,B){let V=we.get(E);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function Dx(E,B,V,G,O){B.isScene!==!0&&(B=Bt),ke.resetTextureUnits();let ie=B.fog,ue=G.isMeshStandardMaterial?B.environment:null,xe=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wt,pe=(G.isMeshStandardMaterial?A:D).get(G.envMap||ue),Ce=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color,Pt=Pn;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pt=S.toneMapping);let Dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=Dt!==void 0?Dt.length:0,Ee=we.get(G),Et=_.state.lights;if($===!0&&(de===!0||E!==P)){let ln=E===P&&G.id===I;ye.setState(G,E,ln)}let it=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Et.state.version||Ee.outputColorSpace!==xe||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==pe||G.fog===!0&&Ee.fog!==ie||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ye.numPlanes||Ee.numIntersection!==ye.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==De||Ee.morphTargets!==Te||Ee.morphNormals!==je||Ee.morphColors!==dt||Ee.toneMapping!==Pt||Ee.morphTargetsCount!==gt)&&(it=!0):(it=!0,Ee.__version=G.version);let wn=Ee.currentProgram;it===!0&&(wn=fa(G,B,O));let Vs=!1,An=!1,$r=!1,Rt=wn.getUniforms(),mn=Ee.uniforms;if(ge.useProgram(wn.program)&&(Vs=!0,An=!0,$r=!0),G.id!==I&&(I=G.id,An=!0),Vs||P!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Rt.setValue(F,"projectionMatrix",E.projectionMatrix),Rt.setValue(F,"viewMatrix",E.matrixWorldInverse);let xn=Rt.map.cameraPosition;xn!==void 0&&xn.setValue(F,Se.setFromMatrixPosition(E.matrixWorld)),bt.logarithmicDepthBuffer&&Rt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,An=!0,$r=!0)}if(O.isSkinnedMesh){Rt.setOptional(F,O,"bindMatrix"),Rt.setOptional(F,O,"bindMatrixInverse");let ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Rt.setValue(F,"boneTexture",ln.boneTexture,ke))}O.isBatchedMesh&&(Rt.setOptional(F,O,"batchingTexture"),Rt.setValue(F,"batchingTexture",O._matricesTexture,ke),Rt.setOptional(F,O,"batchingIdTexture"),Rt.setValue(F,"batchingIdTexture",O._indirectTexture,ke),Rt.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&Rt.setValue(F,"batchingColorTexture",O._colorsTexture,ke));let Fn=V.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Pe.update(O,V,wn),(An||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,Rt.setValue(F,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mn.envMap.value=pe,mn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&B.environment!==null&&(mn.envMapIntensity.value=B.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=RS()),An&&(Rt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Lx(mn,$r),ie&&G.fog===!0&&Me.refreshFogUniforms(mn,ie),Me.refreshMaterialUniforms(mn,G,ne,te,_.state.transmissionRenderTarget[E.id]),Ar.upload(F,ad(Ee),mn,ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(F,ad(Ee),mn,ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(F,"center",O.center),Rt.setValue(F,"modelViewMatrix",O.modelViewMatrix),Rt.setValue(F,"normalMatrix",O.normalMatrix),Rt.setValue(F,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let ln=G.uniformsGroups;for(let xn=0,mu=ln.length;xn<mu;xn++){let cs=ln[xn];le.update(cs,wn),le.bind(cs,wn)}}return wn}function Lx(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Fx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,B,V){let G=we.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),we.get(E.texture).__webglTexture=B,we.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let V=we.get(E);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0};let Nx=F.createFramebuffer();this.setRenderTarget=function(E,B=0,V=0){b=E,C=B,T=V;let G=!0,O=null,ie=!1,ue=!1;if(E){let pe=we.get(E);if(pe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(pe.__webglFramebuffer===void 0)ke.setupRenderTarget(E);else if(pe.__hasExternalTextures)ke.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Te=E.depthTexture;if(pe.__boundDepthTexture!==Te){if(Te!==null&&we.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(E)}}let Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);let De=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[B])?O=De[B][V]:O=De[B],ie=!0):E.samples>0&&ke.useMultisampledRTT(E)===!1?O=we.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[V]:O=De,L.copy(E.viewport),U.copy(E.scissor),z=E.scissorTest}else L.copy(at).multiplyScalar(ne).floor(),U.copy(xt).multiplyScalar(ne).floor(),z=tt;if(V!==0&&(O=Nx),ge.bindFramebuffer(F.FRAMEBUFFER,O)&&G&&ge.drawBuffers(E,O),ge.viewport(L),ge.scissor(U),ge.setScissorTest(z),ie){let pe=we.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,V)}else if(ue){let pe=B;for(let Ce=0;Ce<E.textures.length;Ce++){let De=we.get(E.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,De.__webglTexture,V,pe)}}else if(E!==null&&V!==0){let pe=we.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,V)}I=-1},this.readRenderTargetPixels=function(E,B,V,G,O,ie,ue,xe=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){ge.bindFramebuffer(F.FRAMEBUFFER,pe);try{let Ce=E.textures[xe],De=Ce.format,Te=Ce.type;if(!bt.textureFormatReadable(De)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Te)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-G&&V>=0&&V<=E.height-O&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),F.readPixels(B,V,G,O,Fe.convert(De),Fe.convert(Te),ie))}finally{let Ce=b!==null?we.get(b).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,B,V,G,O,ie,ue,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(B>=0&&B<=E.width-G&&V>=0&&V<=E.height-O){ge.bindFramebuffer(F.FRAMEBUFFER,pe);let Ce=E.textures[xe],De=Ce.format,Te=Ce.type;if(!bt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.bufferData(F.PIXEL_PACK_BUFFER,ie.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),F.readPixels(B,V,G,O,Fe.convert(De),Fe.convert(Te),0);let dt=b!==null?we.get(b).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,dt);let Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $p(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ie),F.deleteBuffer(je),F.deleteSync(Pt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,V=0){let G=Math.pow(2,-V),O=Math.floor(E.image.width*G),ie=Math.floor(E.image.height*G),ue=B!==null?B.x:0,xe=B!==null?B.y:0;ke.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ue,xe,O,ie),ge.unbindTexture()};let Ux=F.createFramebuffer(),Bx=F.createFramebuffer();this.copyTextureToTexture=function(E,B,V=null,G=null,O=0,ie=null){ie===null&&(O!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let ue,xe,pe,Ce,De,Te,je,dt,Pt,Dt=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(V!==null)ue=V.max.x-V.min.x,xe=V.max.y-V.min.y,pe=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,De=V.min.y,Te=V.isBox3?V.min.z:0;else{let Fn=Math.pow(2,-O);ue=Math.floor(Dt.width*Fn),xe=Math.floor(Dt.height*Fn),E.isDataArrayTexture?pe=Dt.depth:E.isData3DTexture?pe=Math.floor(Dt.depth*Fn):pe=1,Ce=0,De=0,Te=0}G!==null?(je=G.x,dt=G.y,Pt=G.z):(je=0,dt=0,Pt=0);let gt=Fe.convert(B.format),Ee=Fe.convert(B.type),Et;B.isData3DTexture?(ke.setTexture3D(B,0),Et=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ke.setTexture2DArray(B,0),Et=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(B,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let it=F.getParameter(F.UNPACK_ROW_LENGTH),wn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Vs=F.getParameter(F.UNPACK_SKIP_PIXELS),An=F.getParameter(F.UNPACK_SKIP_ROWS),$r=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Dt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,De),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Te);let Rt=E.isDataArrayTexture||E.isData3DTexture,mn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let Fn=we.get(E),ln=we.get(B),xn=we.get(Fn.__renderTarget),mu=we.get(ln.__renderTarget);ge.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,mu.__webglFramebuffer);for(let cs=0;cs<pe;cs++)Rt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(E).__webglTexture,O,Te+cs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.get(B).__webglTexture,ie,Pt+cs)),F.blitFramebuffer(Ce,De,ue,xe,je,dt,ue,xe,F.DEPTH_BUFFER_BIT,F.NEAREST);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||we.has(E)){let Fn=we.get(E),ln=we.get(B);ge.bindFramebuffer(F.READ_FRAMEBUFFER,Ux),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bx);for(let xn=0;xn<pe;xn++)Rt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fn.__webglTexture,O,Te+xn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fn.__webglTexture,O),mn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,ie,Pt+xn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,ie),O!==0?F.blitFramebuffer(Ce,De,ue,xe,je,dt,ue,xe,F.COLOR_BUFFER_BIT,F.NEAREST):mn?F.copyTexSubImage3D(Et,ie,je,dt,Pt+xn,Ce,De,ue,xe):F.copyTexSubImage2D(Et,ie,je,dt,Ce,De,ue,xe);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mn?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Et,ie,je,dt,Pt,ue,xe,pe,gt,Ee,Dt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,ie,je,dt,Pt,ue,xe,pe,gt,Dt.data):F.texSubImage3D(Et,ie,je,dt,Pt,ue,xe,pe,gt,Ee,Dt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ie,je,dt,ue,xe,gt,Ee,Dt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ie,je,dt,Dt.width,Dt.height,gt,Dt.data):F.texSubImage2D(F.TEXTURE_2D,ie,je,dt,ue,xe,gt,Ee,Dt);F.pixelStorei(F.UNPACK_ROW_LENGTH,it),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Vs),F.pixelStorei(F.UNPACK_SKIP_ROWS,An),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$r),ie===0&&B.generateMipmaps&&F.generateMipmap(Et),ge.unbindTexture()},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ke.setTextureCube(E,0):E.isData3DTexture?ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ke.setTexture2DArray(E,0):ke.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,ge.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};function kh(s,e){if(e===mh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Tr||e===Xo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Tr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var sl=class extends ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new cf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ei.extractUrlBase(e);o=Ei.resolveURL(l,this.path)}else o=Ei.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new vr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(f){t(f),r.manager.itemEnd(e)},a)}catch(f){a(f)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dm){try{o[$e.KHR_BINARY_GLTF]=new lf(e)}catch(h){i&&i(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new xf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let h=this.pluginCallbacks[f](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let h=r.extensionsUsed[f],u=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new Xh;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new uf(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new hf;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new ff;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function CS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wh=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,f=new _e(16777215);c.color!==void 0&&f.setRGB(c.color[0],c.color[1],c.color[2],wt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Lo(f),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Do(f),l.distance=h;break;case"spot":l=new Ms(f),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Xh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){let i=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}},qh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],wt),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ef=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},rf=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},of=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},af=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,f=i.count,h=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,h,u,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(f*h);return o.decodeGltfBuffer(new Uint8Array(d),f,h,u,i.mode,i.filter),d})})}else return null}},cf=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Bn.TRIANGLES&&l.mode!==Bn.TRIANGLE_STRIP&&l.mode!==Bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(f=>(c[l]=f,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let f=l.pop(),h=f.isGroup?f.children:[f],u=l[0].count,d=[];for(let x of h){let g=new he,p=new R,m=new vn,v=new R(1,1,1),_=new _o(x.geometry,x.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,g.compose(p,m,v));for(let y in c)if(y==="_COLOR_0"){let M=c[y];_.instanceColor=new Hi(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,c[y]);Ct.prototype.copy.call(_,x),this.parser.assignFinalMaterial(_),d.push(_)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}},Dm="glTF",Zo=12,Rm={JSON:1313821514,BIN:5130562},lf=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Zo,r=new DataView(e,Zo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Rm.JSON){let l=new Uint8Array(e,Zo+o,a);this.content=n.decode(l)}else if(c===Rm.BIN){let l=Zo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let f in o){let h=pf[f]||f.toLowerCase();a[h]=o[f]}for(let f in e.attributes){let h=pf[f]||f.toLowerCase();if(o[f]!==void 0){let u=n.accessors[e.attributes[f]],d=Rr[u.componentType];l[h]=d.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(h,u){i.decodeDracoFile(f,function(d){for(let x in d.attributes){let g=d.attributes[x],p=c[x];p!==void 0&&(g.normalized=p)}h(d)},a,l,wt,u)})})}},hf=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ff=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},rl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,f=i-t,h=(n-t)/f,u=h*h,d=u*h,x=e*l,g=x-l,p=-2*d+3*u,m=d-u,v=1-p,_=m-u+h;for(let y=0;y!==a;y++){let M=o[g+y+a],S=o[g+y+c]*f,w=o[x+y+a],C=o[x+y]*f;r[y]=v*M+_*S+p*w+m*C}return r}},IS=new vn,df=class extends rl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return IS.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cm={9728:Le,9729:rt,9984:yc,9985:_r,9986:As,9987:Kn},Im={33071:Mt,33648:or,10497:Vt},Vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PS={CUBICSPLINE:void 0,LINEAR:xs,STEP:ms},Hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new on({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rn})),s.DefaultMaterial}function Ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,f=e.length;l<f;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,f=e.length;l<f;l++){let h=e[l];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(u)}if(i){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let f=l[0],h=l[1],u=l[2];return n&&(s.morphAttributes.position=f),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function FS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NS(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gh(t.attributes):e=s.indices+":"+Gh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gh(s.targets[n]);return e}function Gh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function US(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var BS=new he,xf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new bs(this.options.manager):this.textureLoader=new No(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ps(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,f]of o.children.entries())r(f,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ei.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Vh[i.type],a=Rr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new He(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Vh[i.type],l=Rr[i.componentType],f=l.BYTES_PER_ELEMENT,h=f*c,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0,g,p;if(d&&d!==h){let m=Math.floor(u/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,_=t.cache.get(v);_||(g=new l(a,m*d,i.count*d/f),_=new fr(g,d/f),t.cache.add(v,_)),p=new dr(_,c,u%d/f,x)}else a===null?g=new l(i.count*c):g=new l(a,u,i.count*c),p=new He(g,c,x);if(i.sparse!==void 0){let m=Vh.SCALAR,v=Rr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new v(o[1],_,i.sparse.count*m),S=new l(o[2],y,i.sparse.count*c);a!==null&&(p=new He(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,C=M.length;w<C;w++){let T=M[w];if(p.setX(T,S[w*c]),c>=2&&p.setY(T,S[w*c+1]),c>=3&&p.setZ(T,S[w*c+2]),c>=4&&p.setW(T,S[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return f.magFilter=Cm[u.magFilter]||rt,f.minFilter=Cm[u.minFilter]||Kn,f.wrapS=Im[u.wrapS]||Vt,f.wrapT=Im[u.wrapT]||Vt,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Le&&f.minFilter!==rt,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let u=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let f=Promise.resolve(c).then(function(h){return new Promise(function(u,d){let x=u;t.isImageBitmapLoader===!0&&(x=function(g){let p=new Kt(g);p.needsUpdate=!0,u(p)}),t.load(Ei.resolveURL(h,r.path),x,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),hi(h,o),h.userData.mimeType=o.mimeType||US(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new gr,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new xr,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return on}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let h=i[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],wt),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=jt);let f=r.alphaMode||Hh.OPAQUE;if(f===Hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===Hh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Cn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){let h=r.emissiveFactor;a.emissive=new _e().setRGB(h[0],h[1],h[2],wt)}return r.emissiveTexture!==void 0&&o!==Cn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ps(i,h,r),h})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Pm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],f=NS(l),h=i[f];if(h)o.push(h.promise);else{let u;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Pm(new et,l,t),i[f]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let f=o[c].material===void 0?DS(this.cache):this.getDependency("material",o[c].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),f=c[c.length-1],h=[];for(let d=0,x=f.length;d<x;d++){let g=f[d],p=o[d],m,v=l[d];if(p.mode===Bn.TRIANGLES||p.mode===Bn.TRIANGLE_STRIP||p.mode===Bn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new go(g,v):new ze(g,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Bn.TRIANGLE_STRIP?m.geometry=kh(m.geometry,Xo):p.mode===Bn.TRIANGLE_FAN&&(m.geometry=kh(m.geometry,Tr));else if(p.mode===Bn.LINES)m=new yo(g,v);else if(p.mode===Bn.LINE_STRIP)m=new _s(g,v);else if(p.mode===Bn.LINE_LOOP)m=new bo(g,v);else if(p.mode===Bn.POINTS)m=new So(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&FS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),hi(m,r),p.extensions&&Ps(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,x=h.length;d<x;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ps(i,h[0],r),h[0];let u=new kt;r.extensions&&Ps(i,u,r),t.associations.set(u,{meshes:e});for(let d=0,x=h.length;d<x;d++)u.add(h[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(bh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ai(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,f=o.length;l<f;l++){let h=o[l];if(h){a.push(h);let u=new he;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new vo(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],f=[];for(let h=0,u=i.channels.length;h<u;h++){let d=i.channels[h],x=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[x.input]:x.input,v=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(x),f.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(f)]).then(function(h){let u=h[0],d=h[1],x=h[2],g=h[3],p=h[4],m=[];for(let _=0,y=u.length;_<y;_++){let M=u[_],S=d[_],w=x[_],C=g[_],T=p[_];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let b=n._createAnimationTracks(M,S,w,C,T);if(b)for(let I=0;I<b.length;I++)m.push(b[I])}let v=new Io(r,void 0,m);return hi(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,f=a.length;l<f;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let f=l[0],h=l[1],u=l[2];u!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(u,BS)});for(let d=0,x=h.length;d<x;d++)f.add(h[d]);return f})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let f;if(r.isBone===!0?f=new pr:l.length>1?f=new kt:l.length===1?f=l[0]:f=new Ct,f!==l[0])for(let h=0,u=l.length;h<u;h++)f.add(l[h]);if(r.name&&(f.userData.name=r.name,f.name=o),hi(f,r),r.extensions&&Ps(n,f,r),r.matrix!==void 0){let h=new he;h.fromArray(r.matrix),f.applyMatrix4(h)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!i.associations.has(f))i.associations.set(f,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(f);i.associations.set(f,{...h})}return i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new kt;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&Ps(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let f=0,h=c.length;f<h;f++)r.add(c[f]);let l=f=>{let h=new Map;for(let[u,d]of i.associations)(u instanceof yn||u instanceof Kt)&&h.set(u,d);return f.traverse(u=>{let d=i.associations.get(u);d!=null&&h.set(u,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ji[r.path]===Ji.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Ji[r.path]){case Ji.weights:l=si;break;case Ji.rotation:l=ri;break;case Ji.translation:case Ji.scale:l=oi;break;default:n.itemSize===1?l=si:l=oi;break}let f=i.interpolation!==void 0?PS[i.interpolation]:xs,h=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){let x=new l(c[u]+"."+Ji[r.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=mf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ri?df:rl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function OS(s,e,t){let n=e.attributes,i=new ut;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let f=mf(Rr[a.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,c=new R;for(let l=0,f=r.length;l<f;l++){let h=r[l];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],d=u.min,x=u.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),u.normalized){let g=mf(Rr[u.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Pm(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=pf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),hi(s,e),OS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?LS(s,e.targets,t):s})}var Lm=Math.pow(2,-24),$o=Symbol("SKIP_GENERATION"),ol={strategy:0,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[$o]:!1};function _t(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function gf(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){let i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function vf(s,e){e.set(s)}function _f(s,e,t){let n,i;for(let r=0;r<3;r++){let o=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[o],i=e[o],t[o]=n>i?n:i}}function Ko(s,e,t){for(let n=0;n<3;n++){let i=e[s+2*n],r=e[s+2*n+1],o=i-r,a=i+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Cr(s){let e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}function ot(s,e){return e[s+15]===65535}function It(s,e){return e[s+6]}function Nt(s,e){return e[s+14]}function pt(s){return s+8}function mt(s,e){let t=e[s+6];return s+t*8}function ji(s,e){return e[s+7]}function al(s,e,t,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,f=-1/0,h=1/0,u=1/0,d=1/0,x=-1/0,g=-1/0,p=-1/0,m=s.offset||0;for(let v=(e-m)*6,_=(e+t-m)*6;v<_;v+=6){let y=s[v+0],M=s[v+1],S=y-M,w=y+M;S<r&&(r=S),w>c&&(c=w),y<h&&(h=y),y>x&&(x=y);let C=s[v+2],T=s[v+3],b=C-T,I=C+T;b<o&&(o=b),I>l&&(l=I),C<u&&(u=C),C>g&&(g=C);let P=s[v+4],L=s[v+5],U=P-L,z=P+L;U<a&&(a=U),z>f&&(f=z),P<d&&(d=P),P>p&&(p=P)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=f,i[0]=h,i[1]=u,i[2]=d,i[3]=x,i[4]=g,i[5]=p}var Ci=32,VS=(s,e)=>s.candidate-e.candidate,Qi=new Array(Ci).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),cl=new Float32Array(6);function Um(s,e,t,n,i,r){let o=-1,a=0;if(r===0)o=gf(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=gf(s),o!==-1&&(a=HS(t,n,i,o));else if(r===2){let c=Cr(s),l=1.25*i,f=t.offset||0,h=(n-f)*6,u=(n+i-f)*6;for(let d=0;d<3;d++){let x=e[d],m=(e[d+3]-x)/Ci;if(i<Ci/4){let v=[...Qi];v.length=i;let _=0;for(let M=h;M<u;M+=6,_++){let S=v[_];S.candidate=t[M+2*d],S.count=0;let{bounds:w,leftCacheBounds:C,rightCacheBounds:T}=S;for(let b=0;b<3;b++)T[b]=1/0,T[b+3]=-1/0,C[b]=1/0,C[b+3]=-1/0,w[b]=1/0,w[b+3]=-1/0;Ko(M,t,w)}v.sort(VS);let y=i;for(let M=0;M<y;M++){let S=v[M];for(;M+1<y&&v[M+1].candidate===S.candidate;)v.splice(M+1,1),y--}for(let M=h;M<u;M+=6){let S=t[M+2*d];for(let w=0;w<y;w++){let C=v[w];S>=C.candidate?Ko(M,t,C.rightCacheBounds):(Ko(M,t,C.leftCacheBounds),C.count++)}}for(let M=0;M<y;M++){let S=v[M],w=S.count,C=i-S.count,T=S.leftCacheBounds,b=S.rightCacheBounds,I=0;w!==0&&(I=Cr(T)/c);let P=0;C!==0&&(P=Cr(b)/c);let L=1+1.25*(I*w+P*C);L<l&&(o=d,l=L,a=S.candidate)}}else{for(let y=0;y<Ci;y++){let M=Qi[y];M.count=0,M.candidate=x+m+y*m;let S=M.bounds;for(let w=0;w<3;w++)S[w]=1/0,S[w+3]=-1/0}for(let y=h;y<u;y+=6){let w=~~((t[y+2*d]-x)/m);w>=Ci&&(w=Ci-1);let C=Qi[w];C.count++,Ko(y,t,C.bounds)}let v=Qi[Ci-1];vf(v.bounds,v.rightCacheBounds);for(let y=Ci-2;y>=0;y--){let M=Qi[y],S=Qi[y+1];_f(M.bounds,S.rightCacheBounds,M.rightCacheBounds)}let _=0;for(let y=0;y<Ci-1;y++){let M=Qi[y],S=M.count,w=M.bounds,T=Qi[y+1].rightCacheBounds;S!==0&&(_===0?vf(w,cl):_f(w,cl,cl)),_+=S;let b=0,I=0;_!==0&&(b=Cr(cl)/c);let P=i-_;P!==0&&(I=Cr(T)/c);let L=1+1.25*(b*_+I*P);L<l&&(o=d,l=L,a=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function HS(s,e,t,n){let i=0,r=s.offset;for(let o=e,a=e+t;o<a;o++)i+=s[(o-r)*6+n*2];return i/t}var Ir=class{constructor(){this.boundingData=new Float32Array(6)}};function Bm(s,e,t,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2,f=t.offset||0;for(;;){for(;o<=a&&t[(o-f)*6+l]<c;)o++;for(;o<=a&&t[(a-f)*6+l]>=c;)a--;if(o<a){for(let h=0;h<e;h++){let u=s[o*e+h];s[o*e+h]=s[a*e+h],s[a*e+h]=u}for(let h=0;h<6;h++){let u=o-f,d=a-f,x=t[u*6+h];t[u*6+h]=t[d*6+h],t[d*6+h]=x}o++,a--}else return o}}var Om,ll,yf,zm,GS=Math.pow(2,32);function ul(s){return"count"in s?1:1+ul(s.left)+ul(s.right)}function km(s,e,t){return Om=new Float32Array(t),ll=new Uint32Array(t),yf=new Uint16Array(t),zm=new Uint8Array(t),bf(s,e)}function bf(s,e){let t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let o=0;o<6;o++)Om[t+o]=r[o];if(i)return e.buffer?(zm.set(new Uint8Array(e.buffer),s),s+e.buffer.byteLength):(ll[t+6]=e.offset,yf[n+14]=e.count,yf[n+15]=65535,s+32);{let{left:o,right:a,splitAxis:c}=e,l=s+32,f=bf(l,o),h=s/32,d=f/32-h;if(d>GS)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return ll[t+6]=d,ll[t+7]=c,bf(f,a)}}function WS(s,e,t,n,i){let{maxDepth:r,verbose:o,maxLeafSize:a,strategy:c,onProgress:l}=i,f=s.primitiveBuffer,h=s.primitiveBufferStride,u=new Float32Array(6),d=!1,x=new Ir;return al(e,t,n,x.boundingData,u),p(x,t,n,u),x;function g(m){l&&l(m/n)}function p(m,v,_,y=null,M=0){if(!d&&M>=r&&(d=!0,o&&console.warn(`BVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`)),_<=a||M>=r)return g(v+_),m.offset=v,m.count=_,m;let S=Um(m.boundingData,y,e,v,_,c);if(S.axis===-1)return g(v+_),m.offset=v,m.count=_,m;let w=Bm(f,h,e,v,_,S);if(w===v||w===v+_)g(v+_),m.offset=v,m.count=_;else{m.splitAxis=S.axis;let C=new Ir,T=v,b=w-v;m.left=C,al(e,T,b,C.boundingData,u),p(C,T,b,u,M+1);let I=new Ir,P=w,L=_-b;m.right=I,al(e,P,L,I.boundingData,u),p(I,P,L,u,M+1)}return m}}function Vm(s,e){let t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=s.getRootRanges(e.range),i=n[0],r=n[n.length-1],o={offset:i.offset,count:r.offset+r.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,s.computePrimitiveBounds(o.offset,o.count,a),s._roots=n.map(c=>{let l=WS(s,a,c.offset,c.count,e),f=ul(l),h=new t(32*f);return km(0,l,h),h})}var es=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var Sf=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},nt=new Sf;var ts,Dr,Pr=[],hl=new es(()=>new ut);function Hm(s,e,t,n,i,r){ts=hl.getPrimitive(),Dr=hl.getPrimitive(),Pr.push(ts,Dr),nt.setBuffer(s._roots[e]);let o=Mf(0,s.geometry,t,n,i,r);nt.clearBuffer(),hl.releasePrimitive(ts),hl.releasePrimitive(Dr),Pr.pop(),Pr.pop();let a=Pr.length;return a>0&&(Dr=Pr[a-1],ts=Pr[a-2]),o}function Mf(s,e,t,n,i=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=nt,f=s*2;if(ot(f,c)){let u=It(s,l),d=Nt(f,c);return _t(s,a,ts),n(u,d,!1,o,r+s/8,ts)}else{let b=function(P){let{uint16Array:L,uint32Array:U}=nt,z=P*2;for(;!ot(z,L);)P=pt(P),z=P*2;return It(P,U)},I=function(P){let{uint16Array:L,uint32Array:U}=nt,z=P*2;for(;!ot(z,L);)P=mt(P,U),z=P*2;return It(P,U)+Nt(z,L)},u=pt(s),d=mt(s,l),x=u,g=d,p,m,v,_;if(i&&(v=ts,_=Dr,_t(x,a,v),_t(g,a,_),p=i(v),m=i(_),m<p)){x=d,g=u;let P=p;p=m,m=P,v=_}v||(v=ts,_t(x,a,v));let y=ot(x*2,c),M=t(v,y,p,o+1,r+x/8),S;if(M===2){let P=b(x),U=I(x)-P;S=n(P,U,!0,o+1,r+x/8,v)}else S=M&&Mf(x,e,t,n,i,r,o+1);if(S)return!0;_=Dr,_t(g,a,_);let w=ot(g*2,c),C=t(_,w,m,o+1,r+g/8),T;if(C===2){let P=b(g),U=I(g)-P;T=n(P,U,!0,o+1,r+g/8,_)}else T=C&&Mf(g,e,t,n,i,r,o+1);return!!T}}function Jo(s){return s.index?s.index.count:s.attributes.position.count}function ns(s){return Jo(s)/3}function Tf(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function Gm(s,e){if(!s.index){let t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Tf(t,n);s.setIndex(new He(i,1));for(let r=0;r<t;r++)i[r]=r}}function qS(s,e,t){let n=Jo(s)/t,i=e||s.drawRange,r=i.start/t,o=(i.start+i.count)/t,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function YS(s,e){return s.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function jo(s,e,t){let n=qS(s,e,t),i=YS(s,t);if(!i.length)return[n];let r=[],o=n.offset,a=n.offset+n.count,c=Jo(s)/t,l=[];for(let u of i){let{offset:d,count:x}=u,g=d,p=isFinite(x)?x:c-d,m=d+p;g<a&&m>o&&(l.push({pos:Math.max(o,g),isStart:!0}),l.push({pos:Math.min(a,m),isStart:!1}))}l.sort((u,d)=>u.pos!==d.pos?u.pos-d.pos:u.type==="end"?-1:1);let f=0,h=null;for(let u of l){let d=u.pos;f!==0&&d!==h&&r.push({offset:h,count:d-h}),f+=u.isStart?1:-1,h=d}return r}var Wm=new ut,dl=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...ol,...e},Vm(this,e)}getRootRanges(e){return jo(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,i=t.length;n<i;n++)t[n]+=e;else{let n=this._roots;for(let i=0;i<n.length;i++){let r=n[i],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/32;for(let l=0;l<c;l++){let f=8*l,h=2*f;ot(h,a)&&(o[f+6]+=e)}}}}traverse(e,t=0){let n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,f=ot(l,r);if(f){let h=i[a+6],u=r[l+14];e(c,f,new Float32Array(n,a*4,6),h,u)}else{let h=pt(a),u=mt(a,i),d=ji(a,i);e(c,f,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(u,c+1))}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{_t(0,new Float32Array(n),Wm),e.union(Wm)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=e;if(i&&r){let h=i;i=(u,d,x,g,p)=>h(u,d,x,g,p)?!0:a(u,d,this,r,x,g,o)}else i||(r?i=(h,u,d,x)=>a(h,u,this,r,d,x,o):i=(h,u,d)=>d);let c=!1,l=0,f=this._roots;for(let h=0,u=f.length;h<u;h++){let d=f[h];if(c=Hm(this,h,n,i,t,l),c)break;l+=d.byteLength/32}return c}};var Dn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){let c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],c=e.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}};Dn.prototype.setFromBox=(function(){let s=new R;return function(t,n){let i=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let f=0;f<=1;f++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*f+r.z*(1-f);let h=t.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();var ZS=(function(){let s=new R,e=new R,t=new R;return function(i,r,o){let a=i.start,c=s,l=r.start,f=e;t.subVectors(a,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);let h=t.dot(f),u=f.dot(c),d=f.dot(f),x=t.dot(c),p=c.dot(c)*d-u*u,m,v;p!==0?m=(h*u-x*d)/p:m=0,v=(h+m*u)/d,o.x=m,o.y=v}})(),Qo=(function(){let s=new Q,e=new R,t=new R;return function(i,r,o,a){ZS(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let f;c<0?f=i.start:f=i.end;let h;l<0?h=r.start:h=r.end;let u=e,d=t;if(i.closestPointToPoint(h,!0,e),r.closestPointToPoint(f,!0,t),u.distanceToSquared(h)<=d.distanceToSquared(f)){o.copy(u),a.copy(h);return}else{o.copy(f),a.copy(d);return}}}})(),Xm=(function(){let s=new R,e=new R,t=new gn,n=new fn;return function(r,o){let{radius:a,center:c}=r,{a:l,b:f,c:h}=o;if(n.start=l,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=f,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;let g=o.getPlane(t);if(Math.abs(g.distanceToPoint(c))<=a){let m=g.projectPoint(c,e);if(o.containsPoint(m))return!0}return!1}})();var $S=["x","y","z"],Ii=1e-15,qm=Ii*Ii;function On(s){return Math.abs(s)<Ii}var en=class extends sn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new Dn),this.points=[this.a,this.b,this.c],this.plane=new gn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new fn,this.needsUpdate=!0}intersectsSphere(e){return Xm(e,this)}update(){let e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let l=r[1],f=o[1];l.subVectors(e,t),f.setFromPoints(l,i);let h=r[2],u=o[2];h.subVectors(t,n),u.setFromPoints(h,i);let d=r[3],x=o[3];d.subVectors(n,e),x.setFromPoints(d,i);let g=l.length(),p=h.length(),m=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,g<Ii?p<Ii||m<Ii?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):p<Ii?m<Ii?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):m<Ii&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};en.prototype.closestPointToSegment=(function(){let s=new R,e=new R,t=new fn;return function(i,r=null,o=null){let{start:a,end:c}=i,l=this.points,f,h=1/0;for(let u=0;u<3;u++){let d=(u+1)%3;t.start.copy(l[u]),t.end.copy(l[d]),Qo(t,i,s,e),f=s.distanceToSquared(e),f<h&&(h=f,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(a,s),f=a.distanceToSquared(s),f<h&&(h=f,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),f=c.distanceToSquared(s),f<h&&(h=f,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}})();en.prototype.intersectsTriangle=(function(){let s=new en,e=new Dn,t=new Dn,n=new R,i=new R,r=new R,o=new R,a=new fn,c=new fn,l=new R,f=new Q,h=new Q;function u(_,y,M,S){let w=n;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?w.copy(_.plane.normal):w.copy(y.plane.normal);let C=_.satBounds,T=_.satAxes;for(let P=1;P<4;P++){let L=C[P],U=T[P];if(e.setFromPoints(U,y.points),L.isSeparated(e)||(o.copy(w).cross(U),e.setFromPoints(o,_.points),t.setFromPoints(o,y.points),e.isSeparated(t)))return!1}let b=y.satBounds,I=y.satAxes;for(let P=1;P<4;P++){let L=b[P],U=I[P];if(e.setFromPoints(U,_.points),L.isSeparated(e)||(o.crossVectors(w,U),e.setFromPoints(o,_.points),t.setFromPoints(o,y.points),e.isSeparated(t)))return!1}return M&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function d(_,y,M,S,w,C,T,b,I,P,L){let U=T/(T-b);P.x=S+(w-S)*U,L.start.subVectors(y,_).multiplyScalar(U).add(_),U=T/(T-I),P.y=S+(C-S)*U,L.end.subVectors(M,_).multiplyScalar(U).add(_)}function x(_,y,M,S,w,C,T,b,I,P,L){if(w>0)d(_.c,_.a,_.b,S,y,M,I,T,b,P,L);else if(C>0)d(_.b,_.a,_.c,M,y,S,b,T,I,P,L);else if(b*I>0||T!=0)d(_.a,_.b,_.c,y,M,S,T,b,I,P,L);else if(b!=0)d(_.b,_.a,_.c,M,y,S,b,T,I,P,L);else if(I!=0)d(_.c,_.a,_.b,S,y,M,I,T,b,P,L);else return!0;return!1}function g(_,y,M,S){let w=y.degenerateSegment,C=_.plane.distanceToPoint(w.start),T=_.plane.distanceToPoint(w.end);return On(C)?On(T)?u(_,y,M,S):(M&&(M.start.copy(w.start),M.end.copy(w.start)),_.containsPoint(w.start)):On(T)?(M&&(M.start.copy(w.end),M.end.copy(w.end)),_.containsPoint(w.end)):_.plane.intersectLine(w,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),_.containsPoint(n)):!1}function p(_,y,M){let S=y.a;return On(_.plane.distanceToPoint(S))&&_.containsPoint(S)?(M&&(M.start.copy(S),M.end.copy(S)),!0):!1}function m(_,y,M){let S=_.degenerateSegment,w=y.a;return S.closestPointToPoint(w,!0,n),w.distanceToSquared(n)<qm?(M&&(M.start.copy(w),M.end.copy(w)),!0):!1}function v(_,y,M,S){if(_.isDegenerateIntoSegment)if(y.isDegenerateIntoSegment){let w=_.degenerateSegment,C=y.degenerateSegment,T=i,b=r;w.delta(T),C.delta(b);let I=n.subVectors(C.start,w.start),P=T.x*b.y-T.y*b.x;if(On(P))return!1;let L=(I.x*b.y-I.y*b.x)/P,U=-(T.x*I.y-T.y*I.x)/P;if(L<0||L>1||U<0||U>1)return!1;let z=w.start.z+T.z*L,H=C.start.z+b.z*U;return On(z-H)?(M&&(M.start.copy(w.start).addScaledVector(T,L),M.end.copy(w.start).addScaledVector(T,L)),!0):!1}else return y.isDegenerateIntoPoint?m(_,y,M):g(y,_,M,S);else{if(_.isDegenerateIntoPoint)return y.isDegenerateIntoPoint?y.a.distanceToSquared(_.a)<qm?(M&&(M.start.copy(_.a),M.end.copy(_.a)),!0):!1:y.isDegenerateIntoSegment?m(y,_,M):p(y,_,M);if(y.isDegenerateIntoPoint)return p(_,y,M);if(y.isDegenerateIntoSegment)return g(_,y,M,S)}}return function(y,M=null,S=!1){this.needsUpdate&&this.update(),y.isExtendedTriangle?y.needsUpdate&&y.update():(s.copy(y),s.update(),y=s);let w=v(this,y,M,S);if(w!==void 0)return w;let C=this.plane,T=y.plane,b=T.distanceToPoint(this.a),I=T.distanceToPoint(this.b),P=T.distanceToPoint(this.c);On(b)&&(b=0),On(I)&&(I=0),On(P)&&(P=0);let L=b*I,U=b*P;if(L>0&&U>0)return!1;let z=C.distanceToPoint(y.a),H=C.distanceToPoint(y.b),ee=C.distanceToPoint(y.c);On(z)&&(z=0),On(H)&&(H=0),On(ee)&&(ee=0);let X=z*H,te=z*ee;if(X>0&&te>0)return!1;i.copy(C.normal),r.copy(T.normal);let ne=i.cross(r),ve=0,Xe=Math.abs(ne.x),at=Math.abs(ne.y);at>Xe&&(Xe=at,ve=1),Math.abs(ne.z)>Xe&&(ve=2);let tt=$S[ve],q=this.a[tt],$=this.b[tt],de=this.c[tt],Ue=y.a[tt],Se=y.b[tt],qe=y.c[tt];if(x(this,q,$,de,L,U,b,I,P,f,a))return u(this,y,M,S);if(x(y,Ue,Se,qe,X,te,z,H,ee,h,c))return u(this,y,M,S);if(f.y<f.x){let Bt=f.y;f.y=f.x,f.x=Bt,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){let Bt=h.y;h.y=h.x,h.x=Bt,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return f.y<h.x||h.y<f.x?!1:(M&&(h.x>f.x?M.start.copy(c.start):M.start.copy(a.start),h.y<f.y?M.end.copy(c.end):M.end.copy(a.end)),!0)}})();en.prototype.distanceToPoint=(function(){let s=new R;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();en.prototype.distanceToTriangle=(function(){let s=new R,e=new R,t=["a","b","c"],n=new fn,i=new fn;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let f=1/0;for(let h=0;h<3;h++){let u,d=t[h],x=o[d];this.closestPointToPoint(x,s),u=x.distanceToSquared(s),u<f&&(f=u,a&&a.copy(s),c&&c.copy(x));let g=this[d];o.closestPointToPoint(g,s),u=g.distanceToSquared(s),u<f&&(f=u,a&&a.copy(g),c&&c.copy(s))}for(let h=0;h<3;h++){let u=t[h],d=t[(h+1)%3];n.set(this[u],this[d]);for(let x=0;x<3;x++){let g=t[x],p=t[(x+1)%3];i.set(o[g],o[p]),Qo(n,i,s,e);let m=s.distanceToSquared(e);m<f&&(f=m,a&&a.copy(s),c&&c.copy(e))}}return Math.sqrt(f)}})();var Ut=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new he,this.invMatrix=new he,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new Dn),this.alignedSatBounds=new Array(3).fill().map(()=>new Dn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Ut.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let h=0;h<=1;h++){let u=1*l|2*f|4*h,d=i[u];d.x=l?n.x:t.x,d.y=f?n.y:t.y,d.z=h?n.z:t.z,d.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){let f=o[l],h=r[l],u=1<<l,d=i[u];f.subVectors(a,d),h.setFromPoints(f,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ut.prototype.intersectsBox=(function(){let s=new Dn;return function(t){this.needsUpdate&&this.update();let n=t.min,i=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){let l=o[c],f=r[c];if(s.setFromBox(l,t),f.isSeparated(s))return!1}return!0}})();Ut.prototype.intersectsTriangle=(function(){let s=new en,e=new Array(3),t=new Dn,n=new Dn,i=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);let a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let u=0;u<3;u++){let d=a[u],x=c[u];if(t.setFromPoints(x,e),d.isSeparated(t))return!1}let l=o.satBounds,f=o.satAxes,h=this.points;for(let u=0;u<3;u++){let d=l[u],x=f[u];if(t.setFromPoints(x,h),d.isSeparated(t))return!1}for(let u=0;u<3;u++){let d=c[u];for(let x=0;x<4;x++){let g=f[x];if(i.crossVectors(d,g),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}})();Ut.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Ut.prototype.distanceToPoint=(function(){let s=new R;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Ut.prototype.distanceToBox=(function(){let s=["x","y","z"],e=new Array(12).fill().map(()=>new fn),t=new Array(12).fill().map(()=>new fn),n=new R,i=new R;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let f=a*a,h=o.min,u=o.max,d=this.points,x=1/0;for(let p=0;p<8;p++){let m=d[p];i.copy(m).clamp(h,u);let v=m.distanceToSquared(i);if(v<x&&(x=v,c&&c.copy(m),l&&l.copy(i),v<f))return Math.sqrt(v)}let g=0;for(let p=0;p<3;p++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){let _=(p+1)%3,y=(p+2)%3,M=m<<_|v<<y,S=1<<p|m<<_|v<<y,w=d[M],C=d[S];e[g].set(w,C);let b=s[p],I=s[_],P=s[y],L=t[g],U=L.start,z=L.end;U[b]=h[b],U[I]=m?h[I]:u[I],U[P]=v?h[P]:u[I],z[b]=u[b],z[I]=m?h[I]:u[I],z[P]=v?h[P]:u[I],g++}for(let p=0;p<=1;p++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){i.x=p?u.x:h.x,i.y=m?u.y:h.y,i.z=v?u.z:h.z,this.closestPointToPoint(i,n);let _=i.distanceToSquared(n);if(_<x&&(x=_,c&&c.copy(n),l&&l.copy(i),_<f))return Math.sqrt(_)}for(let p=0;p<12;p++){let m=e[p];for(let v=0;v<12;v++){let _=t[v];Qo(m,_,n,i);let y=n.distanceToSquared(i);if(y<x&&(x=y,c&&c.copy(n),l&&l.copy(i),y<f))return Math.sqrt(y)}}return Math.sqrt(x)}})();var wf=class extends es{constructor(){super(()=>new en)}},pn=new wf;var ea=new R,Af=new R;function Ym(s,e,t={},n=0,i=1/0){let r=n*n,o=i*i,a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:f=>(ea.copy(e).clamp(f.min,f.max),ea.distanceToSquared(e)),intersectsBounds:(f,h,u)=>u<a&&u<o,intersectsTriangle:(f,h)=>{f.closestPointToPoint(e,ea);let u=e.distanceToSquared(ea);return u<a&&(Af.copy(ea),a=u,c=h),u<r}}),a===1/0)return null;let l=Math.sqrt(a);return t.point?t.point.copy(Af):t.point=Af.clone(),t.distance=l,t.faceIndex=c,t}var pl=parseInt("181")>=169,KS=parseInt("181")<=161,Ds=new R,Ls=new R,Fs=new R,ml=new Q,xl=new Q,gl=new Q,Zm=new R,$m=new R,Km=new R,ta=new R;function JS(s,e,t,n,i,r,o,a){let c;if(r===Wt?c=s.intersectTriangle(n,t,e,!0,i):c=s.intersectTriangle(e,t,n,r!==jt,i),c===null)return null;let l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function Jm(s,e,t,n,i,r,o,a,c,l,f){Ds.fromBufferAttribute(e,r),Ls.fromBufferAttribute(e,o),Fs.fromBufferAttribute(e,a);let h=JS(s,Ds,Ls,Fs,ta,c,l,f);if(h){if(n){ml.fromBufferAttribute(n,r),xl.fromBufferAttribute(n,o),gl.fromBufferAttribute(n,a),h.uv=new Q;let d=sn.getInterpolation(ta,Ds,Ls,Fs,ml,xl,gl,h.uv);pl||(h.uv=d)}if(i){ml.fromBufferAttribute(i,r),xl.fromBufferAttribute(i,o),gl.fromBufferAttribute(i,a),h.uv1=new Q;let d=sn.getInterpolation(ta,Ds,Ls,Fs,ml,xl,gl,h.uv1);pl||(h.uv1=d),KS&&(h.uv2=h.uv1)}if(t){Zm.fromBufferAttribute(t,r),$m.fromBufferAttribute(t,o),Km.fromBufferAttribute(t,a),h.normal=new R;let d=sn.getInterpolation(ta,Ds,Ls,Fs,Zm,$m,Km,h.normal);h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1),pl||(h.normal=d)}let u={a:r,b:o,c:a,normal:new R,materialIndex:0};if(sn.getNormal(Ds,Ls,Fs,u.normal),h.face=u,h.faceIndex=r,pl){let d=new R;sn.getBarycoord(ta,Ds,Ls,Fs,d),h.barycoord=d}}return h}function jm(s){return s&&s.isMaterial?s.side:s}function Lr(s,e,t,n,i,r,o){let a=n*3,c=a+0,l=a+1,f=a+2,{index:h,groups:u}=s;s.index&&(c=h.getX(c),l=h.getX(l),f=h.getX(f));let{position:d,normal:x,uv:g,uv1:p}=s.attributes;if(Array.isArray(e)){let m=n*3;for(let v=0,_=u.length;v<_;v++){let{start:y,count:M,materialIndex:S}=u[v];if(m>=y&&m<y+M){let w=jm(e[S]),C=Jm(t,d,x,g,p,c,l,f,w,r,o);if(C)if(C.faceIndex=n,C.face.materialIndex=S,i)i.push(C);else return C}}}else{let m=jm(e),v=Jm(t,d,x,g,p,c,l,f,m,r,o);if(v)if(v.faceIndex=n,v.face.materialIndex=0,i)i.push(v);else return v}return null}function yt(s,e,t,n){let i=s.a,r=s.b,o=s.c,a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Qm(s,e,t,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let f=n,h=n+i;f<h;f++)Lr(c,e,t,f,r,o,a)}function e0(s,e,t,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,f=null;for(let h=n,u=n+i;h<u;h++){let d;d=Lr(a,e,t,h,null,r,o),d&&d.distance<l&&(f=d,l=d.distance)}return f}function t0(s,e,t,n,i,r,o){let{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let f=s,h=e+s;f<h;f++){let u;if(u=f,yt(o,u*3,c,l),o.needsUpdate=!0,n(o,u,i,r))return!0}return!1}function n0(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position,r,o,a,c,l=0,f=s._roots;for(let u=0,d=f.length;u<d;u++)r=f[u],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(u,d,x=!1){let g=u*2;if(ot(g,a)){let p=o[u+6],m=a[g+14],v=1/0,_=1/0,y=1/0,M=-1/0,S=-1/0,w=-1/0;for(let C=3*p,T=3*(p+m);C<T;C++){let b=n[C],I=i.getX(b),P=i.getY(b),L=i.getZ(b);I<v&&(v=I),I>M&&(M=I),P<_&&(_=P),P>S&&(S=P),L<y&&(y=L),L>w&&(w=L)}return c[u+0]!==v||c[u+1]!==_||c[u+2]!==y||c[u+3]!==M||c[u+4]!==S||c[u+5]!==w?(c[u+0]=v,c[u+1]=_,c[u+2]=y,c[u+3]=M,c[u+4]=S,c[u+5]=w,!0):!1}else{let p=pt(u),m=mt(u,o),v=x,_=!1,y=!1;if(e){if(!v){let b=p/8+d/32,I=m/8+d/32;_=e.has(b),y=e.has(I),v=!_&&!y}}else _=!0,y=!0;let M=v||_,S=v||y,w=!1;M&&(w=h(p,d,v));let C=!1;S&&(C=h(m,d,v));let T=w||C;if(T)for(let b=0;b<3;b++){let I=p+b,P=m+b,L=c[I],U=c[I+3],z=c[P],H=c[P+3];c[u+b]=L<z?L:z,c[u+b+3]=U>H?U:H}return T}}}function zn(s,e,t,n,i){let r,o,a,c,l,f,h=1/t.direction.x,u=1/t.direction.y,d=1/t.direction.z,x=t.origin.x,g=t.origin.y,p=t.origin.z,m=e[s],v=e[s+3],_=e[s+1],y=e[s+3+1],M=e[s+2],S=e[s+3+2];return h>=0?(r=(m-x)*h,o=(v-x)*h):(r=(v-x)*h,o=(m-x)*h),u>=0?(a=(_-g)*u,c=(y-g)*u):(a=(y-g)*u,c=(_-g)*u),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(M-p)*d,f=(S-p)*d):(l=(S-p)*d,f=(M-p)*d),r>f||l>o)?!1:((l>r||r!==r)&&(r=l),(f<o||o!==o)&&(o=f),r<=i&&o>=n)}function i0(s,e,t,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let f=n,h=n+i;f<h;f++){let u=l?l[f]:f;Lr(c,e,t,u,r,o,a)}}function s0(s,e,t,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,f=null;for(let h=n,u=n+i;h<u;h++){let d;d=Lr(a,e,t,c?c[h]:h,null,r,o),d&&d.distance<l&&(f=d,l=d.distance)}return f}function r0(s,e,t,n,i,r,o){let{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let f=s,h=e+s;f<h;f++){let u;if(u=t.resolveTriangleIndex(f),yt(o,u*3,c,l),o.needsUpdate=!0,n(o,u,i,r))return!0}return!1}function o0(s,e,t,n,i,r,o){nt.setBuffer(s._roots[e]),Ef(0,s,t,n,i,r,o),nt.clearBuffer()}function Ef(s,e,t,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=nt,f=s*2;if(ot(f,c)){let u=It(s,l),d=Nt(f,c);Qm(e,t,n,u,d,i,r,o)}else{let u=pt(s);zn(u,a,n,r,o)&&Ef(u,e,t,n,i,r,o);let d=mt(s,l);zn(d,a,n,r,o)&&Ef(d,e,t,n,i,r,o)}}var jS=["x","y","z"];function a0(s,e,t,n,i,r){nt.setBuffer(s._roots[e]);let o=Rf(0,s,t,n,i,r);return nt.clearBuffer(),o}function Rf(s,e,t,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=nt,l=s*2;if(ot(l,a)){let h=It(s,c),u=Nt(l,a);return e0(e,t,n,h,u,i,r)}else{let h=ji(s,c),u=jS[h],x=n.direction[u]>=0,g,p;x?(g=pt(s),p=mt(s,c)):(g=mt(s,c),p=pt(s));let v=zn(g,o,n,i,r)?Rf(g,e,t,n,i,r):null;if(v){let M=v.point[u];if(x?M<=o[p+h]:M>=o[p+h+3])return v}let y=zn(p,o,n,i,r)?Rf(p,e,t,n,i,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}var vl=new ut,Fr=new en,Nr=new en,na=new he,c0=new Ut,_l=new Ut;function l0(s,e,t,n){nt.setBuffer(s._roots[e]);let i=Cf(0,s,t,n);return nt.clearBuffer(),i}function Cf(s,e,t,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=nt,c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),c0.set(t.boundingBox.min,t.boundingBox.max,n),i=c0),ot(c,o)){let f=e.geometry,h=f.index,u=f.attributes.position,d=t.index,x=t.attributes.position,g=It(s,a),p=Nt(c,o);if(na.copy(n).invert(),t.boundsTree)return _t(s,r,_l),_l.matrix.copy(na),_l.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>_l.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=g*3,y=(p+g)*3;_<y;_+=3)if(yt(Nr,_,h,u),Nr.needsUpdate=!0,v.intersectsTriangle(Nr))return!0;return!1}});{let m=ns(t);for(let v=g*3,_=(p+g)*3;v<_;v+=3){yt(Fr,v,h,u),Fr.a.applyMatrix4(na),Fr.b.applyMatrix4(na),Fr.c.applyMatrix4(na),Fr.needsUpdate=!0;for(let y=0,M=m*3;y<M;y+=3)if(yt(Nr,y,d,x),Nr.needsUpdate=!0,Fr.intersectsTriangle(Nr))return!0}}}else{let f=pt(s),h=mt(s,a);return _t(f,r,vl),!!(i.intersectsBox(vl)&&Cf(f,e,t,n,i)||(_t(h,r,vl),i.intersectsBox(vl)&&Cf(h,e,t,n,i)))}}var yl=new he,If=new Ut,ia=new Ut,QS=new R,eM=new R,tM=new R,nM=new R;function u0(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),If.set(e.boundingBox.min,e.boundingBox.max,t),If.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,f=e.attributes.position,h=e.index,u=pn.getPrimitive(),d=pn.getPrimitive(),x=QS,g=eM,p=null,m=null;i&&(p=tM,m=nM);let v=1/0,_=null,y=null;return yl.copy(t).invert(),ia.matrix.copy(yl),s.shapecast({boundsTraverseOrder:M=>If.distanceToBox(M),intersectsBounds:(M,S,w)=>w<v&&w<o?(S&&(ia.min.copy(M.min),ia.max.copy(M.max),ia.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:C=>ia.distanceToBox(C),intersectsBounds:(C,T,b)=>b<v&&b<o,intersectsRange:(C,T)=>{for(let b=C,I=C+T;b<I;b++){yt(d,3*b,h,f),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let P=M,L=M+S;P<L;P++){yt(u,3*P,l,c),u.needsUpdate=!0;let U=u.distanceToTriangle(d,x,p);if(U<v&&(g.copy(x),m&&m.copy(p),v=U,_=P,y=b),U<r)return!0}}}});{let w=ns(e);for(let C=0,T=w;C<T;C++){yt(d,3*C,h,f),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let b=M,I=M+S;b<I;b++){yt(u,3*b,l,c),u.needsUpdate=!0;let P=u.distanceToTriangle(d,x,p);if(P<v&&(g.copy(x),m&&m.copy(p),v=P,_=b,y=C),P<r)return!0}}}}}),pn.releasePrimitive(u),pn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(yl),g.applyMatrix4(yl),i.distance=g.sub(i.point).length(),i.faceIndex=y),n)}function h0(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position,r,o,a,c,l=0,f=s._roots;for(let u=0,d=f.length;u<d;u++)r=f[u],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(u,d,x=!1){let g=u*2;if(ot(g,a)){let p=o[u+6],m=a[g+14],v=1/0,_=1/0,y=1/0,M=-1/0,S=-1/0,w=-1/0;for(let C=p,T=p+m;C<T;C++){let b=3*s.resolveTriangleIndex(C);for(let I=0;I<3;I++){let P=b+I;P=n?n[P]:P;let L=i.getX(P),U=i.getY(P),z=i.getZ(P);L<v&&(v=L),L>M&&(M=L),U<_&&(_=U),U>S&&(S=U),z<y&&(y=z),z>w&&(w=z)}}return c[u+0]!==v||c[u+1]!==_||c[u+2]!==y||c[u+3]!==M||c[u+4]!==S||c[u+5]!==w?(c[u+0]=v,c[u+1]=_,c[u+2]=y,c[u+3]=M,c[u+4]=S,c[u+5]=w,!0):!1}else{let p=pt(u),m=mt(u,o),v=x,_=!1,y=!1;if(e){if(!v){let b=p/8+d/32,I=m/8+d/32;_=e.has(b),y=e.has(I),v=!_&&!y}}else _=!0,y=!0;let M=v||_,S=v||y,w=!1;M&&(w=h(p,d,v));let C=!1;S&&(C=h(m,d,v));let T=w||C;if(T)for(let b=0;b<3;b++){let I=p+b,P=m+b,L=c[I],U=c[I+3],z=c[P],H=c[P+3];c[u+b]=L<z?L:z,c[u+b+3]=U>H?U:H}return T}}}function f0(s,e,t,n,i,r,o){nt.setBuffer(s._roots[e]),Pf(0,s,t,n,i,r,o),nt.clearBuffer()}function Pf(s,e,t,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=nt,f=s*2;if(ot(f,c)){let u=It(s,l),d=Nt(f,c);i0(e,t,n,u,d,i,r,o)}else{let u=pt(s);zn(u,a,n,r,o)&&Pf(u,e,t,n,i,r,o);let d=mt(s,l);zn(d,a,n,r,o)&&Pf(d,e,t,n,i,r,o)}}var iM=["x","y","z"];function d0(s,e,t,n,i,r){nt.setBuffer(s._roots[e]);let o=Df(0,s,t,n,i,r);return nt.clearBuffer(),o}function Df(s,e,t,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=nt,l=s*2;if(ot(l,a)){let h=It(s,c),u=Nt(l,a);return s0(e,t,n,h,u,i,r)}else{let h=ji(s,c),u=iM[h],x=n.direction[u]>=0,g,p;x?(g=pt(s),p=mt(s,c)):(g=mt(s,c),p=pt(s));let v=zn(g,o,n,i,r)?Df(g,e,t,n,i,r):null;if(v){let M=v.point[u];if(x?M<=o[p+h]:M>=o[p+h+3])return v}let y=zn(p,o,n,i,r)?Df(p,e,t,n,i,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}var bl=new ut,Ur=new en,Br=new en,sa=new he,p0=new Ut,Sl=new Ut;function m0(s,e,t,n){nt.setBuffer(s._roots[e]);let i=Lf(0,s,t,n);return nt.clearBuffer(),i}function Lf(s,e,t,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=nt,c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),p0.set(t.boundingBox.min,t.boundingBox.max,n),i=p0),ot(c,o)){let f=e.geometry,h=f.index,u=f.attributes.position,d=t.index,x=t.attributes.position,g=It(s,a),p=Nt(c,o);if(sa.copy(n).invert(),t.boundsTree)return _t(s,r,Sl),Sl.matrix.copy(sa),Sl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>Sl.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=g,y=p+g;_<y;_++)if(yt(Br,3*e.resolveTriangleIndex(_),h,u),Br.needsUpdate=!0,v.intersectsTriangle(Br))return!0;return!1}});{let m=ns(t);for(let v=g,_=p+g;v<_;v++){let y=e.resolveTriangleIndex(v);yt(Ur,3*y,h,u),Ur.a.applyMatrix4(sa),Ur.b.applyMatrix4(sa),Ur.c.applyMatrix4(sa),Ur.needsUpdate=!0;for(let M=0,S=m*3;M<S;M+=3)if(yt(Br,M,d,x),Br.needsUpdate=!0,Ur.intersectsTriangle(Br))return!0}}}else{let f=pt(s),h=mt(s,a);return _t(f,r,bl),!!(i.intersectsBox(bl)&&Lf(f,e,t,n,i)||(_t(h,r,bl),i.intersectsBox(bl)&&Lf(h,e,t,n,i)))}}var Ml=new he,Ff=new Ut,ra=new Ut,sM=new R,rM=new R,oM=new R,aM=new R;function x0(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Ff.set(e.boundingBox.min,e.boundingBox.max,t),Ff.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,f=e.attributes.position,h=e.index,u=pn.getPrimitive(),d=pn.getPrimitive(),x=sM,g=rM,p=null,m=null;i&&(p=oM,m=aM);let v=1/0,_=null,y=null;return Ml.copy(t).invert(),ra.matrix.copy(Ml),s.shapecast({boundsTraverseOrder:M=>Ff.distanceToBox(M),intersectsBounds:(M,S,w)=>w<v&&w<o?(S&&(ra.min.copy(M.min),ra.max.copy(M.max),ra.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree){let w=e.boundsTree;return w.shapecast({boundsTraverseOrder:C=>ra.distanceToBox(C),intersectsBounds:(C,T,b)=>b<v&&b<o,intersectsRange:(C,T)=>{for(let b=C,I=C+T;b<I;b++){let P=w.resolveTriangleIndex(b);yt(d,3*P,h,f),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let L=M,U=M+S;L<U;L++){let z=s.resolveTriangleIndex(L);yt(u,3*z,l,c),u.needsUpdate=!0;let H=u.distanceToTriangle(d,x,p);if(H<v&&(g.copy(x),m&&m.copy(p),v=H,_=L,y=b),H<r)return!0}}}})}else{let w=ns(e);for(let C=0,T=w;C<T;C++){yt(d,3*C,h,f),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let b=M,I=M+S;b<I;b++){let P=s.resolveTriangleIndex(b);yt(u,3*P,l,c),u.needsUpdate=!0;let L=u.distanceToTriangle(d,x,p);if(L<v&&(g.copy(x),m&&m.copy(p),v=L,_=b,y=C),L<r)return!0}}}}}),pn.releasePrimitive(u),pn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(Ml),g.applyMatrix4(Ml),i.distance=g.sub(i.point).length(),i.faceIndex=y),n)}var oa=new nt.constructor,Tl=new nt.constructor,is=new es(()=>new ut),Or=new ut,zr=new ut,Nf=new ut,Uf=new ut,Bf=!1;function g0(s,e,t,n){if(Bf)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Bf=!0;let i=s._roots,r=e._roots,o,a=0,c=0,l=new he().copy(t).invert();for(let f=0,h=i.length;f<h;f++){oa.setBuffer(i[f]),c=0;let u=is.getPrimitive();_t(0,oa.float32Array,u),u.applyMatrix4(l);for(let d=0,x=r.length;d<x&&(Tl.setBuffer(r[d]),o=Qn(0,0,t,l,n,a,c,0,0,u),Tl.clearBuffer(),c+=r[d].byteLength/32,!o);d++);if(is.releasePrimitive(u),oa.clearBuffer(),a+=i[f].byteLength/32,o)break}return Bf=!1,o}function Qn(s,e,t,n,i,r=0,o=0,a=0,c=0,l=null,f=!1){let h,u;f?(h=Tl,u=oa):(h=oa,u=Tl);let d=h.float32Array,x=h.uint32Array,g=h.uint16Array,p=u.float32Array,m=u.uint32Array,v=u.uint16Array,_=s*2,y=e*2,M=ot(_,g),S=ot(y,v),w=!1;if(S&&M)f?w=i(It(e,m),Nt(e*2,v),It(s,x),Nt(s*2,g),c,o+e/8,a,r+s/8):w=i(It(s,x),Nt(s*2,g),It(e,m),Nt(e*2,v),a,r+s/8,c,o+e/8);else if(S){let C=is.getPrimitive();_t(e,p,C),C.applyMatrix4(t);let T=pt(s),b=mt(s,x);_t(T,d,Or),_t(b,d,zr);let I=C.intersectsBox(Or),P=C.intersectsBox(zr);w=I&&Qn(e,T,n,t,i,o,r,c,a+1,C,!f)||P&&Qn(e,b,n,t,i,o,r,c,a+1,C,!f),is.releasePrimitive(C)}else{let C=pt(e),T=mt(e,m);_t(C,p,Nf),_t(T,p,Uf);let b=l.intersectsBox(Nf),I=l.intersectsBox(Uf);if(b&&I)w=Qn(s,C,t,n,i,r,o,a,c+1,l,f)||Qn(s,T,t,n,i,r,o,a,c+1,l,f);else if(b)if(M)w=Qn(s,C,t,n,i,r,o,a,c+1,l,f);else{let P=is.getPrimitive();P.copy(Nf).applyMatrix4(t);let L=pt(s),U=mt(s,x);_t(L,d,Or),_t(U,d,zr);let z=P.intersectsBox(Or),H=P.intersectsBox(zr);w=z&&Qn(C,L,n,t,i,o,r,c,a+1,P,!f)||H&&Qn(C,U,n,t,i,o,r,c,a+1,P,!f),is.releasePrimitive(P)}else if(I)if(M)w=Qn(s,T,t,n,i,r,o,a,c+1,l,f);else{let P=is.getPrimitive();P.copy(Uf).applyMatrix4(t);let L=pt(s),U=mt(s,x);_t(L,d,Or),_t(U,d,zr);let z=P.intersectsBox(Or),H=P.intersectsBox(zr);w=z&&Qn(T,L,n,t,i,o,r,c,a+1,P,!f)||H&&Qn(T,U,n,t,i,o,r,c,a+1,P,!f),is.releasePrimitive(P)}}return w}function Of(s,e,t){return s===null?null:(s.point.applyMatrix4(e.matrixWorld),s.distance=s.point.distanceTo(t.ray.origin),s.object=e,s)}function v0(){return typeof SharedArrayBuffer<"u"}function cM(s,e){let t=s[s.length-1],n=t.offset+t.count>2**16,i=s.reduce((l,f)=>l+f.count,0),r=n?4:2,o=e?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(o):new Uint16Array(o),c=0;for(let l=0;l<s.length;l++){let{offset:f,count:h}=s[l];for(let u=0;u<h;u++)a[c+u]=f+u;c+=h}return a}var wl=class extends dl{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!v0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...ol,...t},t[$o]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let i=jo(t,e.range,n),r=cM(i,e.useSharedArrayBuffer);this._indirectBuffer=r}else Gm(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ut))}computePrimitiveBounds(){throw new Error("BVH: computePrimitiveBounds() not implemented")}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:jo(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}shapecast(e){let{iterateDirect:t,iterateIndirect:n,...i}=e,r=this.indirect?n:t;return super.shapecast({...i,iterate:r})}};var Al=new Ut,El=new Si,_0=new R,y0=new he,b0=new R,Rl=class s extends wl{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,i=e._roots,r=e._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:o}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));let a=new s(t,{...n,[$o]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let l=t.getIndex();if(l===null){let f=new He(e.index,1,!1);t.setIndex(f)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let f=0;f<l.length;f++){let h=l[f],u=new Uint32Array(h),d=new Uint16Array(h);for(let x=0,g=h.byteLength/32;x<g;x++){let p=8*x,m=2*p;ot(m,d)||(u[p+6]=u[p+6]/8-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(t={...t,maxLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}computePrimitiveBounds(e,t,n){let i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let l=o.array,f=o.offset||0,h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);let u=["getX","getY","getZ"],d=n.offset;for(let x=e,g=e+t;x<g;x++){let m=(r?r[x]:x)*3,v=(x-d)*6,_=m+0,y=m+1,M=m+2;a&&(_=a[_],y=a[y],M=a[M]),c||(_=_*h+f,y=y*h+f,M=M*h+f);for(let S=0;S<3;S++){let w,C,T;c?(w=o[u[S]](_),C=o[u[S]](y),T=o[u[S]](M)):(w=l[_+S],C=l[y+S],T=l[M+S]);let b=w;C<b&&(b=C),T<b&&(b=T);let I=w;C>I&&(I=C),T>I&&(I=T);let P=(I-b)/2,L=S*2;n[v+L+0]=b+P,n[v+L+1]=P+(Math.abs(b)+P)*Lm}}return n}raycastObject3D(e,t,n=[]){let{material:i}=e;if(i===void 0)return;y0.copy(e.matrixWorld).invert(),El.copy(t.ray).applyMatrix4(y0),b0.setFromMatrixScale(e.matrixWorld),_0.copy(El.direction).multiply(b0);let r=_0.length(),o=t.near/r,a=t.far/r;if(t.firstHitOnly===!0){let c=this.raycastFirst(El,i,o,a);c=Of(c,e,t),c&&n.push(c)}else{let c=this.raycast(El,i,o,a);for(let l=0,f=c.length;l<f;l++){let h=Of(c[l],e,t);h&&n.push(h)}}return n}refit(e=null){return(this.indirect?h0:n0)(this,e)}raycast(e,t=rn,n=0,i=1/0){let r=this._roots,o=[],a=this.indirect?f0:o0;for(let c=0,l=r.length;c<l;c++)a(this,c,t,e,o,n,i);return o}raycastFirst(e,t=rn,n=0,i=1/0){let r=this._roots,o=null,a=this.indirect?d0:a0;for(let c=0,l=r.length;c<l;c++){let f=a(this,c,t,e,n,i);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(e,t){let n=!1,i=this._roots,r=this.indirect?m0:l0;for(let o=0,a=i.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){let t=pn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterateDirect:t0,iterateIndirect:r0});return pn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n,o=pn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?x=>{let g=this.resolveTriangleIndex(x);yt(o,g*3,a,c)}:x=>{yt(o,x*3,a,c)},f=pn.getPrimitive(),h=e.geometry.index,u=e.geometry.attributes.position,d=e.indirect?x=>{let g=e.resolveTriangleIndex(x);yt(f,g*3,h,u)}:x=>{yt(f,x*3,h,u)};if(r){let x=(g,p,m,v,_,y,M,S)=>{for(let w=m,C=m+v;w<C;w++){d(w),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let T=g,b=g+p;T<b;T++)if(l(T),o.needsUpdate=!0,r(o,f,T,w,_,y,M,S))return!0}return!1};if(i){let g=i;i=function(p,m,v,_,y,M,S,w){return g(p,m,v,_,y,M,S,w)?!0:x(p,m,v,_,y,M,S,w)}}else i=x}return g0(this,e,t,i)}intersectsBox(e,t){return Al.set(e.min,e.max,t),Al.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Al.intersectsBox(n),intersectsTriangle:n=>Al.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,o=1/0){return(this.indirect?x0:u0)(this,e,t,n,i,r,o)}closestPointToPoint(e,t={},n=0,i=1/0){return Ym(this,e,t,n,i)}};function lM(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function uM(s){switch(s){case 1:return Jn;case 2:return Yi;case 3:return Ne;case 4:return Ne}}function S0(s){switch(s){case 1:return Mr;case 2:return Zi;case 3:return $i;case 4:return $i}}var Cl=class extends ht{constructor(){super(),this.minFilter=Le,this.magFilter=Le,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}let r=e.itemSize,o=e.count,a=e.normalized,c=e.array.constructor,l=c.BYTES_PER_ELEMENT,f=this._forcedType,h=r;if(f===null)switch(c){case Float32Array:f=Ve;break;case Uint8Array:case Uint16Array:case Uint32Array:f=dn;break;case Int8Array:case Int16Array:case Int32Array:f=qi;break}let u,d,x,g,p=lM(r);switch(f){case Ve:x=1,d=uM(r),a&&l===1?(g=c,p+="8",c===Uint8Array?u=an:(u=yr,p+="_SNORM")):(g=Float32Array,p+="32F",u=Ve);break;case qi:p+=l*8+"I",x=a?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,d=S0(r),l===1?(g=Int8Array,u=yr):l===2?(g=Int16Array,u=ko):(g=Int32Array,u=qi);break;case dn:p+=l*8+"UI",x=a?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,d=S0(r),l===1?(g=Uint8Array,u=an):l===2?(g=Uint16Array,u=Xi):(g=Uint32Array,u=dn);break}h===3&&(d===Ne||d===$i)&&(h=4);let m=Math.ceil(Math.sqrt(o))||1,v=h*m*m,_=new g(v),y=e.normalized;e.normalized=!1;for(let M=0;M<o;M++){let S=h*M;_[S]=e.getX(M)/x,r>=2&&(_[S+1]=e.getY(M)/x),r>=3&&(_[S+2]=e.getZ(M)/x,h===4&&(_[S+3]=1)),r>=4&&(_[S+3]=e.getW(M)/x)}e.normalized=y,this.internalFormat=p,this.format=d,this.type=u,this.image.width=m,this.image.height=m,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}},kr=class extends Cl{constructor(){super(),this._forcedType=dn}};var Vr=class extends Cl{constructor(){super(),this._forcedType=Ve}};var Il=class{constructor(){this.index=new kr,this.position=new Vr,this.bvhBounds=new ht,this.bvhContents=new ht,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(fM(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let i=Tf(Jo(t));this._cachedIndexAttr=new He(i,1,!1)}hM(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}};function hM(s,e,t){let n=t.array,i=s.index?s.index.array:null;for(let r=0,o=e.length;r<o;r++){let a=3*r,c=3*e[r];for(let l=0;l<3;l++)n[a+l]=i?i[c+l]:c+l}}function fM(s,e,t){let n=s._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let i=n[0],r=new Uint16Array(i),o=new Uint32Array(i),a=new Float32Array(i),c=i.byteLength/32,l=2*Math.ceil(Math.sqrt(c/2)),f=new Float32Array(4*l*l),h=Math.ceil(Math.sqrt(c)),u=new Uint32Array(2*h*h);for(let d=0;d<c;d++){let x=d*32/4,g=x*2,p=x;for(let m=0;m<3;m++)f[8*d+0+m]=a[p+0+m],f[8*d+4+m]=a[p+3+m];if(ot(g,r)){let m=Nt(g,r),v=It(x,o),_=-65536|m;u[d*2+0]=_,u[d*2+1]=v}else{let m=o[x+6],v=ji(x,o);u[d*2+0]=v,u[d*2+1]=m}}e.image.data=f,e.image.width=l,e.image.height=l,e.format=Ne,e.type=Ve,e.internalFormat="RGBA32F",e.minFilter=Le,e.magFilter=Le,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=u,t.image.width=h,t.image.height=h,t.format=Zi,t.type=dn,t.internalFormat="RG32UI",t.minFilter=Le,t.magFilter=Le,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}var Ns={};Ox(Ns,{bvh_distance_functions:()=>M0,bvh_ray_functions:()=>kf,bvh_struct_definitions:()=>T0,common_functions:()=>zf});var zf=`

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
`;var M0=`

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
`;var kf=`

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
`;var T0=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var WE=`
	${zf}
	${kf}
`;function Pl(s,e,t=0){if(s.isInterleavedBufferAttribute){let n=s.itemSize;for(let i=0,r=s.count;i<r;i++){let o=i+t;e.setX(o,s.getX(i)),n>=2&&e.setY(o,s.getY(i)),n>=3&&e.setZ(o,s.getZ(i)),n>=4&&e.setW(o,s.getW(i))}}else{let n=e.array,i=n.constructor,r=n.BYTES_PER_ELEMENT*s.itemSize*t;new i(n.buffer,r,s.array.length).set(s.array)}}function Us(s,e=null){let t=s.array.constructor,n=s.normalized,i=s.itemSize,r=e===null?s.count:e;return new He(new t(i*r),i,n)}function ss(s,e){if(!s&&!e)return!0;if(!!s!=!!e)return!1;let t=s.count===e.count,n=s.normalized===e.normalized,i=s.array.constructor===e.array.constructor,r=s.itemSize===e.itemSize;return!(!t||!n||!i||!r)}function dM(s){let e=s[0].index!==null,t=new Set(Object.keys(s[0].attributes));if(!s[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let n=0;n<s.length;++n){let i=s[n],r=0;if(e!==(i.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let o in i.attributes){if(!t.has(o))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+o+'" attribute exists among all geometries, or in none of them.');r++}if(r!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function pM(s){let e=0;for(let t=0,n=s.length;t<n;t++)e+=s[t].getIndex().count;return e}function mM(s){let e=0;for(let t=0,n=s.length;t<n;t++)e+=s[t].getAttribute("position").count;return e}function xM(s,e,t){s.index&&s.index.count!==e&&s.setIndex(null);let n=s.attributes;for(let i in n)n[i].count!==t&&s.deleteAttribute(i)}function w0(s,e={},t=new et){let{useGroups:n=!1,forceUpdate:i=!1,skipAssigningAttributes:r=[],overwriteIndex:o=!0}=e;dM(s);let a=s[0].index!==null,c=a?pM(s):-1,l=mM(s);if(xM(t,c,l),n){let h=0;for(let u=0,d=s.length;u<d;u++){let x=s[u],g;a?g=x.getIndex().count:g=x.getAttribute("position").count,t.addGroup(h,g,u),h+=g}}if(a){let h=!1;if(t.index||(t.setIndex(new He(new Uint32Array(c),1,!1)),h=!0),h||o){let u=0,d=0,x=t.getIndex();for(let g=0,p=s.length;g<p;g++){let m=s[g],v=m.getIndex();if(!(!i&&!h&&r[g]))for(let y=0;y<v.count;++y)x.setX(u+y,v.getX(y)+d);u+=v.count,d+=m.getAttribute("position").count}}}let f=Object.keys(s[0].attributes);for(let h=0,u=f.length;h<u;h++){let d=!1,x=f[h];if(!t.getAttribute(x)){let m=s[0].getAttribute(x);t.setAttribute(x,Us(m,l)),d=!0}let g=0,p=t.getAttribute(x);for(let m=0,v=s.length;m<v;m++){let _=s[m],y=!i&&!d&&r[m],M=_.getAttribute(x);if(!y)if(x==="color"&&p.itemSize!==M.itemSize)for(let S=g,w=M.count;S<w;S++)M.setXYZW(S,p.getX(S),p.getY(S),p.getZ(S),1);else Pl(M,p,g);g+=M.count}}}function A0(s,e,t){let n=s.index,r=s.attributes.position.count,o=n?n.count:r,a=s.groups;a.length===0&&(a=[{count:o,start:0,materialIndex:0}]);let c=s.getAttribute("materialIndex");if(!c||c.count!==r){let f;t.length<=255?f=new Uint8Array(r):f=new Uint16Array(r),c=new He(f,1,!1),s.deleteAttribute("materialIndex"),s.setAttribute("materialIndex",c)}let l=c.array;for(let f=0;f<a.length;f++){let h=a[f],u=h.start,d=h.count,x=Math.min(d,o-u),g=Array.isArray(e)?e[h.materialIndex]:e,p=t.indexOf(g);for(let m=0;m<x;m++){let v=u+m;n&&(v=n.getX(v)),l[v]=p}}}function E0(s,e){if(!s.index){let t=s.attributes.position.count,n=new Array(t);for(let i=0;i<t;i++)n[i]=i;s.setIndex(n)}if(!s.attributes.normal&&e&&e.includes("normal")&&s.computeVertexNormals(),!s.attributes.uv&&e&&e.includes("uv")){let t=s.attributes.position.count;s.setAttribute("uv",new He(new Float32Array(t*2),2,!1))}if(!s.attributes.uv2&&e&&e.includes("uv2")){let t=s.attributes.position.count;s.setAttribute("uv2",new He(new Float32Array(t*2),2,!1))}if(!s.attributes.tangent&&e&&e.includes("tangent"))if(s.attributes.uv&&s.attributes.normal)s.computeTangents();else{let t=s.attributes.position.count;s.setAttribute("tangent",new He(new Float32Array(t*4),4,!1))}if(!s.attributes.color&&e&&e.includes("color")){let t=s.attributes.position.count,n=new Float32Array(t*4);n.fill(1),s.setAttribute("color",new He(n,4))}}function Hr(s){let e=0;if(s.byteLength!==0){let t=new Uint8Array(s);for(let n=0;n<s.byteLength;n++){let i=t[n];e=(e<<5)-e+i,e|=0}}return e}function R0(s){let e=s.uuid,t=Object.values(s.attributes);s.index&&(t.push(s.index),e+=`index|${s.index.version}`);let n=Object.keys(t).sort();for(let i of n){let r=t[i];e+=`${i}_${r.version}|`}return e}function C0(s){let e=s.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${Hr(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}var Dl=class{constructor(e=null){this.matrixWorld=new he,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=R0(t),this.primitiveCount=n,this.skeletonHash=C0(e)}didChange(e){let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===R0(t)&&this.skeletonHash===C0(e)&&this.primitiveCount===n)}};var Bs=new R,Os=new R,zs=new R,I0=new Ge,Ll=new R,Vf=new R,P0=new Ge,D0=new Ge,Fl=new he,L0=new he;function F0(s,e,t){let n=s.skeleton,i=s.geometry,r=n.bones,o=n.boneInverses;P0.fromBufferAttribute(i.attributes.skinIndex,e),D0.fromBufferAttribute(i.attributes.skinWeight,e),Fl.elements.fill(0);for(let a=0;a<4;a++){let c=D0.getComponent(a);if(c!==0){let l=P0.getComponent(a);L0.multiplyMatrices(r[l].matrixWorld,o[l]),gM(Fl,L0,c)}}return Fl.multiply(s.bindMatrix).premultiply(s.bindMatrixInverse),t.transformDirection(Fl),t}function Hf(s,e,t,n,i){Ll.set(0,0,0);for(let r=0,o=s.length;r<o;r++){let a=e[r],c=s[r];a!==0&&(Vf.fromBufferAttribute(c,n),t?Ll.addScaledVector(Vf,a):Ll.addScaledVector(Vf.sub(i),a))}i.add(Ll)}function gM(s,e,t){let n=s.elements,i=e.elements;for(let r=0,o=i.length;r<o;r++)n[r]+=i[r]*t}function vM(s){let{index:e,attributes:t}=s;if(e)for(let n=0,i=e.count;n<i;n+=3){let r=e.getX(n),o=e.getX(n+2);e.setX(n,o),e.setX(n+2,r)}else for(let n in t){let i=t[n],r=i.itemSize;for(let o=0,a=i.count;o<a;o+=3)for(let c=0;c<r;c++){let l=i.getComponent(o,c),f=i.getComponent(o+2,c);i.setComponent(o,c,f),i.setComponent(o+2,c,l)}}return s}function N0(s,e={},t=new et){e={applyWorldTransforms:!0,attributes:[],...e};let n=s.geometry,i=e.applyWorldTransforms,r=e.attributes.includes("normal"),o=e.attributes.includes("tangent"),a=n.attributes,c=t.attributes;for(let v in t.attributes)(!e.attributes.includes(v)||!(v in n.attributes))&&t.deleteAttribute(v);!t.index&&n.index&&(t.index=n.index.clone()),c.position||t.setAttribute("position",Us(a.position)),r&&!c.normal&&a.normal&&t.setAttribute("normal",Us(a.normal)),o&&!c.tangent&&a.tangent&&t.setAttribute("tangent",Us(a.tangent)),ss(n.index,t.index),ss(a.position,c.position),r&&ss(a.normal,c.normal),o&&ss(a.tangent,c.tangent);let l=a.position,f=r?a.normal:null,h=o?a.tangent:null,u=n.morphAttributes.position,d=n.morphAttributes.normal,x=n.morphAttributes.tangent,g=n.morphTargetsRelative,p=s.morphTargetInfluences,m=new Oe;m.getNormalMatrix(s.matrixWorld),n.index&&t.index.array.set(n.index.array);for(let v=0,_=a.position.count;v<_;v++)Bs.fromBufferAttribute(l,v),f&&Os.fromBufferAttribute(f,v),h&&(I0.fromBufferAttribute(h,v),zs.fromBufferAttribute(h,v)),p&&(u&&Hf(u,p,g,v,Bs),d&&Hf(d,p,g,v,Os),x&&Hf(x,p,g,v,zs)),s.isSkinnedMesh&&(s.applyBoneTransform(v,Bs),f&&F0(s,v,Os),h&&F0(s,v,zs)),i&&Bs.applyMatrix4(s.matrixWorld),c.position.setXYZ(v,Bs.x,Bs.y,Bs.z),f&&(i&&Os.applyNormalMatrix(m),c.normal.setXYZ(v,Os.x,Os.y,Os.z)),h&&(i&&zs.transformDirection(s.matrixWorld),c.tangent.setXYZW(v,zs.x,zs.y,zs.z,I0.w));for(let v in e.attributes){let _=e.attributes[v];_==="position"||_==="tangent"||_==="normal"||!(_ in a)||(c[_]||t.setAttribute(_,Us(a[_])),ss(a[_],c[_]),Pl(a[_],c[_]))}return s.matrixWorld.determinant()<0&&vM(t),t}var Nl=class extends et{constructor(){super(),this.version=0,this.hash=null,this._diff=new Dl}isCompatible(e,t){let n=e.geometry;for(let i=0;i<t.length;i++){let r=t[i],o=n.attributes[r],a=this.attributes[r];if(o&&!ss(o,a))return!1}return!0}updateFrom(e,t){let n=this._diff;return n.didChange(e)?(N0(e,t,this),n.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};var Bl=0,Gf=1,Wf=2;function _M(s,e){for(let t=0,n=s.length;t<n;t++)s[t].traverseVisible(r=>{r.isMesh&&e(r)})}function yM(s){let e=[];for(let t=0,n=s.length;t<n;t++){let i=s[t];Array.isArray(i.material)?e.push(...i.material):e.push(i.material)}return e}function bM(s,e,t){if(s.length===0){e.setIndex(null);let n=e.attributes;for(let i in n)e.deleteAttribute(i);for(let i in t.attributes)e.setAttribute(t.attributes[i],new He(new Float32Array(0),4,!1))}else w0(s,t,e);for(let n in e.attributes)e.attributes[n].needsUpdate=!0}var Ul=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new Cn,t=new et;t.setAttribute("position",new He(new Float32Array(9),3)),this._dummyMesh=new ze(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return _M(this.objects,t=>{e.push(t)}),e.sort((t,n)=>t.uuid>n.uuid?1:t.uuid<n.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),n=new Set(e.keys()),i={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let r=0,o=t.length;r<o;r++){let a=t[r],c=a.uuid;n.delete(c);let l=e.get(c);(!l||!l.isCompatible(a,this.attributes))&&(l&&l.dispose(),l=new Nl,e.set(c,l)),l.updateFrom(a,i)&&this.generateMissingAttributes&&E0(l,this.attributes)}n.forEach(r=>{e.delete(r)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new et){let{useGroups:t,overwriteIndex:n,_intermediateGeometry:i,_geometryMergeSets:r}=this,o=this._getMeshes(),a=[],c=[],l=r.get(e)||[];this._updateIntermediateGeometries();let f=!1;o.length!==l.length&&(f=!0);for(let u=0,d=o.length;u<d;u++){let x=o[u],g=i.get(x.uuid);c.push(g);let p=l[u];!p||p.uuid!==g.uuid?(a.push(!1),f=!0):p.version!==g.version?a.push(!1):a.push(!0)}bM(c,e,{useGroups:t,forceUpdate:f,skipAssigningAttributes:a,overwriteIndex:n}),f&&e.dispose(),r.set(e,c.map(u=>({version:u.version,uuid:u.uuid})));let h=Bl;return f?h=Wf:a.includes(!1)&&(h=Gf),{changeType:h,materials:yM(o),geometry:e}}};function SM(s){let e=new Set;for(let t=0,n=s.length;t<n;t++){let i=s[t];for(let r in i){let o=i[r];o&&o.isTexture&&e.add(o)}}return Array.from(e)}function MM(s){let e=[],t=new Set;for(let i=0,r=s.length;i<r;i++)s[i].traverse(o=>{o.visible&&(o.isRectAreaLight||o.isSpotLight||o.isPointLight||o.isDirectionalLight)&&(e.push(o),o.iesMap&&t.add(o.iesMap))});let n=Array.from(t).sort((i,r)=>i.uuid<r.uuid?1:i.uuid>r.uuid?-1:0);return{lights:e,iesTextures:n}}var Ol=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new et,this.staticGeometryGenerator=new Ul(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:n,attributes:i}=this,r=t.objects;t.attributes=i,r.forEach(u=>{u.traverse(d=>{d.isSkinnedMesh&&d.skeleton&&d.skeleton.update()})});let o=t.generate(n),a=o.materials,c=o.changeType!==Bl||this._materialUuids===null||this._materialUuids.length!==length;if(!c){for(let u=0,d=a.length;u<d;u++)if(a[u].uuid!==this._materialUuids[u]){c=!0;break}}let l=SM(a),{lights:f,iesTextures:h}=MM(r);if(c&&(A0(n,a,a),this._materialUuids=a.map(u=>u.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(o.changeType===Wf){let u={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(n,u):this.bvh=new Rl(n,u)}else o.changeType===Gf&&this.bvh.refit()}return{bvhChanged:o.changeType!==Bl,bvh:this.bvh,needsMaterialIndexUpdate:c,lights:f,iesTextures:h,geometry:n,materials:a,textures:l,objects:r}}};var TM=new Ai(-1,1,1,-1,0,1),Xf=class extends et{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},wM=new Xf,Ln=class{constructor(e){this._mesh=new ze(wM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,TM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var rs=class extends Ft{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(let t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(n){this.uniforms[t].value=n}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}};var zl=class extends rs{constructor(e){super({blending:Xt,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(e)}};function kl(s=1){let e="uint";return s>1&&(e="uvec"+s),`
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
	`}function Vl(s=1){let e="uint",t="float",n="",i=".r",r="1u";return s>1&&(e="uvec"+s,t="vec"+s,n=s+"",s===2?(i=".rg",r="uvec2( 1u, 2u )"):s===3?(i=".rgb",r="uvec3( 1u, 2u, 3u )"):(i="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${i};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}var Hl=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${kl(1)}
	${kl(2)}
	${kl(3)}
	${kl(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,U0=`

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

`,B0=`

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

	${Vl(1)}
	${Vl(2)}
	${Vl(3)}
	${Vl(4)}

`;var qf=class extends rs{constructor(){super({blending:Xt,uniforms:{resolution:{value:new Q}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Hl}
				${U0}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},Gl=class{generate(e,t=256){let n=new Gt(t,t,{type:Ve,format:Ne,minFilter:Le,magFilter:Le,generateMipmaps:!1}),i=e.getRenderTarget();e.setRenderTarget(n);let r=new Ln(new qf);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(i),r.dispose(),n}};var Gr=class extends Lt{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}};var Wl=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Gr?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function Xl(s){let e=new Uint16Array(s.length);for(let t=0,n=s.length;t<n;++t)e[t]=hn.toHalfFloat(s[t]);return e}function O0(s,e,t=0,n=s.length){let i=t,r=t+n-1;for(;i<r;){let o=i+r>>1;s[o]<e?i=o+1:r=o}return i-t}function AM(s,e,t){return .2126*s+.7152*e+.0722*t}function EM(s,e=Ht){let t=s.clone();t.source=new zi({...t.image});let{width:n,height:i,data:r}=t.image,o=r;if(t.type!==e){e===Ht?o=new Uint16Array(r.length):o=new Float32Array(r.length);let a;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?a=2**(8*r.BYTES_PER_ELEMENT-1)-1:a=2**(8*r.BYTES_PER_ELEMENT)-1;for(let c=0,l=r.length;c<l;c++){let f=r[c];t.type===Ht&&(f=hn.fromHalfFloat(r[c])),t.type!==Ve&&t.type!==Ht&&(f/=a),e===Ht&&(o[c]=hn.toHalfFloat(f))}t.image.data=o,t.type=e}if(t.flipY){let a=o;o=o.slice();for(let c=0;c<i;c++)for(let l=0;l<n;l++){let f=i-c-1,h=4*(c*n+l),u=4*(f*n+l);o[u+0]=a[h+0],o[u+1]=a[h+1],o[u+2]=a[h+2],o[u+3]=a[h+3]}t.flipY=!1,t.image.data=o}return t}var ql=class{constructor(){let e=new ht(Xl(new Float32Array([0,0,0,0])),1,1);e.type=Ht,e.format=Ne,e.minFilter=rt,e.magFilter=rt,e.wrapS=Vt,e.wrapT=Vt,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new ht(Xl(new Float32Array([0,1])),1,2);t.type=Ht,t.format=Jn,t.minFilter=rt,t.magFilter=rt,t.generateMipmaps=!1,t.needsUpdate=!0;let n=new ht(Xl(new Float32Array([0,0,1,1])),2,2);n.type=Ht,n.format=Jn,n.minFilter=rt,n.magFilter=rt,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=EM(e);t.wrapS=Vt,t.wrapT=Mt;let{width:n,height:i,data:r}=t.image,o=new Float32Array(n*i),a=new Float32Array(n*i),c=new Float32Array(i),l=new Float32Array(i),f=0,h=0;for(let p=0;p<i;p++){let m=0;for(let v=0;v<n;v++){let _=p*n+v,y=hn.fromHalfFloat(r[4*_+0]),M=hn.fromHalfFloat(r[4*_+1]),S=hn.fromHalfFloat(r[4*_+2]),w=AM(y,M,S);m+=w,f+=w,o[_]=w,a[_]=m}if(m!==0)for(let v=p*n,_=p*n+n;v<_;v++)o[v]/=m,a[v]/=m;h+=m,c[p]=m,l[p]=h}if(h!==0)for(let p=0,m=c.length;p<m;p++)c[p]/=h,l[p]/=h;let u=new Uint16Array(i),d=new Uint16Array(n*i);for(let p=0;p<i;p++){let m=(p+1)/i,v=O0(l,m);u[p]=hn.toHalfFloat((v+.5)/i)}for(let p=0;p<i;p++)for(let m=0;m<n;m++){let v=p*n+m,_=(m+1)/n,y=O0(a,_,p*n,n);d[v]=hn.toHalfFloat((y+.5)/n)}this.dispose();let{marginalWeights:x,conditionalWeights:g}=this;x.image={width:i,height:1,data:u},x.needsUpdate=!0,g.image={width:n,height:i,data:d},g.needsUpdate=!0,this.totalSum=f,this.map=t}};var Yf=6,RM=0,CM=1,IM=2,PM=3,DM=4,ei=new R,Sn=new R,z0=new he,Wr=new vn,k0=new R,Xr=new R,LM=new R(0,1,0),Yl=class{constructor(){let e=new ht(new Float32Array(4),1,1);e.format=Ne,e.type=Ve,e.wrapS=Mt,e.wrapT=Mt,e.generateMipmaps=!1,e.minFilter=Le,e.magFilter=Le,this.tex=e,this.count=0}updateFrom(e,t=[]){let n=this.tex,i=Math.max(e.length*Yf,1),r=Math.ceil(Math.sqrt(i));n.image.width!==r&&(n.dispose(),n.image.data=new Float32Array(r*r*4),n.image.width=r,n.image.height=r);let o=n.image.data;for(let c=0,l=e.length;c<l;c++){let f=e[c],h=c*Yf*4,u=0;for(let x=0;x<Yf*4;x++)o[h+x]=0;f.getWorldPosition(Sn),o[h+u++]=Sn.x,o[h+u++]=Sn.y,o[h+u++]=Sn.z;let d=RM;if(f.isRectAreaLight&&f.isCircular?d=CM:f.isSpotLight?d=IM:f.isDirectionalLight?d=PM:f.isPointLight&&(d=DM),o[h+u++]=d,o[h+u++]=f.color.r,o[h+u++]=f.color.g,o[h+u++]=f.color.b,o[h+u++]=f.intensity,f.getWorldQuaternion(Wr),f.isRectAreaLight)ei.set(f.width,0,0).applyQuaternion(Wr),o[h+u++]=ei.x,o[h+u++]=ei.y,o[h+u++]=ei.z,u++,Sn.set(0,f.height,0).applyQuaternion(Wr),o[h+u++]=Sn.x,o[h+u++]=Sn.y,o[h+u++]=Sn.z,o[h+u++]=ei.cross(Sn).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){let x=f.radius||0;k0.setFromMatrixPosition(f.matrixWorld),Xr.setFromMatrixPosition(f.target.matrixWorld),z0.lookAt(k0,Xr,LM),Wr.setFromRotationMatrix(z0),ei.set(1,0,0).applyQuaternion(Wr),o[h+u++]=ei.x,o[h+u++]=ei.y,o[h+u++]=ei.z,u++,Sn.set(0,1,0).applyQuaternion(Wr),o[h+u++]=Sn.x,o[h+u++]=Sn.y,o[h+u++]=Sn.z,o[h+u++]=Math.PI*x*x,o[h+u++]=x,o[h+u++]=f.decay,o[h+u++]=f.distance,o[h+u++]=Math.cos(f.angle),o[h+u++]=Math.cos(f.angle*(1-f.penumbra)),o[h+u++]=f.iesMap?t.indexOf(f.iesMap):-1}else if(f.isPointLight){let x=ei.setFromMatrixPosition(f.matrixWorld);o[h+u++]=x.x,o[h+u++]=x.y,o[h+u++]=x.z,u++,u+=4,u+=1,o[h+u++]=f.decay,o[h+u++]=f.distance}else if(f.isDirectionalLight){let x=ei.setFromMatrixPosition(f.matrixWorld),g=Sn.setFromMatrixPosition(f.target.matrixWorld);Xr.subVectors(x,g).normalize(),o[h+u++]=Xr.x,o[h+u++]=Xr.y,o[h+u++]=Xr.z}}this.count=e.length;let a=Hr(o.buffer);return this.hash!==a?(this.hash=a,n.needsUpdate=!0,!0):!1}};function V0(s,e,t,n,i){if(e>n)throw new Error;let r=s.length/e,o=s.constructor.BYTES_PER_ELEMENT*8,a=1;switch(s.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**o-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(o-1)-1;break}for(let c=0;c<r;c++){let l=4*c,f=e*c;for(let h=0;h<n;h++)t[i+l+h]=e>=h+1?s[f+h]/a:0}}var Zl=class extends ki{constructor(){super(),this._textures=[],this.type=Ve,this.format=Ne,this.internalFormat="RGBA32F"}updateAttribute(e,t){let n=this._textures[e];n.updateFrom(t);let i=n.image,r=this.image;if(i.width!==r.width||i.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:o,height:a,data:c}=r,f=o*a*4*e,h=t.itemSize;h===3&&(h=4),V0(n.image.data,h,c,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,n=e.length;for(let h=0,u=n;h<u;h++)if(e[h].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let i=this._textures;for(;i.length<n;){let h=new Vr;i.push(h)}for(;i.length>n;)i.pop();for(let h=0,u=n;h<u;h++)i[h].updateFrom(e[h]);let o=i[0].image,a=this.image;(o.width!==a.width||o.height!==a.height||o.depth!==n)&&(a.width=o.width,a.height=o.height,a.depth=n,a.data=new Float32Array(a.width*a.height*a.depth*4));let{data:c,width:l,height:f}=a;for(let h=0,u=n;h<u;h++){let d=i[h],g=l*f*4*h,p=e[h].itemSize;p===3&&(p=4),V0(d.image.data,p,c,4,g)}this.dispose(),this.needsUpdate=!0}};var $l=class extends Zl{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,n,i){this.setAttributes([e,t,n,i])}};function Zf(s,e){return s.uuid<e.uuid?1:s.uuid>e.uuid?-1:0}function Kl(s){return`${s.source.uuid}:${s.colorSpace}`}function FM(s){let e=new Set,t=[];for(let n=0,i=s.length;n<i;n++){let r=s[n],o=Kl(r);e.has(o)||(e.add(o),t.push(r))}return t}function H0(s){let e=s.map(n=>n.iesMap||null).filter(n=>n),t=new Set(e);return Array.from(t).sort(Zf)}function G0(s){let e=new Set;for(let n=0,i=s.length;n<i;n++){let r=s[n];for(let o in r){let a=r[o];a&&a.isTexture&&e.add(a)}}let t=Array.from(e);return FM(t).sort(Zf)}function W0(s){let e=[];return s.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(Zf)}var jl=47,X0=jl*4,$f=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},Jl=class extends ht{constructor(){super(new Float32Array(4),1,1),this.format=Ne,this.type=Ve,this.wrapS=Mt,this.wrapT=Mt,this.minFilter=Le,this.magFilter=Le,this.generateMipmaps=!1,this.features=new $f}updateFrom(e,t){function n(x,g,p=-1){if(g in x&&x[g]){let m=Kl(x[g]);return h[m]}else return p}function i(x,g,p){return g in x?x[g]:p}function r(x,g,p,m){let v=x[g]&&x[g].isTexture?x[g]:null;if(v){v.matrixAutoUpdate&&v.updateMatrix();let _=v.matrix.elements,y=0;p[m+y++]=_[0],p[m+y++]=_[3],p[m+y++]=_[6],y++,p[m+y++]=_[1],p[m+y++]=_[4],p[m+y++]=_[7],y++}return 8}let o=0,a=e.length*jl,c=Math.ceil(Math.sqrt(a))||1,{image:l,features:f}=this,h={};for(let x=0,g=t.length;x<g;x++)h[Kl(t[x])]=x;l.width!==c&&(this.dispose(),l.data=new Float32Array(c*c*4),l.width=c,l.height=c);let u=l.data;f.reset();for(let x=0,g=e.length;x<g;x++){let p=e[x];if(p.isFogVolumeMaterial){f.setUsed("FOG");for(let _=0;_<X0;_++)u[o+_]=0;u[o+0+0]=p.color.r,u[o+0+1]=p.color.g,u[o+0+2]=p.color.b,u[o+8+3]=i(p,"emissiveIntensity",0),u[o+12+0]=p.emissive.r,u[o+12+1]=p.emissive.g,u[o+12+2]=p.emissive.b,u[o+52+1]=p.density,u[o+52+3]=0,u[o+56+2]=4,o+=X0;continue}u[o++]=p.color.r,u[o++]=p.color.g,u[o++]=p.color.b,u[o++]=n(p,"map"),u[o++]=i(p,"metalness",0),u[o++]=n(p,"metalnessMap"),u[o++]=i(p,"roughness",0),u[o++]=n(p,"roughnessMap"),u[o++]=i(p,"ior",1.5),u[o++]=i(p,"transmission",0),u[o++]=n(p,"transmissionMap"),u[o++]=i(p,"emissiveIntensity",0),"emissive"in p?(u[o++]=p.emissive.r,u[o++]=p.emissive.g,u[o++]=p.emissive.b):(u[o++]=0,u[o++]=0,u[o++]=0),u[o++]=n(p,"emissiveMap"),u[o++]=n(p,"normalMap"),"normalScale"in p?(u[o++]=p.normalScale.x,u[o++]=p.normalScale.y):(u[o++]=1,u[o++]=1),u[o++]=i(p,"clearcoat",0),u[o++]=n(p,"clearcoatMap"),u[o++]=i(p,"clearcoatRoughness",0),u[o++]=n(p,"clearcoatRoughnessMap"),u[o++]=n(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(u[o++]=p.clearcoatNormalScale.x,u[o++]=p.clearcoatNormalScale.y):(u[o++]=1,u[o++]=1),o++,u[o++]=i(p,"sheen",0),"sheenColor"in p?(u[o++]=p.sheenColor.r,u[o++]=p.sheenColor.g,u[o++]=p.sheenColor.b):(u[o++]=0,u[o++]=0,u[o++]=0),u[o++]=n(p,"sheenColorMap"),u[o++]=i(p,"sheenRoughness",0),u[o++]=n(p,"sheenRoughnessMap"),u[o++]=n(p,"iridescenceMap"),u[o++]=n(p,"iridescenceThicknessMap"),u[o++]=i(p,"iridescence",0),u[o++]=i(p,"iridescenceIOR",1.3);let m=i(p,"iridescenceThicknessRange",[100,400]);u[o++]=m[0],u[o++]=m[1],"specularColor"in p?(u[o++]=p.specularColor.r,u[o++]=p.specularColor.g,u[o++]=p.specularColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=n(p,"specularColorMap"),u[o++]=i(p,"specularIntensity",1),u[o++]=n(p,"specularIntensityMap");let v=i(p,"thickness",0)===0&&i(p,"attenuationDistance",1/0)===1/0;if(u[o++]=Number(v),o++,"attenuationColor"in p?(u[o++]=p.attenuationColor.r,u[o++]=p.attenuationColor.g,u[o++]=p.attenuationColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=i(p,"attenuationDistance",1/0),u[o++]=n(p,"alphaMap"),u[o++]=p.opacity,u[o++]=p.alphaTest,!v&&p.transmission>0)u[o++]=0;else switch(p.side){case rn:u[o++]=1;break;case Wt:u[o++]=-1;break;case jt:u[o++]=0;break}u[o++]=Number(i(p,"matte",!1)),u[o++]=Number(i(p,"castShadow",!0)),u[o++]=Number(p.vertexColors)|Number(p.flatShading)<<1,u[o++]=Number(p.transparent),o+=r(p,"map",u,o),o+=r(p,"metalnessMap",u,o),o+=r(p,"roughnessMap",u,o),o+=r(p,"transmissionMap",u,o),o+=r(p,"emissiveMap",u,o),o+=r(p,"normalMap",u,o),o+=r(p,"clearcoatMap",u,o),o+=r(p,"clearcoatNormalMap",u,o),o+=r(p,"clearcoatRoughnessMap",u,o),o+=r(p,"sheenColorMap",u,o),o+=r(p,"sheenRoughnessMap",u,o),o+=r(p,"iridescenceMap",u,o),o+=r(p,"iridescenceThicknessMap",u,o),o+=r(p,"specularColorMap",u,o),o+=r(p,"specularIntensityMap",u,o),o+=r(p,"alphaMap",u,o)}let d=Hr(u.buffer);return this.hash!==d?(this.hash=d,this.needsUpdate=!0,!0):!1}};var q0=new _e;function NM(s){return s?`${s.uuid}:${s.version}`:null}function UM(s,e){for(let t in e)t in s&&(s[t]=e[t])}var aa=class extends ho{constructor(e,t,n){let i={format:Ne,type:an,minFilter:rt,magFilter:rt,wrapS:Vt,wrapT:Vt,generateMipmaps:!1,...n};super(e,t,1,i),UM(this.texture,i),this.texture.setTextures=(...o)=>{this.setTextures(...o)},this.hashes=[null];let r=new Ln(new Kf);this.fsQuad=r}setTextures(e,t,n=this.width,i=this.height){let r=e.getRenderTarget(),o=e.toneMapping,a=e.getClearAlpha();e.getClearColor(q0);let c=t.length||1;(n!==this.width||i!==this.height||this.depth!==c)&&(this.setSize(n,i,c),this.hashes=new Array(c).fill(null)),e.setClearColor(0,0),e.toneMapping=Pn;let l=this.fsQuad,f=this.hashes,h=!1;for(let u=0,d=c;u<d;u++){let x=t[u],g=NM(x);x&&(f[u]!==g||x.isWebGLRenderTarget)&&(x.matrixAutoUpdate=!1,x.matrix.identity(),l.material.map=x,e.setRenderTarget(this,u),l.render(e),x.updateMatrix(),x.matrixAutoUpdate=!0,f[u]=g,h=!0)}return l.material.map=null,e.setClearColor(q0,a),e.setRenderTarget(r),e.toneMapping=o,h}dispose(){super.dispose(),this.fsQuad.dispose()}},Kf=class extends Ft{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}};function BM(s,e=Math.random()){for(let t=s.length-1;t>0;t--){let n=Math.floor(e()*(t+1)),i=s[t];s[t]=s[n],s[n]=i}return s}var Ql=class{constructor(e,t,n=Math.random){let i=e**t,r=new Uint16Array(i),o=i;for(let a=0;a<i;a++)r[a]=a;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let a=0;a<i;a++)r[a]=a;o=0},this.reshuffle=function(){o=0},this.next=function(){let{samples:a}=this;o>=r.length&&(BM(r,n),this.reshuffle());let c=r[o++];for(let l=0;l<t;l++)a[l]=(c%e+n())/e,c=Math.floor(c/e);return a}}};var eu=class{constructor(e,t,n=Math.random){let i=0;for(let c of t)i+=c;let r=new Float32Array(i),o=[],a=0;for(let c of t){let l=new Ql(e,c,n);l.samples=new Float32Array(r.buffer,a,l.samples.length),a+=l.samples.length*4,o.push(l)}this.samples=r,this.strataCount=e,this.next=function(){for(let c of o)c.next();return r},this.reshuffle=function(){for(let c of o)c.reshuffle()},this.reset=function(){for(let c of o)c.reset()}}};var Jf=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},tu=class extends ht{constructor(e=1,t=1,n=8){super(new Float32Array(1),1,1,Ne,Ve),this.minFilter=Le,this.magFilter=Le,this.strata=n,this.sampler=null,this.generator=new Jf,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,n)}init(e=this.image.height,t=this.image.width,n=this.strata){let{image:i}=this;if(i.width===t&&i.height===e&&this.sampler!==null)return;let r=new Array(e*t).fill(4),o=new eu(n,r,this.random);i.width=t,i.height=e,i.data=o.samples,this.sampler=o,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function Y0(s,e=Math.random){for(let t=s.length-1;t>0;t--){let n=~~((e()-1e-6)*t),i=s[t];s[t]=s[n],s[n]=i}}function Z0(s,e){s.fill(0);for(let t=0;t<e;t++)s[t]=1}var ca=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,n=1/0,i=-1;for(let r=0,o=t.length;r<o;r++){if(t[r]!==0)continue;let a=e[r];a<n&&(n=a,i=r)}return i}findCluster(){let{score:e,binaryPattern:t}=this,n=-1/0,i=-1;for(let r=0,o=t.length;r<o;r++){if(t[r]!==1)continue;let a=e[r];a>n&&(n=a,i=r)}return i}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),n=2*t+1,i=new Float32Array(n*n),r=e*e;for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){let c=(t+a)*n+o+t,l=o*o+a*a;i[c]=Math.E**(-l/(2*r))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let i=0,r=e.length;i<r;i++)if(e[i]===0){let o=~~(i/n),a=i-o*n;this.updateScore(a,o,1),e[i]=1}else e[i]=0}updateScore(e,t,n){let{size:i,score:r,lookupTable:o}=this,a=this.radius,c=2*a+1;for(let l=-a;l<=a;l++)for(let f=-a;f<=a;f++){let h=(a+f)*c+l+a,u=o[h],d=e+l;d=d<0?i+d:d%i;let x=t+f;x=x<0?i+x:x%i;let g=x*i+d;r[g]+=n*u}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}};var nu=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new ca(1),this.savedSamples=new ca(1)}generate(){let{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:i,size:r}=this;e.resize(r),e.setSigma(n);let o=Math.floor(r*r*i),a=e.binaryPattern;Z0(a,o),Y0(a,this.random);for(let h=0,u=a.length;h<u;h++)a[h]===1&&e.addPointIndex(h);for(;;){let h=e.findCluster();e.removePointIndex(h);let u=e.findVoid();if(h===u){e.addPointIndex(h);break}e.addPointIndex(u)}let c=new Uint32Array(r*r);t.copy(e);let l;for(l=e.count-1;l>=0;){let h=e.findCluster();e.removePointIndex(h),c[h]=l,l--}let f=r*r;for(l=t.count;l<f/2;){let h=t.findVoid();t.addPointIndex(h),c[h]=l,l++}for(t.invert();l<f;){let h=t.findCluster();t.removePointIndex(h),c[h]=l,l++}return{data:c,maxValue:f}}};function OM(s){return s>=3?4:s}function zM(s){switch(s){case 1:return Jn;case 2:return Yi;default:return Ne}}var iu=class extends ht{constructor(e=64,t=1){super(new Float32Array(4),1,1,Ne,Ve),this.minFilter=Le,this.magFilter=Le,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,n=new nu;n.channels=e,n.size=t;let i=OM(e),r=zM(i);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*i),this.format=r,this.dispose());let o=this.image.data;for(let a=0,c=e;a<c;a++){let l=n.generate(),f=l.data,h=l.maxValue;for(let u=0,d=f.length;u<d;u++){let x=f[u]/h;o[u*i+a]=x}}this.needsUpdate=!0}};var $0=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`;var K0=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`;var J0=`

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

`;var j0=`

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

`;var Q0=`

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

`;var ex=`

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
`;var tx=`

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

`;var nx=`

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


`;var ix=`

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

`;var sx=`

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

`;var rx=`

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

`;var ox=`

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

`;var su=`

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
`;var jf=`

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
`;var ax=`

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

`;var cx=`

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

`;var lx=`

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

`;var ux=`

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

`;var hx=`

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

`;var fx=`

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

`;var dx=`

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

`;var px=`

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

`;var mx=`

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

`;var xx=`

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

`;var gx=`

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
`;var vx=`

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

`;var _x=`

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

`;var ru=class extends rs{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:jl},uniforms:{resolution:{value:new Q},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new Wl},cameraWorldMatrix:{value:new he},invProjectionMatrix:{value:new he},bvh:{value:new Il},attributesArray:{value:new $l},materialIndexAttribute:{value:new kr},materials:{value:new Jl},textures:{value:new aa().texture},lights:{value:new Yl},iesProfiles:{value:new aa(360,180,{type:Ht,wrapS:Mt,wrapT:Mt}).texture},environmentIntensity:{value:1},environmentRotation:{value:new he},envMapInfo:{value:new ql},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new he},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new tu},stratifiedOffsetTexture:{value:new iu(64,1)}},vertexShader:`

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
				${Ns.common_functions}
				${Ns.bvh_struct_definitions}
				${Ns.bvh_ray_functions}

				// uniform structs
				${$0}
				${J0}
				${K0}
				${j0}
				${Q0}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${ax}

				#elif RANDOM_TYPE == 1 	// Sobol

					${jf}
					${Hl}
					${B0}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${jf}

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
				${ox}
				${ix}
				${su}
				${sx}
				${rx}

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
				${nx}
				${ex}
				${tx}

				${dx}
				${ux}
				${fx}
				${hx}
				${lx}
				${cx}

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

				${vx}
				${mx}
				${_x}
				${px}
				${xx}
				${gx}

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

			`}),this.setValues(e)}};function*VM(){let{_renderer:s,_fsQuad:e,_blendQuad:t,_primaryTarget:n,_blendTargets:i,_sobolTarget:r,_subframe:o,alpha:a,material:c}=this,l=new Ge,f=new Ge,h=t.material,[u,d]=i;for(;;){a?(h.opacity=this._opacityFactor/(this.samples+1),c.blending=Xt,c.opacity=1):(c.opacity=this._opacityFactor/(this.samples+1),c.blending=Zn);let[x,g,p,m]=o,v=n.width,_=n.height;c.resolution.set(v*p,_*m),c.sobolTexture=r.texture,c.stratifiedTexture.init(20,c.bounces+c.transmissiveBounces+5),c.stratifiedTexture.next(),c.seed++;let y=this.tiles.x||1,M=this.tiles.y||1,S=y*M,w=Math.ceil(v*p),C=Math.ceil(_*m),T=Math.floor(x*v),b=Math.floor(g*_),I=Math.ceil(w/y),P=Math.ceil(C/M);for(let L=0;L<M;L++)for(let U=0;U<y;U++){let z=s.getRenderTarget(),H=s.autoClear,ee=s.getScissorTest();s.getScissor(l),s.getViewport(f);let X=U,te=L;if(!this.stableTiles){let ve=this._currentTile%(y*M);X=ve%y,te=~~(ve/y),this._currentTile=ve+1}let ne=M-te-1;n.scissor.set(T+X*I,b+ne*P,Math.min(I,w-X*I),Math.min(P,C-ne*P)),n.viewport.set(T,b,w,C),s.setRenderTarget(n),s.setScissorTest(!0),s.autoClear=!1,e.render(s),s.setViewport(f),s.setScissor(l),s.setScissorTest(ee),s.setRenderTarget(z),s.autoClear=H,a&&(h.target1=u.texture,h.target2=n.texture,s.setRenderTarget(d),t.render(s),s.setRenderTarget(z)),this.samples+=1/S,U===y-1&&L===M-1&&(this.samples=Math.round(this.samples)),yield}[u,d]=[d,u]}}var yx=new _e,la=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new Q(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Ge(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Ln(new ru),this._blendQuad=new Ln(new zl),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new Gl().generate(e),this._primaryTarget=new Gt(1,1,{format:Ne,type:Ve,magFilter:Le,minFilter:Le}),this._blendTargets=[new Gt(1,1,{format:Ne,type:Ve,magFilter:Le,minFilter:Le}),new Gt(1,1,{format:Ne,type:Ve,magFilter:Le,minFilter:Le})],this._compileFunction=()=>{let t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let n=0;e.projectionMatrix.elements[15]>0&&(n=1),e.isEquirectCamera&&(n=2),t.setDefine("CAMERA_TYPE",n),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:n}=this,i=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(yx),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(yx,r),e.setRenderTarget(i),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=VM.call(this)),this._task.next())}};var ks=new Q,bx=new Q,ou=new Bo,au=new _e,cu=class extends ht{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,Ne,Ve,li,Vt,Mt,rt,rt),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:n}=this.image;for(let i=0;i<t;i++)for(let r=0;r<n;r++){bx.set(t,n),ks.set(i/t,r/n),ks.x-=.5,ks.y=1-ks.y,ou.theta=ks.x*2*Math.PI,ou.phi=ks.y*Math.PI,ou.radius=1,this.generationCallback(ou,ks,bx,au);let a=4*(r*t+i);e[a+0]=au.r,e[a+1]=au.g,e[a+2]=au.b,e[a+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}};var Sx=new R,lu=class extends cu{constructor(e=512){super(e,e),this.topColor=new _e().set(16777215),this.bottomColor=new _e().set(0),this.exponent=2,this.generationCallback=(t,n,i,r)=>{Sx.setFromSpherical(t);let o=Sx.y*.5+.5;r.lerpColors(this.bottomColor,this.topColor,o**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}};var uu=class extends Ft{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
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
			`}),this.setValues(e)}};var Qf=class extends Ft{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
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

				${su}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},ua=class{constructor(e){this._renderer=e,this._quad=new Ln(new Qf)}generate(e,t=null,n=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let i=e.images[0],r=this._renderer,o=this._quad;t===null&&(t=4*i.height),n===null&&(n=2*i.height);let a=new Gt(t,n,{type:Ve,colorSpace:i.colorSpace}),c=i.height,l=Math.log2(c)-2,f=1/c,h=1/(3*Math.max(Math.pow(2,l),112));o.material.defines.CUBEUV_MAX_MIP=`${l}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=h,o.material.defines.CUBEUV_TEXEL_HEIGHT=f,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let u=r.getRenderTarget(),d=r.autoClear;r.autoClear=!0,r.setRenderTarget(a),o.render(r),r.setRenderTarget(u),r.autoClear=d;let x=new Uint16Array(t*n*4),g=new Float32Array(t*n*4);r.readRenderTargetPixels(a,0,0,t,n,g),a.dispose();for(let m=0,v=g.length;m<v;m++)x[m]=hn.toHalfFloat(g[m]);let p=new ht(x,t,n,Ne,Ht);return p.minFilter=uh,p.magFilter=rt,p.wrapS=Vt,p.wrapT=Vt,p.mapping=li,p.needsUpdate=!0,p}dispose(){this._quad.dispose()}};function HM(s){return s.extensions.get("EXT_float_blend")}var qr=new Q,hu=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new Ol,this._pathTracer=new la(e),this._queueReset=!1,this._clock=new Uo,this._compilePromise=null,this._lowResPathTracer=new la(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new Ln(new uu({map:null,transparent:!0,blending:Xt,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Q(1024,1024),this.rasterizeSceneCallback=(t,n)=>{this._renderer.render(t,n)},this.renderToCanvasCallback=(t,n,i)=>{let r=n.autoClear;n.autoClear=!1,i.render(n),n.autoClear=r},this.setScene(new Vi,new Lt)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,n={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let i=this._generator;if(i.setObjects(e),this._buildAsync)return i.generateAsync(n.onProgress).then(r=>this._updateFromResults(e,t,r));{let r=i.generate();return this._updateFromResults(e,t,r)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,n=this._materials,i=this.textureSize,r=G0(n);e.textures.setTextures(t,r,i.x,i.y),e.materials.updateFrom(n,r),this.reset()}updateLights(){let e=this.scene,t=this._renderer,n=this._pathTracer.material,i=W0(e),r=H0(i);n.lights.updateFrom(i,r),n.iesProfiles.setTextures(t,r),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new lu(16);let n=this._colorBackground;n.topColor.equals(e.background)||(n.topColor.set(e.background),n.bottomColor.set(e.background),n.update()),t.backgroundMap=n,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let n=new ua(this._renderer).generate(e.background);this._internalBackground=n,t.backgroundMap=n,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment!==null?e.environmentIntensity??1:0,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){let n=new ua(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(n)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,n){let{materials:i,geometry:r,bvh:o,bvhChanged:a,needsMaterialIndexUpdate:c}=n;this._materials=i;let f=this._pathTracer.material;return a&&(f.bvh.updateFrom(o),f.attributesArray.updateFrom(r.attributes.normal,r.attributes.tangent,r.attributes.uv,r.attributes.color)),c&&f.materialIndexAttribute.updateFrom(r.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),n}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,n=this._renderer,i=this._clock,r=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,r.material.opacity=0,i.start());let o=i.getDelta()*1e3,a=i.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=a&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!HM(n),e.alpha=t.alpha,this.renderToCanvas){let c=this._renderer,l=this.minSamples;if(a>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?r.material.opacity=Math.min(r.material.opacity+o/this.fadeDuration,1):r.material.opacity=1),!this.enablePathTracing||this.samples<l||r.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let f=r.material.opacity;r.material.opacity=1-r.material.opacity,r.material.map=e.target.texture,r.render(c),r.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&r.material.opacity>0&&(r.material.opacity<1&&(r.material.blending=this.dynamicLowRes?Oo:Zn),r.material.map=t.target.texture,this.renderToCanvasCallback(t.target,c,r),r.material.blending=Xt)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(qr);let e=Math.floor(this.renderScale*qr.x),t=Math.floor(this.renderScale*qr.y);if(this._pathTracer.getSize(qr),qr.x!==e||qr.y!==t){let n=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*n),Math.floor(t*n))}}}};var fu=class extends Ms{constructor(...e){super(...e),this.iesMap=null,this.radius=0}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this.radius=e.radius,this}};var du=class extends Fo{constructor(...e){super(...e),this.isCircular=!1}copy(e,t){return super.copy(e,t),this.isCircular=e.isCircular,this}};var Zr=s=>new R(s.x,s.y,s.z),Mx=new Wi(1,28,20);function kn(s,e,t,n){let i=new ze(Mx,e);return i.position.set(...t),i.scale.set(...n),s.add(i),i}function Mn(s,e=.55,t=0){return new Jt({color:s,roughness:e,metalness:t,ior:1.43})}function ed(s,e,t,n=.004){let i=new ys(t.map(o=>new R(...o))),r=new ze(new Ro(i,24,n,7,!1),e);return s.add(r),r}function GM(s,e,t,n,i,r){let o=[],a=[];for(let h=0;h<=12;h++)for(let u=0;u<=32;u++){let d=u/32*2-1,x=h/12*2-1,g=Math.sqrt(Math.max(0,1-d*d));if(o.push(t+d*i,n+x*r*g*(x<0?.72:1),.07+.009*(1-d*d)*(1-x*x)),u<32&&h<12){let p=h*33+u;a.push(p,p+1,p+32+1,p+1,p+32+2,p+32+1)}}let f=new et;f.setAttribute("position",new st(o,3)),f.setIndex(a),f.computeVertexNormals(),s.add(new ze(f,e))}function os(s,e,t,n,i,r){let o=Zr(t),a=Zr(n),c=a.clone().sub(o),l=new ze(new ii(r,i,c.length(),20,1),e);return l.position.copy(o).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new R(0,1,0),c.normalize()),s.add(l),l}var fi=(s,e,t,n,i,r)=>Math.exp(-(((s-t)/i)**2+((e-n)/r)**2));function WM(s){let e=new Wi(1,112,80),t=e.attributes.position,n=s==="cute",i=s==="elegant",r=n?.099:i?.087:.092,o=i?.15:.142;for(let a=0;a<t.count;a++){let c=t.getX(a),l=t.getY(a),f=t.getZ(a),h=l*o,u=1-(i?.3:.22)*Math.max(0,-l),d=c*r*u,x=f*(n?.086:.083);if(f>0){let g=Math.min(1,f*4),p=(n?.018:.012)*(fi(d,h,-.045,-.026,.028,.035)+fi(d,h,.045,-.026,.028,.035)),m=-.016*(fi(d,h,-.038,.023,.025,.016)+fi(d,h,.038,.023,.025,.016)),v=(i?.026:.019)*fi(d,h,0,.013,.014,.047)+.024*fi(d,h,0,-.021,.018,.015),_=.009*(fi(d,h,-.038,.046,.035,.01)+fi(d,h,.038,.046,.035,.01)),y=.01*fi(d,h,0,-.066,.027,.017)-.004*fi(d,h,0,-.085,.03,.009);x+=(p+m+v+_+y)*g}t.setXYZ(a,d,h,x)}return e.computeVertexNormals(),e.computeBoundingBox(),e}function Yr(s,e,t,n,i){let r=new ys(t.map(h=>new R(...h))),o=r.computeFrenetFrames(28,!1),a=[],c=[];for(let h=0;h<=28;h++){let u=h/28,d=r.getPointAt(u),x=.035+.965*Math.pow(1-u,.42);for(let g=0;g<=8;g++){let p=g/8*Math.PI*2,m=d.clone().addScaledVector(o.normals[h],Math.cos(p)*n*x).addScaledVector(o.binormals[h],Math.sin(p)*i*x);if(a.push(m.x,m.y,m.z),h<28&&g<8){let v=h*9+g;c.push(v,v+1,v+9,v+1,v+10,v+9)}}}let l=new et;l.setAttribute("position",new st(a,3)),l.setIndex(c),l.computeVertexNormals();let f=new ze(l,e);s.add(f)}function XM(s,e,t){if(e==="none")return;let n=[],i=[],r=72,o=32;for(let c=0;c<=o;c++)for(let l=0;l<=r;l++){let f=l/r*Math.PI*2,h=Math.max(0,Math.cos(f)),u=2.25-1.23*h**2,d=.001+c/o*u;if(n.push(.108*Math.sin(d)*Math.sin(f),.155*Math.cos(d),.098*Math.sin(d)*Math.cos(f)-.01),c<o&&l<r){let x=c*(r+1)+l;i.push(x,x+r+1,x+1,x+1,x+r+1,x+r+2)}}let a=new et;a.setAttribute("position",new st(n,3)),a.setIndex(i),a.computeVertexNormals(),s.add(new ze(a,t));for(let c=-3;c<=3;c++){let l=c*.025,f=e==="short"?.05+Math.abs(c)*.008:e==="side"?.055-c*.013:.04-Math.abs(c)*.006;Yr(s,t,[[l*.65,.128,.047],[l,.094,.087],[l+(e==="side"?.027:0),f,.092]],.022,.009)}for(let c of[-1,1]){let l=e==="bob"?-.16:e==="long"?-.4:e==="short"?-.065:-.22;for(let f=0;f<3;f++)Yr(s,t,[[c*(.076+f*.008),.09,.044-f*.021],[c*(.108+f*.008),-.018,.044-f*.018],[c*(.1+f*.009),l+f*.009,.04-f*.018]],.017,.012)}if(["long","bob"].includes(e))for(let c=-5;c<=5;c++){let l=c*.018;Yr(s,t,[[l,.075,-.081],[l*1.12,-.1,-.095],[l*1.16,e==="long"?-.47:-.18,-.07]],.023,.014)}if(["twin","ponytail","side"].includes(e)){let c=e==="twin"?[-1,1]:e==="side"?[1]:[0];for(let l of c){let f=[l*.098,.087,l===0?-.103:-.025];for(let h=-2;h<=2;h++)Yr(s,t,[f,[l*.17+h*.008,.015,-.1],[l*.21+h*.01,-.25,-.075],[l*.17+h*.011,-.47,0]],.029,.018)}}if(e==="buns")for(let c of[-1,1])kn(s,t,[c*.106,.096,-.028],[.045,.048,.04]),Yr(s,t,[[c*.11,.04,-.025],[c*.135,-.1,-.012],[c*.11,-.23,.015]],.022,.012);if(e==="short")for(let c=0;c<12;c++){let l=c/12*Math.PI*2;Yr(s,t,[[Math.sin(l)*.06,.12,Math.cos(l)*.04],[Math.sin(l)*.105,.085,Math.cos(l)*.087],[Math.sin(l)*.127,.02,Math.cos(l)*.102]],.02,.012)}}function Tx(s,e=null){let t=new kt,n=new kt,i=new kt,r=ld(s);t.name="Original adult character",t.add(n,i),t.rotation.y=s.bodyYaw*Math.PI/180,i.position.copy(Zr(r.joints.head)),i.rotation.set(s.pitch*Math.PI/180,s.yaw*Math.PI/180,0,"YXZ");let o=s.material!=="skin",a=Mn(o?s.material==="gray"?7763574:12567490:15186083,s.roughness);a.color.multiplyScalar(s.skinTone);let l=Mn({ink:2434869,silver:13489635,pink:14324149,blue:7908557,violet:8876213,blonde:12886899,red:9583443}[s.hairColor],.35),f=Mn(o?11052195:12020859,.5),h=Mn(3417905,.75),u=Mn(14605275,.28),d=Mn(s.character==="elegant"?8482976:6524061,.25),x=Mn(1184794,.14);if(s.character==="scan"&&e)i.add(new ze(e,a));else{i.add(new ze(WM(s.character),a));for(let g of[-1,1]){let p=g*.038,m=.022,v=s.character==="cute"?.026:.024,_=s.character==="elegant"?.01:.013;kn(i,a,[g*.092,-.009,0],[.018,.031,.017]),GM(i,u,p,m,v,_),kn(i,d,[p,m,.08],[.0095,_*.86,.0015]),kn(i,x,[p,m,.0815],[.0043,_*.58,8e-4]);for(let y of[1,-1]){let M=[];for(let S=0;S<=12;S++){let w=Math.PI*S/12;M.push([p+Math.cos(w)*v,m+Math.sin(w)*_*y*(y<0?.72:1),.0705])}ed(i,y===1?h:a,M,y===1?.0013:.0015)}ed(i,h,[[p-g*.019,.051,.08],[p,.056,.081],[p+g*.023,.05,.071]],.0026)}ed(i,f,[[-.021,-.067,.075],[-.009,-.065,.085],[0,-.066,.087],[.009,-.065,.085],[.021,-.067,.075]],.0015),kn(i,f,[0,-.069,.084],[.017,.0035,.003])}if(XM(i,s.hair,l),n.visible=s.body,s.body){let g=s.pose.rootY,p=Mn(s.clothing==="suit"?3356486:s.clothing==="dress"?10586296:14014940,.78),m=Mn(2634570,.72),v=Mn(10637933,.7),_=Mn(2368812,.4),y=[[.135,g-.1],[.151,g+.025],[.124,g+.14],[.155,g+.32],[.175,g+.4],[.14,g+.44],[.07,g+.46]].map(([S,w])=>new Q(S,w)),M=new ze(new Eo(y,48),p);M.scale.z=.62,n.add(M),os(n,a,{x:0,y:g+.43,z:0},{x:0,y:g+.62,z:0},.055,.043);for(let S of Object.keys(r.limbs)){let w=r.limbs[S],C=S.endsWith("Hand"),T=C?.048:.076,b=C?.037:.054,I=C?.024:.029;if(os(n,C?p:a,w.start,w.mid,T,b),os(n,a,w.mid,w.end,b,I),kn(n,a,Object.values(w.mid),[b,b,b]),C){let P=Zr(w.end).sub(Zr(w.mid)).normalize(),L=new kt;L.position.copy(Zr(w.end)),L.quaternion.setFromUnitVectors(new R(0,-1,0),P),n.add(L),kn(L,a,[0,-.038,0],[.032,.045,.017]);for(let z=0;z<4;z++)kn(L,a,[(z-1.5)*.014,-.08+(z===0||z===3?.008:0),0],[.007,.024,.007]);let U=kn(L,a,[.038,-.041,.008],[.01,.023,.01]);U.rotation.z=.6}else kn(n,_,[w.end.x,w.end.y-.025,w.end.z+.055],[.054,.055,.108])}if(s.clothing!=="suit"){let S=new ii(.147,s.clothing==="dress"?.255:.225,s.clothing==="dress"?.36:.25,64,8,!1),w=S.attributes.position;for(let T=0;T<w.count;T++){let b=Math.atan2(w.getZ(T),w.getX(T)),I=1+.025*Math.cos(b*18);w.setX(T,w.getX(T)*I),w.setZ(T,w.getZ(T)*I*.8)}S.computeVertexNormals();let C=new ze(S,s.clothing==="dress"?p:m);C.position.y=g-.065,n.add(C);for(let T of[-1,1]){let b=new ze(new In(.065,.12,.018),m);b.position.set(T*.051,g+.371,.105),b.rotation.z=T*-.4,n.add(b)}kn(n,v,[0,g+.31,.119],[.022,.03,.016]);for(let T of[-1,1]){let b=kn(n,v,[T*.035,g+.31,.119],[.039,.022,.012]);b.rotation.z=T*.2}}else for(let S of["leftFoot","rightFoot"]){let w=r.limbs[S];os(n,p,w.start,w.mid,.083,.059),os(n,p,w.mid,w.end,.059,.038)}}return t.userData={rig:r,head:i,skin:a,scan:s.character==="scan"},t}function wx(s){let e=new kt;e.name="Studio prop",e.position.set(s.x,0,s.z),e.rotation.y=s.yaw*Math.PI/180;let t=Mn(10791602,.32,.75),n=Mn(2895929,.8),i=Mn(10385746,.65);function r(o,a,c){let l=new ze(new In(...o),c);l.position.set(...a),e.add(l)}if(s.type==="ladder"){for(let o of[-1,1])for(let a of[-1,1])os(e,t,{x:o*.25,y:.025,z:a*.34},{x:o*.2,y:.75,z:0},.019,.019);for(let o=1;o<=3;o++){let a=o*.24,c=.31*(1-o/3);r([.43,.035,.22],[0,a-.0175,c],t),r([.4,.006,.205],[0,a+.003,c],n)}for(let o of[-1,1])os(e,t,{x:o*.235,y:.26,z:-.23},{x:o*.235,y:.26,z:.23},.012,.012);for(let o of[-1,1])for(let a of[-1,1])r([.065,.03,.075],[o*.25,.015,a*.34],n)}else if(s.type==="stool"){let o=new ze(new ii(.2,.2,.05,48),i);o.position.y=.505,e.add(o);for(let a of[-1,1])for(let c of[-1,1])os(e,t,{x:a*.15,y:.02,z:c*.15},{x:a*.11,y:.48,z:c*.11},.018,.018)}else s.type==="cube"&&r([.5,.5,.5],[0,.25,0],i);return e}function td(s,e=[]){if(!s)return;let t=new Set,n=new Set;s.traverse(i=>{i.geometry&&!e.includes(i.geometry)&&i.geometry!==Mx&&t.add(i.geometry),i.material&&n.add(i.material)}),t.forEach(i=>i.dispose()),n.forEach(i=>i.dispose()),s.removeFromParent()}function Ax(s,e,t){let n=pd(t),i=md(t),r=gd(xd(i,n)),o=hd(t.kelvin,t.tint),a=t.type==="fresnel";s.position.set(n.x,n.y,n.z),s.lookAt(i.x,i.y,i.z),s.rotateZ(t.roll*Hs),s.color.setRGB(...o,wt),s.intensity=a?0:dd(t),s.width=t.width,s.height=t.height,s.isCircular=t.shape==="disk",e.angle=t.beam*Hs/2,e.penumbra=t.edge,e.radius=t.aperture/2;let c=e.radius/Math.tan(e.angle);e.position.set(n.x-r.x*c,n.y-r.y*c,n.z-r.z*c),e.target.position.set(i.x,i.y,i.z),e.target.updateMatrixWorld(!0),e.color.setRGB(...o,wt),e.intensity=a?vd(t):0,e.decay=2,e.distance=0}function Ex(s){let e=s.geometry.clone();if(!e.attributes.position?.count)throw new Error("\u626B\u63CF\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u9876\u70B9");for(let[o,a]of Object.entries(e.attributes)){if(!a.isInterleavedBufferAttribute)continue;let c=new a.data.array.constructor(a.count*a.itemSize);for(let l=0;l<a.count;l++)for(let f=0;f<a.itemSize;f++)c[l*a.itemSize+f]=a.data.array[l*a.data.stride+a.offset+f];e.setAttribute(o,new He(c,a.itemSize,a.normalized))}e.applyMatrix4(s.matrixWorld),e.computeBoundingBox();let t=e.boundingBox,n=new R;t.getCenter(n);let i=t.max.y-t.min.y;if(!Number.isFinite(i)||i<=0)throw new Error("\u626B\u63CF\u9AD8\u5EA6\u65E0\u6548");let r=.32/i;return e.translate(-n.x,-n.y,-n.z),e.scale(r,r,r),e.computeVertexNormals(),e.computeBoundingBox(),e}var qM=new URL("../models/LeePerrySmith/",import.meta.url),Tn=s=>new _e().setRGB(s,s,s,wt),YM="varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",ZM=`
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
  if(mode==1 && max(max(raw.r,raw.g),raw.b)>=1.) {
    float stripe=step(.5,fract((gl_FragCoord.x+gl_FragCoord.y)/12.));
    outColor=mix(outColor,mix(vec3(.9,.18,.35),vec3(.15,.04,.1),stripe),.85);
  }
  if(mode==2)outColor=falseColor(dot(raw,vec3(.2126,.7152,.0722)));
  gl_FragColor=vec4(outColor,1.);
}`;async function Ix(s,e){let t=await fetch(new URL(s,qM),{signal:AbortSignal.timeout(15e3)});if(!t.ok)throw new Error(`\u672C\u5730\u7D20\u6750 ${s} \u7F3A\u5931\uFF08${t.status}\uFF09\u3002\u8BF7\u8FD0\u884C npm run assets\uFF0C\u7136\u540E\u91CD\u65B0\u542F\u52A8\u3002`);let n=await t.arrayBuffer();return e?.(s),n}async function Rx(s,e=!1){let t=await Ix(s),n=new Blob([t],{type:"image/jpeg"}),i=URL.createObjectURL(n);try{let r=await new bs().loadAsync(i);return r.colorSpace=e?Ot:jn,r.flipY=!1,r}finally{URL.revokeObjectURL(i)}}var Cx=class{constructor(e,t={}){this.container=e,this.callbacks=t,this.paused=!1,this.ready=!1,this.disposed=!1,this.frame=0,this.started=performance.now(),this.lastStats=0,this.dirty=!0,this.renderer=new el({antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});let n=this.renderer.getContext();if(typeof WebGL2RenderingContext>"u"||!(n instanceof WebGL2RenderingContext)||!n.getExtension("EXT_color_buffer_float"))throw new Error("\u8FD9\u53F0\u8BBE\u5907\u6CA1\u6709\u53EF\u7528\u7684 WebGL 2 \u6D6E\u70B9\u6E32\u67D3\u3002\u8BF7\u5728\u684C\u9762\u7248 Chrome / Edge \u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002");this.renderer.debug.onShaderError=()=>{this.shaderError=new Error("\u8FD9\u53F0\u8BBE\u5907\u672A\u80FD\u7F16\u8BD1\u8DEF\u5F84\u8FFD\u8E2A\u7740\u8272\u5668\u3002\u8BF7\u66F4\u65B0\u663E\u5361\u9A71\u52A8\uFF0C\u5728\u684C\u9762 Chrome / Edge \u4E2D\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002")},this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.renderer.toneMapping=Pn,this.renderer.outputColorSpace=wt,this.renderer.domElement.setAttribute("aria-label","\u9010\u6B65\u6536\u655B\u7684\u7269\u7406\u8DEF\u5F84\u8FFD\u8E2A\u4EBA\u50CF"),e.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.paused=!0,t.error?.(new Error("\u663E\u5361\u4E0A\u4E0B\u6587\u4E2D\u65AD\u3002\u8BF7\u4FDD\u5B58\u65B9\u6848\uFF0C\u518D\u5237\u65B0\u9875\u9762\uFF1B\u4E5F\u53EF\u4EE5\u964D\u4F4E\u753B\u8D28\u540E\u91CD\u8BD5\u3002"))}),this.scene=new Vi,this.scene.background=new _e(0),this.scene.environment=null,this.envTexture=new ht(new Float32Array([1,1,1,1,1,1,1,1]),2,1,Ne,Ve),this.envTexture.mapping=li,this.envTexture.needsUpdate=!0,this.camera=new Gr(35,2/3,.03,30),this.camera.position.set(0,Pi.y,1.65),this.camera.lookAt(0,Pi.y,0),this.pt=new hu(this.renderer),this.pt.renderToCanvas=!1,this.pt.rasterizeScene=!1,this.pt.dynamicLowRes=!1,this.pt.minSamples=1,this.pt.renderDelay=60,this.pt.fadeDuration=0,this.pt.tiles.set(2,2),this.pt.textureSize.set(512,512),this.pt.filterGlossyFactor=.2,this.screenScene=new Vi,this.screenCamera=new vs,this.screenMaterial=new Ft({vertexShader:YM,fragmentShader:ZM,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{source:{value:null},wb:{value:new R(1,1,1)},expGain:{value:.045},mode:{value:0},imageSize:{value:new Q(1,1)}}}),this.screenScene.add(new ze(new Gi(2,2),this.screenMaterial)),this.lights=["key","rim","top"].map(()=>{let i=new du(16777215,1,1,1);return this.scene.add(i),i}),this.spots=["key","rim","top"].map(()=>{let i=new fu;return i.decay=2,i.distance=0,this.scene.add(i,i.target),i}),this.buildRoom(),this.buildObjects(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e)}buildRoom(){this.wallMat=new on({color:Tn(.025),roughness:1}),this.floorMat=new on({color:Tn(.035),roughness:.95});let e=(t,n,i,r,o=this.wallMat)=>{let a=new ze(new Gi(t,n),o);return a.position.set(...i),a.rotation.set(...r),this.scene.add(a),a};e(8,6,[0,3,-2.6],[0,0,0]),e(8,8,[0,0,0],[-Math.PI/2,0,0],this.floorMat),e(8,6,[-4,3,0],[0,Math.PI/2,0]),e(8,6,[4,3,0],[0,-Math.PI/2,0]),e(8,8,[0,4.5,0],[Math.PI/2,0,0]),this.boardMat=new on({color:Tn(.8),roughness:.95,side:jt}),this.board=new ze(new In(.025,1.1,.8),this.boardMat),this.board.visible=!1,this.scene.add(this.board),this.board2Mat=this.boardMat.clone(),this.board2=new ze(new In(.025,1,1),this.board2Mat),this.board2.visible=!1,this.scene.add(this.board2)}buildObjects(){this.pivot=new kt,this.pivot.position.set(Pi.x,Pi.y,Pi.z),this.scene.add(this.pivot),this.headMat=new Jt({color:Tn(.55),roughness:.42,metalness:0,ior:1.42,specularIntensity:1}),this.head=null,this.skinMap=null,this.normalMap=null,this.references=new kt,this.scene.add(this.references),this.references.visible=!1,[new on({color:Tn(.18),roughness:1}),new on({color:Tn(.85),roughness:.35}),new on({color:Tn(.8),roughness:.14,metalness:1})].forEach((r,o)=>{let a=new ze(new Wi(.105,48,32),r);a.position.set((o-1)*.245,Pi.y,0),this.references.add(a)});let t=new ze(new In(.86,.03,.55),new on({color:Tn(.18),roughness:1}));t.position.set(0,Pi.y-.12,0),this.references.add(t);let n=new on({color:Tn(.035),roughness:.7});this.stand=new ze(new ii(.075,.105,.25,48),n),this.stand.position.set(0,-.235,-.018),this.pivot.add(this.stand);let i=new ze(new ii(.15,.15,.025,64),n);i.position.set(0,-.37,-.018),this.pivot.add(i)}async init(e){this.state=e,this.callbacks.progress?.("\u6B63\u5728\u52A0\u8F7D\u4EBA\u8138\u626B\u63CF \xB7 \u7EA6 0.4 MB");let t=null;try{let n=await Ix("LeePerrySmith.glb"),i=await new sl().parseAsync(n,""),r;if(i.scene.updateMatrixWorld(!0),i.scene.traverse(a=>{a.isMesh&&!r&&(r=a)}),!r)throw new Error("\u626B\u63CF\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u4EBA\u8138\u7F51\u683C");let o=Ex(r);this.head=new ze(o,this.headMat),this.pivot.add(this.head),this.callbacks.asset?.({scan:!0,textures:!1,triangles:Math.round((o.index?.count||o.attributes.position.count)/3)})}catch(n){t=n,e.model.character==="scan"&&(e.model.character="cute"),this.callbacks.asset?.({scan:!1,textures:!1,error:n.message})}this.callbacks.progress?.("\u6B63\u5728\u51C6\u5907\u5149\u7EBF\u8FFD\u8E2A \xB7 \u9996\u6B21\u7740\u8272\u5668\u7F16\u8BD1\u7A0D\u6162"),this.apply(e,"scene"),this.ready=!0,this.resize(),this.pt.updateCamera(),this.pt.reset(),this.animate(),t?this.callbacks.notice?.("\u672C\u5730\u4EBA\u8138\u626B\u63CF\u672A\u80FD\u52A0\u8F7D\uFF0C\u5DF2\u4FDD\u7559\u539F\u521B\u89D2\u8272\u4F9B\u7EC3\u4E60\u3002\u8BF7\u68C0\u67E5\u7D20\u6750\u6587\u4EF6\u540E\u91CD\u8BD5\u3002"):this.loadSkinTextures()}async loadSkinTextures(){let e=await Promise.allSettled([Rx("Map-COL.jpg",!0),Rx("Infinite-Level_02_Tangent_SmoothUV.jpg")]);if(this.disposed){e.forEach(t=>t.status==="fulfilled"&&t.value.dispose());return}this.skinMap=e[0].status==="fulfilled"?e[0].value:null,this.normalMap=e[1].status==="fulfilled"?e[1].value:null,this.callbacks.asset?.({scan:!!this.head,textures:!!this.skinMap,partial:!this.normalMap}),this.state.model.material==="skin"&&this.apply(this.state,"materials")}apply(e,t="lights"){this.state=e;let{camera:n,model:i,room:r,render:o}=e;if(t==="display"){this.updateDisplay(),this.dirty=!0;return}let a=ud(i);bd(e).forEach((x,g)=>Ax(this.lights[g],this.spots[g],x));let c=JSON.stringify(i),l=!1;(this.characterSignature!==c||!this.character)&&(td(this.character,[this.head?.geometry]),this.character=Tx(i,this.head?.geometry),this.scene.add(this.character),this.characterSignature=c,l=!0);let f=JSON.stringify(e.prop);f!==this.propSignature&&(td(this.prop),this.prop=wx(e.prop),this.scene.add(this.prop),this.propSignature=f,l=!0),this.pivot.visible=!1,this.references.visible=i.object==="spheres",this.character.visible=!this.references.visible;let h=this.character.userData.skin,u=i.character==="scan"&&i.material==="skin"&&this.skinMap;h.map=u?this.skinMap:null,h.normalMap=u?this.normalMap:null,u&&h.color.copy(Tn(i.skinTone)),h.normalScale.set(.65,.65),h.needsUpdate=!0,this.wallMat.color.copy(Tn(r.reflectance)),this.floorMat.color.copy(Tn(r.floor)),this.scene.background.setRGB(r.background,r.background,r.background,wt),this.scene.backgroundIntensity=1,this.scene.environment=r.background>0?this.envTexture:null,this.scene.environmentIntensity=r.background,this.board.visible=r.board!=="off",this.boardMat.color.copy(Tn(r.board==="black"?.008:r.board==="silver"?.88:.8)),this.boardMat.metalness=r.board==="silver"?1:0,this.boardMat.roughness=r.board==="silver"?.23:.95,this.board.rotation.set(0,0,0),this.board.scale.set(1,r.boardSize/1.1,r.boardWidth/.8),r.board==="below"?(this.board.position.set(0,a.y-.4,.18),this.board.rotation.set(0,0,Math.PI/2),this.board.rotateY(-.18)):(this.board.position.set(r.boardSide*r.boardDistance,r.boardHeight,.1),this.board.rotation.y=r.boardSide*r.boardAngle*Hs),this.board2.visible=r.board2!=="off",this.board2Mat.color.copy(Tn(r.board2==="black"?.008:r.board2==="silver"?.88:.8)),this.board2Mat.metalness=r.board2==="silver"?1:0,this.board2Mat.roughness=r.board2==="silver"?.23:.95,this.board2.position.set(-r.boardSide*r.board2Distance,r.board2Height,.1),this.board2.rotation.y=-r.boardSide*r.board2Angle*Hs,this.board2.scale.set(1,r.board2Size,r.board2Width),this.camera.position.set(0,n.heightY,n.distance),this.camera.lookAt(0,n.targetY,0);let d=yd.find(x=>x.id===n.body);this.camera.filmGauge=d?d.sensor:36,this.camera.setFocalLength(n.focal),this.camera.focusDistance=n.dof?n.focus:n.distance,n.dof?this.camera.fStop=n.aperture:this.camera.bokehSize=0,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),this.pt.bounces=o.bounces,this.scene.updateMatrixWorld(!0),t==="scene"||t==="geometry"||l?this.pt.setScene(this.scene,this.camera):t==="camera"?this.pt.updateCamera():t==="materials"?(this.pt.updateMaterials(),this.pt.updateEnvironment()):this.pt.updateLights(),this.pt.reset(),this.started=performance.now(),this.dirty=!0,this.updateDisplay(),this.quality!==o.quality&&(this.quality=o.quality,this.resize())}updateDisplay(){let e=this.state.camera;this.screenMaterial.uniforms.wb.value.set(...fd(e.wb,e.tint)),this.screenMaterial.uniforms.expGain.value=_d(e),this.screenMaterial.uniforms.mode.value={beauty:0,clip:1,falsecolor:2}[this.state.render.diagnostic]||0}resize(){if(!this.state)return;let e=this.container.getBoundingClientRect();if(e.width<1||e.height<1)return;let t={draft:.55,balanced:.9,fine:1.5}[this.state.render.quality],n={draft:480,balanced:900,fine:1600}[this.state.render.quality],i=Math.min(t,n/Math.max(e.width,e.height)),r=Math.max(128,Math.round(e.width*i)),o=Math.max(128,Math.round(e.height*i)),a=this.renderer.getSize(new Q);a.x===r&&a.y===o||(this.renderer.setSize(r,o,!1),this.camera.aspect=r/o,this.camera.setFocalLength(this.state.camera.focal),this.camera.updateProjectionMatrix(),this.ready&&(this.pt.updateCamera(),this.pt.reset()),this.dirty=!0,this.callbacks.resolution?.({width:r,height:o}))}animate(){if(!this.disposed&&(this.frame=requestAnimationFrame(()=>this.animate()),!(document.hidden||!this.ready)))try{if(!this.paused&&this.pt.samples<this.state.render.maxSamples){if(this.pt.renderSample(),this.shaderError)throw this.shaderError;this.dirty=!0}this.dirty&&this.pt.target&&(this.screenMaterial.uniforms.source.value=this.pt.target.texture,this.renderer.setRenderTarget(null),this.renderer.render(this.screenScene,this.screenCamera),this.dirty=!1);let t=performance.now();t-this.lastStats>400&&(this.callbacks.stats?.({samples:Math.floor(this.pt.samples),elapsed:(t-this.started)/1e3,paused:this.paused,complete:this.pt.samples>=this.state.render.maxSamples}),this.lastStats=t)}catch(e){this.paused=!0,this.ready=!1,this.callbacks.error?.(e)}}setPaused(e){this.paused=e}reset(){this.pt.reset(),this.started=performance.now(),this.paused=!1,this.dirty=!0}async capture(){if(!this.ready||this.pt.samples<1)throw new Error("\u8BF7\u7B49\u753B\u9762\u81F3\u5C11\u5B8C\u6210\u4E00\u6B21\u91C7\u6837");return new Promise((e,t)=>this.renderer.domElement.toBlob(n=>n?e(n):t(new Error("\u65E0\u6CD5\u5BFC\u51FA\u753B\u9762")),"image/png"))}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.pt.dispose();let e=new Set,t=new Set,n=new Set([this.skinMap,this.normalMap,this.envTexture]);for(let i of[this.scene,this.screenScene])i.traverse(r=>{r.geometry&&e.add(r.geometry),r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(o=>t.add(o))});e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose()),n.forEach(i=>i?.dispose()),this.renderer.dispose(),this.renderer.domElement.remove()}};export{Cx as StudioRenderer};
/*! For license information please see renderer-IUSY6GLP.js.LEGAL.txt */

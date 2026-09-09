/* Scene units: metres; linear Rec.709 RGB. No flash Ws calibration is implied. */
export const FACE = Object.freeze({ x: 0, y: 1.62, z: 0 });
export const DEG = Math.PI / 180;
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const luminance = rgb => rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
export const normalizeY = rgb => { const y = luminance(rgb); return rgb.map(v => Math.max(0, v) / Math.max(y, 1e-8)); };
export const srgbToLinear = v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
export const linearToSrgb = v => v <= .0031308 ? v * 12.92 : 1.055 * Math.max(v, 0) ** (1 / 2.4) - .055;

// Planckian locus in CIE xy (1667–25000 K approximation); tint is a small
// displacement in CIE 1960 uv perpendicular to the local locus. Positive = magenta.
function planckXY(kelvin) {
  const t = clamp(kelvin, 1800, 12000);
  const x = t <= 4000
    ? -.2661239e9 / t ** 3 - .2343589e6 / t ** 2 + .8776956e3 / t + .179910
    : -3.0258469e9 / t ** 3 + 2.1070379e6 / t ** 2 + .2226347e3 / t + .240390;
  const y = t <= 2222
    ? -1.1063814 * x ** 3 - 1.34811020 * x ** 2 + 2.18555832 * x - .20219683
    : t <= 4000
      ? -.9549476 * x ** 3 - 1.37418593 * x ** 2 + 2.09137015 * x - .16748867
      : 3.0817580 * x ** 3 - 5.8733867 * x ** 2 + 3.75112997 * x - .37001483;
  return [x, y];
}
const xyUV = ([x,y]) => { const d = -2*x + 12*y + 3; return [4*x/d,6*y/d]; };
export function cctToLinear(kelvin, tint = 0) {
  let [u,v] = xyUV(planckXY(kelvin));
  const lo = xyUV(planckXY(kelvin - 10)), hi = xyUV(planckXY(kelvin + 10));
  let nx = -(hi[1] - lo[1]), ny = hi[0] - lo[0];
  const len = Math.hypot(nx, ny) || 1;
  nx /= len; ny /= len;
  // The green side of the Planckian locus has positive v.
  if (ny < 0) { nx = -nx; ny = -ny; }
  const d = clamp(tint, -100, 100) * -.0001;
  u += d * nx; v += d * ny;
  const den = 2*u - 8*v + 4;
  const x = 3*u/den, y = 2*v/den;
  const X = x / y, Z = (1-x-y)/y;
  return normalizeY([
    3.2404542*X - 1.5371385 - .4985314*Z,
    -.969266*X + 1.8760108 + .041556*Z,
    .0556434*X - .2040259 + 1.0572252*Z
  ].map(v => Math.max(v, .0001)));
}
export function whiteBalanceGains(kelvin, tint = 0) {
  const ref = cctToLinear(kelvin, tint);
  return ref.map(v => 1 / Math.max(v, .03));
}
export function displayLightColor(kelvin, tint = 0) {
  const c = cctToLinear(kelvin, tint), m = Math.max(...c, 1);
  return `rgb(${c.map(v=>Math.round(clamp(linearToSrgb(v/m),0,1)*255)).join(' ')})`;
}
export function area(light) {
  return light.width * light.height * (light.shape === 'disk' ? Math.PI/4 : 1);
}
// Φ is the hemispherical flux of a uniform one-sided Lambertian emitter.
// L = Φ / (π A). A fixed EV means fixed total flux across modifier sizes.
export const flux = light => light.enabled ? 1000 * 2 ** light.power : 0;
export const radiance = light => flux(light) / (Math.PI * Math.max(.0001, area(light)));
export function position(light) {
  const a = light.azimuth * DEG;
  return { x: Math.sin(a) * light.distance, y: light.heightY, z: Math.cos(a) * light.distance };
}
export function aim(light) { return { x: light.aimX, y: FACE.y + light.aimY, z: light.aimZ }; }
export const sub = (a,b) => ({x:a.x-b.x,y:a.y-b.y,z:a.z-b.z});
export const add = (a,b) => ({x:a.x+b.x,y:a.y+b.y,z:a.z+b.z});
export const mul = (a,s) => ({x:a.x*s,y:a.y*s,z:a.z*s});
export const dot = (a,b) => a.x*b.x+a.y*b.y+a.z*b.z;
export const cross = (a,b) => ({x:a.y*b.z-a.z*b.y,y:a.z*b.x-a.x*b.z,z:a.x*b.y-a.y*b.x});
export const length = a => Math.hypot(a.x,a.y,a.z);
export const unit = a => mul(a,1/(length(a)||1));
export function emitterBasis(light) {
  const p=position(light), n=unit(sub(aim(light),p));
  let x=unit(cross(n, Math.abs(n.y)>.999 ? {x:0,y:0,z:1} : {x:0,y:1,z:0}));
  let y=unit(cross(x,n));
  const a=light.roll*DEG, xx=add(mul(x,Math.cos(a)),mul(y,Math.sin(a)));
  y=add(mul(y,Math.cos(a)),mul(x,-Math.sin(a))); x=xx;
  return {p,n,x,y};
}
export function angularSize(light) {
  const d=length(sub(position(light),FACE));
  return { width:2*Math.atan(light.width/(2*d))/DEG, height:2*Math.atan(light.height/(2*d))/DEG, distance:d };
}
// Midpoint quadrature, direct irradiance at a virtual flat meter. Includes emitter
// and receiver cosine and inverse-square per sample; excludes scene occlusion/GI.
export function meter(light, point=FACE, normal={x:0,y:0,z:1}, steps=20) {
  if (!light.enabled) return 0;
  const {p,n,x,y}=emitterBasis(light);
  let sum=0;
  for(let j=0;j<steps;j++) for(let i=0;i<steps;i++) {
    const u=(i+.5)/steps-.5, v=(j+.5)/steps-.5;
    if(light.shape==='disk' && u*u+v*v>.25) continue;
    const q=add(p,add(mul(x,u*light.width),mul(y,v*light.height)));
    const delta=sub(q,point), d2=dot(delta,delta), l=unit(delta);
    sum+=Math.max(0,dot(normal,l))*Math.max(0,-dot(n,l))/Math.max(d2,1e-8);
  }
  return radiance(light)*light.width*light.height/steps**2*sum;
}
export function exposure(camera) {
  // Relative continuous-light exposure. Neutral reference: f/4, 1/125 s, ISO100.
  // A fixed calibration maps study flux to scene-linear display values.
  return .045 * (camera.iso/100) * (125/camera.shutter) * (4/camera.aperture)**2 * 2**camera.ev;
}
export function frontalNormal(yaw=0,pitch=0) {
  const y=yaw*DEG,p=pitch*DEG;
  return {x:Math.sin(y)*Math.cos(p),y:-Math.sin(p),z:Math.cos(y)*Math.cos(p)};
}
export function wrapAngle(degrees) { return ((degrees+180)%360+360)%360-180; }

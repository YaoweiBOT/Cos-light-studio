import {readFile} from 'node:fs/promises';
import {parsePMX} from '../src/assets/mmd-character.js';

const data = await readFile(new URL('../dist/models/custom/model.pmx', import.meta.url));
const pmx = parsePMX(data.buffer.slice(data.byteOffset, data.byteLength));
const byName = new Map(pmx.bones.map((b, i) => [b.name, b]));
console.log('bones:', pmx.bones.length);
for (const n of ['センター','中心','上半身','首','頭','左腕','右腕','左ひじ','右ひじ','左手首','右手首','左足','右足','左ひざ','右ひざ','左足首','右足首']) {
  const b = byName.get(n);
  console.log(n, b ? b.position.map(v => +v.toFixed(4)).join(',') : '(缺)');
}
let minY = 1e9, maxY = -1e9, minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
for (const v of pmx.vertices) {
  const [x, y, z] = v.position;
  if (y < minY) minY = y; if (y > maxY) maxY = y;
  if (x < minX) minX = x; if (x > maxX) maxX = x;
  if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
}
console.log('vertex bbox y:', minY.toFixed(3), '..', maxY.toFixed(3), ' x:', minX.toFixed(3), '..', maxX.toFixed(3), ' z:', minZ.toFixed(3), '..', maxZ.toFixed(3));
const head = byName.get('頭');
if (head) {
  const scale = 1.62 / head.position[1];
  console.log('SCALE:', scale);
  const p = (name) => { const b = byName.get(name); return b ? b.position.map(v => +(v * scale).toFixed(6)) : null; };
  for (const n of ['上半身','首','左腕','右腕','左ひじ','右ひじ','左手首','右手首','左足','右足','左ひざ','右ひざ','左足首','右足首']) console.log(n, JSON.stringify(p(n)));
}

import {readFile} from 'node:fs/promises';
import {Box3} from 'three';
import {parsePMX} from '../src/assets/mmd-character.js';

const data = await readFile(new URL('../dist/models/custom/model.pmx', import.meta.url));
const pmx = parsePMX(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength));
console.log('vertices:', pmx.vertices.length, 'faces:', pmx.faces.length, 'materials:', pmx.materials.length, 'textures:', pmx.textures.length);

// 用与 external-model.js 相同的方式构建网格，检查几何是否为空
let triTotal = 0;
const perMat = [];
let faceCursor = 0;
const rawBox = {min: [1e9, 1e9, 1e9], max: [-1e9, -1e9, -1e9]};
for (const material of pmx.materials) {
  const triCount = material.faceCount | 0;
  let used = 0;
    for (let f = 0; f < triCount; f++) {
      const face = pmx.faces[faceCursor + f].indices;
      for (let k = 0; k < 3; k++) {
        let vi = face[k]; if (vi < 0) vi = -vi - 1;
        const v = pmx.vertices[vi];
        if (!v) continue;
        used++;
        for (let a = 0; a < 3; a++) {
          const val = v.position[a];
          if (val < rawBox.min[a]) rawBox.min[a] = val;
          if (val > rawBox.max[a]) rawBox.max[a] = val;
        }
      }
      triTotal += 3;
    }
  perMat.push({name: material.name, tris: triCount, tex: material.textureIndex >= 0 ? pmx.textures[material.textureIndex] : '(none)'});
  faceCursor += triCount;
}
console.log('built triangles:', triTotal, 'raw bbox:', JSON.stringify(rawBox));
perMat.forEach(m => console.log(`  ${m.tris} tris  tex=${m.tex}  ${m.name}`));

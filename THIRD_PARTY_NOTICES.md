# Third-party notices

The original Cos Light Studio application code is provided under the MIT
license in `LICENSE`. Third-party software and assets retain their own
copyright and license terms. The application MIT license does not replace them.

## JavaScript libraries

| Component | Pinned version | License | Upstream |
| --- | --- | --- | --- |
| Three.js | 0.181.1 | MIT | https://github.com/mrdoob/three.js |
| three-mesh-bvh | 0.9.5 | MIT | https://github.com/gkjohnson/three-mesh-bvh |
| three-gpu-pathtracer | 0.0.24 | MIT | https://github.com/gkjohnson/three-gpu-pathtracer |
| xatlas-web | 0.1.0 | MIT | https://github.com/Repalash/xatlas-web |
| esbuild (build tooling) | 0.28.2 | MIT | https://github.com/evanw/esbuild |

Complete distributed dependency license notices are retained in
`dist/licenses/`. esbuild's generated JavaScript license sidecars are also
distributed. `package-lock.json` records the exact dependency graph.
`xatlas-web` is installed to satisfy the path tracer's peer dependency; the
current studio does not use UV unwrapping.

## Lee Perry-Smith head scan and textures

**Attribution:** Infinite, 3D Head Scan by **Lee Perry-Smith / Infinite Realities**,
based on work at **www.triplegangers.com**, distributed under
**Creative Commons Attribution 3.0 Unported (CC BY 3.0)**.

- License: https://creativecommons.org/licenses/by/3.0/
- Creator: http://www.ir-ltd.net/
- Distribution source: https://github.com/mrdoob/three.js/tree/r170/examples/models/gltf/LeePerrySmith
- Original license: https://github.com/mrdoob/three.js/blob/r170/examples/models/gltf/LeePerrySmith/LeePerrySmith_License.txt

Files: `LeePerrySmith.glb`, `Map-COL.jpg`,
`Infinite-Level_02_Tangent_SmoothUV.jpg`, and `LeePerrySmith_License.txt`.
The original files are redistributed unchanged in `assets/LeePerrySmith/`
and copied into `dist/models/LeePerrySmith/`. The application transforms the
mesh in memory to a 0.32 m height, centers it, normalizes its vertex attributes,
and assigns study materials. Those runtime changes do not alter the bundled
source asset files. A manifest records source URLs, byte counts, and SHA-256
checksums. The scan's original license notice is included alongside the files.

Redistributions must retain this attribution and the scan's license notice.
No endorsement by the scan creator or library authors is implied.

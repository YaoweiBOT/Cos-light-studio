// Compatibility adapter for the pinned three-gpu-pathtracer 0.0.24 merger.
// Its mergeGeometries creates one group PER MESH, while its material list is
// flattened PER MATERIAL. A multi-material PMX therefore sampled its face map
// on every triangle, and could shift all following room material indices.
// Keep this workaround isolated and regression-tested, not in node_modules.
export function preserveMaterialGroups(generator) {
  if (generator.userDataMaterialGroups) return generator;
  const merge = generator.staticGeometryGenerator;
  const generate = merge.generate.bind(merge);
  merge.generate = function (...args) {
    const meshes = this._getMeshes(); // Same deterministic UUID ordering as merger.
    const result = generate(...args);
    const target = result.geometry;
    target.clearGroups(); // The pinned merger also appends groups on refit.
    let indexOffset = 0, materialOffset = 0;
    for (const mesh of meshes) {
      const geometry = mesh.geometry;
      const count = geometry.index?.count ?? geometry.attributes.position.count;
      const multi = Array.isArray(mesh.material);
      const groups = multi && geometry.groups.length ? geometry.groups : [{start:0,count,materialIndex:0}];
      for (const group of groups) {
        target.addGroup(indexOffset + group.start, Math.min(group.count, count-group.start), materialOffset + (multi ? group.materialIndex : 0));
      }
      indexOffset += count;
      materialOffset += multi ? mesh.material.length : 1;
    }
    // Force reindexing even on an unchanged scene; also avoids the upstream
    // unbound `length` identifier in its material UUID cache condition.
    generator._materialUuids = null;
    return result;
  };
  generator.userDataMaterialGroups = true;
  return generator;
}

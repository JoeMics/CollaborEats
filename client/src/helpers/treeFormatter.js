const treeFormatter = (treeRoot, treeData) => {
  // Our root and treeData are separted from the DB, so this puts it back in place
  treeData.unshift(treeRoot);
  // Map all the ids of our elements for quick access
  const mapId = treeData.reduce((map, node, index) => {
    map[node._id] = index;
    return map;
  }, {}); // map starts out empty object

  let root;
  treeData.forEach((node) => {
    if (node.parent === null) {
      root = node;
      return;
    }
    // Use our mapping to locate the parent element in our treeData array
    const parentNode = treeData[mapId[node.parent]];
    // Add recipe to the element due to Tree.jsx's needs
    node['recipe'] = node;
    // Add our current node to its parent's `children` array
    parentNode.children = [...(parentNode.children || []), node];
  });
  return root;
};

export default treeFormatter;

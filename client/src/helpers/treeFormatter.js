const treeFormatter = (root, treeData) => {
  // index all nodes in all depths of the tree
  const depthIndex = {};

  //set up root
  depthIndex['0'] = [root.id]; //not id because its already in r3tree format
  treeData.forEach((node) => {
    if (!depthIndex[node.path.length]) {
      depthIndex[node.path.length] = [node._id];
    } else {
      depthIndex[node.path.length].push(node._id);
    }
  });

  // push root node into our data
  let data = [];
  data.push(root);

  for (let i = 0; i < treeData.length; i++) {
    // All nodes with depth = 1 is always children to root node
    // So just push to root node's children here
    if (treeData[i].path.length === 1) {
      data[0].children.push({
        name: treeData[i].title,
        id: treeData[i]._id,
        description: treeData[i].description,
        children: [],
        user: treeData[i].ownerId.email,
        recipe: treeData[i],
      }); //data[0] is always root
    } else {
      // r3treepath maps out the location we want to push to in the r3tree format
      // we have to do this because the location is DEEPLY nested
      let r3treepath = [];
      for (let j = 0; j < treeData[i].path.length; j++) {
        // We use the path AKA the array of ancestors to find the index of the parent
        // inside depth index we created in the beginning
        let node = treeData[i].path[j];
        let offset = 0;
        if (j > 1) {
          offset = getOffset(depthIndex[j], treeData[i].path[j - 1], treeData);
        }
        let parentIndex =
          depthIndex[j].indexOf(node) - offset < 0
            ? depthIndex[j].indexOf(node)
            : depthIndex[j].indexOf(node) - offset;
        r3treepath.push(parentIndex);
        r3treepath.push('children');
      }
      // Push to the correct nested location
      get(r3treepath, data).push({
        name: treeData[i].title,
        id: treeData[i]._id,
        description: treeData[i].description,
        children: [],
        user: treeData[i].ownerId.email,
        recipe: treeData[i],
      });
    }
  }

  return data;
};

//This reducer gets the path to the tree
const get = (p, o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);

//this function offsets the number of treenodes in the same depth that are not part of the path
const getOffset = (depthNodes, parent, dbData) => {
  let offset = 0;
  let parentCount = 0;
  depthNodes.forEach((depthNode) => {
    dbData.forEach((treeNode) => {
      if (treeNode._id === depthNode && treeNode.parent !== parent) {
        offset++;
      }
      if (treeNode._id === depthNode && treeNode.parent === parent) {
        parentCount++;
      }
    });
  });
  //if parentCount is 1 that means that nothing in depthNodes shares same parents
  //need to set offset to 1 so it becomes 0 which corresponds to only child in tree
  if (parentCount === 1) {
    offset = 1;
  }
  return offset;
};

export default treeFormatter;

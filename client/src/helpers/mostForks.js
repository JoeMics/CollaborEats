function mostForkedRecipeId(treeData) {
  if (treeData.length === 1 && treeData[0].parent === null) {
    const rId = treeData[0]._id;
    return rId;
  }
  //aggregate
  const pIdArr = [];
  treeData.map((dataPoint) => pIdArr.push(dataPoint.parent));
  //count occurences
  const pIdCounts = {};
  for (const pId of pIdArr) {
    pIdCounts[pId] = pIdCounts[pId] ? pIdCounts[pId] + 1 : 1;
  }
  //get max
  const arrOfOccurences = Object.values(pIdCounts);
  const max = Math.max(...arrOfOccurences);
  //return key with highest value
  const pId = Object.keys(pIdCounts).find((key) => pIdCounts[key] === max);
  return pId;
}

export default mostForkedRecipeId;

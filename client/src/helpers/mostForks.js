const tree = [
  {
    id: 2,
    parent: 1,
    path: [1],
  },
  {
    id: 4,
    parent: 1,
    path: [1],
  },
  {
    id: 3,
    parent: 2,
    path: [1, 2],
  },
  {
    id: 7,
    parent: 4,
    path: [1, 4],
  },
  {
    id: 6,
    parent: 3,
    path: [1, 2, 3],
  },
  {
    id: 5,
    parent: 3,
    path: [1, 2, 3],
  },
  {
    id: 6,
    parent: 3,
    path: [1, 2, 3],
  },
];

function mostForkedRecipeId(treeData) {
  console.log('data', treeData);
  //aggregate
  const pIdArr = [];
  treeData.map((dataPoint) => pIdArr.push(dataPoint.parent));
  console.log('arr', pIdArr);
  //count occurences
  const pIdCounts = {};
  for (const pId of pIdArr) {
    pIdCounts[pId] = pIdCounts[pId] ? pIdCounts[pId] + 1 : 1;
  }
  console.log('counts', pIdCounts);
  //get max
  const arrOfOccurences = Object.values(pIdCounts);
  const max = Math.max(...arrOfOccurences);
  console.log('max', max);
  //return key with highest value
  const pId = Object.keys(pIdCounts).find((key) => pIdCounts[key] === max);
  console.log('result', pId);
  return pId;
}

console.log(mostForkedRecipeId(tree));

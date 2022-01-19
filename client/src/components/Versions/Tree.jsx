import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import treeFormatter from '../../helpers/treeFormatter';
import { fetchData } from '../../services/api';

export default function OrgChartTree() {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      const dbData = await fetchData();

      const root = {
        name: dbData.data.recipe.title,
        id: dbData.data.recipe._id,
        children: [],
      };

      const treeArray = dbData.data.recipeTree;
      const formattedAnswer = treeFormatter(root, treeArray);
      setTreeData(formattedAnswer);
      setLoading(false);
    }
    setLoading(true);
    getAllData();
  }, []);

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <>
      {loading && <div>Loading!!!</div>};
      {!loading && (
        <div id="treeWrapper" style={{ width: '80vw', height: '75vh' }}>
          <Tree data={treeData} orientation={'vertical'} />
        </div>
      )}
    </>
  );
}

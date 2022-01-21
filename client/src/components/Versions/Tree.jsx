import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import treeFormatter from '../../helpers/treeFormatter';
import { useCenteredTree } from '../../helpers/centerTree';
import { fetchData } from '../../services/api';
import Card from './TestCardComponent';

export default function OrgChartTree() {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [translate, containerRef] = useCenteredTree();

  useEffect(() => {
    async function getAllData() {
      const dbData = await fetchData();

      const root = {
        name: dbData.data.recipe.title,
        id: dbData.data.recipe._id,
        children: [],
        description: dbData.data.recipe.description,
      };

      const treeArray = dbData.data.recipeTree;
      const formattedAnswer = treeFormatter(root, treeArray);
      setTreeData(formattedAnswer);
      setLoading(false);
    }
    setLoading(true);
    getAllData();
  }, []);

  const nodeSize = { x: 400, y: 300 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: 1,
  };

  // Here we're using `renderCustomNodeElement` render a component that uses
  // both SVG and HTML tags side-by-side.
  // This is made possible by `foreignObject`, which wraps the HTML tags to
  // allow for them to be injected into the SVG namespace.
  const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps }) => {
    console.log(nodeDatum);

    return (
      <g>
        <circle r={20} fill={'pink'}></circle>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
          <div className="mx-8 border-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{nodeDatum.name}</div>
                <p className="text-gray-700 text-base">{nodeDatum.description}</p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {nodeDatum.children && (
                    <button style={{ width: '100%' }} onClick={toggleNode}>
                      {nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}
                    </button>
                  )}
                </span>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <button>Find the recipe here!</button>
                </span>
              </div>
            </div>
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <>
      {loading && <div>Loading!!!</div>}
      {!loading && (
        <div id="treeWrapper" style={{ width: '80vw', height: '75vh' }} ref={containerRef}>
          <Tree
            data={treeData}
            translate={translate}
            orientation={'vertical'}
            nodeSize={nodeSize}
            allowForeignObjects
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
            }
          />
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import treeFormatter from '../../helpers/treeFormatter';
import { useCenteredTree } from '../../helpers/centerTree';
import { getRecipe } from '../../services/api';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function OrgChartTree({ treeId }) {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [translate, containerRef] = useCenteredTree();

  useEffect(() => {
    async function getAllData() {
      const dbData = await getRecipe(treeId);
      const root = {
        name: dbData.data.recipe.title,
        id: dbData.data.recipe._id,
        children: [],
        description: dbData.data.recipe.description,
        user: dbData.data.recipe.ownerId.email,
      };

      const treeArray = dbData.data.recipeTree;
      const formattedAnswer = treeFormatter(root, treeArray);
      setTreeData(formattedAnswer);
      setLoading(false);
    }
    setLoading(true);
    getAllData();
  }, []);

  const nodeSize = { x: 400, y: 400 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: 1,
  };

  const chevUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  );

  const chevDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  );

  // Here we're using `renderCustomNodeElement` render a component that uses
  // both SVG and HTML tags side-by-side.
  // This is made possible by `foreignObject`, which wraps the HTML tags to
  // allow for them to be injected into the SVG namespace.
  const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps }) => {
    return (
      <g>
        <circle r={10} fill={'black'}></circle>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
          <div className="mx-8 border-8 rounded-lg">
            <div className="max-w-sm overflow-hidden shadow-lg bg-gray-400 ">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 max-w-2xl">{nodeDatum.name}</h3>
                <h4 className="font-bold text-l mb-2 max-w-2xl">{nodeDatum.user}</h4>
                <p className="text-gray-800 text-base truncate hover:overflow-visible hover:whitespace-normal">
                  {nodeDatum.description}
                </p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 hover:bg-purple-600 hover:text-white">
                  <button>
                    <Link to={`${ROUTES.RECIPE}/${nodeDatum.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </Link>
                  </button>
                </span>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 hover:bg-purple-600 hover:text-white">
                  <button>
                    <Link
                      to={{
                        pathname: ROUTES.EDIT,
                        state: {
                          recipeId: nodeDatum.id,
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </Link>
                  </button>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 hover:bg-purple-600 hover:text-white">
                  {nodeDatum.children && (
                    <button style={{ width: '100%' }} onClick={toggleNode}>
                      {nodeDatum.__rd3t.collapsed ? chevUp : chevDown}
                    </button>
                  )}
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

import React from 'react';
import Tree from './Tree';

export default function TreeContainer({ treeId }) {
  console.log('TREE CONTAINER ID: ', treeId);
  return (
    <div className="flex justify-center border-solid border-2 border-sky-500 rounded-md">
      <Tree treeId={treeId} />
    </div>
  );
}

import React from 'react';
import Tree from './Tree';

export default function TreeContainer({ treeId }) {
  console.log('TREE CONTAINER ID: ', treeId);
  return (
    <div className="flex justify-center bg-yellow-500">
      <Tree treeId={treeId} />
    </div>
  );
}

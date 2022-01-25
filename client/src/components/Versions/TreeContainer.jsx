import React from 'react';
import Tree from './Tree';

export default function TreeContainer({ treeId }) {
  return (
    <div className="flex justify-center border-solid border-2 border-sky-500 dark:border-none dark:shadow-black dark:shadow-lg dark:bg-dark-600 rounded-md">
      <Tree treeId={treeId} />
    </div>
  );
}

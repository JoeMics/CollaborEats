import React from 'react';
import TreeContainer from './TreeContainer';
import { useParams } from 'react-router-dom';
export default function VersionComponent() {
  const { id } = useParams();
  return (
    <div className="flex-row mx-auto container pt-8">
      <div className="flex justify-between content-start">
        <h2 className="text-5xl font-serif">Recipe Tree</h2>
        <div className="flex">
          <button className="block items-center mx-2 px-4 py-2 bg-blue-300 rounded text-white">
            Original Fork
          </button>
          <button className="block items-center mx-2 px-4 py-2 bg-blue-300 rounded text-white">
            Latest Fork
          </button>
          <button className="block items-center mx-2 px-4 py-2 bg-blue-300 rounded text-white">
            Most Forks
          </button>
        </div>
      </div>
      <div className="flex-row mx-auto container pt-6">
        <TreeContainer treeId={id} />
      </div>
    </div>
  );
}

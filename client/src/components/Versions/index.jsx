import React from 'react';
import TreeContainer from './TreeContainer';
import { useParams } from 'react-router-dom';
export default function VersionComponent() {
  const { id } = useParams();
  console.log('VERSION id: ', id);
  return (
    <div className="flex-row mx-auto container pt-8">
      <div className="flex justify-between content-start space-x-6 bg-green-500">
        <h3 className="pl-2">This is a very long recipe title</h3>
        <div className="space-x-6 pr-2">
          <button className="bg-red-500">Original Fork</button>
          <button className="bg-red-500">Latest Fork</button>
          <button className="bg-red-500">Most Forks</button>
        </div>
      </div>
      <div className="flex-row mx-auto container pt-6">
        <TreeContainer treeId={id} />
      </div>
    </div>
  );
}

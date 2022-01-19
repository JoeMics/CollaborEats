import React from 'react';
import TreeContainer from './TreeContainer';

export default function VersionComponent(props) {
  return (
    <div className="flex-row mx-auto container pt-8">
      <div className="flex content-start space-x-6 bg-green-500">
        <h3>This is a very long recipe title</h3>
        <button className="bg-red-500">Original Fork</button>
        <button className="bg-red-500">Latest Fork</button>
        <button className="bg-red-500">Most Forks</button>
      </div>
      <div className="flex-row mx-auto container pt-6">
        <TreeContainer />
      </div>
    </div>
  );
}

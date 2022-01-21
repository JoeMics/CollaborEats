import React from 'react';
import Tree from './Tree';
import Card from './TestCardComponent';

export default function TreeContainer(props) {
  return (
    <div className="flex justify-center bg-yellow-500">
      <Tree />
      {/* <Card /> */}
    </div>
  );
}

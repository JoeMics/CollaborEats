import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Tree from 'react-d3-tree';

const testData = [
  {
    name: '1',
    children: [
      {
        name: '2',
        children: [
          {
            name: '3',
          },
        ],
      },
      {
        name: '2',
        children: [
          {
            name: '3',
          },
          {
            name: '3',
          },
        ],
      },
    ],
  },
];

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '80vw', height: '75vh' }}>
      <Tree data={testData} orientation={'horizontal'} />
    </div>
  );
}

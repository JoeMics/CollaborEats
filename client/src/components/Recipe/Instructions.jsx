import React from 'react';

export default function Instructions({ description, instructions }) {
  // intructions = getIntructions()
  // descriptions = getDescriptions()
  return (
    <div className="flex w-1/3 flex-col ml-4 bg-red-500">
      <h3 className="ml-4 mt-4">Description</h3>
      <p className="m-4">{description}</p>

      <h1 className="ml-4">Instructions</h1>
      <p className="m-4">{instructions}</p>
    </div>
  );
}

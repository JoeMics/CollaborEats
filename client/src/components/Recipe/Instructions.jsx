import React from 'react';

export default function Instructions({ description, instructions }) {
  // intructions = getIntructions()
  // descriptions = getDescriptions()
  return (
    <div className="flex w-full flex-col p-10 whitespace-pre-line">
      <h3 className=" text-sm ml-4 mt-4">Description</h3>
      <p className="m-4 text-base leading-8">{description}</p>

      <h1 className="text-sm ml-4 mt-10">Instructions</h1>
      <p className="m-4 text-lg leading-8">{instructions}</p>
    </div>
  );
}

import React from 'react';

export default function Instructions({ description, instructions }) {
  return (
    <div className="flex w-full flex-col p-10 whitespace-pre-line">
      <h3 className="ml-4 mt-4 font-sans font-semibold">Description</h3>
      <p className="font-serif m-4 text-xl leading-9">{description}</p>

      <h3 className="font-sans font-semibold ml-4 mt-10">Instructions</h3>
      <p className="m-4 font-serif text-xl leading-9">{instructions}</p>
    </div>
  );
}

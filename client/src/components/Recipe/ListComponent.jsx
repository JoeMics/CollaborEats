import React from 'react';

export default function ListComponent(props) {
  return (
    <div>
      <input
        type="text"
        id="ingredient"
        name="ingredient"
        placeholder="Ingredient"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      ></input>
      <input
        type="text"
        id="amount"
        name="amount"
        placeholder="Amount"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      ></input>
      <input
        type="text"
        id="unitOfMeasure"
        name="unitOfMeasure"
        placeholder="Unit of Measure"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      ></input>
    </div>
  );
}

import React, { useState } from 'react';

export default function ListComponent({ item, remove, addIngredient, index }) {
  const { amount, ingredient, unitOfMeasure } = item;
  const [state, setState] = useState({
    amount,
    ingredient,
    unitOfMeasure,
  });

  const editInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    const ingredient = state;

    addIngredient({ ingredient, index });
  };

  return (
    <div>
      <input
        type="text"
        name="ingredient"
        placeholder="Ingredient"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        onChange={editInput}
        value={!state.ingredient ? '' : state.ingredient}
      ></input>
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        onChange={editInput}
        value={!state.amount ? '' : state.amount}
      ></input>
      <input
        type="text"
        name="unitOfMeasure"
        placeholder="Unit of Measure"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        onChange={editInput}
        value={!state.unitOfMeasure ? '' : state.unitOfMeasure}
      ></input>
      <button type="button" onClick={remove}>
        DELETE
      </button>
    </div>
  );
}

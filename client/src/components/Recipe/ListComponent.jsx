import React, { useEffect, useState } from 'react';

export default function ListComponent({ item, remove, addIngredient, index }) {
  // const { amount, ingredient, unitOfMeasure, index } = item;
  const [ingredient, setIngredient] = useState({
    amount: item.amount,
    ingredient: item.ingredient,
    unitOfMeasure: item.unitOfMeasure,
    index: item.index,
  });

  // Allows updating when indices are reset
  useEffect(() => {
    setIngredient(item);
  }, [item]);

  const editInput = (e) => {
    setIngredient((prev) => {
      const ingredient = {
        ...prev,
        [e.target.name]: e.target.value,
      };

      // TODO: Refactor to suppress errors
      // Updates List (parent) Component's state
      addIngredient({ ingredient, index });

      return ingredient;
    });
  };

  return (
    <div className="flex justify-between">
      <div>
        <label htmlFor="ingredient" className="block font-semibold">
          Ingredient
        </label>
        <input
          type="text"
          name="ingredient"
          placeholder="Ingredient"
          className="w-80 x-4 my-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
          onChange={editInput}
          value={!ingredient.ingredient ? '' : ingredient.ingredient}
        ></input>
      </div>
      <div>
        <label htmlFor="amount" className="block font-semibold">
          Amount
        </label>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          className="w-80 x-4 my-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
          onChange={editInput}
          value={!ingredient.amount ? '' : ingredient.amount}
        ></input>
      </div>
      <div>
        <label htmlFor="unit-of-measure" className="block font-semibold">
          Unit of Measurement
        </label>
        <input
          type="text"
          name="unitOfMeasure"
          placeholder="Unit of Measure"
          className="w-80 x-4 my-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
          onChange={editInput}
          value={!ingredient.unitOfMeasure ? '' : ingredient.unitOfMeasure}
        ></input>
      </div>
      <button
        className="block items-center px-4 py-1 my-2 bg-red-500 rounded text-white"
        type="button"
        onClick={remove}
      >
        Delete
      </button>
    </div>
  );
}

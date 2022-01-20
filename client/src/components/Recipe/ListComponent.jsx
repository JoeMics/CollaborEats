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

      // Updates List (parent) Component's state
      addIngredient({ ingredient, index });

      return ingredient;
    });
  };

  return (
    <div>
      <input
        type="text"
        name="ingredient"
        placeholder="Ingredient"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        onChange={editInput}
        value={!ingredient.ingredient ? '' : ingredient.ingredient}
      ></input>
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        onChange={editInput}
        value={!ingredient.amount ? '' : ingredient.amount}
      ></input>
      <input
        type="text"
        name="unitOfMeasure"
        placeholder="Unit of Measure"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        onChange={editInput}
        value={!ingredient.unitOfMeasure ? '' : ingredient.unitOfMeasure}
      ></input>
      <button type="button" onClick={remove}>
        DELETE
      </button>
    </div>
  );
}

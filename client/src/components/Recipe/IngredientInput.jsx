import React, { useState, useEffect } from 'react';

const IngredientInput = ({ setRecipeForm, recipeForm, index }) => {
  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setRecipeForm((prev) => {
      const ingredients = [...prev.ingredients];
      ingredients[index] = { ...ingredients[index], [name]: value };

      return { ...prev, ingredients };
    });
  };

  const deleteInput = () => {
    setRecipeForm((prev) => {
      const ingredients = [...prev.ingredients];
      ingredients.splice(index, 1);

      return { ...prev, ingredients };
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
          value={recipeForm.ingredients[index].ingredient}
          onChange={changeHandler}
          className="w-80 x-4 my-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
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
          value={recipeForm.ingredients[index].amount}
          onChange={changeHandler}
          className="w-80 x-4 my-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
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
          value={recipeForm.ingredients[index].unitOfMeasure}
          onChange={changeHandler}
          className="w-80 x-4 my-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        ></input>
      </div>
      <button
        className="block items-center px-4 py-1 my-2 bg-red-500 rounded text-white"
        type="button"
        onClick={deleteInput}
      >
        Delete
      </button>
    </div>
  );
};

export default IngredientInput;

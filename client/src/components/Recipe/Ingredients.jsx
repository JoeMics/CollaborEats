import React from 'react';

export default function Ingredients({ ingredients }) {
  console.log(ingredients);
  return (
    <div className="w-1/2  p-10">
      <h3 className="mt-4 ml-4 font-sans font-semibold">Ingredients</h3>
      <ul className="m-4 font-serif">
        {ingredients &&
          ingredients.map((ingredient) => (
            <li className="text-lg mt-4" key={ingredient._id}>
              {ingredient.amount + ' '}
              {ingredient.unitOfMeasure ? ingredient.unitOfMeasure : null}
              {' ' + ingredient.ingredient}
            </li>
          ))}
      </ul>
    </div>
  );
}

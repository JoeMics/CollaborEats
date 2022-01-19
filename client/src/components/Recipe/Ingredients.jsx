import React from 'react';

export default function Ingredients(props) {
  //ingredientsList = getIngredients()
  return (
    <div className="w-1/6 bg-blue-500">
      <h3 className="mt-4 ml-4">Ingredients</h3>
      <ul className="m-4">
        {/* ingredientsList.map {(ingredient) => {
          <li key={ingredient._id}>
          {ingredient.ingredient}: {ingredient.amount} {ingredient.unitOfMeasure? ingredient.unitOfMeasure : null}
          </li>
        }} */}

        <li> Flour: 2 Cups</li>
        <li> Flour: 2 Cups</li>
        <li> Flour: 2 Cups</li>
        <li> Flour: 2 Cups</li>
        <li> Flour: 2 Cups</li>
        <li> Flour: 2 Cups</li>
        <li> Flour: 2 Cups</li>
      </ul>
    </div>
  );
}

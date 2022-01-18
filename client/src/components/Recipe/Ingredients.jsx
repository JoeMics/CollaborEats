import React from 'react';

export default function Ingredients(props) {
  //ingredientsList = getIngredients()
  return (
    <div className="w/1/3">
      <h3>Ingredients</h3>
      <ul>
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

import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';

export default function List({ ingredients, edit }) {
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    setIngredientList([...ingredients]);
  }, [ingredients]);

  //ADD NEW INGREDIENT we have no id. we will use state then
  //REFRESHED THE PAGE. will have id.
  // ADD TO LIST

  const onAddBtnClick = () => {
    const ingredient = {
      ingredient: null,
      amount: null,
      unitOfMeasure: null,
      index: ingredientList.length,
    };

    setIngredientList([...ingredientList, ingredient]);
  };

  // fuck the filter
  const onRemoveBtnClick = (index) => {
    const filteredList = ingredientList.filter((item, aIndex) => {
      return aIndex !== index;
    });
    setIngredientList(filteredList);
  };

  const addIngredient = (inputData) => {
    console.log(inputData);
    setIngredientList((prev) => {
      prev[inputData.index] = inputData.ingredient;
      console.log(prev);
      return prev;
    });
  };

  return (
    <div>
      {edit &&
        ingredientList.map((ingredient, index) => {
          return (
            <ListComponent
              index={index}
              key={index}
              item={ingredient}
              remove={() => onRemoveBtnClick(index)}
              addIngredient={addIngredient}
            />
          );
        })}
      <button type="button" onClick={onAddBtnClick}>
        Add an ingredient
      </button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';
import { v4 as uuidv4 } from 'uuid';

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
    };

    setIngredientList([...ingredientList, ingredient]);
  };

  const onRemoveBtnClick = (uuid) => {
    const filteredList = ingredientList.filter((item) => {
      return item.listId !== uuid;
    });
    setIngredientList(filteredList);
  };

  return (
    <div>
      {edit &&
        ingredientList.map((ingredient) => {
          const uuid = uuidv4();
          ingredient['listId'] = uuid;
          return (
            <ListComponent key={uuid} item={ingredient} remove={() => onRemoveBtnClick(uuid)} />
          );
        })}
      <button type="button" onClick={onAddBtnClick}>
        Add an ingredient
      </button>
    </div>
  );
}

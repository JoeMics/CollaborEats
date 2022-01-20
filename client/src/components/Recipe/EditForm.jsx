import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import List from './List';

export default function EditFormComponent({ recipe }) {
  const { title, description, instructions, ingredients } = recipe;
  const [recipeForm, setRecipeForm] = useState({
    // parent: _id,
    // path: [...path, _id],
    title,
    description,
    instructions,
  });

  const [ingredientList, setIngredientList] = useState([...ingredients]);
  const { user } = useContext(AuthContext);

  const editInput = (e) => {
    setRecipeForm({
      ...recipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...recipeForm,
      ingredients: ingredientList,
    };

    console.log(newRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        value={recipeForm.title}
        onChange={editInput}
      ></input>
      <br></br>
      <textarea
        name="description"
        className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
        placeholder="Description"
        value={recipeForm.description}
        onChange={editInput}
      ></textarea>
      <br></br>
      <textarea
        name="instructions"
        className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
        placeholder="Instructions"
        value={recipeForm.instructions}
        onChange={editInput}
      ></textarea>
      <br></br>
      <label>Ingredients</label>
      <List
        ingredients={ingredients}
        edit={true}
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
      />
      <br></br>
      <button
        type="submit"
        value="Submit"
        className="border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      >
        Submit
      </button>
    </form>
  );
}

import React, { useState } from 'react';
import List from './List';

export default function CreateFormComponent(props) {
  const [recipeForm, setRecipeForm] = useState({
    title: '',
    description: '',
    instructions: '',
  });

  const editInput = (e) => {
    setRecipeForm({
      ...recipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      ...recipeForm,
      // ingredients: ingredientList,
    };
    // TODO: render recipe page, grab new recipe ID from response
    // await addFork(userId, _id, newRecipe);
    console.log(newRecipe);
  };

  return (
    <div className="flex-row mx-auto container pt-8">
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
        {/* <List ingredients={[]} /> */}
        <br></br>
        <input
          type="submit"
          value="Submit"
          className="border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        ></input>
      </form>
    </div>
  );
}

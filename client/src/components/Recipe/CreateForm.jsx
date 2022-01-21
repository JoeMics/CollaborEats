import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { addRecipe } from '../../services/api';
import List from './List';

export default function CreateFormComponent(props) {
  const [recipeForm, setRecipeForm] = useState({
    title: '',
    description: '',
    instructions: '',
  });
  const [ingredientList, setIngredientList] = useState([
    { ingredient: null, amount: null, unitOfMeasure: null, index: 0 },
  ]);
  const { userId } = useContext(AuthContext);

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
      ingredients: ingredientList,
    };
    // TODO: render recipe page, grab new recipe ID from response
    // await addFork(userId, _id, newRecipe);

    await addRecipe(userId, newRecipe);
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
        <textarea
          name="description"
          className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
          placeholder="Description"
          value={recipeForm.description}
          onChange={editInput}
        ></textarea>
        <textarea
          name="instructions"
          className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
          placeholder="Instructions"
          value={recipeForm.instructions}
          onChange={editInput}
        ></textarea>
        <label>Ingredients</label>
        <List ingredientList={ingredientList} setIngredientList={setIngredientList} edit={true} />
        <button
          type="submit"
          value="Submit"
          className="block items-center px-4 py-2 my-4 bg-blue-300 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

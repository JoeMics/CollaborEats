import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { addRecipe, uploadImage } from '../../services/api';
import List from './List';

export default function CreateFormComponent(props) {
  const [recipeForm, setRecipeForm] = useState({
    title: '',
    description: '',
    instructions: '',
    photo: '',
  });
  const [file, setFile] = useState(null);
  const [ingredientList, setIngredientList] = useState([
    { ingredient: null, amount: null, unitOfMeasure: null, index: 0 },
  ]);
  const { userId } = useContext(AuthContext);
  let history = useHistory();

  const editInput = (e) => {
    setRecipeForm({
      ...recipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelect = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = await uploadImage(file);

    const newRecipe = {
      ...recipeForm,
      ingredients: ingredientList,
      photo: fileName,
    };
    console.log(newRecipe);
    const result = await addRecipe(userId, newRecipe);
    history.push(`/recipe/${result.data._id}`);
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
        <div className="mt-3 mb-3">
          <input type="file" name="file" id="file" onChange={handleFileSelect} />
          <label htmlFor="for">Choose File</label>
        </div>
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

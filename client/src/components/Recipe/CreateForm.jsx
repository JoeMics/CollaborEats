import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { validateInput } from '../../helpers/validation';
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
  const [formError, setFormError] = useState({});

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
    setFormError({});

    const newRecipe = {
      ...recipeForm,
      ingredients: ingredientList,
    };

    // VALIDATION, to be moved to custom hook
    const validationOptions = {
      title: { characterCount: 30 },
    };

    for (const property in newRecipe) {
      const inputError = validateInput(newRecipe[property], validationOptions[property]);
      if (inputError) setFormError((prev) => ({ ...prev, [property]: inputError }));
    }

    if (formError !== {}) return;

    // POST request after validations
    try {
      // only upload image when form validated
      if (file) {
        newRecipe.photo = await uploadImage(file);
      }

      const result = await addRecipe(userId, newRecipe);
      history.push(`/recipe/${result.data._id}`);
    } catch (error) {
      // TODO: render page depending on server error
      console.log(error);
    }
  };

  return (
    <div className="flex-row mx-auto container py-3 px-10">
      <h1 className="text-6xl font-serif my-8">Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block text-lg font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="w-1/3 px-4 py-2 border-2 mb-3 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
          value={recipeForm.title}
          onChange={editInput}
        ></input>
        {formError.title && <h4 className="mx-auto text-red-700 font-serif">{formError.title}</h4>}

        <label htmlFor="description" className="block text-lg font-semibold">
          Description
        </label>
        <textarea
          name="description"
          className="w-full h-32 px-4 py-3 border-2 mb-3 border-gray-300 rounded-sm outline-none focus:border-blue-400"
          placeholder="Description"
          value={recipeForm.description}
          onChange={editInput}
        ></textarea>
        {formError.description && (
          <h4 className="mx-auto text-red-700 font-serif">{formError.description}</h4>
        )}

        <label htmlFor="instructions" className="block text-lg font-semibold">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="w-full h-32 px-4 py-3 border-2 mb-3 border-gray-300 rounded-sm outline-none focus:border-blue-400"
          placeholder="Instructions"
          value={recipeForm.instructions}
          onChange={editInput}
        ></textarea>
        {formError.instructions && (
          <h4 className="mx-auto text-red-700 font-serif">{formError.instructions}</h4>
        )}

        <label className="block text-lg font-semibold">Ingredients</label>
        <List ingredientList={ingredientList} setIngredientList={setIngredientList} edit={true} />
        <div className="mt-3 mb-3">
          <label className="block text-lg font-semibold" htmlFor="file">
            Choose File:
          </label>
          <input type="file" name="file" id="file" onChange={handleFileSelect} />
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

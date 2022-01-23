import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { addFork, uploadImage } from '../../services/api';
import IngredientInput from './IngredientInput';

export default function EditFormComponent({ recipe }) {
  const { title, description, instructions, ingredients, _id, photo } = recipe;
  const [recipeForm, setRecipeForm] = useState({
    title,
    description,
    instructions,
    ingredients,
  });

  const [file, setFile] = useState(null);
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
    const newRecipe = {
      ...recipeForm,
    };

    if (file) {
      newRecipe.photo = await uploadImage(file);
    }

    const result = await addFork(userId, _id, newRecipe);
    history.push(`/recipe/${result.data._id}`);
  };

  const IngredientsInputs = recipeForm.ingredients.map((ingredient, index) => {
    return (
      <IngredientInput
        key={index}
        {...ingredient}
        index={index}
        setRecipeForm={setRecipeForm}
        recipeForm={recipeForm}
      />
    );
  });

  const addIngredient = () => {
    const newIngredient = { ingredient: '', amount: '', unitOfMeasure: '' };
    setRecipeForm((prev) => {
      const ingredients = [...prev.ingredients];
      ingredients[ingredients.length] = newIngredient;
      return {
        ...prev,
        ingredients,
      };
    });
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
      {IngredientsInputs}
      <button
        className="block items-center px-4 py-2 bg-blue-300 rounded text-white"
        type="button"
        onClick={addIngredient}
      >
        Add an ingredient
      </button>
      <div className="mt-3 mb-3">
        <input type="file" name="file" id="file" onChange={handleFileSelect} />
        <label htmlFor="for">Choose File</label>
      </div>
      <button
        type="submit"
        value="Submit"
        className="block items-center px-4 py-2 mt-4 bg-blue-300 rounded text-white"
      >
        Submit
      </button>
    </form>
  );
}

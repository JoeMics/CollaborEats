import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { validateInput } from '../../helpers/validation';
import { addFork, addRecipe, uploadImage } from '../../services/api';
import IngredientInput from './IngredientInput';

const RecipeForm = ({ title, recipe }) => {
  recipe = recipe || {};
  const [recipeForm, setRecipeForm] = useState({
    title: recipe.title || '',
    description: recipe.description || '',
    instructions: recipe.instructions || '',
    ingredients: recipe.ingredients || [{ ingredient: '', amount: '', unitOfMeasure: '' }],
    photo: '',
  });
  const [file, setFile] = useState(null);
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

    const newRecipe = { ...recipeForm };

    // VALIDATION, to be moved to custom hook
    const validationOptions = {
      title: { characterCount: 30 },
      photo: { required: false },
    };

    let containsErrors = false;

    // Validations for title, description, and instructions
    for (const property in newRecipe) {
      const inputError = validateInput(newRecipe[property], validationOptions[property]);
      if (inputError) {
        setFormError((prev) => {
          return { ...prev, [property]: inputError };
        });

        containsErrors = true;
      }
    }

    // Validations for the ingredients section
    for (const ingredient of newRecipe.ingredients) {
      const errors = {
        amount: validateInput(ingredient.amount, { characterCount: 5 }),
        ingredient: validateInput(ingredient.ingredient, { characterCount: 30 }),
        unitOfMeasure: validateInput(ingredient.unitOfMeasure, { required: false }),
      };

      const filteredErrors = {};

      for (const error in errors) {
        if (errors[error]) {
          filteredErrors[error] = errors[error];
          containsErrors = true;
        }
      }

      setFormError((prev) => ({ ...prev, ...filteredErrors }));
    }

    if (containsErrors) return;

    // POST request after validations
    try {
      // only upload image when form validated
      if (file) {
        newRecipe.photo = await uploadImage(file);
      }

      // Only on fork
      if (recipe._id) {
        const result = await addFork(userId, recipe._id, newRecipe);
        return history.push(`/recipe/${result.data._id}`);
      }

      const result = await addRecipe(userId, newRecipe);
      return history.push(`/recipe/${result.data._id}`);
    } catch (error) {
      // TODO: render page depending on server error
      console.log(error);
    }
  };

  const IngredientsInputs = recipeForm.ingredients.map((ingredient, index) => {
    return (
      <IngredientInput
        key={index}
        {...ingredient}
        index={index}
        setRecipeForm={setRecipeForm}
        recipeForm={recipeForm}
        formError={formError}
        setFormError={setFormError}
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
    <div className="flex-row mx-auto container py-3 px-10">
      <h1 className="text-6xl font-serif my-8">{title}</h1>
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
        {formError.ingredient && (
          <h4 className="mx-auto text-red-700 font-serif">Ingredient: {formError.ingredient}</h4>
        )}
        {formError.amount && (
          <h4 className="mx-auto text-red-700 font-serif">Amount: {formError.amount}</h4>
        )}
        {formError.unitOfMeasure && (
          <h4 className="mx-auto text-red-700 font-serif">
            Unit of Measurement: {formError.unitOfMeasure}
          </h4>
        )}
        {IngredientsInputs}
        <button
          className="block items-center px-4 py-2 bg-blue-300 rounded text-white"
          type="button"
          onClick={addIngredient}
        >
          Add an ingredient
        </button>
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
};

export default RecipeForm;

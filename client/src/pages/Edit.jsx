import React, { useState, useEffect } from 'react';
import { getRecipe } from '../services/api';
import { useLocation } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
const Edit = () => {
  const location = useLocation();
  const { recipeId } = location.state;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipeData() {
      const dbData = await getRecipe(recipeId);
      setRecipe(dbData.data.recipe);
    }
    getRecipeData();
  }, []);

  return (
    <div className="container w-3/5">
      {recipe && <RecipeForm recipe={recipe} title={`Forking ${recipe.title}`} />}
    </div>
  );
};

export default Edit;

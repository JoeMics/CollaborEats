import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import CreateFormComponent from './CreateForm';
import EditFormComponent from './EditForm';
import { getRecipe } from '../../services/api';

export default function RecipeComponent(props) {
  const [recipe, setRecipe] = useState(true);
  const [loading, setLoading] = useState(true);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    async function getRecipeData() {
      setLoading(true);
      const dbData = await getRecipe();
      setLoading(false);
      console.log('edit form data:, ', dbData.data.recipe);
      setRecipe(dbData.data.recipe);
    }
    getRecipeData();
  }, []);

  // const handleCreate = () => {}
  // const handleFork = () => {}
  return (
    <>
      {loading && <div>Loading!!!</div>}
      {!loading && (
        <div className="flex-row mx-auto container pt-8">
          {!toggleForm ? (
            <>
              <div className="flex content-start space-x-6 bg-green-500">
                <h3>{recipe.title}</h3>
                <button onClick={() => setToggleForm(!toggleForm)}>Fork</button>
                <button>Other Forks</button>
              </div>
              <div className="flex container bg-yellow-500">
                <Ingredients ingredients={recipe.ingredients} />
                <Instructions instructions={recipe.instructions} description={recipe.description} />
              </div>
            </>
          ) : (
            <>
              <div className="flex content-start space-x-6 bg-green-500">
                <button onClick={() => setToggleForm(!toggleForm)}>Back</button>
              </div>
              <EditFormComponent recipe={recipe} />
            </>
          )}
        </div>
      )}
    </>
  );
}

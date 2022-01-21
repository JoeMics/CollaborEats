import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import CreateFormComponent from './CreateForm';
import EditFormComponent from './EditForm';
import { getRecipe } from '../../services/api';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function RecipeComponent({ recipeId }) {
  const [recipe, setRecipe] = useState(true);
  const [loading, setLoading] = useState(true);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    async function getRecipeData() {
      setLoading(true);
      //const dbData = await getRecipe('61e607f0311d699fd35f509e');
      const dbData = await getRecipe(recipeId);
      setLoading(false);
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
        <div className="flex-row mx-auto container mt-8">
          {!toggleForm ? (
            <>
              <div className="flex justify-between content-start space-x-6">
                <h2 className="text-6xl font-serif pl-4">{recipe.title}</h2>
                <div className="space-x-6 pr-2">
                  <button
                    className=" inline-flex items-center px-4 py-2 bg-blue-300 rounded text-white"
                    onClick={() => setToggleForm(!toggleForm)}
                  >
                    Fork
                  </button>
                  {recipe.path && (
                    <button className="inline-flex items-center px-4 py-2 bg-blue-300 rounded text-white">
                      <Link to={`${ROUTES.VERSIONS}/${recipe.path ? recipe.path[0] : recipe._id}`}>
                        Other Forks
                      </Link>
                    </button>
                  )}
                </div>
              </div>
              <div className="flex w-full bg-slate-200">
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

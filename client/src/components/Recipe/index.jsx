import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { getRecipe } from '../../services/api';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function RecipeComponent({ recipeId }) {
  const [recipe, setRecipe] = useState({
    ownerId: {
      email: '',
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipeData() {
      setLoading(true);
      const dbData = await getRecipe(recipeId);
      setLoading(false);
      setRecipe(dbData.data.recipe);
    }
    getRecipeData();
  }, []);

  return (
    <>
      {loading && <div>Loading!!!</div>}
      {!loading && (
        <div className="flex-row mx-auto container mt-8">
          <>
            <div className="flex flex-wrap justify-between content-start space-x-6">
              <header>
                <h2 className="text-6xl font-serif pl-4 w-9/12 break-words">{recipe.title}</h2>
                <h2 className="text-lg font-serif pl-4 w-9/12 break-words">
                  Written by:{recipe.ownerId.email}
                </h2>
              </header>
              <div className="flex py-2 items-end basis-2">
                <button className="flex justify-center items-center px-4 py-2 mx-5 bg-blue-300 rounded text-white h-16 w-24">
                  <Link
                    to={{
                      pathname: ROUTES.EDIT,
                      state: {
                        recipeId,
                      },
                    }}
                  >
                    Fork
                  </Link>
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-300 rounded text-white h-16 w-24">
                  <Link to={`${ROUTES.VERSIONS}/${!recipe.parent ? recipe._id : recipe.path[0]}`}>
                    Other Forks
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex w-full bg-slate-200">
              <Ingredients ingredients={recipe.ingredients} />
              <Instructions instructions={recipe.instructions} description={recipe.description} />
            </div>
          </>
        </div>
      )}
    </>
  );
}

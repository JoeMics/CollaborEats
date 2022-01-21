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
        <div className="flex-row mx-auto container pt-8">
          {!toggleForm ? (
            <>
              <div className="flex justify-between content-start space-x-6 bg-green-500">
                <h3 className="pl-2">{recipe.title}</h3>
                <div className="space-x-6 pr-2">
                  <button className="bg-red-500" onClick={() => setToggleForm(!toggleForm)}>
                    Fork
                  </button>

                  <span className="bg-red-500">
                    <Link to={`${ROUTES.VERSIONS}/${!recipe.parent ? recipe._id : recipe.path[0]}`}>
                      Other Forks
                    </Link>
                  </span>
                </div>
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

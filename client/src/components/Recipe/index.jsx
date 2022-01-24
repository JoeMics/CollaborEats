import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { getRecipe } from '../../services/api';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Modal from '../Modal';

export default function RecipeComponent({ recipeId }) {
  const [recipe, setRecipe] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
            <div className="flex justify-between content-start space-x-6">
              <h2 className="text-6xl font-serif pl-4 w-9/12 break-words">{recipe.title}</h2>
              <div className="space-x-6 pr-2">
                <button
                  className="inline-flex items-center px-4 py-2 bg-blue-300 rounded text-white"
                  onClick={() => setShowModal(true)}
                >
                  Fork
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-blue-300 rounded text-white">
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
      <>
        {showModal ? (
          <Modal recipe={recipe} title={`Forking ${recipe.title}`} setShowModal={setShowModal} />
        ) : null}
      </>
    </>
  );
}

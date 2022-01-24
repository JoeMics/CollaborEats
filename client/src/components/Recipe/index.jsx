import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { getRecipe } from '../../services/api';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Modal from '../Modal';

export default function RecipeComponent({ recipeId }) {
  const [recipe, setRecipe] = useState({
    ownerId: {
      email: '',
    },
  });
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
  }, [recipeId]);

  return (
    <>
      {loading && <div>Loading!!!</div>}
      {!loading && (
        <div className="flex-row mx-auto container mt-8">
          <>
            <div className="flex flex-wrap justify-between content-start space-x-6 ">
              <header className="w-3/4 dark:text-neutral-200">
                <h2 className="text-6xl font-serif pl-4 w-9/12 break-words">{recipe.title}</h2>
                <h2 className="text-lg font-serif pl-4 w-9/12 break-words">
                  Written by:{recipe.ownerId.email}
                </h2>
              </header>
              <div className="flex py-2 items-end basis-2">
                <button
                  className="flex justify-center items-center px-4 py-2 mx-5 bg-primary-400 hover:bg-primary-500  rounded text-neutral-200 h-12 w-24"
                  onClick={() => setShowModal(true)}
                >
                  Fork
                </button>
                <button className="flex items-center px-4 py-2 bg-primary-400 hover:bg-primary-500 rounded text-neutral-200 h-12 w-24">
                  <Link to={`${ROUTES.VERSIONS}/${!recipe.parent ? recipe._id : recipe.path[0]}`}>
                    Other Forks
                  </Link>
                </button>
              </div>
            </div>
            <div className="h-80 w-full rounded-t-md overflow-hidden mt-6">
              <img
                className="w-full object-cover"
                src={
                  recipe.photo
                    ? `http://localhost:8080/image/${recipe.photo}`
                    : 'https://source.unsplash.com/random//?food'
                }
                alt={recipe.title}
              />
            </div>
            <div className="flex w-full px-12 justify-items-center bg-neutral-100 shadow-dark-500 shadow-sm  rounded-b-md py-9 dark:text-neutral-200 dark:bg-dark-500 dark:shadow-black dark:shadow-sm">
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

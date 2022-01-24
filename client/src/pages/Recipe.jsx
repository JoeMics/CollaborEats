import React, { useEffect } from 'react';
import Comments from '../components/Comments';
import RecipeComponent from '../components/Recipe/index';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Recipe = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Recipes - CollaborEats`;
  }, []);

  return (
    <>
      <Navbar />
      <div className="container w-3/5">
        <RecipeComponent recipeId={id} />
        <Comments recipeId={id} />
      </div>
    </>
  );
};

export default Recipe;

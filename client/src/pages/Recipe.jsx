import React, { useEffect, useState } from 'react';
import Comments from '../components/Comments';
import RecipeComponent from '../components/Recipe/index';

const Recipe = () => {
  useEffect(() => {
    document.title = `Recipes - CollaborEats`;
  });

  return (
    <div>
      <RecipeComponent />
      <Comments />
    </div>
  );
};

export default Recipe;

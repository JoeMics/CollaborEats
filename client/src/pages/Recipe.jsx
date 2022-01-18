import React, { useEffect, useState } from 'react';
import RecipeComponent from '../components/Recipe/index';

const Recipe = () => {
  useEffect(() => {
    document.title = `Recipes - CollaborEats`;
  });

  return (
    <div>
      <RecipeComponent />
    </div>
  );
};

export default Recipe;

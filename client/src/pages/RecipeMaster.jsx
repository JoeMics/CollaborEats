import CardList from '../components/CardList/index';
import React, { useState, useEffect } from 'react';
import { fetchMasterRecipes } from '../services/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecipeMaster = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipeData() {
      const dbData = await fetchMasterRecipes();
      setRecipes(dbData.data);
      // it loads too fast to see at the moment, so this will be removed in
      //real app and we just have setLoading(false);
      setTimeout(() => setLoading(false), 1000);
    }
    setLoading(true);
    getRecipeData();
  }, []);

  return (
    <div>
      <header className="container py-10">
        <h1 className="text-6xl font-serif">Master Recipes</h1>
      </header>
      {loading ? (
        <div>
          <Skeleton
            count={recipes.length}
            width={340}
            height={500}
            className="border-2 p-5 my-4 rounded"
            containerClassName="container flex flex-wrap justify-around"
          />
        </div>
      ) : (
        <CardList recipes={recipes} />
      )}
    </div>
  );
};

export default RecipeMaster;

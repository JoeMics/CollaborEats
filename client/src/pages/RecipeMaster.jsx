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
      setLoading(false);
    }
    setLoading(true);
    getRecipeData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton
            count={6}
            width={340}
            height={500}
            className="border-2 p-5 mx-14 my-4 rounded"
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

import CardList from '../components/CardList/index';
import React, { useState, useEffect, useContext } from 'react';
import { fetchMasterRecipes } from '../services/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../context/ThemeContext';

const RecipeMaster = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Original Recipes';
  }, []);

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
    <div className="">
      <Navbar />
      <header className="container py-10">
        <h1 className="text-6xl font-serif dark:text-neutral-200">Master Recipes</h1>
      </header>
      {loading ? (
        <div>
          <Skeleton
            count={8}
            width={340}
            height={500}
            baseColor={theme === 'dark' && '#1d1d1d'}
            highlightColor={theme === 'dark' && '#242424'}
            className="p-5 my-4 rounded"
            containerClassName="container flex flex-wrap justify-around "
          />
        </div>
      ) : (
        <CardList recipes={recipes} />
      )}
    </div>
  );
};

export default RecipeMaster;

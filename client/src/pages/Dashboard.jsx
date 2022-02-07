import CardList from '../components/CardList/index';
import React, { useState, useEffect, useContext } from 'react';
import { fetchUserRecipes } from '../services/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../context/ThemeContext';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function getRecipeData() {
      const dbData = await fetchUserRecipes(user._id);
      setRecipes(dbData.data);
      setLoading(false);
    }
    setLoading(true);
    getRecipeData();
  }, [user]);

  return (
    <>
      <Navbar />
      <div>
        <header className="container py-10">
          <h1 className="text-6xl font-serif dark:text-neutral-200">Your Recipes</h1>
        </header>
        {loading ? (
          <div>
            <Skeleton
              count={recipes.length}
              width={340}
              height={500}
              baseColor={theme === 'dark' && '#1d1d1d'}
              highlightColor={theme === 'dark' && '#242424'}
              className="p-5 my-4 rounded"
              containerClassName="container flex flex-wrap justify-around"
            />
          </div>
        ) : (
          <CardList recipes={recipes} />
        )}
      </div>
    </>
  );
};

export default Dashboard;

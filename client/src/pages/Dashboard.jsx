import CardList from '../components/CardList/index';
import React, { useState, useEffect, useContext } from 'react';
import { fetchUserRecipes } from '../services/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    async function getRecipeData() {
      const dbData = await fetchUserRecipes(userId);
      setRecipes(dbData.data);
      // it loads too fast to see at the moment, so this will be removed in
      //real app and we just have setLoading(false);
      setTimeout(() => setLoading(false), 1000);
    }
    setLoading(true);
    getRecipeData();
  }, [userId]);

  return (
    <div>
      <header className="container py-10">
        <h1 className="text-6xl font-serif">Your Recipes</h1>
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

export default Dashboard;

import React, { useEffect, useState } from 'react';
import TreeContainer from './TreeContainer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { mostRecentRecipe, mostForkedRecipe } from '../../services/api';
import mostForkedRecipeId from '../../helpers/mostForks';

export default function VersionComponent() {
  const { id } = useParams();
  const [recent, setRecent] = useState('');
  const [mostForked, setMostForked] = useState('');

  useEffect(() => {
    async function getRecentData() {
      const recentRecipe = await mostRecentRecipe(id);
      setRecent(recentRecipe.data._id);
    }

    async function getMostForkedData() {
      const recipeTreeData = await mostForkedRecipe(id);
      console.log('recipe tree', recipeTreeData.data);
      const targetRecipe = mostForkedRecipeId(recipeTreeData.data);
      console.log('targetRecipeId', targetRecipe);
      setMostForked(targetRecipe);
    }

    getMostForkedData();
    getRecentData();
  }, []);

  return (
    <div className="flex-row mx-auto container pt-8">
      <div className="flex justify-between content-start">
        <h2 className="text-5xl font-serif dark:text-neutral-200">Recipe Tree</h2>
        <div className="flex">
          <button className="block items-center mx-2 px-4 py-2 bg-primary-500 hover:bg-primary-700 rounded text-white">
            <Link to={`${ROUTES.RECIPE}/${id}`}>Original Fork</Link>
          </button>
          <button className="block items-center mx-2 px-4 py-2 bg-primary-500 hover:bg-primary-700 rounded text-white">
            <Link to={`${ROUTES.RECIPE}/${recent}`}>Most Recent Fork</Link>
          </button>
          <button className="block items-center mx-2 px-4 py-2 bg-primary-500 hover:bg-primary-700 rounded text-white">
            <Link to={`${ROUTES.RECIPE}/${mostForked}`}>Most Fork</Link>
          </button>
        </div>
      </div>
      <div className="flex-row mx-auto container my-6 ">
        <TreeContainer treeId={id} />
      </div>
    </div>
  );
}

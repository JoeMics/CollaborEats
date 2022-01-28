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
      const targetRecipe = mostForkedRecipeId(recipeTreeData.data);
      setMostForked(targetRecipe);
    }

    getMostForkedData();
    getRecentData();
  }, [id]);

  return (
    <div className="flex-row mx-auto container pt-8">
      <h2 className="text-5xl font-serif dark:text-neutral-200">Recipe Tree</h2>
      <div className="flex justify-end h-0 mr-6 relative top-12">
        <button className="flex justify-center items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded text-neutral-200 text-lg font-bold h-10 w-40">
          <Link to={`${ROUTES.RECIPE}/${id}`}>Original</Link>
        </button>
        <button className="flex justify-center items-center px-4 py-2 mx-5 bg-primary-600 hover:bg-primary-700 rounded text-neutral-200 text-lg font-bold h-10 w-40">
          <Link to={`${ROUTES.RECIPE}/${recent}`}>Most Recent</Link>
        </button>
        <button className="flex justify-center items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded text-neutral-200 text-lg font-bold h-10 w-40">
          <Link to={`${ROUTES.RECIPE}/${mostForked}`}>Most Forked</Link>
        </button>
      </div>
      <div className="flex-row mx-auto container my-6 ">
        <TreeContainer treeId={id} />
      </div>
    </div>
  );
}

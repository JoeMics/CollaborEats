import React, { useState, useEffect } from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import CreateFormComponent from './CreateForm';
import EditFormComponent from './EditForm';
import { getRecipeData } from '../../services/api';

export default function RecipeComponent(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      const dbData = getRecipeData();

      const root = {
        name: dbData.data.recipe.title,
        id: dbData.data.recipe._id,
        children: [],
      };
      setTreeData(formattedAnswer);
      setLoading(false);
    }
    setLoading(true);
    getRecipeData();
  }, []);

  return (
    <div className="flex-row mx-auto container pt-8">
      {/* <div className="flex content-start space-x-6 bg-green-500">
        <h3>This is a very long recipe title</h3>
        <button>Fork</button>
        <button>Other Forks</button>
      </div>
      <div className="flex container bg-yellow-500">
        <Ingredients />
        <Instructions />
      </div> */}
      <EditFormComponent />
    </div>
  );
}

//61e607f0311d699fd35f509e

import React from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

export default function RecipeComponent(props) {
  return (
    <div className="flex-row mx-auto container bg-green-500 pt-16">
      <div className="flex content-start space-x-6">
        <h3>This is a very long recipe title</h3>
        <button>Fork</button>
        <button>Other Forks</button>
      </div>
      <div className="flex container bg-yellow-500">
        <Ingredients />
        <Instructions />
      </div>
    </div>
  );
}

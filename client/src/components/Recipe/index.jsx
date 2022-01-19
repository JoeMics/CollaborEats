import React, { useState } from 'react';
import axios from 'axios';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import CreateFormComponent from './CreateForm';

export default function RecipeComponent(props) {
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
      <CreateFormComponent />
    </div>
  );
}

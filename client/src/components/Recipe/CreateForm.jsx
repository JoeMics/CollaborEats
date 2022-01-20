import React, { useState } from 'react';
import List from './IngredientList';

export default function CreateFormComponent(props) {
  return (
    <form>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      ></input>
      <br></br>
      <textarea
        name="message"
        className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
        placeholder="Description"
      ></textarea>
      <br></br>
      <textarea
        name="message"
        className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
        placeholder="Instructions"
      ></textarea>
      <br></br>
      <label>Ingredients</label>
      <List />
      <br></br>
      <input
        type="submit"
        value="Submit"
        className="border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      ></input>
    </form>
  );
}

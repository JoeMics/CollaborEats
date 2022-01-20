import React, { useState } from 'react';
import List from './List';

export default function EditFormComponent({ recipe }) {
  const { title, description, instructions, ingredients } = recipe;
  const [state, setState] = useState({
    title,
    description,
    instructions,
    ingredients,
  });

  const editInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="w-1/3 px-4 py-2 border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
        value={state.title}
        onChange={editInput}
      ></input>
      <br></br>
      <textarea
        name="description"
        className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
        placeholder="Description"
        value={state.description}
        onChange={editInput}
      ></textarea>
      <br></br>
      <textarea
        name="instructions"
        className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
        placeholder="Instructions"
        value={state.instructions}
        onChange={editInput}
      ></textarea>
      <br></br>
      <label>Ingredients</label>
      <List ingredients={ingredients} edit={true} />
      <br></br>
      <input
        type="submit"
        value="Submit"
        className="border-2 border-gray-300 rounded-sm outline-none  focus:border-blue-400"
      ></input>
    </form>
  );
}

import React, { useState } from 'react';
import axios from 'axios';

export default function CreateFormComponent(props) {
  return (
    <form>
      <input type="text" id="title" name="title" placeholder="Title"></input>
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

      <input type="submit" value="Submit"></input>
    </form>
  );
}

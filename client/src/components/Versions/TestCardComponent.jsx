import React from 'react';

export default function Card(props) {
  return (
    <div class="p-8">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-300">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mountain</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button className="bg-red-500">See Forks</button>
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button className="bg-red-500">Find the recipe here!</button>
          </span>
        </div>
      </div>
    </div>
  );
}

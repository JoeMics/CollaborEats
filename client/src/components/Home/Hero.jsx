import React from 'react';

const Hero = () => {
  return (
    <div className="py-24 flex px-32 h-screen justify-between w-full tracking-widest">
      <div>
        <p className="text-green-300 text-lg font-bold uppercase">Create Your First Recipe Now</p>
        <h1 className="text-5xl w-96 font-bold text-green-700 mb-8">
          CollaborEat With Chefs and Make The Perfect Recipe
        </h1>
        <button className="flex items-center px-4 py-2 bg-blue-300 rounded text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          Fork it Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

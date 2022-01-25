import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Hero = () => {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: '75vh',
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('images/hero3.jpg')",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-bold text-5xl xl:text-6xl tracking-wider">
                  CollaborEat With Chefs to Make The Perfect Recipe
                </h1>
                <p className="mt-4 text-xl text-gray-300 font-semibold tracking-wider">
                  Create Your First Recipe Now
                </p>
                <button className="px-8 py-4 mt-4 bg-primary-700 rounded text-white hover:bg-primary-800">
                  <Link to={`${ROUTES.RECIPEPAGE}`} className="flex item-center">
                    <img className="h-6 w-6 mr-2" src="/images/logo.svg" alt="logo" />
                    Fork it Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: '70px' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 dark:text-dark-1000 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 dark:bg-dark-1000 dark:text-neutral-300 -mt-48">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="relative lg:pt-16 pt-6 w-full md:w-4/12 px-4">
              <article className="py-5 px-8 my-4 w-68  rounded-lg bg-neutral-200 dark:bg-dark-200 dark:shadow-black dark:shadow-lg shadow-md shadow-dark-50 mx-auto">
                <img
                  className="h-44 w-full rounded-md object-cover mx-auto object-bottom"
                  src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt="Recipe Card"
                />
                <h3 className="text-2xl underline py-2 mx-2 truncate">Spaghetti v1</h3>
                <p className="text-m pb-2 mx-2 truncate">by Ivan Tang</p>
                <p className="text-lg py-3 mx-2 truncate">Simple is always best!</p>
              </article>
            </div>

            <div className="relative pt-4 w-full md:w-4/12 px-4">
              <article className="py-5 px-8 my-4 w-68 rounded-lg bg-neutral-200 dark:bg-dark-200 dark:shadow-black dark:shadow-lg shadow-md shadow-dark-50 mx-auto">
                <img
                  className="h-48 w-full rounded-md object-cover mx-auto "
                  src="https://images.unsplash.com/photo-1635264685671-739e75e73e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt="Recipe Card"
                />
                <h3 className="text-2xl underline py-2 mx-2 truncate">Spaghetti v2</h3>
                <p className="text-m pb-2 mx-2 truncate">by Jamie Li</p>
                <p className="text-lg py-3 mx-2 truncate">
                  When it comes to pasta, more cheese is better!
                </p>
              </article>
            </div>

            <div className="relative pt-8 w-full md:w-4/12 px-4">
              <article className="py-5 px-8 my-4 w-68  rounded-lg bg-neutral-200 dark:bg-dark-200 dark:shadow-black dark:shadow-lg shadow-md shadow-dark-50 mx-auto">
                <img
                  className="h-48 w-full rounded-md mx-auto object-cover object-center"
                  src="https://images.unsplash.com/photo-1626844131082-256783844137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt="Recipe Card"
                />
                <h3 className="text-2xl underline py-2 mx-2 truncate">Spaghetti v3</h3>
                <p className="text-m pb-2 mx-2 truncate">by Joseph Micla</p>
                <p className="text-lg py-3 mx-2 truncate">
                  Good pasta should cost at least $30.00!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

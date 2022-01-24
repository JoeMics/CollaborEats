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
                <h1 className="text-white font-bold text-6xl tracking-wider">
                  CollaborEat With Chefs to Make The Perfect Recipe
                </h1>
                <p className="mt-4 text-lg text-gray-300 font-semibold tracking-wider">
                  Create Your First Recipe Now
                </p>
                <button className="px-4 py-2 mt-4 bg-teal-700 rounded text-white hover:bg-blue-600">
                  <Link to={`${ROUTES.RECIPEPAGE}`} className="flex item-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 -mt-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="relative basis-1/3 pt-12">
              <article className="py-5 px-12 my-4 w-68 mr-16 rounded-lg bg-white mx-auto">
                <img
                  className="h-44 w-68 rounded-lg object-cover mx-auto"
                  src="https://source.unsplash.com/random/500x300/?food"
                  alt="Recipe Card"
                />
                <h3 className="text-2xl underline py-2 mx-2 truncate">Title Title</h3>
                <p className="text-m pb-2 mx-2 truncate">by SOMEGUY</p>
                <p className="text-lg py-3 mx-2 truncate">
                  sladkfjsdklfjs flksjd flksd jflksdj fldkskl
                </p>
              </article>
            </div>

            <div className="relative basis-1/3">
              <article className="py-5 px-12 my-4 w-68 mr-16 rounded-lg bg-white mx-auto">
                <img
                  className="h-48 w-68 rounded-lg object-cover mx-auto"
                  src="https://source.unsplash.com/random/500x300/?food"
                  alt="Recipe Card"
                />
                <h3 className="text-2xl underline py-2 mx-2 truncate">Title Title</h3>
                <p className="text-m pb-2 mx-2 truncate">by SOMEGUY</p>
                <p className="text-lg py-3 mx-2 truncate">
                  sladkfjsdklfjs flksjd flksd jflksdj fldkskl
                </p>
              </article>
            </div>

            <div className="relative basis-1/3 pt-6">
              <article className="py-5 px-12 my-4 w-68 mr-16 rounded-lg bg-white mx-auto">
                <img
                  className="h-48 w-68 rounded-lg object-cover mx-auto"
                  src="https://source.unsplash.com/random/500x300/?food"
                  alt="Recipe Card"
                />
                <h3 className="text-2xl underline py-2 mx-2 truncate">Title Title</h3>
                <p className="text-m pb-2 mx-2 truncate">by SOMEGUY</p>
                <p className="text-lg py-3 mx-2 truncate">
                  sladkfjsdklfjs flksjd flksd jflksdj fldkskl
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

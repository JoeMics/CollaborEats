import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { AuthContext } from '../context/AuthContext';
import Toggle from './Toggle';
import React, { useState } from 'react';
import Modal from './Modal';
import Search from './Searchbar';

const Navbar = ({ transparent }) => {
  const { user, signInWithGoogle, handleSignOut } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav
      className={`${
        transparent && 'top-0 absolute z-50 w-full mt-4'
      } flex items-center justify-between flex-wrap p-2 lg:px-20 xl:px-32`}
    >
      <div className="flex content-center text-primary-500">
        <Link to={ROUTES.HOME}>
          <img
            className="w-12 h-12 xl:w-16 xl:h-16 mx-auto cursor-pointer"
            src="/images/logo.svg"
            alt="logo"
          />
        </Link>
        <h1 className="text-2xl xl:text-3xl my-auto ml-4 mr-6 text-primary-600 dark:text-neutral-200 hover:scale-105 transition-all">
          <Link to={ROUTES.HOME}>
            Collabor<span className="font-bold">Eats</span>
          </Link>
        </h1>
        <ul className="flex space-x-8">
          {user && (
            <li className="px-2 mx-1 my-auto text-md xl:text-xl dark:text-neutral-200">
              <Link to={ROUTES.DASHBOARD}>
                <span className="link-underline  hover:dark:text-primary-500 link-underline-primary">
                  Home
                </span>
              </Link>
            </li>
          )}

          <li className="text-md xl:text-xl px-2 mx-1 my-auto dark:text-neutral-200">
            <Link to={ROUTES.RECIPEPAGE}>
              <span className="link-underline hover:text-primary-500 link-underline-primary">
                Recipes
              </span>
            </Link>
          </li>
          <li
            className="text-md xl:text-xl px-2 xl:mx-1 my-auto dark:text-neutral-200 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <span className="link-underline link-underline-primary dark:link-underline-purple dark:hover:text-secondary-400">
              Create
            </span>
          </li>
        </ul>
      </div>
      <div className="flex">
        <Search placeholder={'search'} />

        {user ? (
          <button
            onClick={handleSignOut}
            className="rounded-full flex justify-center items-center px-4 py-2 mx-4 bg-neutral-200 dark:bg-dark-200 dark:hover:bg-dark-50 hover:bg-neutral-300 dark:text-neutral-200 font-semibold"
          >
            <img className="rounded-full max-h-7 mr-2" src={user.picture} alt="avatar" />
            {user.name}
          </button>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="rounded-full flex justify-center items-center px-4 py-2 mx-4 bg-neutral-200 dark:bg-dark-200 dark:hover:bg-dark-50 hover:bg-neutral-300 dark:text-neutral-200 font-semibold"
          >
            Sign In
          </button>
        )}

        <Toggle />
      </div>
      <>{showModal ? <Modal title={'Create a New Recipe'} setShowModal={setShowModal} /> : null}</>
    </nav>
  );
};

export default Navbar;

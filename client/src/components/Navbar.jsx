import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { AuthContext } from '../context/AuthContext';
import Toggle from './Toggle';
import React, { useState } from 'react';
import Modal from './Modal';
import Search from './Searchbar';

const Navbar = ({ transparent }) => {
  const { userId, setUserId } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  // For demo purposes
  const demoUsers = {
    '61e607f0311d699fd35f509e': 'JoeMics',
    '61e608607f04825b4c4cd517': 'IvanTang',
  };

  // For demo purposes
  const cycleUsers = () => {
    setUserId(
      userId === '61e607f0311d699fd35f509e'
        ? '61e608607f04825b4c4cd517'
        : '61e607f0311d699fd35f509e'
    );
  };

  return (
    <nav
      className={`${
        transparent && 'top-0 absolute z-50 w-full'
      } flex items-center justify-between flex-wrap p-2 lg:px-20 xl:px-32 mt-4`}
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
          <li className="px-2 mx-1 my-auto text-md xl:text-xl dark:text-neutral-200">
            <Link to={ROUTES.DASHBOARD}>
              <span className="link-underline  hover:dark:text-primary-500 link-underline-primary">
                Home
              </span>
            </Link>
          </li>
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
        <button
          className="block items-center px-4 py-2 text-xl dark:text-neutral-200"
          onClick={cycleUsers}
        >
          Demo: {demoUsers[userId]}
        </button>
        <Toggle />
      </div>
      <>{showModal ? <Modal title={'Create a New Recipe'} setShowModal={setShowModal} /> : null}</>
    </nav>
  );
};

export default Navbar;

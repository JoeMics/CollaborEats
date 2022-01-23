import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { AuthContext } from '../context/AuthContext';
import Toggle from './Toggle';

const Navbar = () => {
  const { userId, setUserId } = useContext(AuthContext);

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
    <nav className="flex items-center justify-between flex-wrap p-2 px-32 py-8">
      <div className="flex content-center">
        <img className="w-16 h-16 mx-auto" src="/images/logo.svg" alt="" />
        <h1 className="text-3xl my-auto ml-4 mr-6 text-teal-900 dark:text-white">
          <Link to={ROUTES.HOME}>
            Collabor<span className="font-bold">Eats</span>
          </Link>
        </h1>
        <ul className="flex space-x-8">
          <li className="px-2 mx-1 my-auto text-xl dark:text-white">
            <Link to={ROUTES.DASHBOARD}>
              <span className="link-underline link-underline-red hover:text-red-500">Home</span>
            </Link>
          </li>
          <li className="text-xl px-2 mx-1 my-auto dark:text-white">
            <Link to={ROUTES.RECIPEPAGE}>
              <span className="link-underline link-underline-teal hover:text-teal-400">
                Recipes
              </span>
            </Link>
          </li>
          <li className="text-xl px-2 mx-1 my-auto dark:text-white">
            <Link to={ROUTES.CREATE}>
              <span className="link-underline link-underline-purple hover:text-fuchsia-600">
                Create
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="relative mx-auto text-gray-600">
          <input
            className="border-2 my-auto border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            autoComplete="off"
            name="search"
            placeholder="Search"
          />
          <button type="button" className="relative -left-8  mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <button className="block items-center px-4 py-2 text-xl" onClick={cycleUsers}>
          Demo: {demoUsers[userId]}
        </button>
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;

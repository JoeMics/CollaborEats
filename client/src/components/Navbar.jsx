import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap text-white bg-neutral-700 p-2">
      <div className="flex">
        <h1 className="text-2xl">
          <Link to={ROUTES.HOME}>CollaborEats</Link>
        </h1>
        <ul className="flex">
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.DASHBOARD}>Home</Link>
          </li>
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.RECIPEPAGE}>Recipes</Link>
          </li>
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.CREATE}>Create</Link>
          </li>
          {/* Remove this later */}
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.VERSIONS}>Tree page</Link>
          </li>
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.RECIPE}>Recipe info page</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="pt-2 px-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mr-4"
            type="search"
            autoComplete="off"
            name="search"
            placeholder="Search"
          />
          <button type="button" className="absolute right-0 top-0 mt-5 mr-8">
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
        <button className="rounded-full mr-4 px-3 py-2 bg-gray-300 text-sm text-green-700">
          Login
        </button>
        <button className="rounded-full mr-4 px-3 py-2 bg-gray-300 text-sm text-green-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

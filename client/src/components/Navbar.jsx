import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-neutral-700 p-2">
      <div className="flex">
        <h1 className="text-2xl">
          <Link to={ROUTES.HOME}>CollaborEats</Link>
        </h1>
        <ul className="flex">
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
          </li>
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.RECIPE}>Recipe</Link>
          </li>
          <li className="text-sm px-2 mx-1 my-auto">
            <Link to={ROUTES.VERSIONS}>Versions</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="rounded-full mx-3 px-2 bg-gray-300 text-sm">Login</button>
        <button className="rounded-full px-2 bg-gray-300 text-sm">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

import jumbotronData from '../data/jumbo-data';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
const SearchBar = ({ placeholder, data }) => {
  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon"></div>
        <div className="mt-2 w-80 h-72 bg-teal-400 shadow-sm overflow-hidden overflow-y-auto">
          {jumbotronData.map((value, key) => {
            return (
              <span className="w-full h-16 flex items-center text-gray-800">
                <Link to={ROUTES.RECIPE}>
                  <p className="ml-4">{value.description}</p>
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// import { simpleSearch } from '../services/api';

// const Search = () => {
//   const handleSearch = async (searchPhrase) => {
//     const recipes = await simpleSearch(searchPhrase);
//     console.log(recipes.data);
//   };
//   return (
//     <>
//       <input
//         className="border-2 my-auto border-gray-300 bg-white
//   dark:bg-dark-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
//         type="search"
//         autoComplete="off"
//         name="search"
//         placeholder="Search"
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//             handleSearch(e.target.value);
//           }
//         }}
//       />
//       <button type="button" className="relative -left-8  mr-1" onClick={handleSearch}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="text-gray-600 h-4 w-4"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>
//       </button>

//     </>
//   );
// };

// export default Search;

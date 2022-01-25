import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import React, { useState } from 'react';
import { simpleSearch } from '../services/api';
import OutsideClick from '../hooks/useClickOutside';

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState('');

  const handleFilter = async (e) => {
    setInput(e.target.value);
    const query = e.target.value;
    console.log('query: ', query);
    const { data } = await simpleSearch(query);
    console.log(data);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(query);
    });
    if (query === '') {
      setFilteredData([]);
    } else {
      setFilteredData(() => newFilter);
    }
  };

  const handleClick = (e) => {
    setInput('');
    setFilteredData([]);
  };
  return (
    <div className="flex flex-col">
      <input
        className="w-60"
        type="search"
        placeholder="Search recipe..."
        name="search"
        autoComplete="off"
        value={input}
        onChange={handleFilter}
      />
      <div className="searchIcon"></div>
      {filteredData.length !== 0 && (
        <OutsideClick action={handleClick}>
          <div className="w-60 max-h-72 bg-white shadow-sm overflow-hidden overflow-y-auto hide-scrollbar absolute top-16">
            {filteredData.slice(0, 10).map((value, key) => {
              return (
                <span
                  key={value._id}
                  className="w-full h-16 flex items-center text-gray-800 hover:bg-gray-400"
                  onClick={handleClick}
                >
                  <Link to={`${ROUTES.RECIPE}/${value._id}`}>
                    <p
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleClick();
                        }
                      }}
                      className="ml-4"
                    >
                      {value.title}
                    </p>
                  </Link>
                </span>
              );
            })}
          </div>
        </OutsideClick>
      )}
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
// onKeyDown={(e) => {
//   if (e.key === 'Enter') {
//     handleSearch(e.target.value);
//   }
// }}
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

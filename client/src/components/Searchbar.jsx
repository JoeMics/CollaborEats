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

    const { data } = await simpleSearch(query);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(query);
    });
    if (query === '') {
      setFilteredData([]);
    } else {
      setFilteredData(() => newFilter);
    }
  };

  const handleClick = () => {
    setInput('');
    setFilteredData(() => []);
  };

  return (
    <div className="flex flex-col">
      <input
        className="lg:w-36 xl:w-56 rounded-full"
        type="search"
        placeholder="Search recipe..."
        name="search"
        autoComplete="off"
        value={input}
        onChange={handleFilter}
      />
      {filteredData.length !== 0 && (
        <OutsideClick action={handleClick}>
          <div className="lg:w-36 xl:w-56 max-h-72 bg-white shadow-sm overflow-hidden overflow-y-auto hide-scrollbar absolute top-16 z-10 rounded-lg">
            {filteredData.slice(0, 10).map((value) => {
              return (
                <Link key={value._id} to={`${ROUTES.RECIPE}/${value._id}`} onClick={handleClick}>
                  <span className="w-full h-16 flex items-center text-gray-800 hover:bg-gray-400">
                    <p className="ml-4">{value.title}</p>
                  </span>
                </Link>
              );
            })}
          </div>
        </OutsideClick>
      )}
    </div>
  );
};

export default SearchBar;

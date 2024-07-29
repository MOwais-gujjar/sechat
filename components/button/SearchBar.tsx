import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
      <div className=" relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-sm text-light-1 bg-dark-2 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-1"
      />
      <Search aria-hidden="true" className="absolute w-5 h-5 text-gray-400 right-3 top-2.5 " size={15}/>
      </div>
  );
};

export default SearchBar;
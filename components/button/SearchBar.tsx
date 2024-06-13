import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative left-0 flex items-center justify-center mx-auto border-gray-300 w-72 rounded-xl">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-4 rounded-xl border-t border-b border-r border-gray-300 focus:outline-none"
      />
      <Search aria-hidden="true" className=" absolute left-3 top-5 transform -translate-y-1/2 text-[#709CE6] hover:text-gray-700 " size={20}/>
    </div>
  );
};

export default SearchBar;
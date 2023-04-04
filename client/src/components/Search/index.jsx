import React from 'react'
import { SearchContext } from './../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className="flex">
      <form className="relative">
        <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="bg-[#9c9c9c3d] focus:ring-0 focus:outline-none w-[20vw] sm:w-full rounded-md py-1 pl-10 text-white font-extralight" type="text" aria-label="Filter projects" placeholder="Найдется все..." />
      </form>
    </div >

  )
}
export default Search;

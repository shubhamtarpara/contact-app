import React from "react";
import "./searchbar.css";

import { SearchIcon } from "@heroicons/react/outline";
const SearchBar = () => {
  const SearchInputHandler = () => {};
  return (
    <div className="main-content-search">
      <div className="search-btn ">
      <input
      className="search-input"
        type="text"
        title="search"
        placeholder="Search Contact"
        onChange={SearchInputHandler}
      />
      <span className="search-icon d-flex justify-content-center align-items-center">
        <SearchIcon className="search-icon"/>
      </span>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import styles from "./SearchBar.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = (e) => {
    document.getElementById("search").value = "";
    onSearch(search);
  };

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <input
          id="search"
          placeholder="Buscar Nome ou ID"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button
          className="searchBar-btn"
          onClick={onButtonClickHandler}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

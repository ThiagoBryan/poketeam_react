import React, { useState } from "react";
import styles from "./SearchType.css";

const SearchType = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
    document.getElementById("searchType").value = "";
    document.querySelector(".pokedex-header").style.visibility  = 'hidden';
  };
  
  return (
    <div className="searchType-container">
      <div className="searchType">
        <input
          id="searchType"
          placeholder="Buscar Por Tipo"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button
          type="submit"
          className="searchBar-btn"
          onClick={onButtonClickHandler}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchType;

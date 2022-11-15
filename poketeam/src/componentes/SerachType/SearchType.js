import React, { useState } from "react";

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
      document.getElementById("search").value = "";
    };
    return (
      <div>
        <div className="searchType-container">
          <div className="searchType">
            <input
              id="search"
              placeholder="Buscar Por tipo"
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <button className="searchBar-btn" onClick={onButtonClickHandler}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchType;
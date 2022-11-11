import React, { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("dito")

    const onChangeHandler = (e) => {
        console.log("pokemon ", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("pokemon", search)
    }
    return (
        <div className="searchBar-container">
            <div className="searchBar">
                <input placeholder="Buscar" onChange={onChangeHandler} />
            </div>
            <div className="searchBar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
        </div>
    )
}

export default SearchBar;
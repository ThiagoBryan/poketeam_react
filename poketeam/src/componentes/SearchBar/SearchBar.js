import React, { useState } from "react";
import styles from "./SearchBar.css"

const SearchBar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props;

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchBar-container">
            <div className="searchBar">
                <input placeholder="Buscar Pokémon" onChange={onChangeHandler} />
            </div>
            <div>
                <button className="searchBar-btn" onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>

    )

}

export default SearchBar;


// {pokemon ? (
//     <div>
//         <div>ID: # {pokemon.id}</div>
//         <div>Nome: {pokemon.name}</div>
//         <div>Tipo:
//         {pokemon.types.map((t, index) =>
//         <span key={index}> { t.type.name } </span>
//         )}
//         </div>
//         <div>Peso: {pokemon.weight} Kg</div>
//         <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//     </div>
// ) : null}
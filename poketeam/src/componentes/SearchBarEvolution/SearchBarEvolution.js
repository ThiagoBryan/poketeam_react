import React, { useState } from "react";
import { searchPokemonEvolution, searchPokemon } from "../../api";
import Pokemon from "../Pokemon/Pokemon";
import styles from "./SearchEvolution.css";

const SearchBarEvolution = (props) => {
  const loadingScreen = require("../../assets/charmander.gif");
  const [search, setSearch] = useState("dito");
  const [image, setImage] = useState();
  const [pokemon, setPokemon] = useState();
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    document.getElementById("searchEvo").value = "";
    onSearchHandlerType(search);
  };

  const onSearchHandlerType = async (id) => {
    const result = await searchPokemonEvolution(id);
    setPokemon(result);
    searchImage(result.chain.evolves_to[0].species.url.substring(42));
  };

  const searchImage = async (id) => {
    const resultImage = await searchPokemon(id);
    console.log(resultImage.sprites.front_default);
    setImage(resultImage.sprites.front_default);
  };

  return (
    <div className="searchEvoBar-container">
      <div className="searchBar">
        <input
          id="searchEvo"
          placeholder="Buscar Evolução ID"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button
          type="submit"
          className="searchEvoBar-btn"
          onClick={onButtonClickHandler}
        >
          Buscar
        </button>
        {pokemon ? (
          <div className="card-evoBody">
            <div className="card-evoTop">
              Nome: {pokemon.chain.evolves_to[0].species.name}
            </div>
            <img
              className="pokemon-image"
              src={image}
              alt={pokemon.chain.evolves_to[0].species.name}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBarEvolution;

// {pokemon ? (
//   <div className="card-evoBody">
//     <div className="card-evoTop">
//       Nome: {pokemon.chain.evolves_to[0].species.name}
//     </div>
//     <img
//       className="pokemon-image"
//       src={image}
//       alt={pokemon.chain.evolves_to[0].species.name}
//     />
//   </div>
// ) : null}

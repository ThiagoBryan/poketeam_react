import React, { useState } from "react";
import { searchPokemonEvolution, searchPokemon } from "../../api";
import styles from "./SearchEvolution.css";

const SearchBarEvolution = (props) => {
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
    // <div className="pokemon-Evocard">
      <div className="searchEvoBar-container">
        <div className="searchBar">
          <input placeholder="Buscar Evolução ID" onChange={onChangeHandler} />
        </div>
        <div>
          <button type="submit" className="searchBar-btn" onClick={onButtonClickHandler}>
            Buscar
          </button>
        </div>
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
    // </div>
  );
};

export default SearchBarEvolution;

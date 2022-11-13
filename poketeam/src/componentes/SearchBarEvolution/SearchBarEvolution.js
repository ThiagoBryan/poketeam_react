import React, { useState } from "react";
import { searchPokemonEvolution, searchPokemon } from "../../api";

const SearchBarEvolution = () => {
  const [search, setSearch] = useState("dito");
  const [image, setImage] = useState();
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
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
    <div className="searchBar-container">
      <div className="searchBar">
        <input placeholder="Buscar Evolução" onChange={onChangeHandler} />
      </div>
      <div>
        <button className="searchBar-btn" onClick={onButtonClickHandler}>
          Buscar
        </button>
      </div>
      {pokemon ? (
        <div>
          <div>Nome: {pokemon.chain.evolves_to[0].species.name}</div>
          <img src={image} alt={pokemon.chain.evolves_to[0].species.name} />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBarEvolution;

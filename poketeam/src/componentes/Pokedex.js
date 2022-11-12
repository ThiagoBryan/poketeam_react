import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  //   console.log("pokemons", pokemons);
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
        <div>Paginação:</div>
      </div>
      {loading ? (
      <div>Carregando..........</div>
      ) : (
        <div className="pokedex-grind">
          {/* {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <div>
                  <Pokemon key={index} pokemon={pokemon} />
                </div>
              );
            })} */}
        </div>
      )}
    </div>
  );
};

export default Pokedex;

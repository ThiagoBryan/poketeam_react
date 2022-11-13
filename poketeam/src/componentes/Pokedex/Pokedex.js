import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import styles from "../Pokedex/Pokedex.css"

const Pokedex = (props) => {
  const carregar = require("../../assets/charmander.gif")
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
        <div>Paginação:</div>
      </div>
      {loading ? (
           <div className="charmander-gif">
       <img 
       alt="Charmander"
       src={carregar}
       />
       </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                  <Pokemon key={index} pokemon={pokemon} />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;

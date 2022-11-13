import React from "react";
import styles from "./pokemon.css"

const Pokemon = (props) => {
  const { pokemon } = props;
  const adicionar = () => {
      console.log("Adicionou");
    }

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-types">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-adicionar-btn" onClick={adicionar}>Adicionar ao seu time</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

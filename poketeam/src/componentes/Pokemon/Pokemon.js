import React, { useContext } from "react";
import styles from "./pokemon.css"
import TeamContext from "../../Context/TeamContext";
import { CgPokemon } from "react-icons/cg";
import { MdOutlineCatchingPokemon } from "react-icons/md";


const Pokemon = (props) => {
  const {pokemonTeam, updatePokemonTeam} = useContext(TeamContext)
  const { pokemon } = props;
  const adicionar = () => {
    updatePokemonTeam(pokemon)
    }

  const poke = pokemonTeam.includes(pokemon) ? <MdOutlineCatchingPokemon className="poke" /> : <CgPokemon /> 
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
          <div className="add-team">
          <h6>Adicionar ao seu time</h6>
          <div onClick={adicionar}>{poke}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

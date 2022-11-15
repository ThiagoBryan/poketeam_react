import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import styles from "../Pokedex/Pokedex.css"
import Paginacao from "../Paginacao/Paginacao";

const Pokedex = (props) => {
  const loadingScreen = require("../../assets/charmander.gif")
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if(page > 0){
      setPage(page-1)
    }
  }
  const onRightClickHandler = () => {
    if(page+1 !== totalPages){
      setPage(page+1)
    }
  }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
        <Paginacao 
          page={page+1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
           <div className="charmander-gif">
       <img 
       alt="Charmander"
       src={loadingScreen}
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

import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;
    return (
        <div>
            {pokemon.name}
        </div>
    )
}

export default Pokemon;
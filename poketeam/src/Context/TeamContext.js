import React from "react";

const TeamContext = React.createContext({
    pokemonTeam: [],
    updatePokemonTeam: (id) => null
});

export const TeamProvider = TeamContext.Provider

export default TeamContext;
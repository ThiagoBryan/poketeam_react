import React, { useState, useEffect } from "react";
import "./App.css";
import Pokedex from "./componentes/Pokedex/Pokedex";
import { getPokemons, getPokemonData, searchPokemon, searchPokemonEvolution } from "./api";
import SearchBarEvolution from "./componentes/SearchBarEvolution/SearchBarEvolution";
import Footer from "./componentes/Footer/Footer";
import { TeamProvider } from "./Context/TeamContext";
import NavBar from "./componentes/NavBar/Navbar";
import SearchBar from "./componentes/SearchBar/SearchBar";

const sadLoading = require("./assets/sad_charmander.gif");
const teamKey = "t";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState([]);
  const [team, setTeam] = useState([]);
  const [viewPokemon, setViewPokemon] = useState([]);

  const itensPerPage = 27;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises); // pega as chamadas e retorna
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemon error ", error);
    }
  };

  const loadPokemonTeam = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(teamKey)) || [];
    setTeam(pokemons);
  };

  // const onViewPokemonClickHandler = () => {
  //   if(team > 0){
  //     setViewPokemon(pokemons)
  //   }else{
  //     console.log("nao");
  //   }
  // }

  // useEffect(() => {
  //   ViewPokemonTeam()
  // }, []);

  useEffect(() => {
    loadPokemonTeam();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updatePokemonTeam = (name) => {
    const updateTeam = [...team];
    const teamIndex = team.indexOf(name);
    if (teamIndex >= 0) {
      updateTeam.splice(teamIndex, 1);
    } else {
      updateTeam.push(name);
    }
    window.localStorage.setItem(teamKey, JSON.stringify(updateTeam));
    setTeam(updateTeam);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };
  const onSearchEvolutionHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemonEvolution(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <TeamProvider
      value={{
        pokemonTeam: team,
        updatePokemonTeam: updatePokemonTeam,
      }}
    >
      <div>
        <NavBar
        // onViewPokemonClick={onViewPokemonClickHandler}
        />
        <SearchBarEvolution onSearch={onSearchEvolutionHandler} />
        <SearchBar onSearch={onSearchHandler} />
        {notFound ? (
          <div className="not-found">
            Pokémon não Encontrado
              <img className="sad-loading" alt="SAD LOADING" src={sadLoading} />
            </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
        <Footer />
      </div>
    </TeamProvider>
  );
}

export default App;

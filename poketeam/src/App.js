import React, { useState, useEffect } from "react";
import "./App.css";
import Pokedex from "./componentes/Pokedex/Pokedex";
import {
  getPokemons,
  getPokemonData,
  searchPokemon
} from "./api";
import SearchBarEvolution from "./componentes/SearchBarEvolution/SearchBarEvolution";
import Footer from "./componentes/Footer/Footer";
import { TeamProvider } from "./Context/TeamContext";
import NavBar from "./componentes/NavBar/Navbar";
import SearchBar from "./componentes/SearchBar/SearchBar";
import SearchType from "./componentes/SerachType/SearchType";
import Pokemon from "./componentes/Pokemon/Pokemon";

const sadLoading = require("./assets/sad_charmander.gif");
const teamKey = "t";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState([]);
  const [team, setTeam] = useState([]);

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

  useEffect(() => {
    loadPokemonTeam();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updatePokemonTeam = (pokemon) => {
    const updateTeam = [...team];
    const teamIndex = team.indexOf(pokemon);
    if (teamIndex >= 0) {
      updateTeam.splice(teamIndex, 1);
    } else {
      updateTeam.push(pokemon);
    }
    window.localStorage.setItem(teamKey, JSON.stringify(updateTeam));
    setTeam(updateTeam);
    console.log(updateTeam);
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

  const onSearchTypeHandler = async (type) => {
    setLoading(true);
    setNotFound(false);
    const data = await getPokemons(1500);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    let pokemonsFilter = [];
    results.map((r) => {
      r.types.map((t) => {
        if (t.type.name.toLowerCase() == type.toLowerCase()) {
          pokemonsFilter.push(r);
        }
      });
    });
    if (pokemonsFilter.length == 0) {
      setNotFound(true);
    } else {
      setPokemons(pokemonsFilter);
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
        <NavBar/>
        <div className="SerachBars">
          <SearchBar onSearch={onSearchHandler} />
          <SearchType onSearch={onSearchTypeHandler} />
          <SearchBarEvolution /> 
        </div>
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

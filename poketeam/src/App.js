import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/Navbar";
import Pokedex from "./componentes/Pokedex/Pokedex";
import { getPokemons, getPokemonData } from "./api";
import SearchBarEvolution from "./componentes/SearchBarEvolution/SearchBarEvolution";
import SearchBar from "./componentes/SearchBar/SearchBar";
import Footer from './componentes/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises); // pega as chamadas e retorna
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemon error ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <SearchBarEvolution />
      <Pokedex pokemons={pokemons} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;

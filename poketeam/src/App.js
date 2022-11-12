import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./componentes/Navbar";
import SearchBar from "./componentes/SearchBar";
import Pokedex from "./componentes/Pokedex";
import { getPokemons } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const results = await getPokemons();

      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemon error ", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
}

export default App;

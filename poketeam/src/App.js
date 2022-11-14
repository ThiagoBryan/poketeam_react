import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/Navbar";
import Pokedex from "./componentes/Pokedex/Pokedex";
import { getPokemons, getPokemonData } from "./api";
import SearchBarEvolution from "./componentes/SearchBarEvolution/SearchBarEvolution";
import SearchBar from "./componentes/SearchBar/SearchBar";
import Footer from "./componentes/Footer/Footer";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
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

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <SearchBarEvolution />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
      <Footer />
    </div>
  );
}

export default App;

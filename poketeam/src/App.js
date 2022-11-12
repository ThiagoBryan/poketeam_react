import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./componentes/Navbar";
import SearchBar from "./componentes/SearchBar";
import Pokedex from './componentes/Pokedex';
import { getPokemom } from "./api";
// import axios from "axios";

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemom();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemon error ", error) 
    }
  }

//   useEffect(() => {
// axios.get({getPokemom}).then(({ data }) => {
//   setPokemons(data.results);
// });
// }, []); 
      
  useEffect(() => {
  console.log("carregou")
  // fetchPokemons();
  },[])

  // useEffect(() => {
  //   if (pokemons.length > 0) {
  //     setTimeout(() => {
  //       //timeout
  //       setLoading(false);
  //     }, 800); //timeout
  //   }
  // }, [fetchPokemons]);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
      <div className="App"></div>
    </div>
  );
}

export default App;

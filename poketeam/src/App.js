import React from "react";
import "./App.css";
import NavBar from "./componentes/Navbar";
import SearchBar from "./componentes/SearchBar";

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="App"></div>
    </div>
  );
}

export default App;

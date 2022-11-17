import React, { useContext } from "react";
import styles from "./NavBar.css";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import TeamContext from "../../Context/TeamContext";

const NavBar = (props) => {
  const { pokemonTeam } = useContext(TeamContext);
//   const home = document.querySelector("#refresh");
//   home.addEventListener("click", function () {
//     location.reload();
//   });

  const logo = require("../../assets/Poketeam.png");
  return (
    <nav>
      {/* <button id="refresh" onClick={home}>HOME</button> */}
      <div>
        <img alt="Pokemon Team" src={logo} className="navbar-img" />
      </div>
      <div>
        <div className="icon-pokemon-team" >
          <MdOutlineCatchingPokemon />
        </div>
        <h3>Seu Time Contém: {pokemonTeam.length} Pokémons</h3>
      </div>
    </nav>
  );
};

export default NavBar;

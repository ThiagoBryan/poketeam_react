import React, {useContext} from "react";
import styles from "./NavBar.css"
import { MdOutlineCatchingPokemon } from "react-icons/md";
import TeamContext from "../../Context/TeamContext";

const NavBar = (props) => {
    const { pokemonTeam } = useContext(TeamContext)
    // const {onViewPokemonClick} = props;
    const logo = require("../../assets/Poketeam.png")
    return(
       <nav>
            <div>
                <img
                    alt="Pokemon Team"
                    src={logo}
                    className="navbar-img"
                />
            </div>
            <div>
                <div className="icon-pokemon-team" /*onClick={onViewPokemonClick}*/><MdOutlineCatchingPokemon /></div>
                <h3>Seu Time Contém: {pokemonTeam.length} Pokémons</h3>
            </div>
       </nav>
    )
}

export default NavBar;
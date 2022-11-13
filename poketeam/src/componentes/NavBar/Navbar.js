import React from "react";
import styles from "./NavBar.css"

const NavBar = () => {
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
       </nav>
    )
}

export default NavBar;
import React from "react";

const NavBar = () => {
    return(
       <nav>
            <div>
                <img
                    alt="Pokemon Team"
                    src={require("../assets/Poketeam.png")}
                    className="navbar-img"
                />
            </div>
       </nav>
    )
}

export default NavBar;
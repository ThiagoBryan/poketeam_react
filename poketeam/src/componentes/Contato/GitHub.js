import React from "react";
import { BsGithub } from "react-icons/bs";
import styles from "./Contato.css"



const GitHub = () => {
    return(
        <div className="icon-contato">
             <a href="https://github.com/ThiagoBryan">
            <BsGithub size={30} />
            </a>

        </div>
    )
}

export default GitHub;
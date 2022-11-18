import React from "react";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Contato.css"



const Linkedin = () => {
    return(
        <div className="icon-contato">
             <a href="https://www.linkedin.com/in/thiago-thurler-61220199/">
            <BsLinkedin size={30}  />
            </a>

        </div>
    )
}

export default Linkedin;
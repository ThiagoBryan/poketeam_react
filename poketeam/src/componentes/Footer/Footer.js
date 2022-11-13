import React from "react";
import styles from "./Footer.css"
import Linkedin from './../Contato/Linkedin';
import GitHub from "../Contato/GitHub";

const Footer = () => {
    return (
        <div className="footer">
           <Linkedin />
           <GitHub />
           <p>Thiago @ 2022</p>
        </div>
    )
}

export default Footer;
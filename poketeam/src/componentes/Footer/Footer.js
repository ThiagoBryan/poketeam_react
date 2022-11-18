import React from "react";
import styles from "./Footer.css";
import Linkedin from "./../Contato/Linkedin";
import GitHub from "../Contato/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">Thiago Bryan 2022</p>
      <div className="icon-linkedin">
        <Linkedin />
      </div>
      <div className="icon-github">
        <GitHub />
      </div>
    </div>
  );
};

export default Footer;

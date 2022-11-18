import React, { useContext, useState } from "react";
import styles from "./NavBar.css";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import TeamContext from "../../Context/TeamContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const { pokemonTeam } = useContext(TeamContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logo = require("../../assets/pikachu.png");
  const modalImage = require("../../assets/pikachu.png");
  function refreshPage() {
    window.parent.location = window.parent.location.href;
  }

  return (
    <nav>
      <button className="refresh" onClick={refreshPage}>
        HOME
      </button>
      <div>
        <img alt="Pikachu" src={logo} className="navbar-img" />
      </div>
      <div className="pokemon-team" >
        <h5>Seu Time Contém: {pokemonTeam.length} Pokémons</h5>
        <h5>Abra sua Pokébola para Visualizar seu Time</h5>
      </div>
      <div className="icon">
        <MdOutlineCatchingPokemon size={50} onClick={handleShow} />
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black", fontWeight:"bold", alignItems:"center"}}> Pokemon Team </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {pokemonTeam.map((pokemon, index) => {
            return (
              <div key={index} className="pokemon-text">
                {pokemon.toUpperCase()}
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"rgb(144, 144, 161)"}}>
          <Button style={{backgroundColor:"rgba(255, 255, 6, 0.773)", color:"black", fontWeight:"bold", alignItens:"center"}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default NavBar;

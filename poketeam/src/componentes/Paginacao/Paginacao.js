import React from "react";
import styles from "./Paginacao.css";
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Paginacao = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;
    return (
        <div className="paginacao-container">
            <div className="left-click" onClick={onLeftClick}><BsArrowLeftCircleFill /></div>
            <div className="text"> {page} de {totalPages}</div>
            <div className="right-click" onClick={onRightClick}><BsFillArrowRightCircleFill /></div>
        </div>
    )
}

export default Paginacao;
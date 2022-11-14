import React from "react";
import styles from "./Paginacao.css"
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Paginacao = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;
    return (
        <div className="paginacao-container">
            <button onClick={onLeftClick}><div><BsArrowLeftCircleFill /></div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div><BsFillArrowRightCircleFill /></div></button>
        </div>
    )
}

export default Paginacao;
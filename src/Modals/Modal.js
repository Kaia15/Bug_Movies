import React from "react";
import modalStyle from './Modal.module.css';

// import {createContext} from 'react';
// const modalContext = createContext();

function Modal({imgPath, src}) {
    let name = src.name
    let title = src.title
    let identity;

    let date;
    let airDate = src.first_air_date;
    let releaseDate = src.release_date;

    if (typeof name !== "undefined") identity = name;
    else identity = title

    if (typeof airDate !== 'undefined') date = airDate
    else date = releaseDate
    return (
        
        <div className={modalStyle.modalContainer}>
                <img src = {imgPath} className = {modalStyle.imgCSS} />
                <div className={modalStyle.modalContent}>
                    <h3 style = {{color: "black", fontFamily: "Impact, Haettenschweiler, sans-serif"}}> {identity} </h3>
                    <p> Date released: {date}</p>
                    <p> Overview: {src.overview}</p>
                    <div style = {{display: "flex", flexDirection: "row"}}>
                    <p> Total views: {src.popularity}</p>
                    <p style = {{marginLeft: "30px"}}> Rating: {src.vote_average}</p>
                    </div>
                    
                </div>
        </div>
        
    )
}

export default Modal
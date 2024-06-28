import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/NotFound.scss";

const NotFound = () =>{
    return(
        <div className="NotFound">
            <h1 className="NotFound__title">404</h1>
            <p className="NotFound__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to ="/" className="NotFound__link">Retourner sur la page d'accueil</Link>
        </div>
        

    );

};

export default NotFound;
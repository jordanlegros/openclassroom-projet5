import React from "react";
import "../styles/Card.scss";

const Card = ({ title, cover }) => {
  return (
    <div className="Card">
        <div className="Card__Content">
            <p className ="Card__Title">{title}</p>
            <img src={cover} alt="Présentation du logement" className="Card__Cover"/>
        </div>
      
    </div>
  );
};

export default Card;
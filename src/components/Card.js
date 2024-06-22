import React from "react";
import "../styles/Card.scss";

const Card = ({ title }) => {
  return (
    <div className="Card">
        <div className="Card__Content">
            <p className ="Card__Title">{title}</p>
        </div>
      
    </div>
  );
};

export default Card;
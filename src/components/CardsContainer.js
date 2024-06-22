import React from "react";
import Card from "./Card";
import "../styles/CardsContainer.scss";
import data from "../assets/backend/donnees.json"; 

const CardsContainer = () => {
  return (
    <div className="CardsContainer">
      {data.map((location) => (
        <Card key={location.id} title={location.title} />
      ))}
    </div>
  );
};

export default CardsContainer;
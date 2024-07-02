import { useNavigate } from 'react-router-dom';
import React from "react";
import Card from "./Card";
import "../styles/CardsContainer.scss";
import data from "../assets/backend/donnees.json"; 

const CardsContainer = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    console.log("click");
    navigate(`/card/${id}`);
  };


  return (
    <div className="CardsContainer">
      {data.map((location) => (
        <button key={location.id} onClick={() => handleCardClick(location.id)}>
          <Card key={location.id} title={location.title}  />
          </button>
      ))}
    </div>
  );
};

export default CardsContainer;
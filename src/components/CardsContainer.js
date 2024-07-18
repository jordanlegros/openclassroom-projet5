import { Link } from 'react-router-dom';
import React from "react";
import Card from "./Card";
import "../styles/CardsContainer.scss";
import data from "../assets/backend/donnees.json";

const CardsContainer = () => {

  return (
    <div className="CardsContainer">
      {data.map((location) => (
        <div className="CardsContainer__Card" key={location.id}>
        
          <Link key={location.id} to={`/card/${location.id}`} style={{ textDecoration: 'none' }}>
            <Card key={location.id} title={location.title} cover={location.cover}  className="CardsContainer__CardLink"/>
          </Link>

        </div>
      ))}
    </div>
  );
};

export default CardsContainer;

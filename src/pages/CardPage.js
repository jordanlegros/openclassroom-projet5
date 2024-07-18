import React from "react";
import { useParams, Navigate  } from "react-router-dom";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import styles from "../styles/CardPage.scss";
import data from "../assets/backend/donnees.json";

const CardPage = () => {
  const { id } = useParams();
 
  const cardData = data.find(item => item.id === id);

  if (!cardData) {
    return <Navigate to="*" />;
  }


  const tags = cardData.tags || [];

  const description = cardData.description || "";
  let equipments = "";
  if (cardData.equipments && Array.isArray(cardData.equipments)) {
    equipments = cardData.equipments.map((equipment, index) => (
      <React.Fragment key={index}>
        {equipment}
        {index !== cardData.equipments.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return (
    <div className="CardPage">
      <Carousel props={cardData.pictures} />
      <div className="CardPage__Info">
        <div className="CardPage__TitleAndTag">
          <h1 className="CardPage__title">{cardData.title}</h1>
          <h2 className="CardPage__location">{cardData.location}</h2>
          <div className="CardPage__TagContainer">
            {tags.map((tag) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
        </div>
        <div className="CardPage__PPAndRating">
          <div className="CardPage__PP">
            <div className="CardPage__PP--name">{cardData.host.name}</div>
            <img
              className="CardPage__PP--PP"
              src={cardData.host.picture}
              alt="Photo de profil de l'utilisateur"
            />
          </div>
          <div className="CardPage__Rating">
            <Rating rating={cardData.rating} />
          </div>
        </div>
      </div>
      <div className="CardPage__details">
        <Collapse title="Description" content={description} className="Collapse__details" />

        <Collapse title="Équipements" content={equipments} className="Collapse__details" />

      </div>
    </div>
  );
};

export default CardPage;

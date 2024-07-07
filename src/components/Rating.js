import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Rating.scss";

const Rating = ({ rating }) => {
    // Nombre total d'étoiles
    const totalStars = 5;

    // Arrondi du rating pour s'assurer qu'il est dans les limites 0-5
    const roundedRating = Math.round(rating * 2) / 2;

    // Création des étoiles pleines et demi-étoiles
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
        if (roundedRating >= i) {
            // Étoile pleine
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="Rating__fullStar" />);
        } else if (roundedRating === i - 0.5) {
            // Étoile demi-remplie
            stars.push(
                <span key={i} className="star-half">
                    <FontAwesomeIcon icon={faStar} />
                </span>
            );
        } else {
            // Étoile vide
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="Rating__emptyStar" />);
        }
    }

    return (
        <div className="Rating">
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
           
        </div>
    );
};

export default Rating;

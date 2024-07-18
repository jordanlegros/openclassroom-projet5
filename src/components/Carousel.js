import React, { useState } from 'react';
import styles from "../styles/Carousel.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({ props}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Vérification si props est vide
  if (!props || React.Children.count(props) === 0) {
    return (
      <div className="Carousel__error">
        Erreur lors du chargement des images
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(props));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(props)) % React.Children.count(props));
  };

  const childrenCount = React.Children.count(props);

  return (
    <div className='Carousel'>
      <div className="Carousel__wrapper">
        {React.Children.map(props, (child, index) => (
          <div className="Carousel__slide" style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <img src={child} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {childrenCount > 1 && (
        <>
          <button className="Carousel__button--prev" onClick={prevSlide}>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" className="Carousel__arrow" />
          </button>
          <button className="Carousel__button--next" onClick={nextSlide}>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" className="Carousel__arrow" />
          </button>
          <div className="Carousel__counter">
          {currentIndex + 1}/{childrenCount}
           </div>
        </>
      )}
     
    </div>
  );
};

export default Carousel;
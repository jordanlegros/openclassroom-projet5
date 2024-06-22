import React from "react";
import "../styles/HomePage.scss"
import Banner from "../components/Banner"
import CardsContainer from "../components/CardsContainer"

const HomePage = () => {
  return (
    <div className ="HomePage">
      <Banner />
      <CardsContainer />
    </div>
  );
};

export default HomePage;
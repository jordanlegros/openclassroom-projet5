import React from "react";
import "../styles/Banner.scss"
import BannerImage from "../assets/Images/Banner.jpg"

const Banner = () => {
    return(
        <div className = "Banner">
            <h1 className="Banner__Text">Chez vous, partout et ailleurs</h1>
            <img src={BannerImage} alt="seaside" className="Banner__Image" />
        </div>
    );
    
};

export default Banner;
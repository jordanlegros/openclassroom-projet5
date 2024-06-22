import React from "react";
import "../styles/Footer.scss"
import Logo from "../assets/Images/Logo_white.png"

const Footer = () => {
    return(
        <footer className="Footer">
            <img src={Logo} alt="Kasa Logo white version" className="Footer__Logo" />
            <p className="Footer__mentions">©2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer
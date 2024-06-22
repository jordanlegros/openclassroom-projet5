import React from "react";
import NavBar from "./NavBar";
import Logo from "../assets/Images/Logo.png"
import "../styles/Header.scss"

const Header = () => {
    return(
        <header className="header">
          <img src={Logo} alt="Logo Kasa" className = "header__logo" />
          <NavBar />
        </header>
    );
};

export default Header
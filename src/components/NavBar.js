import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active-link">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active-link">À propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

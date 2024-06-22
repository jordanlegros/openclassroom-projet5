import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss"

const NavBar = () => {
    return(
        <nav className = "NavBar">
            <ul>
                <li>
                    <Link to ="/">Accueil</Link>
                </li>
                <li>
                    <Link to ="/about">À propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
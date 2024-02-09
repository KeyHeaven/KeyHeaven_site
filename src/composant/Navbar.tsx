// Navbar.tsx
import React, { useState } from "react";
import "./Navbar.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu is open: ", isMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#accueil">
            <img src="keylogo.png" alt="LogoKeyheaven" className="logok"></img>
          </a>
        </li>
      </ul>
      <ul className="menuImportant">
        <li>
        <Link to="/Homepage">Accueil</Link>
        </li>
        <li>
          <a href="#application">Application</a>
        </li>
        <li>
        <li>   <Link to="/CGV">Conditions générales de ventes</Link></li>
        </li>
        <li>
          <a href="#apropos">A propos de nous</a>
        </li>
      </ul>

      <ul>
        <li className="menuBtn">
          <a href="#apropos">
            <Button
              onClick={() => alert("Se connecter au portail Admin")}
              label="Se connecter au portail Admin"></Button>
          </a>
        </li>
        <li className="menuHamburger">
          <a href="#apropos">
            {" "}
            <button className={`menu-toggle`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </a>
        </li>
      </ul>
      {isMenuOpen && (
        <div className="menu-container">
          <div>
            <a href="#accueil">
              <img
                src="keylogo.png"
                alt="LogoKeyheaven"
                className="logoM"></img>
            </a>
            <p>KeyHeaven</p>
            <img
              src="close.png"
              alt="close"
              className="logoX"
              onClick={toggleMenu}></img>
          </div>
          <ul className="menu">
            <li>
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#application">Application</a>
            </li>
            <li>
              <a href="#conditions-generales">Conditions générales de ventes</a>
            </li>
            <li>
              <a href="#apropos">A propos de nous</a>
            </li>
            <li>
              <a href="#apropos">
                <Button
                  onClick={() => alert("Se connecter au portail Admin")}
                  label="Se connecter au portail Admin"></Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

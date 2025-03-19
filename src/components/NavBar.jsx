import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logoSrc from "../../public/images/azul.png";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoSrc} alt="Aeronova Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};


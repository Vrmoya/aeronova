import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logoSrc from "../../public/images/trans_letraazul.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      setSelectedService(""); // Esto hace que se resetee el select
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoSrc} alt="Aeronova Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li>
          <select name="services" onChange={handleServiceChange} value={selectedService}>
            <option value="" disabled>Servicios</option>
            <option value="/aerodromos">Aeródromos</option>
            <option value="/helipuertos">Helipuertos</option>
            <option value="/vant">VANT</option>
            <option value="/consultoria">Consultoría</option>
            <option value="/ladladh">LAD - LADH</option>
          </select>
        </li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

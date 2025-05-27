/*import React, { useState } from "react";
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
*/

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logoSrc from "../../public/images/trans_letraazul.png";

export const Navbar = () => {
  const navigate = useNavigate();
  // Estado para controlar la visibilidad del menú principal de Servicios
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  // Estado para controlar la visibilidad del sub-menú de Infraestructura
  const [showInfrastructureSubmenu, setShowInfrastructureSubmenu] = useState(false);

  // Función para cerrar todos los desplegables
  const closeAllDropdowns = () => {
    setShowServicesDropdown(false);
    setShowInfrastructureSubmenu(false);
  };

  // Función para manejar la navegación y cerrar los desplegables
  const handleNavigationClick = (path) => {
    navigate(path);
    closeAllDropdowns();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoSrc} alt="Aeronova Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" onClick={closeAllDropdowns}>Inicio</Link></li>
        <li><Link to="/nosotros" onClick={closeAllDropdowns}>Nosotros</Link></li>
        <li className="dropdown"> {/* Agregamos una clase para estilizar el menú desplegable */}
          <div
            className="dropdown-trigger"
            onClick={() => setShowServicesDropdown(!showServicesDropdown)}
          >
            Servicios
          </div>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              {/* Opción de Infraestructura que actúa como disparador de sub-menú */}
              <div
                className="submenu-trigger"
                onClick={() => setShowInfrastructureSubmenu(!showInfrastructureSubmenu)}
              >
                Infraestructura
              </div>
              {/* Sub-menú de Infraestructura */}
              {showInfrastructureSubmenu && (
                <div className="submenu">
                  <Link to="/aerodromos" onClick={() => handleNavigationClick("/aerodromos")}>Aeródromos</Link>
                  <Link to="/helipuertos" onClick={() => handleNavigationClick("/helipuertos")}>Helipuertos</Link>
                  <Link to="/ladladh" onClick={() => handleNavigationClick("/ladladh")}>LAD - LADH</Link>
                </div>
              )}
              {/* Otras opciones de Servicios que navegan directamente */}
              <Link to="/cartografia" onClick={() => handleNavigationClick("/cartografia")}>Cartografia</Link>
              <Link to="/vant" onClick={() => handleNavigationClick("/vant")}>VANT</Link>
              <Link to="/consultoria" onClick={() => handleNavigationClick("/consultoria")}>Consultoría</Link>
            </div>
          )}
        </li>
        <li><Link to="/contact" onClick={closeAllDropdowns}>Contacto</Link></li>
      </ul>
    </nav>
  );
};
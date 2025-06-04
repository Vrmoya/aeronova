import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logoSrc from "../../images/trans_letraazul.png";

export const Navbar = () => {
  const navigate = useNavigate();
  // Estado para controlar la visibilidad del menú principal de Servicios
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  // Estado para controlar la visibilidad del sub-menú de Infraestructura
  const [showInfrastructureSubmenu, setShowInfrastructureSubmenu] = useState(false);
  // Nuevo estado para controlar la visibilidad del menú principal (para el modo móvil)
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Función para cerrar todos los desplegables (incluido el menú móvil)
  const closeAllDropdowns = () => {
    setShowServicesDropdown(false);
    setShowInfrastructureSubmenu(false);
    setShowMobileMenu(false); // Cierra el menú móvil también
  };

  // Función para manejar la navegación y cerrar los desplegables
  const handleNavigationClick = (path) => {
    navigate(path);
    closeAllDropdowns();
  };

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    // Asegurarse de que los submenús se cierren si el menú principal se cierra
    if (showMobileMenu) {
      setShowServicesDropdown(false);
      setShowInfrastructureSubmenu(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoSrc} alt="Aeronova Logo" />
        {/* Botón de hamburguesa para dispositivos móviles */}
        <button className="navbar-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
          &#9776; {/* Icono de hamburguesa Unicode */}
        </button>
      </div>
      {/* Añadimos la clase 'active' o 'hidden' dinámicamente para controlar la visibilidad en móvil */}
      <ul className={`navbar-links ${showMobileMenu ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeAllDropdowns}>Inicio</Link></li>
        <li><Link to="/nosotros" onClick={closeAllDropdowns}>Nosotros</Link></li>
        <li className="dropdown">
          <div
            className="dropdown-trigger"
            onClick={() => setShowServicesDropdown(!showServicesDropdown)}
          >
            Servicios
          </div>
          {/* Se renderiza el dropdown-menu solo si showServicesDropdown es true */}
          {showServicesDropdown && (
            <div className="dropdown-menu">
              <div
                className="submenu-trigger"
                onClick={() => setShowInfrastructureSubmenu(!showInfrastructureSubmenu)}
              >
                Infraestructura
              </div>
              {/* Se renderiza el submenu solo si showInfrastructureSubmenu es true */}
              {showInfrastructureSubmenu && (
                <div className="submenu">
                  <Link to="/aerodromos" onClick={() => handleNavigationClick("/aerodromos")}>Aeródromos</Link>
                  <Link to="/helipuertos" onClick={() => handleNavigationClick("/helipuertos")}>Helipuertos</Link>
                  
                </div>
              )}
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
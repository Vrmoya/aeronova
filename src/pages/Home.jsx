import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Importar FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Importa el icono de Instagram
import helipuertos from "../images/HELI/heli9.jpg";
import aerodromos from "../images/AD/aerodromo4.jpeg";
import cartografia from "../images/CARTO/CARTO1.jpeg";
import vant from "../images/DRONES/Drone_1.jpeg";
import consultoria from "../images/DRONES/consultoria.jpeg";

export const Home = () => {
  return (
    <div className="home">
      <h2>Bienvenidos</h2>
      <h1>Aeronova Consultora Aeronáutica</h1>

      <Carousel
        showThumbs={false}
        autoplay
        infiniteLoop
        showStatus={false}
        className="home-carousel" // Usa una clase específica para el carrusel en Home.css
      >
        <div>
          <Link to="/helipuertos" className="carousel-link">
            <div className="contenedor carousel-item">
              <img src={helipuertos} alt="helipuerto" />
              <div className="texto">
                <h3>HELIPUERTOS</h3>
                <p>
                  Un helipuerto es un área o pista de aterrizaje y despegue
                  destinada a ser utilizada por helicópteros.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/aerodromos" className="carousel-link">
            <div className="contenedor carousel-item">
              <img src={aerodromos} alt="aerodromo" />
              <div className="texto">
                <h3>AERODROMOS</h3>
                <p>
                  Un aeródromo es una zona definida, en tierra o agua, que
                  incluye edificios, instalaciones y equipos, destinada a ser
                  utilizada total o parcialmente para la llegada, salida y
                  movimiento en superficie de aeronaves.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/cartografia" className="carousel-link">
            <div className="contenedor carousel-item">
              <img src={cartografia} alt="consultoria" />
              <div className="texto">
                <h3>CARTOGRAFIA</h3>
                <p>
                  Es un conjunto de estudios y operaciones científicas,
                  artísticas y técnicas que intervienen en el establecimiento de
                  mapas, planos, cartas, entre otros, y su utilización con el
                  fin de realizar la representación de un espacio físico con
                  datos específicos representados en un producto cartográfico.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/vant" className="carousel-link">
            <div className="contenedor carousel-item">
              <img src={vant} alt="DRONE 1" />
              <div className="texto">
                <h3>VANT</h3>
                <p>Vehiculo Aereo No Tripulado (DRONES)</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/consultoria" className="carousel-link">
            <div className="contenedor carousel-item">
              <img src={consultoria} alt="consultoria" />
              <div className="texto">
                <h3>CONSULTORIA</h3>
              </div>
            </div>
          </Link>
        </div>
      </Carousel>

      {/* Nuevo contenedor para el icono de Instagram */}
      <div className="instagram-container">
        <a
          href="https://www.instagram.com/aeronova_consultora"
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad al abrir en nueva pestaña
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />{" "}
          {/* Icono de Instagram, tamaño 3 veces el normal */}
          @aeronova_consultora
        </a>
      </div>
    </div>
  );
};

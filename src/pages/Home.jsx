import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {
  return (
    <div className="home">
      <h2>Bienvenidos</h2>
      <h1>Aeronova Consultora Aeronautica</h1>
      
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
              <img src="../images/HELI/heli9.jpg" alt="helipuerto" />
              <div className="texto">
                <h3>HELIPUERTOS</h3>
                <p>Un helipuerto es un área, a menudo una pista, designada para el aterrizaje y despegue de helicópteros</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/aerodromos" className="carousel-link">
            <div className="contenedor carousel-item">
              <img src="../images/AD/aerodromo4.jpeg" alt="aerodromo" />
              <div className="texto">
                <h3>AERODROMO</h3>
                <p>Un aeródromo es una superficie terrestre o acuática definida y habilitada para el despegue, aterrizaje y movimiento de aeronaves. Se trata de un término general que abarca cualquier área utilizada para estas operaciones aéreas</p>
              </div>
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};
import React from "react";
import "../styles/CArtografia.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Cartografia = () => {
  return (
    <div className="cartografia">
      <h1>Cartografia</h1>

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="carousel"
      >
        <div>
          <img src="../images/AD/aerodromo1.jpg" alt="Aeródromo 1" />
        </div>
        
      </Carousel>

      <h3>Realizamos productos de informacion aereonautica:</h3>
      <ul>
        <li>Planos de obstáculos tipo A, B y C.</li>
        <li>Planos de Aerodromos.</li>
        <li>Cartas de Procedimiento.</li>
        <li>Cartas Visuales.</li>
        <li>Rutas de Espacio Aereo Superior e Inferior.</li>
        <li>Relevamiento, Analisis, publicacion y Gestion de información Aeronautica.</li>
        
      </ul>
    </div>
  );
};

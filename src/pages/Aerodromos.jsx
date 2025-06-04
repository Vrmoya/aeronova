import React from "react";
import "../styles/Aerodromo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Aerodromos = () => {
  return (
    <div className="aerodromo">
      <h1>AERODROMOS</h1>

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
        <div>
          <img src="../images/AD/aerodromo2.jpg" alt="Aeródromo 2" />
        </div>
        <div>
          <img src="../images/AD/aerodromo3.jpeg" alt="Aeródromo 3" />
        </div>
      </Carousel>

      <h3>Realizamos proyectos publicos y/o privados:</h3>
      <ul>
        <li>
          Estudios de factibilidad, proyecto ejecutivo, confección de la
          documentación aeronáutica.
        </li>
        <li>
          Proyectos de ampliación o modificación de pistas, plataformas o
          rodajes.
        </li>
        <li>
          Diagramación de ayudas visuales, señalamiento visual diurno y/o
          nocturno.
        </li>
        <li>Plan de emergencia.</li>
        <li>Plan de mantenimiento.</li>
        <li>
          Plano de aeródromo, plano tipo A, tipo B, plano de atraque de
          aeronaves.
        </li>
        <li>Relevamientos de obstáculos, datos electrónicos de terreno.</li>
        <li>Aerodromos Agroaereos</li>
        <li>LAD (Lugar Apto Denunciado)</li>
        
      </ul>
    </div>
  );
};

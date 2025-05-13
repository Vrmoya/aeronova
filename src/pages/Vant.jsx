import React from "react";
import "../styles/Vant.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export const Vant = () => {
  return (
    <div className="vant">
      <h1>Vant (Vehiculo Aereo No Tripulado)</h1>
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

      <h3>Realizamos:</h3>
      <ul>
        <li>
          Estudios de Fotogrametria.
        </li>
        <li>
          Creacion de Modelo Digital de Terreno (MDT) y Modelo Digital de Elevaciones (MDT).
        </li>

        <li>
          Generacion de curvas de nivel.
        </li>
        <li>
          Confeccion de planos topograficos.
        </li>
        <li>
          Elaboración de mosaicos fotográficos.
        </li>
        <li>
          Seguimiento de obras.
        </li>
              </ul>
    </div>
  );
};

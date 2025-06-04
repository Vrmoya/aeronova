import React from "react";
import "../styles/Vant.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import drone1 from "../images/DRONES/Drone_1.jpeg";
import drone2 from "../images/DRONES/Drone_3.jpeg";
import drone3 from "../images/DRONES/Drone_4.jpeg";
import drone4 from "../images/DRONES/Drone_5.jpeg";
import drone5 from "../images/DRONES/Drone_6.jpeg";
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
       <img src={drone1} alt="Drone 1" />
        </div>
       
        <div>
       <img src={drone2} alt="Drone 2" />
        </div> 
         <div>
       <img src={drone3} alt="Drone 3" />
        </div> 
         <div>
       <img src={drone4} alt="Drone 4" />
        </div> 
         <div>
       <img src={drone5} alt="Drone 5" />
        </div> 
      </Carousel>

      <h3>Realizamos:</h3>
      <ul>
        <li>
          Estudios de Fotogrametría.
        </li>
        <li>
          Creación de Modelo Digital de Terreno (MDT) y Modelo Digital de Elevaciones (MDT).
        </li>

        <li>
          Generación de curvas de nivel.
        </li>
        <li>
          Confección de planos topográficos.
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

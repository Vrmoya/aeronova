import React from "react";
import "../styles/Helipuerto.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export const Helipuertos = () => {
  return (
    <div className="helipuerto">
      <h1>HELIPUERTOS</h1>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="carousel"
      >
        <div>
          <img src="../images/HELI/heli1.JPG" alt="Helipuerto 1" />
        </div>
        <div>
          <img src="../images/HELI/heli2.jpg" alt="Helipuerto 2" />
        </div>
        <div>
          <img src="../images/HELI/heli3.jpg" alt="Helipuerto 3" />
        </div>
        <div>
          <img src="../images/HELI/heli4.jpg" alt="Helipuerto 4" />
        </div>
        <div>
          <img src="../images/HELI/heli5.jpg" alt="Helipuerto 5" />
        </div>
        <div>
          <img src="../images/HELI/heli6.jpg" alt="Helipuerto 6" />
        </div>
        <div>
          <img src="../images/HELI/heli7.jpeg" alt="Helipuerto 7" />
        </div>
        <div>
          <img src="../images/HELI/heli8.jpg" alt="Helipuerto 8" />
        </div>
        <div>
          <img src="../images/HELI/heli9.jpg" alt="Helipuerto 9" />
        </div>
        <div>
          <img src="../images/HELI/heli10.jpg" alt="Helipuerto 10" />
        </div>
        <div>
          <img src="../images/HELI/heli11.jpg" alt="Helipuerto 11" />
        </div>
        <div>
          <img src="../images/HELI/heli12.jpg" alt="Helipuerto 12" />
        </div>
        <div>
          <img src="../images/HELI/heli13.jpeg" alt="Helipuerto 13" />
        </div>
        <div>
          <img src="../images/HELI/heli14.jpg" alt="Helipuerto 14" />
        </div>
      </Carousel>

      <h3>Realizamos:</h3>
      <ul>
      <li>Proyectos de superficie y elevados.</li>
        <li>
          Estudios de factibilidad, proyecto ejecutivo y confección de la
          documentación aeronáutica.
        </li>
        <li>
          Proyectos de ampliaciones y modificación de Helipuertos, pistas,
          plataformas o rodajes.
        </li>

        <li>
          Diagramación de ayudas visuales, señalamiento visual diurno y
          nocturno.
        </li>
        <li>
          Demarcación de señales, eje de la calle de rodaje y puestos de
          estacionamiento en plataformas.
        </li>
        <li>
          Estudio para emplazamiento de hangares, edificaciones y obstaculos.
        </li>
        <li>
          Planos detallados que incluyen la ubicación, medidas y detalles de la estructura del proyecto.
        </li>
        <li>Plan de emergencia.</li>
        <li>Plan de mantenimiento.</li>
        <li>Estudio de Impacto ambiental.</li>
        <li>Relevamientos de obstáculos, datos electrónicos del terreno.</li>
      <li>LADH (Lugar Apto Denunciado Helipuerto)</li>
        
      </ul>
    </div>
  );
};

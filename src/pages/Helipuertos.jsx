import React from "react";
import "../styles/Helipuerto.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// --- IMPORTAR LAS IMÁGENES COMO MÓDULOS ---
// ASEGÚRATE de que estas rutas sean correctas RELATIVAS a la ubicación de este archivo Helipuertos.jsx
// Por ejemplo, si Helipuertos.jsx está en src/pages/ y las imágenes en src/images/HELI/,
// entonces las rutas relativas son correctas: "../images/HELI/"

import heli2 from "../images/HELI/heli2.jpg";
import heli3 from "../images/HELI/heli3.jpg";

import heli5 from "../images/HELI/heli5.jpg";
import heli6 from "../images/HELI/heli6.jpg";
import heli7 from "../images/HELI/heli7.jpeg"; // Nota: si tienes .jpeg en otros, ajusta la extensión
import heli8 from "../images/HELI/heli8.jpg";
import heli9 from "../images/HELI/heli9.jpg";
import heli10 from "../images/HELI/heli10.jpg";
import heli11 from "../images/HELI/heli11.jpg";
import heli12 from "../images/HELI/heli12.jpg";
import heli13 from "../images/HELI/heli13.jpeg"; // Nota: si tienes .jpeg en otros, ajusta la extensión
import heli14 from "../images/HELI/heli14.jpg";

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
          <img src={heli2} alt="Helipuerto 2" />
        </div>
        <div>
          <img src={heli3} alt="Helipuerto 3" />
        </div>
        <div>
          <img src={heli5} alt="Helipuerto 5" />
        </div>
        <div>
          <img src={heli6} alt="Helipuerto 6" />
        </div>
        <div>
          <img src={heli7} alt="Helipuerto 7" />
        </div>
        <div>
          <img src={heli8} alt="Helipuerto 8" />
        </div>
        <div>
          <img src={heli9} alt="Helipuerto 9" />
        </div>
        <div>
          <img src={heli10} alt="Helipuerto 10" />
        </div>
        <div>
          <img src={heli11} alt="Helipuerto 11" />
        </div>
        <div>
          <img src={heli12} alt="Helipuerto 12" />
        </div>
        <div>
          <img src={heli13} alt="Helipuerto 13" />
        </div>
        <div>
          <img src={heli14} alt="Helipuerto 14" />
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
          Planos detallados que incluyen la ubicación, medidas y detalles de la
          estructura del proyecto.
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
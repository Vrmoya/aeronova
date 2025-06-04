import React from "react";
import "../styles/Consultoria.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import consultoria from "../images/DRONES/consultoria.jpeg";
export const Consultoria = () => {
  return (
    <div className="consultoria">
      <h1>CONSULTORIA</h1>

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="carousel"
      >
        <div>
          <img src={consultoria} alt="pista con luces" />
        </div>
        
      </Carousel>

      <h3>Asistencia Tecnica:</h3>
      <ul>
        <li>Procedimientos y metodologías de trabajo normados para el relevamiento y análisis de información, garantizando la trazabilidad y calidad de los datos e información aeronáutica.</li>
        <li>Productos que cumplen con los estándares vigentes requeridos respecto seguridad operacional necesaria para la aplicación de estudios específicos, obtención de información, modificación o para la habilitación de infraestructura aeronáutica.</li>
        <li>Estudios aeronáuticos para establecer normas particulares</li>
        <li>Estudios ambientales.</li>
        <li>Mediciones y Planos.</li>
        <li>Asesoria Legal Tecnica</li>
        <li>Diseño de control de Transito en tierra.</li>
        <li>Sistemas de señalizacion y navegación</li>
        <li>Cartografía personalizada para aeroclubes.</li>
      </ul>
    </div>
  );
};

import React from "react";
import "../styles/LadLadh.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const LadLadH = () => {
  return (
    <div className="lad-ladh">
      <h1>LAD - LADH</h1>
      <h3>LAD (Lugar Apto Denunciado)</h3>
      <p>
        El LAD es un sitio terrestre utilizado ocacional o regularmente para
        operaciones aereas, no certificado como aerodromo, pero que ha sido
        denunciado ante la autoridad aeronautica (ANAC).
      </p>
      <h3>Caracteristicas:</h3>
      <ul>
        <li>Pistas rurales, privadas o temporales</li>
        <li>No tienen infraestructura aeronautica formal (ej: torre de control o valizamiento, etc)</li>
        <li>No requieren habilitacion formal como aerodromo, pero si notificacion oficial a la ANAC</li>
        <li>Puede tener restricciones de uso o condiciones especificas</li>
        <li>Pueden ser usados para operaciones agricolas, sanitarias, de emergencia, etc</li>
      </ul>
    </div>
  );
};

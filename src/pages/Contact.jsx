import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <fieldset>Nombre y Apellido: <input type="text" placeholder="Nombre y Apellido"/></fieldset>
      <fieldset>Asunto: <input type="text" /></fieldset>
      <fieldset>Consulta: <textarea name="textarea" rows="10" cols="50">Escriba su consulta</textarea></fieldset>
      <input type="submit" value="Enviar"/>
      <p>Email: contacto@aeronova.com</p>
      <p>Teléfono: +123 456 7890</p>
    </div>
  );
};


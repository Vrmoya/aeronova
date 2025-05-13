import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <fieldset><legend>Nombre y Apellido:</legend> <input type="text" placeholder="Nombre y Apellido"/></fieldset>
      <fieldset><legend>Asunto:</legend> <input type="text" /></fieldset>
      <fieldset><legend>Consulta:</legend> <textarea name="textarea" rows="10" cols="50">Escriba su consulta</textarea></fieldset>
      <input type="submit" value="Enviar"/>
      <p>Email: contacto@aeronova.com</p>
      <p>Teléfono: +123 456 7890</p>
    </div>
  );
};


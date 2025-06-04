import  { useState } from "react"; // ¡Importa useState para manejar el estado de los inputs!
import "../styles/Contact.css";

export const Contact = () => {
  // 1. Estados para guardar los valores de los campos del formulario
  const [nombreApellido, setNombreApellido] = useState("");
  const [asunto, setAsunto] = useState("");
  const [consulta, setConsulta] = useState("");

  // Función para manejar el clic en el botón "Enviar"
  const handleSendEmail = () => {
    // 2. Codificamos los valores para que sean seguros en una URL mailto:
    // Es crucial usar encodeURIComponent para manejar espacios, saltos de línea y caracteres especiales.
    const encodedNombreApellido = encodeURIComponent(nombreApellido);
    const encodedAsunto = encodeURIComponent(asunto);
    // Para el cuerpo del correo, los saltos de línea se representan como %0D%0A o %0A
    const encodedConsulta = encodeURIComponent(consulta);

    // 3. Construimos el cuerpo completo del mensaje de correo
    // Incluimos el nombre y la consulta con saltos de línea para mejor formato
    const emailBody = `Nombre y Apellido: ${encodedNombreApellido}\n\nConsulta:\n${encodedConsulta}`;
    const encodedEmailBody = encodeURIComponent(emailBody); // Codificamos el cuerpo completo también

    // 4. Construimos la URL mailto: con el destinatario, asunto y cuerpo del mensaje
    // El 'subject' del correo será lo que el usuario ponga en el campo 'Asunto'
    const mailtoLink = `mailto:aeronova.consultora@gmail.com?subject=${encodedAsunto}&body=${encodedEmailBody}`;

    // 5. Abrimos el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;

    // Opcional: Limpiar los campos del formulario después de que se abre el cliente de correo
    // Esto da feedback al usuario de que el "envío" ha iniciado
    setNombreApellido("");
    setAsunto("");
    setConsulta("");
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      {/* Es importante vincular los inputs con el estado usando 'value' y 'onChange' */}
      <fieldset>
        <legend>Nombre y Apellido:</legend>
        <input
          type="text"
          value={nombreApellido} // El valor del input está controlado por el estado
          onChange={(e) => setNombreApellido(e.target.value)} // Actualiza el estado cuando el usuario escribe
          required // Opcional: Añade validación HTML5 básica para que el campo no esté vacío
        />
      </fieldset>

      <fieldset>
        <legend>Asunto:</legend>
        <input
          type="text"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <legend>Consulta:</legend>
        <textarea
          name="textarea" // Aunque no lo enviaremos a un backend, 'name' es una buena práctica
          rows="10"
          cols="45"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Escriba su consulta aquí..." // Usar placeholder es mejor que texto dentro de textarea
          required
        ></textarea>
      </fieldset>

      {/* Cambiamos a type="button" y añadimos onClick para disparar handleSendEmail */}
      <input type="button" value="Enviar" onClick={handleSendEmail} />

      <p>Email: aeronova.consultora@gmail.com</p>
      <p>Teléfono: +54 9 11 2309-5230</p>
      <p>Teléfono: +54 9 11 2296-2775</p>
    </div>
  );
};
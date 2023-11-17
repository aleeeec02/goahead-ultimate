// CrearDiscusionForm.js
import React, { useState } from 'react';
import '../style-pages/formulario-discusion.css';

const CrearDiscusionForm = ({ onCrearDiscusion }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleCrearDiscusion = (e) => {
    e.preventDefault();
    // Realiza la lógica para crear la nueva discusión
    const nuevaDiscusion = {
      id: new Date().getTime(),
      titulo,
      contenido,
      propietario: 'NombreUsuario', // Reemplaza con el propietario real
    };
    onCrearDiscusion(nuevaDiscusion);
    // Limpia los campos del formulario
    setTitulo('');
    setContenido('');
  };

  return (
    <div className="form-discusion-container">
      <h2>Crea tu discusión</h2>

      <form id="discusionForm" onSubmit={handleCrearDiscusion}>
        <input
          className="controllers"
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo"
          required
        />
        <textarea
          className="controllers"
          id="contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        ></textarea>

        <input className="input-submit" type="submit" value="Crear" />
      </form>
    </div>
  );
};

export default CrearDiscusionForm;
// FormularioRegistro.js
import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import Rutas from '../rutas';
import '../style-pages/formulario-register.css';

const FormularioRegistro = () => {
  return (
    <div className="registro-container">
      <h2>Regístrate</h2>

      <form id="registroForm" action="/registro" method="POST">
        <input
          className="controllers"
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
        />
        <input
          className="controllers"
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          required
        />
        <input
          className="controllers"
          type="email"
          id="correo"
          name="correo"
          placeholder="Correo"
          required
        />
        <input
          className="controllers"
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="Contraseña"
          required
        />

        <input className="input-submit" type="submit" value="Registrarse" />

        <div className="volver-login">
          <p>
            ¿Ya tienes una cuenta? <Link to="/login" className="btn-login">
                Iniciar Sesión
              </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormularioRegistro;
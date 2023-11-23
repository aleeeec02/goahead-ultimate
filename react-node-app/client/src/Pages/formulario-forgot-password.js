// FormularioLogin.js

//[TODO: Recuperar contraseña como insertar correo]
import React from 'react';
import '../style-pages/formulario-forgot-password.css';

const FormularioPassword = () => {
  return (
    <div className="forgot-password-container">
      <h2>Recupera tu contraseña</h2>

      <form id="forgotPasswordForm" action="/login" method="POST">
        <input
          className="controllers"
          type="text"
          id="username"
          name="username"
          placeholder="Correo"
          required
        />
        <input
          className="controllers"
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <input
          className="controllers"
          type="password"
          id="password"
          name="password"
          placeholder="Confirma tu contraseña"
          required
        />
        <input className="input-submit" type="submit" value="Recuperar" />
      </form>
    </div>
  );
};

export default FormularioPassword;
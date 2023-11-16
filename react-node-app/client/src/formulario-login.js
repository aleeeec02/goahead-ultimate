// FormularioLogin.js
import React from 'react';
import './formulario-login.css';

const FormularioLogin = () => {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <form id="loginForm" action="/login" method="POST">
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

        <div className="forgot-password">
          <a href="olvidaste_contrasena.html">¿Olvidaste tu contraseña?</a>
        </div>

        <input className="input-submit" type="submit" value="Acceder" />

        <div className="forgot-register">
          <p>
            ¿No tienes una cuenta? <a href="registrarse.html">Regístrate</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
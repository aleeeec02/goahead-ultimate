// FormularioLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rutas from '../rutas';
import '../style-pages/formulario-login.css';

const FormularioLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Autenticación exitosa, navegar a la siguiente ruta
        navigate('/dashboard');
      } else {
        // Manejar errores de autenticación
        console.error('Error de autenticación');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };
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
          <Link to="/forgotPassword" className="btn-login">¿Olvidaste tu contraseña?</Link>
        </div>

        <input className="input-submit" type="submit" value="Acceder" />

        <div className="forgot-register">
          <p>
            ¿No tienes una cuenta? <Link to="/registro" className="btn-login">Regístrate</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
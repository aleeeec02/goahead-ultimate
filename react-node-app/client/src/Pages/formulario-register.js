import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style-pages/formulario-register.css';

const FormularioRegistro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make sure this URL and the object structure align with your API endpoint and expectations
      const response = await axios.post('/api/users', {
        username,
        password,
      });
      console.log('Usuario registrado:', response.data);
      // Handle response (e.g., redirect, show success message)
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Handle errors (e.g., show error message)
    }
  };

  return (
    <div className="registro-container">
      <h2>Regístrate</h2>
      <form id="registroForm" onSubmit={handleSubmit}>
        <input
          className="controllers"
          type="text"
          id="username"
          name="username"
          placeholder="Nombre de usuario"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="controllers"
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

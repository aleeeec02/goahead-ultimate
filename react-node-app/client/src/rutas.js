// Rutas.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormularioLogin from './Pages/formulario-login';
import FormularioRegistro from './Pages/formulario-register';
import FormularioPassword from './Pages/formulario-forgot-password';
import Itinerario from './Pages/Itinerarios'; 

const Rutas = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormularioLogin />} />
      <Route path="/registro" element={<FormularioRegistro />} />
      <Route path="/forgotPassword" element={<FormularioPassword />} />
      <Route path="/itinerarios" element={<Itinerario />} /> 
    </Routes>
  );
};

export default Rutas;

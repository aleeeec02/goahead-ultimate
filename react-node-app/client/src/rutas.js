// Rutas.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormularioLogin from './Pages/formulario-login';
import FormularioRegistro from './Pages/formulario-register';
import FormularioPassword from './Pages/formulario-forgot-password';


import Itinerarios from './Pages/Itinerarios';
import Foros from './Pages/Foro-inicio';
import ForosContenido from './Pages/Foro-Contenido';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormularioLogin />} />
      <Route path="/registro" element={<FormularioRegistro />} />
      <Route path="/forgotPassword" element={<FormularioPassword />} />
      <Route path="/Itinerarios" element={<Itinerarios />} /> 
      <Route path="/foroInicio" element={<Foros />} />
      <Route path="/foroContenido" element={<ForosContenido />} />
    </Routes>
  );
};

export default Rutas;

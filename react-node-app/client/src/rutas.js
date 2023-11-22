// Rutas.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormularioLogin from './Pages/formulario-login';
import FormularioRegistro from './Pages/formulario-register';
import FormularioPassword from './Pages/formulario-forgot-password';
import CrearDiscusionForm from './Pages/form-discusion';
import Comunidad from './Pages/Comunidad';
import verItinerario from './Pages/VerItinerario';



import Itinerarios from './Pages/Itinerarios';
import CrearItinerario from './Pages/CrearItinerario';

import Foros from './Pages/Foro-inicio';
import ForosContenido from './Pages/Foro-Contenido';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormularioLogin />} />
      <Route path="/registro" element={<FormularioRegistro />} />
      <Route path="/forgotPassword" element={<FormularioPassword />} />
      <Route path="/Itinerarios" element={<Itinerarios />} />
      <Route path="/crear-itinerario" element={<CrearItinerario />} />
      <Route path="/comunidad" element={<Comunidad />} /> 
      <Route path="/foroInicio" element={<Foros />} />
      <Route path="/foroContenido" element={<ForosContenido />} />
      <Route path="/formDiscusion" element={<CrearDiscusionForm />} />
      <Route path="/verItinerario" element={<verItinerario />} />


      
    </Routes>
  );
};

export default Rutas;

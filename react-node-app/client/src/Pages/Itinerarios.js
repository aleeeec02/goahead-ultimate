import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../style-pages/itinerario.css';
import Rutas from '../rutas';

function Itinerarios() {
  return (

        <div>
          <h1>Itinerario</h1>
          <p>Usted no cuenta con itinerarios registrados.</p>
          <button>Crear nuevo itinerario</button>
          {}
        </div>
  );
}

export default Itinerarios;

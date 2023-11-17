import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../style-pages/itinerario.css';
import Rutas from '../rutas';

function Itinerarios() {
  return (
    <div className="itinerarios-page">
      <Sidebar />
      <div className="Itinerarios-content">
        <Topbar />
        <div className="Itinerarios-main">
          <h1>Itinerario</h1>
          <p>Usted no cuenta con itinerarios registrados.</p>
          <button>Crear nuevo itinerario</button>
          {}
        </div>
      </div>
    </div>
  );
}

export default Itinerarios;

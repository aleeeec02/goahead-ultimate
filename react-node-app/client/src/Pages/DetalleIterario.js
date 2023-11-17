import React from 'react';
import '../style-pages/detalle-itinerario.css';

const DetalleItinerario = ({ itinerario }) => {
  return (
    <div className="detalle-itinerario-container">
      <h1>Itinerario: {itinerario.nombreItinerario}</h1>
      <p><strong>Destino:</strong> {itinerario.destino}</p>
      <p><strong>Fechas:</strong> {itinerario.fechaInicio} - {itinerario.fechaFin}</p>
      <div className="actividades">
        <h2>Actividades</h2>
        {itinerario.actividades.map((actividad, indice) => (
          <div key={indice} className="actividad">
            <h3>{actividad.nombre}</h3>
            <p>{actividad.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalleItinerario;

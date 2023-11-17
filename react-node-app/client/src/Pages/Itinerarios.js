import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style-pages/itinerario.css';

function Itinerarios() {
  const [itinerarios, setItinerarios] = useState([]);

  useEffect(() => {
    const fetchItinerarios = async () => {
      try {
        const response = await fetch('/api/itinerarios');
        if (!response.ok) {
          throw new Error('La respuesta de la red no estuvo bien');
        }
        const data = await response.json();
        setItinerarios(data);
      } catch (error) {
        console.error('Error al obtener itinerarios:', error);
      }
    };

    fetchItinerarios();
  }, []);

  const ItinerarioAcciones = ({ id }) => (
    <div className="acciones-itinerario">
      <Link to={`/itinerario/${id}/actividades`} className="btn">Incorporar Actividades</Link>
      <Link to={`/itinerario/${id}/lugares-de-interes`} className="btn">Lugares de Interés</Link>
      <Link to={`/itinerario/${id}/horarios`} className="btn">Horarios</Link>
      <Link to={`/busqueda-vuelos`} className="btn">Búsqueda de vuelos</Link>
      <Link to={`/busqueda-alojamiento`} className="btn">Búsqueda de alojamiento</Link>
    </div>
  );

  return (
    <div className="itinerarios-container">
      <h1>Itinerario</h1>
      {itinerarios.length ? (
        <ul>
          {itinerarios.map((itinerario, index) => (
            <li key={index}>
              <div>
                {itinerario.nombre} - {itinerario.destino}
                <ItinerarioAcciones id={itinerario.id} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Usted no cuenta con itinerarios registrados.</p>
      )}
      <Link to="/crear-itinerario" className="btn btn-primary">Crear nuevo itinerario</Link>
    </div>
  );
}

export default Itinerarios;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style-pages/itinerario.css';

function Itinerarios() {
  const [itinerarios, setItinerarios] = useState([]);

  // Suponiendo que tienes un endpoint en tu servidor para obtener los itinerarios
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

  return (
    <div className="itinerarios-container">
      <h1>Itinerario</h1>
      {itinerarios.length ? (
        <ul>
          {itinerarios.map((itinerario, index) => (
            <li key={index}>
              {itinerario.nombre} - {itinerario.destino}
              {[/*[TODO***: Agregar más detalles aquí] */]}
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

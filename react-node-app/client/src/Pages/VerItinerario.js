import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function VerItinerario() {
  const location = useLocation();
  const [itinerario, setItinerario] = useState(location.state ? location.state.itinerario : null);

  useEffect(() => {
    if (!itinerario) {
      const fetchItinerarios = async () => {
        try {
          const response = await fetch('http://localhost:{PORT}/api/itinerarios');
          if (!response.ok) {
            throw new Error('Error al cargar los itinerarios');
          }
          const itinerarios = await response.json();
          setItinerario(itinerarios[itinerarios.length - 1]);
        } catch (error) {
          console.error('Error al obtener los itinerarios:', error);
        }
      };
      fetchItinerarios();
    }
  }, [itinerario]);

  return (
    <div>
      {itinerario ? (
        <div>
          <h1>{itinerario.nombreItinerario}</h1>
          <p>Destino: {itinerario.destino}</p>
          <h2>Actividades</h2>
          <ul>
            {itinerario.actividades.map((actividad, index) => (
              <li key={index}>{actividad}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando itinerario...</p>
      )}
    </div>
  );
}

export default VerItinerario;

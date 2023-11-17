import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style-pages/crear-itinerario.css';

function CrearItinerario() {
  const navigate = useNavigate();
  const [nombreItinerario, setNombreItinerario] = useState('');
  const [destino, setDestino] = useState('');
  const [actividades, setActividades] = useState(['']);
  
  const agregarActividad = () => {
    setActividades([...actividades, '']);
  };

  const actualizarActividad = (indice, evento) => {
    const nuevasActividades = actividades.map((actividad, idx) => {
      if (idx === indice) {
        return evento.target.value;
      }
      return actividad;
    });
    setActividades(nuevasActividades);
  };

  const enviarItinerario = async (evento) => {
    evento.preventDefault();
    /*[TODO***: Implementar la lógica para conectar con una base de datos o con .json] */
    console.log({
      nombreItinerario,
      destino,
      actividades
    });
    navigate('/itinerarios');
  };

  return (
    
    <div className="crear-itinerario-container">
      <h1>Crear Itinerario</h1>
      <form onSubmit={enviarItinerario}>
        <div className="campo">
          <label htmlFor="nombreItinerario">Nombre del Itinerario:</label>
          <input 
            type="text" 
            id="nombreItinerario" 
            value={nombreItinerario}
            onChange={(e) => setNombreItinerario(e.target.value)} 
            required 
          />
        </div>
        <div className="campo">
          <label htmlFor="destino">Destino:</label>
          <input 
            type="text" 
            id="destino" 
            value={destino}
            onChange={(e) => setDestino(e.target.value)} 
            required 
          />
        </div>
        <div className="actividades">
          <label>Actividades:</label>
          {actividades.map((actividad, indice) => (
            <input 
              key={indice}
              type="text" 
              value={actividad}
              onChange={(e) => actualizarActividad(indice, e)} 
              required 
            />
          ))}
          

          <button type="button" onClick={agregarActividad}>Agregar Actividad</button>
        </div>
        <button type="submit">Guardar Itinerario</button>
      </form>
    </div>
  );
}

export default CrearItinerario;

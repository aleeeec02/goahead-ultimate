import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style-pages/Foro-inicio.css';

const Foros = () => {
  const temas = ["Mochileros", "Viajes en Familia", "Aventuras al aire libre", "Viajes gastronómicos"];
  const [temaSeleccionado, setTemaSeleccionado] = useState(null);

  const handleSeleccionTema = (tema) => {
    setTemaSeleccionado(tema);
  };

  return (
    <div className='foro-inicio'>
      <h2>Foros de Discusión</h2>
      <h3>Escoge el tema de discusión</h3>
      <div className='foro-temas'>
        {temas.map((tema) => (
          <a
            key={tema}
            href={`#${tema}`}
            onClick={() => handleSeleccionTema(tema)}
            className={`tema-link ${temaSeleccionado === tema ? 'selected' : ''}`}
          >
            {tema}
          </a>
        ))}
      </div>
      <Link to={`/foroContenido`}>
        <button
          disabled={!temaSeleccionado}
          style={{ backgroundColor: '#04A5E5', color: '#fff', padding: '15px', fontSize: '18px', borderRadius: '5px' }}
        >
          Ir al Tema
        </button>
      </Link>
    </div>
  );
};

export default Foros;
import React, { useState } from 'react';
import '../style-pages/Foro-inicio.css';

const Foros = () => {
    const temas = ["Mochileros", "Viajes en Familia", "Aventuras al aire libre", "Viajes gastronómicos"];
    const [temaSeleccionado, setTemaSeleccionado] = useState(null);
  
    const handleSeleccionTema = (tema) => {
      setTemaSeleccionado(tema);
    };
  
    const handleIrAlTema = () => {
      if (temaSeleccionado) {
        // Redirige a la página o realiza alguna acción relacionada con el tema seleccionado
        console.log(`Ir al tema: ${temaSeleccionado}`);
      } else {
        alert('Selecciona un tema antes de ir al tema');
      }
    };
  
    return (
      <div className='foro-inicio'>
        <h2>Foros de Discusión</h2>
        <h3>Escoge el tema de discusión</h3>
        <div className='foro-temas'>
          {temas.map((tema) => (
            <a
              key={tema}
              href={`#${tema}`} // Puedes ajustar esto según tu lógica de navegación
              onClick={() => handleSeleccionTema(tema)}
              className={`tema-link ${temaSeleccionado === tema ? 'selected' : ''}`}
            >
              {tema}
            </a>
          ))}
        </div>
        <button
            onClick={handleIrAlTema}
            disabled={!temaSeleccionado}
            style={{ backgroundColor: '#04A5E5', color: '#fff', padding: '15px', fontSize: '18px', borderRadius: '5px' }}
        >
            Ir al Tema
      </button>
      </div>
    );
  };
  
  export default Foros;
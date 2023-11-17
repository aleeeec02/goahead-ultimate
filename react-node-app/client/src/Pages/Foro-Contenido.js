import React, { useState, useEffect } from 'react';
import '../style-pages/Foro-contenido.css';
import logoAccountForo from '../static/account.png';

const ForosContenido = ({ temaSeleccionado }) => {
  const discusiones = [
    { id: 1, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 2, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 3, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 4, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 5, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 6, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 7, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 8, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },
    { id: 9, titulo: '¿Por qué la comida peruana es tan deliciosa?', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....', propietario: 'Alexia Conza' },

    // ... tus datos de discusiones ...
  ];

  const itemsPerPage = 3; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedDiscusiones, setPaginatedDiscusiones] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = discusiones.slice(startIndex, endIndex);
    setPaginatedDiscusiones(paginatedData);
  }, [currentPage, discusiones]);

  const handleNuevaDiscusion = () => {
    // Implementa lógica para crear una nueva discusión
    console.log('Crear nueva discusión');
  };

  return (
    <div className='foro-contenido'>
      <div className='foro-contenido-inicio'>
        <div className='foro-contenido-inicio-container'>
          <div className='foro-contenido-title'>
            <h2>Foros de discusión</h2>
            <h3>{temaSeleccionado}</h3>
          </div>
          <button onClick={handleNuevaDiscusion} className='btn-foro-nueva-discusion'>
            Crear nueva discusión
          </button>
        </div>
      </div>
      <table>
        <tbody>
          {paginatedDiscusiones.map((discusion) => (
            <tr key={discusion.id}>
              <div className='discusion-container'>
                <div className='discusion-container-inner'>
                  <div className='discusion-inicio'>
                    <img src={logoAccountForo} alt="Avatar" className='avatar' width="30px" />
                    <td className='propietario'>{discusion.propietario}</td>
                    <td className='titulo'>{discusion.titulo}</td>
                  </div>
                  <div className='discusion-contenido'>
                    <div className='contenido'><td>{discusion.contenido}</td></div>
                    <button className='btn-discusion-contenido'>Ingresar</button>
                  </div>
                  <hr />
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {[...Array(Math.ceil(discusiones.length / itemsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => setCurrentPage(number + 1)}
            className={currentPage === number + 1 ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}

      </div>
    </div>
  );
  };
  
  export default ForosContenido;
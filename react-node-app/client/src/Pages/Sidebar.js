// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style-pages/Sidebar.css';  // Asegúrate de tener tu archivo de estilos

const Sidebar = ({ userName }) => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <p>Bienvenido, {userName}</p>
        </li>
        <li className="sidebar-item">
          
          <Link to="/foroInicio" className="sidebar-link">
            Foros
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/itinerarios" className="sidebar-link">
            Itinerarios
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/recursos" className="sidebar-link">
            Recursos
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/eventos" className="sidebar-link">
            Eventos
          </Link>
        </li>
        
        <div className='sidebar-last-item'>
          <hr />
          <li className="sidebar-item">
            <Link to="/logout" className="sidebar-link">
              <span role="img" aria-label="logout">🚪</span> Log Out
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Sidebar;
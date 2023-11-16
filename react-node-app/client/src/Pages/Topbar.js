// Topbar.js
import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import '../style-pages/Topbar.css';
import Rutas from '../rutas';

const Topbar = () => {

  const location = useLocation();
  return (
    <div>
      <header className="header" id="Inicio">
        <div className="logo-principal">
          <Link to="/inicio">
            <img src="./static/logo-goAhead.png" alt="" width="70px" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/login" className="btn-login">
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link to="/registro" className="btn-register">
                Regístrate
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Rutas />
    </div>
  );
};

export default Topbar;
// Sidebar.js
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="header" id="Inicio">
      <div className="logo-principal">
        <a href="#Inicio">
          <img src="./static/logo-goAhead.png" alt="" width="70px" />
        </a>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#" className="btn-login">
              Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="#" className="btn-register">
              Regístrate
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
// App.js
import React from 'react';
import './App.css';
import Topbar from './Pages/Topbar';
import Sidebar from './Pages/Sidebar';

import Rutas from './rutas';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container-principle'>
        <Sidebar />
        <div className="content">
          <Rutas />
          {/* Agrega aquí el resto del contenido principal de tu aplicación */}
        </div>
      </div>
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import Topbar from './Topbar';
import FormularioLogin from './formulario-login';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="content">
        <FormularioLogin/>
        {/* Agrega aquí el resto del contenido principal de tu aplicación */}
      </div>
    </div>
  );
}

export default App;

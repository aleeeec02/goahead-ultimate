// PerfilUsuario.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


const PerfilUsuario = () => {
    const navigate = useNavigate();
  
    const goToCreatePost = () => {
      navigate('/create-post'); // Make sure this route is defined in your router
    };
  
    return (
      <div>
        <h1>Perfil del Usuario</h1>
        <button onClick={goToCreatePost}>Create New Post</button>
        {/* Rest of the user profile content */}
      </div>
    );
  };
  
  export default PerfilUsuario;  
// Post.js
import React, { useState } from 'react';
import '../style-pages/Comunidad-post.css';  // Asegúrate de tener estilos para la animación
import logoAccountForo from '../static/account.png';

const Post = ({ post, onLike }) => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        onLike(post.id, liked ? 0 : 1);  // Cambia el valor entre 0 y 1 al hacer clic
        setLiked(!liked);  // Invierte el estado actual
    };

  return (
    <div className="post">
      <div className="post-header">
        <img
          className="post-avatar"
          alt={`${post.propietario}'s avatar`}
          src={logoAccountForo}
          width={"40px"}
        />
        <div className='post-title-container'>
            <h3 className="post-title">{post.propietario}</h3>
        </div>
      </div>
      <p>{post.content}</p>
      <div className='container-button-like'>
        <div className='container-inner-button-like'>
            <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
                <span role="img" aria-label="Heart">❤️</span> {liked ? 1 : 0}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
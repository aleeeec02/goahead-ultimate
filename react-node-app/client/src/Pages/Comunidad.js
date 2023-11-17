// Comunidad.js
import React, { useState, useEffect } from 'react';
import Post from './Comunidad-post';  // Asegúrate de crear el componente Post

const Comunidad = () => {
  // Aquí puedes tener un array de posts, cada uno con su propio estado de likes
  const [posts, setPosts] = useState([
    { id: 1, propietario: 'Alexia Conza', content: '¡Hola a todos! Comparto una receta deliciosa que descubrí: tarta de manzana con canela. ¡Espero que les guste! 🍏🥧 #Recetas', likes: 0 },
    { id: 2, propietario: 'Juan Rodríguez', content: 'Acabo de terminar un libro fascinante sobre viajes en el tiempo. ¿Alguien tiene recomendaciones literarias? 📚 #AmoLeer', likes: 0 },
    { id: 3, propietario: 'Laura Gómez', content: '¡Buenos días! Hoy es un día especial, celebrando el aniversario de mi proyecto artístico. Gracias a todos por el apoyo. 🎨 #Arte', likes: 0 },
    { id: 4, propietario: 'Eduardo Mendoza', content: 'Descubrí una nueva serie de comedia que me hace reír a carcajadas. ¡Altamente recomendada para animar el día! 😄🎬', likes: 0 },
    { id: 5, propietario: 'Ana Morales', content: '¡Hola comunidad! Comparto una foto desde mi última aventura de senderismo. Naturaleza en su máxima expresión. 🌿 #Aventuras', likes: 0 },
    { id: 6, propietario: 'Carlos Vargas', content: '¿Algún aficionado a los deportes por aquí? ¡Increíble partido anoche! El espíritu deportivo siempre es inspirador. ⚽🏀', likes: 0 },
    { id: 7, propietario: 'María López', content: 'Feliz viernes a todos. ¡Fin de semana por fin! Planeo ver películas y descansar. ¿Cuáles son sus planes? 🎉 #FinDeSemana', likes: 0 },
    { id: 8, propietario: 'Diego Sánchez', content: 'Hoy probé una nueva cafetería en el centro. ¡El café es increíble! ¿Tienen lugares favoritos para tomar café? ☕ #CaféLovers', likes: 0 },
    { id: 9, propietario: 'Lucía Ramírez', content: '¡Hola amigos! Comparto una playlist con mis canciones favoritas del momento. ¿Qué están escuchando últimamente? 🎶 #Música', likes: 0 },
    { id: 10, propietario: 'Mateo Herrera', content: '¡Buenas noticias! Mi proyecto de desarrollo web está casi listo. ¡Emocionado por el lanzamiento! 💻🚀 #DesarrolloWeb', likes: 0 },
    { id: 11, propietario: 'Valentina Torres', content: 'Anoche presencié un espectáculo de luces impresionante. La ciudad cobra vida cuando cae la noche. 🌃✨ #NochesMágicas', likes: 0 },
    { id: 12, propietario: 'Javier Martínez', content: '¡Hola a todos! Estoy planeando un viaje sorpresa. ¿Alguna recomendación de destinos? 🌍✈️ #Viajes', likes: 0 },
    { id: 13, propietario: 'Camila Silva', content: '¿Qué están leyendo actualmente? Compartan sus libros favoritos. Siempre en busca de nuevas lecturas. 📖 #Libros', likes: 0 },
    { id: 14, propietario: 'Adrián Gutiérrez', content: 'Hoy experimenté con nuevas recetas en la cocina. El resultado fue delicioso. ¡La cocina es todo un arte! 🍲👨‍🍳 #CocinaCreativa', likes: 0 },
    { id: 15, propietario: 'Isabella Flores', content: '¡Saludos a la comunidad! Les comparto una cita que me inspira: "La vida es un viaje que debe ser disfrutado". 🌟 #Reflexiones', likes: 0 },
    // ... otros posts
  ]);
  

  const itemsPerPage = 4; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPosts, setPaginatedPosts] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = posts.slice(startIndex, endIndex);
    setPaginatedPosts(paginatedData);
  }, [currentPage, posts]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="comunidad">
      <h2>Comunidad</h2>
      {paginatedPosts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} />
      ))}

      <div className="pagination">
        {[...Array(Math.ceil(posts.length / itemsPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Comunidad;
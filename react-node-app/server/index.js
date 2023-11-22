// server/index.js

const express = require("express");



const path = require("path");
const fs = require('fs').promises;
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());


//operaciones CRUD RUTAS
const postRoutes = require('./rutas/postRutas');
const commentRoutes = require('./rutas/commentRutas');
const userRoutes = require('./rutas/userRutas');
const favoritesRoutes = require('./rutas/favoritesRutas');

// Usar los nuevo módulos de rutas
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/favorites', favoritesRoutes);



// Servir archivos estáticos de React aka build en client
app.use(express.static(path.join(__dirname, "../client/build")));

// envía index.html de build en client como defecto
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

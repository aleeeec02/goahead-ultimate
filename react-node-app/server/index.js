// server/index.js

const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());

// Credenciales de usuario en memoria (simulación)
const users = [
    { username: 'usuario1', password: 'contrasena1' },
    { username: 'usuario2', password: 'contrasena2' },
  ];
  
  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    // Buscar el usuario en las credenciales almacenadas
    const user = users.find((u) => u.username === username && u.password === password);
  
    if (user) {
      // Autenticación exitosa
      res.status(200).json({ message: 'Autenticación exitosa' });
    } else {
      // Credenciales incorrectas
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});
  
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
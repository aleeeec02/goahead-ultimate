// server/index.js

const express = require("express");
const path = require("path");
const fs = require('fs').promises;
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());



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
//Foros

app.get('/api/temas', (req, res) => {
  res.json(temas);
});

app.get('/api/discusiones', (req, res) => {
  res.json(discusiones);
});

app.get('/api/discusiones/:tema', (req, res) => {
  const tema = req.params.tema;
  const discusionesPorTema = discusiones.filter(discusion => discusion.titulo === tema);
  res.json(discusionesPorTema);
});

app.post('/api/crear-discusion', (req, res) => {
  const nuevaDiscusion = req.body;
  // Agregar la nueva discusión al arreglo de discusiones
  discusiones.push(nuevaDiscusion);
  res.json({ mensaje: 'Discusión creada con éxito' });
});

app.post('/api/seleccion-tema', (req, res) => {
  const temaSeleccionado = req.body.temaSeleccionado;
  // Aquí puedes manejar la selección del tema como desees
  console.log(`Tema seleccionado: ${temaSeleccionado}`);
  res.json({ mensaje: 'Tema seleccionado con éxito' });
});


//////////////////////////

//Posts

const posts = [];
app.get('/api/posts', (req, res) => {
  res.json(posts);
});
//////////////////////////
app.get('/api/itinerarios', async (req, res) => {
  try {
    const data = await fs.readFile('itinerarios.json', 'utf8');
    const itinerarios = JSON.parse(data);
    res.send(itinerarios);
  } catch (error) {
    res.status(500).send('Error al leer del archivo JSON');
  }
});

app.post('/api/itinerarios', async (req, res) => {
  const nuevoItinerario = req.body;
  try {
    const data = await fs.readFile('itinerarios.json', 'utf8');
    const itinerarios = JSON.parse(data);
    itinerarios.push(nuevoItinerario);
    await fs.writeFile('itinerarios.json', JSON.stringify(itinerarios, null, 2), 'utf8');
    res.status(201).send(nuevoItinerario);
  } catch (error) {
    res.status(500).send('Error al escribir en el archivo JSON');
  }
});

//////////////////////////
app.use(express.static(path.join(__dirname, "../client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

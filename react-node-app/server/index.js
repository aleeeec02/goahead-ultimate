// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});
  
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
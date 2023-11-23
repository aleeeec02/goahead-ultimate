const express = require('express');
const { createPost, getAllPosts } = require('../CRUD-operaciones/postControlador');
const router = express.Router();

// Endpoint para crear un nuevo post
router.post('/', async (req, res) => {
  const { userId, title, content } = req.body;

  try {
    const newPost = await createPost(userId, title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener todos los posts
router.get('/', async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;

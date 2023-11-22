const express = require('express');
const { createPost, getAllPosts } = require('../CRUD-operaciones/postControlador');
const router = express.Router();

router.post('/', async (req, res) => {
  // Add logic to call createPost from postControlador
});

router.get('/', async (req, res) => {
  // Add logic to call getAllPosts from postControlador
});

// Add other routes for update, delete, etc.

module.exports = router;

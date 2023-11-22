const express = require('express');
const { createComment, getCommentsByPost } = require('../CRUD-operaciones/commentControlador');
const router = express.Router();

router.post('/', async (req, res) => {
  // Add logic to call createComment from commentControlador
});

router.get('/:postId', async (req, res) => {
  // Add logic to call getCommentsByPost from commentControlador
});

// Add other routes for update, delete, etc.

module.exports = router;

const pool = require('../db');

// Create a new post
const createPost = async (userId, title, content) => {
  const result = await pool.query(
    'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
    [userId, title, content]
  );
  return result.rows[0];
};

// Get all posts
const getAllPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
};

// Add other necessary CRUD operations (read by ID, update, delete)

module.exports = { createPost, getAllPosts /*, other exports */ };

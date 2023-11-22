const pool = require('../db');

// Create a new comment
const createComment = async (postId, userId, content) => {
  const result = await pool.query(
    'INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *',
    [postId, userId, content]
  );
  return result.rows[0];
};

// Get comments for a post
const getCommentsByPost = async (postId) => {
  const result = await pool.query('SELECT * FROM comments WHERE post_id = $1', [postId]);
  return result.rows;
};

// Add other necessary CRUD operations (update, delete)

module.exports = { createComment, getCommentsByPost /*, other exports */ };

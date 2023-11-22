const pool = require('../db');

// Add a post to favorites
const addFavorite = async (userId, postId) => {
  const result = await pool.query(
    'INSERT INTO favorites (user_id, post_id) VALUES ($1, $2) RETURNING *',
    [userId, postId]
  );
  return result.rows[0];
};

// Get favorite posts for a user
const getFavoritesByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM favorites WHERE user_id = $1', [userId]);
  return result.rows;
};

// Remove a post from favorites
const removeFavorite = async (userId, postId) => {
  const result = await pool.query(
    'DELETE FROM favorites WHERE user_id = $1 AND post_id = $2',
    [userId, postId]
  );
  return result.rowCount;
};

module.exports = { addFavorite, getFavoritesByUser, removeFavorite };

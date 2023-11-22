const pool = require('../db');

// Create a new user
const createUser = async (username, passwordHash) => {
  const result = await pool.query(
    'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *',
    [username, passwordHash]
  );
  return result.rows[0];
};

// Get a user by ID
const getUserById = async (userId) => {
  const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
  return result.rows[0];
};

// Add other necessary CRUD operations (update, delete)

module.exports = { createUser, getUserById /*, other exports */ };

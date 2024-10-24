const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Set in the .env file
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

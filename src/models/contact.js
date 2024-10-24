const db = require("../utils/db");

const createContact = async (
  userId,
  { name, email, phone, address, timezone }
) => {
  const result = await db.query(
    `INSERT INTO contacts (user_id, name, email, phone, address, timezone, created_at) 
    VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`,
    [userId, name, email, phone, address, timezone]
  );
  return result.rows[0];
};

// Add more methods for retrieving, updating, deleting contacts

module.exports = { createContact };

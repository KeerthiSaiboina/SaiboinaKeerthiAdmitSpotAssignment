const express = require("express");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await findUserByEmail(email);
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  const user = await createUser(email, password);
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid email or password" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;

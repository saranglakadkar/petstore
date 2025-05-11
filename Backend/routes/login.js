const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// POST /api/login => handle login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Login request received:", username, password);

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password required' });
  }

  // Check if user exists
  const checkQuery = 'SELECT * FROM login WHERE username = ?';
  db.query(checkQuery, [username], (err, results) => {
    if (err) {
      console.error("Database error in login route:", err);
      return res.status(500).json({ success: false, message: 'Database error', error: err });
    }
    console.log("DB results:", results);

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found, please register' });
    }

    // If username exists, compare password with hashed password
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error comparing passwords' });
      }

      if (isMatch) {
        return res.json({ success: true, message: 'Login successful' });
      } else {
        return res.status(401).json({ success: false, message: 'Incorrect password' });
      }
    });
  });
});

module.exports = router;

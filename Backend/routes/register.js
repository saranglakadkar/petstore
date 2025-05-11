const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// POST /api/register => register new user
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password required' });
  }

  // Check if username already exists
  const checkQuery = 'SELECT * FROM login WHERE username = ?';
  db.query(checkQuery, [username], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });

    if (results.length > 0) {
      return res.status(409).json({ success: false, message: 'Username already exists' });
    }

    // Hash the password before storing it in the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ success: false, message: 'Error hashing password' });

      // Insert new user with hashed password into the database
      const insertQuery = 'INSERT INTO login (username, password) VALUES (?, ?)';
      db.query(insertQuery, [username, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: 'Error during registration' });

        res.json({ success: true, message: 'Registration successful' });
      });
    });
  });
});

module.exports = router;

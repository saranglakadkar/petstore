const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all pets
router.get('/', (req, res) => {
  db.query('SELECT * FROM pets', (err, results) => {
    if (err) return res.status(500).json({ error: 'DB fetch error' });
    res.json(results);
  });
});

// ADD new pet
router.post('/', (req, res) => {
  const { name, type, description, image_url } = req.body;
  db.query(
    'INSERT INTO pets (name, type, description, image_url) VALUES (?, ?, ?, ?)',
    [name, type, description, image_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Insert failed' });
      res.json({ success: true, id: result.insertId });
    }
  );
});

// UPDATE pet
router.put('/:id', (req, res) => {
  const { name, type, description, image_url } = req.body;
  db.query(
    'UPDATE pets SET name=?, type=?, description=?, image_url=? WHERE id=?',
    [name, type, description, image_url, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: 'Update failed' });
      res.json({ success: true });
    }
  );
});

// DELETE pet
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM pets WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Delete failed' });
    res.json({ success: true });
  });
});

module.exports = router;

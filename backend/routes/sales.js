const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM sales', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, data: results });
  });
});

router.post('/', (req, res) => {
  const { product, quantity, total } = req.body;
  db.query('INSERT INTO sales (product, quantity, total) VALUES (?, ?, ?)',
    [product, quantity, total],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: 'Sale added!' });
    }
  );
});

module.exports = router;
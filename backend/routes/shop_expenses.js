const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM shop_expenses ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, data: results });
  });
});

router.post('/', (req, res) => {
  const { category, amount, description, date } = req.body;
  db.query('INSERT INTO shop_expenses (category, amount, description, date) VALUES (?, ?, ?, ?)',
    [category, amount, description, date],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: 'Expense added!' });
    }
  );
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM shop_expenses WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: 'Expense deleted!' });
  });
});

module.exports = router;
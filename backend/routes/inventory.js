const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all inventory
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM inventory');
  res.json({ success: true, data: rows });
});

// Add item
router.post('/', async (req, res) => {
  const { item_name, quantity, price } = req.body;
  await db.query('INSERT INTO inventory (item_name, quantity, price) VALUES (?, ?, ?)', [item_name, quantity, price]);
  res.json({ success: true, message: 'Added!' });
});

// Delete item
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM inventory WHERE id = ?', [req.params.id]);
  res.json({ success: true, message: 'Deleted!' });
});

module.exports = router;=
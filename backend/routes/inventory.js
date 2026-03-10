const express = require('express');
const router = express.Router();

let inventory = [
  { id: 1, name: 'Laptop', category: 'Electronics', quantity: 25, price: 85000, status: 'In Stock' },
  { id: 2, name: 'Mouse', category: 'Electronics', quantity: 50, price: 1500, status: 'In Stock' },
  { id: 3, name: 'Keyboard', category: 'Electronics', quantity: 30, price: 2500, status: 'In Stock' },
  { id: 4, name: 'Monitor', category: 'Electronics', quantity: 5, price: 35000, status: 'Low Stock' },
  { id: 5, name: 'Headphones', category: 'Electronics', quantity: 0, price: 8000, status: 'Out of Stock' },
];

// Get all inventory
router.get('/', (req, res) => {
  res.json({ success: true, data: inventory });
});

// Add item
router.post('/', (req, res) => {
  const item = { id: inventory.length + 1, ...req.body };
  inventory.push(item);
  res.json({ success: true, data: item });
});

// Update item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  inventory = inventory.map(i => i.id === id ? { ...i, ...req.body } : i);
  res.json({ success: true, message: 'Updated!' });
});

// Delete item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  inventory = inventory.filter(i => i.id !== id);
  res.json({ success: true, message: 'Deleted!' });
});

module.exports = router;
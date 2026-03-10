const express = require('express');
const router = express.Router();

let transactions = [
  { id: 1, type: 'Income', category: 'Sales', amount: 150000, date: '2026-03-01', description: 'Product Sales' },
  { id: 2, type: 'Expense', category: 'Salary', amount: 265000, date: '2026-03-02', description: 'Monthly Salaries' },
  { id: 3, type: 'Income', category: 'Service', amount: 85000, date: '2026-03-03', description: 'Consulting Fee' },
  { id: 4, type: 'Expense', category: 'Operations', amount: 25000, date: '2026-03-04', description: 'Office Rent' },
  { id: 5, type: 'Income', category: 'Sales', amount: 200000, date: '2026-03-05', description: 'Product Sales' },
];

// Get all transactions
router.get('/', (req, res) => {
  const income = transactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
  res.json({ 
    success: true, 
    data: transactions,
    summary: { income, expense, balance: income - expense }
  });
});

// Add transaction
router.post('/', (req, res) => {
  const transaction = { id: transactions.length + 1, ...req.body };
  transactions.push(transaction);
  res.json({ success: true, data: transaction });
});

// Delete transaction
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  transactions = transactions.filter(t => t.id !== id);
  res.json({ success: true, message: 'Deleted!' });
});

module.exports = router;
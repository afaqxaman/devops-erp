const express = require('express');
const router = express.Router();

let employees = [
  { id: 1, name: 'Afaq Zaman', role: 'DevOps Engineer', department: 'IT', salary: 85000, status: 'Active' },
  { id: 2, name: 'Ali Hassan', role: 'Frontend Developer', department: 'IT', salary: 65000, status: 'Active' },
  { id: 3, name: 'Sara Khan', role: 'HR Manager', department: 'HR', salary: 55000, status: 'Active' },
  { id: 4, name: 'Usman Ahmed', role: 'Accountant', department: 'Finance', salary: 60000, status: 'Active' },
];

// Get all employees
router.get('/', (req, res) => {
  res.json({ success: true, data: employees });
});

// Add employee
router.post('/', (req, res) => {
  const employee = { id: employees.length + 1, ...req.body };
  employees.push(employee);
  res.json({ success: true, data: employee });
});

// Update employee
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.map(e => e.id === id ? { ...e, ...req.body } : e);
  res.json({ success: true, message: 'Updated!' });
});

// Delete employee
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.filter(e => e.id !== id);
  res.json({ success: true, message: 'Deleted!' });
});

module.exports = router;
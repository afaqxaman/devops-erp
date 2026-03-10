const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'DevOps ERP API Running!' });
});

// Routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');
const inventoryRoutes = require('./routes/inventory');
const financeRoutes = require('./routes/finance');
const salesRoutes = require('./routes/sales');
const shopExpensesRoutes = require('./routes/shop_expenses');
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/shop-expenses', shopExpensesRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
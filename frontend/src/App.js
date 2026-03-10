import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Inventory from './pages/Inventory';
import Finance from './pages/Finance';
import Sales from './pages/Sales';
import ShopExpenses from './pages/ShopExpenses';

function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/employees" element={token ? <Employees /> : <Navigate to="/login" />} />
        <Route path="/inventory" element={token ? <Inventory /> : <Navigate to="/login" />} />
        <Route path="/finance" element={token ? <Finance /> : <Navigate to="/login" />} />
        <Route path="/sales" element={token ? <Sales /> : <Navigate to="/login" />} />
        <Route path="/shop-expenses" element={token ? <ShopExpenses /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
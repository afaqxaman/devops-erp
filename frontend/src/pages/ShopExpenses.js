import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

function ShopExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ category: '', amount: '', description: '', date: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/shop-expenses').then(res => setExpenses(res.data.data));
  }, []);

  const handleAdd = async () => {
    await axios.post('http://localhost:5000/api/shop-expenses', form);
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/shop-expenses/${id}`);
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial', minHeight: '100vh', background: '#f0f2f5' }}>
      <Sidebar active="Shop Expenses" />
      <div style={{ marginLeft: '220px', flex: 1, padding: '30px' }}>
        <h2>🏪 Shop Expenses</h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input placeholder="Category" onChange={e => setForm({...form, category: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Amount" onChange={e => setForm({...form, amount: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input type="date" onChange={e => setForm({...form, date: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }} />
            <button onClick={handleAdd} style={{ padding: '8px 16px', background: '#9c27b0', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#9c27b0', color: 'white' }}>
                <th style={{ padding: '12px' }}>Category</th>
                <th style={{ padding: '12px' }}>Amount</th>
                <th style={{ padding: '12px' }}>Description</th>
                <th style={{ padding: '12px' }}>Date</th>
                <th style={{ padding: '12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(exp => (
                <tr key={exp.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>{exp.category}</td>
                  <td style={{ padding: '12px' }}>{exp.amount}</td>
                  <td style={{ padding: '12px' }}>{exp.description}</td>
                  <td style={{ padding: '12px' }}>{exp.date?.slice(0,10)}</td>
                  <td style={{ padding: '12px' }}>
                    <button onClick={() => handleDelete(exp.id)} style={{ background: '#ea4335', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShopExpenses;
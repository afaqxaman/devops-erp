import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

function Inventory() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ item_name: '', quantity: '', price: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory').then(res => setItems(res.data.data));
  }, []);

  const handleAdd = async () => {
    await axios.post('http://localhost:5000/api/inventory', form);
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial', minHeight: '100vh', background: '#f0f2f5' }}>
      <Sidebar active="Inventory" />
      <div style={{ marginLeft: '220px', flex: 1, padding: '30px' }}>
        <h2>📦 Inventory</h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input placeholder="Item Name" onChange={e => setForm({...form, item_name: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Quantity" onChange={e => setForm({...form, quantity: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <button onClick={handleAdd} style={{ padding: '8px 16px', background: '#34a853', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#34a853', color: 'white' }}>
                <th style={{ padding: '12px' }}>Item Name</th>
                <th style={{ padding: '12px' }}>Quantity</th>
                <th style={{ padding: '12px' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>{item.item_name}</td>
                  <td style={{ padding: '12px' }}>{item.quantity}</td>
                  <td style={{ padding: '12px' }}>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
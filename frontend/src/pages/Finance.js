import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

const API = process.env.REACT_APP_API_URL;

function Finance() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ type: '', amount: '', description: '' });

  useEffect(() => {
    axios.get(`${API}/api/finance`).then(res => setRecords(res.data.data));
  }, []);

  const handleAdd = async () => {
    await axios.post(`${API}/api/finance`, form);
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial', minHeight: '100vh', background: '#f0f2f5' }}>
      <Sidebar active="Finance" />
      <div style={{ marginLeft: '220px', flex: 1, padding: '30px' }}>
        <h2>💰 Finance</h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input placeholder="Type (income/expense)" onChange={e => setForm({...form, type: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Amount" onChange={e => setForm({...form, amount: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <button onClick={handleAdd} style={{ padding: '8px 16px', background: '#fbbc04', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#fbbc04', color: 'white' }}>
                <th style={{ padding: '12px' }}>Type</th>
                <th style={{ padding: '12px' }}>Amount</th>
                <th style={{ padding: '12px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>{record.type}</td>
                  <td style={{ padding: '12px' }}>{record.amount}</td>
                  <td style={{ padding: '12px' }}>{record.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Finance;
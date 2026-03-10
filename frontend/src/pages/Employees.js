import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', department: '', salary: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees').then(res => setEmployees(res.data.data));
  }, []);

  const handleAdd = async () => {
    await axios.post('http://localhost:5000/api/employees', form);
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial', minHeight: '100vh', background: '#f0f2f5' }}>
      <Sidebar active="Employees" />
      <div style={{ marginLeft: '220px', flex: 1, padding: '30px' }}>
        <h2>👥 Employees</h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Role" onChange={e => setForm({...form, role: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Department" onChange={e => setForm({...form, department: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <input placeholder="Salary" onChange={e => setForm({...form, salary: e.target.value})} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: 1 }} />
            <button onClick={handleAdd} style={{ padding: '8px 16px', background: '#1a73e8', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#1a73e8', color: 'white' }}>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Role</th>
                <th style={{ padding: '12px' }}>Department</th>
                <th style={{ padding: '12px' }}>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>{emp.name}</td>
                  <td style={{ padding: '12px' }}>{emp.role}</td>
                  <td style={{ padding: '12px' }}>{emp.department}</td>
                  <td style={{ padding: '12px' }}>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
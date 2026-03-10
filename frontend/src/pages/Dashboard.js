import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, expenses: 2400 },
  { month: 'Feb', sales: 3000, expenses: 1398 },
  { month: 'Mar', sales: 6000, expenses: 3800 },
  { month: 'Apr', sales: 4500, expenses: 2000 },
  { month: 'May', sales: 5500, expenses: 2800 },
  { month: 'Jun', sales: 6500, expenses: 3200 },
];

const pieData = [
  { name: 'Employees', value: 35 },
  { name: 'Inventory', value: 25 },
  { name: 'Finance', value: 20 },
  { name: 'Sales', value: 20 },
];

const COLORS = ['#6c63ff', '#34a853', '#fbbc04', '#ea4335'];

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const pages = [
    { name: 'Dashboard', link: '/dashboard', icon: '📊' },
    { name: 'Employees', link: '/employees', icon: '👥' },
    { name: 'Inventory', link: '/inventory', icon: '📦' },
    { name: 'Finance', link: '/finance', icon: '💰' },
    { name: 'Sales', link: '/sales', icon: '🛒' },
    { name: 'Shop Expenses', link: '/shop-expenses', icon: '🏪' },
  ];

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial', minHeight: '100vh', background: '#f0f2f5' }}>
      
      {/* Sidebar */}
      <div style={{ width: '220px', background: 'linear-gradient(180deg, #6c63ff, #4a42d6)', color: 'white', padding: '20px 0', position: 'fixed', height: '100vh' }}>
        <div style={{ padding: '0 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 style={{ margin: 0, fontSize: '20px' }}>🚀 DevOps ERP</h2>
        </div>
        {pages.map(page => (
          <div key={page.name} onClick={() => window.location.href = page.link}
            style={{ padding: '12px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
              background: page.link === '/dashboard' ? 'rgba(255,255,255,0.2)' : 'transparent' }}>
            <span>{page.icon}</span>
            <span>{page.name}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '220px', flex: 1, padding: '20px' }}>
        
        {/* Navbar */}
        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: 0 }}>Dashboard Overview</h3>
          <div>
            <span style={{ marginRight: '15px' }}>Welcome, {user?.name}</span>
            <button onClick={handleLogout} style={{ background: '#6c63ff', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
          {[
            { title: 'Employees', value: '24', color: '#6c63ff', icon: '👥' },
            { title: 'Inventory Items', value: '142', color: '#34a853', icon: '📦' },
            { title: 'Total Revenue', value: 'Rs 2.4M', color: '#fbbc04', icon: '💰' },
            { title: 'Total Sales', value: '89', color: '#ea4335', icon: '🛒' },
          ].map(card => (
            <div key={card.title} style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: `4px solid ${card.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ margin: '0 0 5px', color: '#666', fontSize: '14px' }}>{card.title}</p>
                  <h2 style={{ margin: 0, color: card.color }}>{card.value}</h2>
                </div>
                <span style={{ fontSize: '30px' }}>{card.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 15px' }}>📈 Monthly Sales vs Expenses</h4>
            <BarChart width={400} height={250} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#6c63ff" />
              <Bar dataKey="expenses" fill="#fbbc04" />
            </BarChart>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 15px' }}>🍩 Module Usage</h4>
            <PieChart width={400} height={250}>
              <Pie data={pieData} cx={200} cy={120} outerRadius={100} dataKey="value" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
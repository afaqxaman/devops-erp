import React from 'react';

function Sidebar({ active }) {
  const pages = [
    { name: 'Dashboard', link: '/dashboard', icon: '📊' },
    { name: 'Employees', link: '/employees', icon: '👥' },
    { name: 'Inventory', link: '/inventory', icon: '📦' },
    { name: 'Finance', link: '/finance', icon: '💰' },
    { name: 'Sales', link: '/sales', icon: '🛒' },
    { name: 'Shop Expenses', link: '/shop-expenses', icon: '🏪' },
  ];

  return (
    <div style={{ width: '220px', background: 'linear-gradient(180deg, #6c63ff, #4a42d6)', color: 'white', padding: '20px 0', position: 'fixed', height: '100vh' }}>
      <div style={{ padding: '0 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
      <h2 style={{ margin: 0, fontSize: '20px' }}>🚀 ERP Project</h2>
      </div>
      {pages.map(page => (
        <div key={page.name} onClick={() => window.location.href = page.link}
          style={{ padding: '12px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
            background: active === page.name ? 'rgba(255,255,255,0.2)' : 'transparent' }}>
          <span>{page.icon}</span>
          <span>{page.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
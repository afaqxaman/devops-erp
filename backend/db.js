const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@admin123#',
  database: 'devops_erp'
});

db.connect((err) => {
  if (err) {
    console.error('DB Error:', err.message);
  } else {
    console.log('MySQL Connected!');
  }
});

module.exports = db;
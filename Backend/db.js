const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cdac',
  database: 'minip'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit if DB fails
  }
  console.log('MySQL Connected');
});


module.exports = db;

// db.js
const { Pool } = require('pg');

// connect database
const pool = new Pool({
  user: 'postgres',//yourDatabaseUser
  host: 'localhost',//yourDatabaseHost
  database: 'UniDeals',//yourDatabaseName
  password: 'wuxinyu',//yourDatabasePassword
  port: '5432', // PostgreSQL default port 5432
});

// test connection
pool.query('SELECT * FROM User', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database', res.rows[0]);
  }
});


module.exports = pool;
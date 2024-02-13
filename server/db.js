// db.js
const { Pool } = require('pg');

// connect database
const pool = new Pool({
  user: 'postgres',//yourDatabaseUser
  host: 'localhost',//yourDatabaseHost
  database: 'UniDeals',//yourDatabaseName
  password: 'yingtu123',//yourDatabasePassword
  port: '5432', // PostgreSQL default port 5432
});

module.exports = pool;
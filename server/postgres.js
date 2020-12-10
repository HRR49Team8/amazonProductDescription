const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'alexandra',
  password: '',
  database: 'productdescription',
  port: 5432 // who said this is the port?
});


console.log('Connection to Posty werq\'d');

module.exports.pool = pool;
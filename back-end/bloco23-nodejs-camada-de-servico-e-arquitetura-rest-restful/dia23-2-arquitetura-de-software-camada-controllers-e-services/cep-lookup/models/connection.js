const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Nutricao09*',
  database: 'cep_lookup'
});

module.exports = connection;
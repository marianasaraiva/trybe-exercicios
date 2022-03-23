const mysqli = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Nutricao09*',
  database: 'users_crud'
});

module.exports = connection;  
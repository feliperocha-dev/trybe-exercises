const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: 'cep_lookup',
});

module.exports = connection;

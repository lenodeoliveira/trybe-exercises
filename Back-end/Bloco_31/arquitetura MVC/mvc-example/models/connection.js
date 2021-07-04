const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lennon',
  password: 'foVMTYSSHnW&29',
  database: 'mvc_example'});

module.exports = connection;
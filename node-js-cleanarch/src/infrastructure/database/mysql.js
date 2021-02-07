require('dotenv').config();
const mysql = require('mysql');

const createMySqlConnection = (config) => {  
  const connection = mysql.createConnection({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('connected');
  });

  return connection;
};

module.exports = createMySqlConnection;
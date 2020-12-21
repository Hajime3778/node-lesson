require('dotenv').config();

const { 
  MYSQL_HOST, 
  MYSQL_PORT, 
  MYSQL_USER, 
  MYSQL_PASS, 
  MYSQL_DB,
  PORT,
} = process.env;

const config = {
  server: {
    port: PORT,
  },
  mysql: {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB,
  }
};

module.exports = config;
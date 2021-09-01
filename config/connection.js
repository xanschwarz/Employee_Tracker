const mysql = require('mysql2');
require('dotenv').config();

// Connection to database.
const connection = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: 'tracker_db',
    },
    console.log(`Connected to the tracker_db database.`)
  );

module.exports = connection;
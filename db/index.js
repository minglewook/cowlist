var mysql = require('mysql');

exports.db = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "0618",
  database: "cows"
});

exports.db.connect();
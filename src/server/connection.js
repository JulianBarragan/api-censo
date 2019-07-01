const mysql = require('mysql')

const connection = mysql.createConnection({
  // host: 'localhost',
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'bb733aaf7c9316',
  password: 'e28c0c28',
  database: 'heroku_fddad1e74a608e2'
})

module.exports = connection

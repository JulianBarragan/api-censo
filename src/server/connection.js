const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // host: 'http://192.168.0.17',
  user: 'root',
  password: '',
  database: 'censo'
})

module.exports = connection

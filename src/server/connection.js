const mysql = require('mysql')

const connection = mysql.createPool({
  connectionLimit: 100,
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b3537aa37ae113',
  password: '971809f6',
  database: 'heroku_46a1df53f8ac899',
  multipleStatements: true
})
// const connection = mysql.createConnection({
//   // host: 'localhost',
//   host: 'us-cdbr-iron-east-02.cleardb.net',
//   user: 'b3537aa37ae113',
//   password: '971809f6',
//   database: 'heroku_46a1df53f8ac899'
// })

module.exports = connection

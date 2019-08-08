var mysql = require('mysql')

// connect to the db
var dbConnectionInfo = {
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b3537aa37ae113',
  password: '971809f6',
  connectionLimit: 10, // mysql connection pool length
  database: 'heroku_46a1df53f8ac899'
}

// For mysql single connection
/* var dbconnection = mysql.createConnection(
        dbConnectionInfo
);

 dbconnection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});
*/

// create mysql connection pool
var dbconnection = mysql.createPool(
  dbConnectionInfo
)

// Attempt to catch disconnects
dbconnection.on('connection', function (connection) {
  console.log('DB Connection established')

  connection.on('error', function (err) {
    console.log('db error', err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      dbconnection() // lost due to either server restart, or a
    } else { // connnection idle timeout (the wait_timeout
      throw err // server variable configures this)
    }
  })

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code)
  })
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err)
  })

  setInterval(function () {
    connection.query('SELECT 1')
  }, 5000)
})

module.exports = dbconnection

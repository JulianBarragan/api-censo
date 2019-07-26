// const mysql = require('mysql')

// let connection = null

// function handleDisconnect () {
//   connection = mysql.createConnection({
//     host: 'us-cdbr-iron-east-02.cleardb.net',
//     user: 'b3537aa37ae113',
//     password: '971809f6',
//     database: 'heroku_46a1df53f8ac899'
//   }) // Recreate the connection, since
//   // the old one cannot be reused.

//   connection.connect(function (err) { // The server is either down
//     if (err) { // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err)
//       setTimeout(handleDisconnect, 2000) // We introduce a delay before attempting to reconnect,
//     } // to avoid a hot loop, and to allow our node script to
//   }) // process asynchronous requests in the meantime.
//   // If you're also serving http, display a 503 error.

//   connection.on('error', function (err) {
//     console.log('db error', err)
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect() // lost due to either server restart, or a
//     } else { // connnection idle timeout (the wait_timeout
//       throw err // server variable configures this)
//     }
//   })
// }

// handleDisconnect()
// setInterval(function () {
//   connection.query('SELECT 1')
// }, 5000)

// module.exports = connection

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

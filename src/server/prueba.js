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
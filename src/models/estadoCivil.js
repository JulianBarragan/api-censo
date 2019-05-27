const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // host: 'http://192.168.0.17',
  user: 'root',
  password: '',
  database: 'censoTeontepec'
})

let civilModel = {}

civilModel.getCivil = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM estado_civil ORDER BY id_estado_civil',
      (err, rows) => {
        if (err) {
          throw err
        } else {
          callback(null, rows)
        }
      }
    )
  }
}

module.exports = civilModel

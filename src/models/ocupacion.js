const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // host: 'http://192.168.0.17',
  user: 'root',
  password: '',
  database: 'censoTeontepec'
})

let ocupacionModel = {}

ocupacionModel.getOcupacion = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM ocupacion ORDER BY id_ocupacion',
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

module.exports = ocupacionModel

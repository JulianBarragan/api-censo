const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // host: 'http://192.168.0.17',
  user: 'root',
  password: '',
  database: 'censoTeontepec'
})

let estudiosModel = {}

estudiosModel.getEstudios = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM grado_estudios ORDER BY id_grado_estudios',
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

module.exports = estudiosModel

const connection = require('../server/connection')

let rutasBasicas = {}

rutasBasicas.getCivil = (callback) => {
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

rutasBasicas.getOcupacion = (callback) => {
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

rutasBasicas.getEstudios = (callback) => {
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

module.exports = rutasBasicas

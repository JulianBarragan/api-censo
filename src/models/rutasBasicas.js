const connection = require('../server/connection')

let rutasBasicas = {}

// ============================
//  Estado Civil
// ============================
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

// ============================
//  Ocupaciones
// ============================
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

// ============================
//  Grado Estudios
// ============================
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

// ============================
//  Servicios Basicos
// ============================
rutasBasicas.getServiciosBasicos = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM servicios_basicos ORDER BY id_servicio_basico',
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

// ============================
//  Barrios Colonias
// ============================
rutasBasicas.getColonias = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM barrios_colonias ORDER BY id_colonia',
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

rutasBasicas.postColonias = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO barrios_colonias SET ?', userData,
      (err, result) => {
        if (err) {
          throw err
        } else {
          callback(null, {
            'insertId': result.insertId
          })
        }
      }
    )
  }
}

module.exports = rutasBasicas

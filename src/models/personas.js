const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // host: '192.168.0.17',
  user: 'root',
  password: '',
  database: 'censoTeontepec'
})

let personasModel = {}

personasModel.getUser = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM personas WHERE estatus = 1 ORDER BY id_persona',
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

personasModel.insertPersona = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO personas SET ?', userData,
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

personasModel.updateUser = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE personas SET 
      primer_nombre = ${connection.escape(userData.primer_nombre)},
      segundo_nombre = ${connection.escape(userData.segundo_nombre)},
      a_paterno = ${connection.escape(userData.a_paterno)},
      a_materno = ${connection.escape(userData.a_materno)},
      fecha_nacimiento = ${connection.escape(userData.fecha_nacimiento)},
      id_grado_estudios = ${connection.escape(userData.id_grado_estudios)},
      escuela = ${connection.escape(userData.escuela)},
      id_ocupacion = ${connection.escape(userData.id_ocupacion)},
      id_estado_civil = ${connection.escape(userData.id_estado_civil)},
      lugar_origen = ${connection.escape(userData.lugar_origen)},
      telefono = ${connection.escape(userData.telefono)},
      id_usuario = ${connection.escape(userData.id_usuario)} 
      WHERE id_persona = ${connection.escape(userData.id_persona)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': 'success'
        })
      }
    })
  }
}

personasModel.deleteUser = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM personas WHERE id_persona = ${connection.escape(id)}`
    connection.query(sqlExists, (err, row) => {
      if (row) {
        let sql = `UPDATE personas SET estatus = 0 WHERE id_persona = ${connection.escape(id)}`
        connection.query(sql, (err, result) => {
          if (err) {
            throw err
          } else {
            callback(null, {
              'msg': 'Deleted'
            })
          }
        })
      } else {
        callback(null, {
          'msg': 'not Exists'
        })
      }
    })
  }
}

module.exports = personasModel

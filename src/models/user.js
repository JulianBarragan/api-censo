
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'censoTeontepec'
// })
const connection = require('../server/connection')

let userModel = {}

userModel.getUser = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM usuarios WHERE estatus = 1 ORDER BY id_usuario',
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

userModel.insertUser = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO usuarios SET ?', userData,
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

userModel.updateUser = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE usuarios SET 
      nombre = ${connection.escape(userData.nombre)},
      a_paterno = ${connection.escape(userData.a_paterno)},
      a_materno = ${connection.escape(userData.a_materno)},
      roll = ${connection.escape(userData.roll)},
      contrasena = ${connection.escape(userData.contrasena)},
      telefono = ${connection.escape(userData.telefono)} 
      WHERE id_usuario = ${connection.escape(userData.id_usuario)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': `Usuario Actualizado`
        })
      }
    })
  }
}

// userModel.deleteUser = (id, callback) => {
//   if (connection) {
//     let sqlExists =
//       `SELECT * FROM usuarios WHERE id_usuario = ${connection.escape(id)}`
//     connection.query(sqlExists, (err, row) => {
//       if (row) {
//         let sql = `DELETE FROM usuarios WHERE id_usuario = ${connection.escape(id)}`
//         connection.query(sql, (err, result) => {
//           if (err) {
//             throw err
//           } else {
//             callback(null, {
//               'msg': 'Deleted'
//             })
//           }
//         })
//       } else {
//         callback(null, {
//           'msg': 'not Exists'
//         })
//       }
//     })
//   }
// }

userModel.deleteUser = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM usuarios WHERE id_usuario = ${connection.escape(id)}`
    connection.query(sqlExists, (_err, row) => {
      if (row) {
        let sql = `UPDATE usuarios SET estatus = 0 WHERE id_usuario = ${connection.escape(id)}`
        connection.query(sql, (err, _result) => {
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
module.exports = userModel

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // host: '192.168.0.17',
  user: 'root',
  password: '',
  database: 'testapi'
})

let userModel = {}

userModel.getUser = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM users ORDER BY id',
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
    connection.query('INSERT INTO users SET ?', userData,
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
      UPDATE users SET 
      username = ${connection.escape(userData.username)},
      password = ${connection.escape(userData.password)},
      email = ${connection.escape(userData.email)} 
      WHERE id = ${connection.escape(userData.id)}
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

userModel.deleteUser = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM users WHERE id = ${connection.escape(id)}`
    connection.query(sqlExists, (err, row) => {
      if (row) {
        let sql = `DELETE FROM users WHERE id = ${connection.escape(id)}`
        connection.query(sql, (err, result) => {
          if (err) {
            throw err
          } else {
            callback(null, {
              "msg": "Deleted"
            })
          }
        })
      } else {
        callback(null, {
          "msg": "not Exists"
        })
      }
    })
  }
}
module.exports = userModel

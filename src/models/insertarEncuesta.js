const connection = require('../server/connection2')

let encuestaModel = {}

encuestaModel.insertEncuesta = (userData, callback) => {
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

module.exports = encuestaModel

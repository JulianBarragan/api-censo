const connection = require('../server/connection2')

let familiasModel = {}

familiasModel.getFamilias = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM familias WHERE estatus = 1 ORDER BY id_familia',
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

familiasModel.getFamilyById = (userId, callback) => {
    if (connection) {
        connection.query('SELECT * FROM familias WHERE `estatus` = 1 AND `id_familia` = ? ORDER BY id_familia DESC',
            (userId), (err, rows) => {
                if (err) {
                    throw err
                } else {
                    callback(null, rows)
                }
            }
        )
    }
}

familiasModel.insertFamilia = (userData, callback) => {
    if (connection) {
        connection.query('INSERT INTO familias SET ?', userData,
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

familiasModel.updateFamilias = (userData, callback) => {
    if (connection) {
        const sql = `
     UPDATE familias SET 
      nombre_familias = ${connection.escape(userData.nombre_familias)},
      direccion = ${connection.escape(userData.direccion)},
      calle_lateral_derecha = ${connection.escape(userData.calle_lateral_derecha)},
      calle_lateral_izquierda = ${connection.escape(userData.calle_lateral_izquierda)},
      id_colonia = ${connection.escape(userData.id_colonia)},
      personas_discapacitadas = ${connection.escape(userData.personas_discapacitadas)},
      num_familiares_extranjero = ${connection.escape(userData.num_familiares_extranjero)},
      ciudad_que_radican = ${connection.escape(userData.ciudad_que_radican)},
      llave_agua = ${connection.escape(userData.llave_agua)},
      cantidad_llaves = ${connection.escape(userData.cantidad_llaves)},
      dias_aguas_semanal = ${connection.escape(userData.dias_aguas_semanal)},
      medio_almacenamiento = ${connection.escape(userData.medio_almacenamiento)},
      estado_de_red = ${connection.escape(userData.estado_de_red)},
      tanque_provedor = ${connection.escape(userData.tanque_provedor)},
      medio_pago = ${connection.escape(userData.medio_pago)},
      uso_de_agua = ${connection.escape(userData.uso_de_agua)},
      cooperacion_economica = ${connection.escape(userData.cooperacion_economica)},
      familia_adulto = ${connection.escape(userData.familia_adulto)},
      cantidad_justa = ${connection.escape(userData.cantidad_justa)},
      fecha_registro = ${connection.escape(userData.fecha_registro)},
      id_usuario = ${connection.escape(userData.id_usuario)},
      estatusServer = ${connection.escape(userData.estatusServer)}
      WHERE id_familia = ${connection.escape(userData.id_familia)}
    `
        connection.query(sql, (err, _result) => {
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

familiasModel.deleteFamilia = (id, callback) => {
    if (connection) {
        let sqlExists =
            `SELECT * FROM familias WHERE id_familia = ${connection.escape(id)}`
        connection.query(sqlExists, (_err, row) => {
            if (row) {
                let sql = `UPDATE familia SET estatus = 0 WHERE id_familia = ${connection.escape(id)}`
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

module.exports = familiasModel
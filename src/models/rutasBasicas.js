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

rutasBasicas.postEstudios = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO grado_estudios SET ?', userData,
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

rutasBasicas.updateEstudios = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE grado_estudios SET 
      estudios = ${connection.escape(userData.estudios)}
      WHERE id_grado_estudios = ${connection.escape(userData.id_grado_estudios)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': `Grado de Estudio Actualizado`
        })
      }
    })
  }
}

rutasBasicas.deleteEstudio = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM grado_estudios WHERE id_grado_estudios = ${connection.escape(id)}`
    connection.query(sqlExists, (_err, row) => {
      if (row) {
        let sql = `UPDATE grado_estudios SET estatus = 0 WHERE id_grado_estudios = ${connection.escape(id)}`
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
    connection.query('SELECT * FROM colonias ORDER BY id_colonia',
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

rutasBasicas.updateColonias = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE colonias SET 
      colonia = ${connection.escape(userData.colonia)}
      WHERE id_colonia = ${connection.escape(userData.id_colonia)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': `Colonia Actualizada`
        })
      }
    })
  }
}

rutasBasicas.deleteColonia = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM colonias WHERE id_colonia = ${connection.escape(id)}`
    connection.query(sqlExists, (_err, row) => {
      if (row) {
        let sql = `UPDATE colonias SET estatus = 0 WHERE id_colonia = ${connection.escape(id)}`
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

// ============================
//  Comercios
// ============================
rutasBasicas.getComercios = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM comercios ORDER BY id_comercio', userData,
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
//  Ganaderia
// ============================
rutasBasicas.getGanado = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM ganaderia ORDER BY id_ganado', userData,
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
//  Hoticultura
// ============================
rutasBasicas.getHoticultura = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM hoticultura ORDER BY id_hoticultura', userData,
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
//  Problemas Comunidad
// ============================
rutasBasicas.getProblemasComunidad = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM problemas_comunidad ORDER BY id_problema', userData,
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
//  Servicios de Importancia
// ============================
rutasBasicas.getServiciosImportancia = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM servicios_de_importancia ORDER BY id_servicio', userData,
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
//  Productos Agricolas
// ============================
rutasBasicas.getProductosAgricolas = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM productos_agricolas ORDER BY id_producto', userData,
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

rutasBasicas.postProductosAgricolas = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO productos_agricolas SET ?', userData,
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

rutasBasicas.updateProductosAgricolas = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE productos_agricolas SET 
      producto = ${connection.escape(userData.producto)},
      tipo_riego = ${connection.escape(userData.tipo_riego)},
      tipo_terreno = ${connection.escape(userData.tipo_terreno)},
      id_familia = ${connection.escape(userData.id_familia)},
      cantidad_hectareas = ${connection.escape(userData.cantidad_hectareas)},
      producto = ${connection.escape(userData.producto)}
      WHERE id_producto = ${connection.escape(userData.id_producto)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': `Producto Agricola Actualizado`
        })
      }
    })
  }
}

rutasBasicas.deleteProductoAgricola = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM productos_agricolas WHERE id_producto = ${connection.escape(id)}`
    connection.query(sqlExists, (_err, row) => {
      if (row) {
        let sql = `UPDATE productos_agricolas SET estatus = 0 WHERE id_producto = ${connection.escape(id)}`
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

module.exports = rutasBasicas

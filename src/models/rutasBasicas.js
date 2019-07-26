const connection = require('../server/connection')

let rutasBasicas = {}

// ============================
//  Estado Civil
// ============================
rutasBasicas.getCivil = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM estado_civil WHERE estatus = 1 ORDER BY id_estado_civil',
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

rutasBasicas.postCivil = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO estado_civil SET ?', userData,
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

rutasBasicas.updateCivil = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE estado_civil SET 
      estado = ${connection.escape(userData.estado)}
      WHERE id_estado_civil = ${connection.escape(userData.id_estado_civil)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': `Estado Civil Actualizado`
        })
      }
    })
  }
}

rutasBasicas.deleteCivil = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM estado_civil WHERE id_estado_civil = ${connection.escape(id)}`
    connection.query(sqlExists, (_err, row) => {
      if (row) {
        let sql = `UPDATE estado_civil SET estatus = 0 WHERE id_estado_civil = ${connection.escape(id)}`
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

rutasBasicas.postOcupacion = (userData, callback) => {
  if (connection) {
    connection.query('INSERT INTO ocupacion SET ?', userData,
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

rutasBasicas.updateOcupacion = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE ocupacion SET 
      ocupacion = ${connection.escape(userData.ocupacion)}
      WHERE id_ocupacion = ${connection.escape(userData.id_ocupacion)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err
      } else {
        callback(null, {
          'msg': `Ocupacion Actualizada`
        })
      }
    })
  }
}

rutasBasicas.deleteOcupacion = (id, callback) => {
  if (connection) {
    let sqlExists =
      `SELECT * FROM ocupacion WHERE id_ocupacion = ${connection.escape(id)}`
    connection.query(sqlExists, (_err, row) => {
      if (row) {
        let sql = `UPDATE ocupacion SET estatus = 0 WHERE id_ocupacion = ${connection.escape(id)}`
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
//  Grado Estudios
// ============================
rutasBasicas.getEstudios = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM grado_estudios WHERE estatus = 1 ORDER BY id_grado_estudios',
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

// ============================
//  Tablas Fuertes
// ============================

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
//  Servicios Necesarios
// ============================
rutasBasicas.getServiciosNecesarios = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM servicios_necesarios ORDER BY id_servicio', userData,
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
//  Participacion Limpieza
// ============================
rutasBasicas.getParticipacionLimpieza = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM participacion_de_limpieza ORDER BY id_participacion', userData,
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
//  TABLAS DEBILES
// ============================
// ============================
//  Familias Servicios Basicos
// ============================
rutasBasicas.getFamiliasServiciosBasicos = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_servicios_basicos ORDER BY id_familia', userData,
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
//  Familias Servicios de Importancia
// ============================
rutasBasicas.getFamiliasServiciosImportancia = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_servicios_de_importancia ORDER BY id_familia', userData,
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
//  Familias Servicios Necesarios
// ============================
rutasBasicas.getFamiliasServiciosNecesarios = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_servicios_necesarios ORDER BY id_familia', userData,
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
//  Familias Problemas Comunidad
// ============================
rutasBasicas.getFamiliasProblemasComunidad = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_problemas_comunidad ORDER BY id_familia', userData,
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
//  Familias Participacion Limpieza
// ============================
rutasBasicas.getFamiliasParticipacionLimpieza = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_participacion_de_limpieza ORDER BY id_familia', userData,
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
//  Familias Ganaderia
// ============================
rutasBasicas.getFamiliasGanaderias = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_ganaderia ORDER BY id_familia', userData,
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
//  Familias Hoticultura
// ============================
rutasBasicas.getFamiliasHoticultura = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_hoticultura ORDER BY id_familia', userData,
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
//  Familias Comercios
// ============================
rutasBasicas.getFamiliasComercios = (userData, callback) => {
  if (connection) {
    connection.query('SELECT * FROM familias_comercios ORDER BY id_familia', userData,
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

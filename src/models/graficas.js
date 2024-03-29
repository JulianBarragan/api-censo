const connection = require('../server/connection2')

let graficasModel = {}

// familias_servicios_basicos
graficasModel.getFamiliasSB = (callback) => {
  if (connection) {
    connection.query('select count(sb.id_servicio_basico) AS total, fsb.id_familia, sb.nombre, sb.id_servicio_basico from familias_servicios_basicos as fsb join servicios_basicos as sb where fsb.id_servicio_basico = sb.id_servicio_basico GROUP BY sb.id_servicio_basico',
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

// Servicios importancia
graficasModel.getFamiliasSI = (callback) => {
  if (connection) {
    connection.query('select count (si.id_servicio) as total, fsi.id_familia, si.servicio, si.id_servicio from familias_servicios_de_importancia as fsi join servicios_de_importancia as si where fsi.id_servicio = si.id_servicio GROUP BY si.id_servicio',
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

// Servicios Necesarios
graficasModel.getFamiliasSN = (callback) => {
  if (connection) {
    connection.query('select count (sn.id_servicio) as total, fsn.id_familia, sn.nombre, sn.id_servicio from familias_servicios_necesarios as fsn join servicios_necesarios as sn where fsn.id_servicio = sn.id_servicio GROUP BY sn.id_servicio',
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

// Problemas comunidad
graficasModel.getFamiliasPC = (callback) => {
  if (connection) {
    connection.query('select count (pc.id_problema) as total, fpc.id_familia, pc.nombre, pc.id_problema from familias_problemas_comunidad as fpc join problemas_comunidad as pc where fpc.id_problema = pc.id_problema GROUP BY pc.id_problema',
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

// Participacion de limpieza
graficasModel.getFamiliasPL = (callback) => {
  if (connection) {
    connection.query('select count (pl.id_participacion) as total, fpl.id_familia, pl.participacion, pl.id_participacion from familias_participacion_de_limpieza as fpl join participacion_de_limpieza as pl where fpl.id_participacion = pl.id_participacion GROUP BY pl.id_participacion',
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

module.exports = graficasModel

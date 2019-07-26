const Familias = require('../models/familias')

module.exports = app => {
  app.get('/familias', (_req, res) => {
    Familias.getFamilias((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.post('/familias', (req, res) => {
    const userData = {
      id_familia: null,
      nombre_familia: req.body.nombre_familia,
      direccion: req.body.direccion,
      calle_lateral_derecha: req.body.calle_lateral_derecha,
      calle_lateral_izquierda: req.body.calle_lateral_izquierda,
      id_colonia: req.body.id_colonia,
      personas_discapacitadas: req.body.personas_discapacitadas,
      num_familiares_extranjero: req.body.num_familiares_extranjero,
      ciudad_que_radican: req.body.ciudad_que_radican,
      llave_agua: req.body.llave_agua,
      cantidad_llaves: req.body.cantidad_llaves,
      dias_agua_semanal: req.body.dias_agua_semanal,
      medio_almacenamiento: req.body.medio_almacenamiento,
      estado_de_red: req.body.estado_de_red,
      tanque_proveedor: req.body.tanque_proveedor,
      medio_pago: req.body.medio_pago,
      uso_de_agua: req.body.uso_de_agua,
      cooperacion_economica: req.body.cooperacion_economica,
      familia_adulto: req.body.familia_adulto,
      cantidad_justa: req.body.cantidad_justa,
      fecha_registro: req.body.fecha_registro,
      id_usuario: req.body.id_usuario,
      estatusServer: req.body.estatusServer,
      representantes_comunidad: req.body.representantes_comunidad,
      actividades_realizadas: req.body.actividades_realizadas
    }
    Familias.insertFamilia(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Persona Insertada',
          data: data
        })
      } else {
        res.status(500).json({
          success: false,
          msg: 'error'
        })
      }
    })
  })

  app.put('/familias/:id_familia', (req, res) => {
    const userData = {
      id_familia: req.params.id_familia,
      nombre_familia: req.body.nombre_familia,
      direccion: req.body.direccion,
      calle_lateral_derecha: req.body.calle_lateral_derecha,
      calle_lateral_izquierda: req.body.calle_lateral_izquierda,
      id_colonia: req.body.id_colonia,
      personas_discapacitadas: req.body.personas_discapacitadas,
      num_familiares_extranjero: req.body.num_familiares_extranjero,
      ciudad_que_radican: req.body.ciudad_que_radican,
      llave_agua: req.body.llave_agua,
      cantidad_llaves: req.body.cantidad_llaves,
      dias_agua_semanal: req.body.dias_agua_semanal,
      medio_almacenamiento: req.body.medio_almacenamiento,
      estado_de_red: req.body.estado_de_red,
      tanque_proveedor: req.body.tanque_proveedor,
      medio_pago: req.body.medio_pago,
      uso_de_agua: req.body.uso_de_agua,
      cooperacion_economica: req.body.cooperacion_economica,
      familia_adulto: req.body.familia_adulto,
      cantidad_justa: req.body.cantidad_justa,
      fecha_registro: req.body.fecha_registro,
      id_usuario: req.body.id_usuario,
      estatusServer: req.body.estatusServer,
      representantes_comunidad: req.body.representantes_comunidad,
      actividades_realizadas: req.body.actividades_realizadas
    }
    Familias.updateFamilias(userData, (_err, data) => {
      if (data && data.msg) {
        res.json({ data })
      } else {
        res.status(500).json({
          success: false,
          msg: 'Error'
        })
      }
    })
  })

  app.delete('/familias/:id', (req, res) => {
    Familias.deleteFamilia(req.params.id, (_err, data) => {
      if ((data && data.msg) === 'Deleted' || data.msg === 'not Exists') {
        res.json({
          success: 'true',
          data
        })
      } else {
        res.status(500).json({
          msg: 'Error'
        })
      }
    })
  })
}

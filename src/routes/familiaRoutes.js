const User = require('../models/personas')

module.exports = app => {
  app.get('/personas', (_req, res) => {
    User.getUser((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.post('/personas', (req, res) => {
    const userData = {
      id_persona: null,
      primer_nombre: req.body.primer_nombre,
      segundo_nombre: req.body.segundo_nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      fecha_nacimiento: req.body.fecha_nacimiento,
      id_grado_estudios: req.body.id_grado_estudios,
      escuela: req.body.escuela,
      id_ocupacion: req.body.id_ocupacion,
      id_estado_civil: req.body.id_estado_civil,
      lugar_origen: req.body.lugar_origen,
      telefono: req.body.telefono,
      id_usuario: req.body.id_usuario,
      estatus: null
    }
    User.insertPersona(userData, (_err, data) => {
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

  app.put('/personas/:id_persona', (req, res) => {
    const userData = {
      id_persona: req.params.id_persona,
      primer_nombre: req.body.primer_nombre,
      segundo_nombre: req.body.segundo_nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      fecha_nacimiento: req.body.fecha_nacimiento,
      id_grado_estudios: req.body.id_grado_estudios,
      escuela: req.body.escuela,
      id_ocupacion: req.body.id_ocupacion,
      id_estado_civil: req.body.id_estado_civil,
      lugar_origen: req.body.lugar_origen,
      telefono: req.body.telefono,
      id_usuario: req.body.id_usuario,
      estatus: null
    }
    User.updateUser(userData, (_err, data) => {
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

  app.delete('/users/:id', (req, res) => {
    User.deleteUser(req.params.id, (_err, data) => {
      if (data && data.msg === 'Deleted' || data.msg === 'not Exists') {
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

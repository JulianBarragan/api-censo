const User = require('../models/user')

module.exports = app => {
  app.get('/users', (_req, res) => {
    User.getUser((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.post('/users', (req, res) => {
    const userData = {
      id_usuario: null,
      nombre: req.body.nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      roll: req.body.roll,
      contrasena: req.body.contrasena,
      telefono: req.body.telefono
    }
    User.insertUser(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Usuario Insertado',
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

  app.put('/users/:id_usuario', (req, res) => {
    const userData = {
      id_usuario: req.params.id_usuario,
      nombre: req.body.nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      roll: req.body.roll,
      contrasena: req.body.contrasena,
      telefono: req.body.telefono,
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

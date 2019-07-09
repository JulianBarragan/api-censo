const Encuesta = require('../models/insertarEncuesta')

module.exports = app => {
  app.post('/encuesta', (req, res) => {
    const encuestaData = {
      id_usuario: null,
      nombre: req.body.nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      roll: req.body.roll,
      contrasena: req.body.contrasena,
      telefono: req.body.telefono
    }
    Encuesta.insertEncuesta(encuestaData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Encuesta Insertada',
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
}

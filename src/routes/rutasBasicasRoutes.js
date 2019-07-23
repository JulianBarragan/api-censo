const Rutas = require('../models/rutasBasicas')

module.exports = app => {
  // ============================
  //  Estado Civil
  // ============================
  app.get('/rutas/estado_civil', (_req, res) => {
    Rutas.getCivil((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Ocupaciones
  // ============================
  app.get('/rutas/ocupaciones', (_req, res) => {
    Rutas.getOcupacion((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Estudios
  // ============================
  app.get('/rutas/estudios', (_req, res) => {
    Rutas.getEstudios((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Barrios Colonias
  // ============================
  app.get('/rutas/colonias', (_req, res) => {
    Rutas.getColonias((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.post('/rutas/colonias', (req, res) => {
    const userData = {
      id_colonia: null,
      colonia: req.body.colonia,
      estatus: req.body.estatus
    }
    Rutas.postColonias(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Colonia Insertada',
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

  // ============================
  //  Servicios Basicos
  // ============================
  app.get('/rutas/servicios_basicos', (_req, res) => {
    Rutas.getServiciosBasicos((_err, data) => {
      res.status(200).json(data)
    })
  })
}

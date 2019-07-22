const Rutas = require('../models/rutasBasicas')

module.exports = app => {
  app.get('/rutas/estado_civil', (_req, res) => {
    Rutas.getCivil((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.get('/rutas/ocupaciones', (_req, res) => {
    Rutas.getOcupacion((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.get('/rutas/estudios', (_req, res) => {
    Rutas.getEstudios((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.get('/rutas/colonias', (_req, res) => {
    Rutas.getColonias((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.get('/rutas/servicios_basicos', (_req, res) => {
    Rutas.getServiciosBasicos((_err, data) => {
      res.status(200).json(data)
    })
  })
}

const Rutas = require('../models/rutasBasicas')

module.exports = app => {
  app.get('/ruta/estado_civil', (_req, res) => {
    Rutas.getCivil((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.get('/ruta/ocupaciones', (_req, res) => {
    Rutas.getOcupacion((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.get('/ruta/estudios', (_req, res) => {
    Rutas.getEstudios((_err, data) => {
      res.status(200).json(data)
    })
  })
}

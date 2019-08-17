const Graficas = require('../models/graficas')

module.exports = app => {
  // familias_servicios_basicos
  app.get('/graficas/familias_servicios_basicos', (_req, res) => {
    Graficas.getFamiliasSB((_err, data) => {
      res.status(200).json(data)
    })
  })

  // Servicios importancia
  app.get('/graficas/familias_servicios_importancia', (_req, res) => {
    Graficas.getFamiliasSI((_err, data) => {
      res.status(200).json(data)
    })
  })

  // Servicios Necesarios
  app.get('/graficas/familias_servicios_necesarios', (_req, res) => {
    Graficas.getFamiliasSN((_err, data) => {
      res.status(200).json(data)
    })
  })

  // Problemas comunidad
  app.get('/graficas/familias_problemas_comunidad', (_req, res) => {
    Graficas.getFamiliasPC((_err, data) => {
      res.status(200).json(data)
    })
  })

  // Participacion de limpieza
  app.get('/graficas/familias_participacion_limpieza', (_req, res) => {
    Graficas.getFamiliasPL((_err, data) => {
      res.status(200).json(data)
    })
  })
}

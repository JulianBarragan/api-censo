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
  //  Servicios Basicos
  // ============================
  app.get('/rutas/servicios_basicos', (_req, res) => {
    Rutas.getServiciosBasicos((_err, data) => {
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
      colonia: req.body.colonia
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
  //  Comercios
  // ============================
  app.get('/rutas/comercios', (_req, res) => {
    Rutas.getComercios((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Ganaderia
  // ============================
  app.get('/rutas/ganado', (_req, res) => {
    Rutas.getGanado((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Hoticultura
  // ============================
  app.get('/rutas/hoticultura', (_req, res) => {
    Rutas.getHoticultura((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Problemas Comunidad
  // ============================
  app.get('/rutas/problemas_comunidad', (_req, res) => {
    Rutas.getProblemasComunidad((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Servicios de Importancia
  // ============================
  app.get('/rutas/servicios_importancia', (_req, res) => {
    Rutas.getProblemasComunidad((_err, data) => {
      res.status(200).json(data)
    })
  })
}

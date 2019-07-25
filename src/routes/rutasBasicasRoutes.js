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

  app.post('/rutas/estudios', (req, res) => {
    const userData = {
      id_grado_estudios: null,
      estudios: req.body.estudios
    }
    Rutas.postEstudios(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Grado de Estudios Insertado',
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

  app.put('/rutas/colonias/:id_colonia', (req, res) => {
    const userData = {
      id_grado_estudios: req.params.id_grado_estudios,
      estudios: req.body.estudios
    }
    Rutas.updateEstudios(userData, (_err, data) => {
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

  app.delete('/rutas/estudios/:id', (req, res) => {
    Rutas.deleteEstudio(req.params.id, (_err, data) => {
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

  app.put('/rutas/colonias/:id_colonia', (req, res) => {
    const userData = {
      id_colonia: req.params.id_colonia,
      colonia: req.body.colonia
    }
    Rutas.updateColonias(userData, (_err, data) => {
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

  app.delete('/rutas/colonias/:id', (req, res) => {
    Rutas.deleteColonia(req.params.id, (_err, data) => {
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

  // ============================
  //  Productos Agricolas
  // ============================
  app.get('/rutas/productos_agricolas', (_req, res) => {
    Rutas.getProductosAgricolas((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.post('/rutas/productos_agricolas', (req, res) => {
    const userData = {
      id_producto: null,
      producto: req.body.producto,
      tipo_riego: req.body.tipo_riego,
      tipo_terreno: req.body.tipo_terreno,
      id_familia: req.body.id_familia,
      cantidad_hectareas: req.body.cantidad_hectareas
    }
    Rutas.postProductosAgricolas(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Agricola Insertada',
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

  app.put('/rutas/productos_agricolas/:id_productos_agricolas', (req, res) => {
    const userData = {
      id_productos_agricolas: req.params.id_productos_agricolas,
      producto: req.body.producto,
      tipo_riego: req.body.tipo_riego,
      tipo_terreno: req.body.tipo_terreno,
      id_familia: req.body.id_familia,
      cantidad_hectareas: req.body.cantidad_hectareas
    }
    Rutas.updateProductosAgricolas(userData, (_err, data) => {
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

  app.delete('/rutas/productos_agricolas/:id', (req, res) => {
    Rutas.deleteProductoAgricola(req.params.id, (_err, data) => {
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

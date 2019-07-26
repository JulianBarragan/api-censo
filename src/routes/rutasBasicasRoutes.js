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

  app.post('/rutas/estado_civil', (req, res) => {
    const userData = {
      id_estado_civil: null,
      estado: req.body.estado
    }
    Rutas.postCivil(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Estado Civil Insertado',
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

  app.put('/rutas/estado_civil/:id_estado_civil', (req, res) => {
    const userData = {
      id_estado_civil: req.params.id_estado_civil,
      estado: req.body.estado
    }
    Rutas.updateCivil(userData, (_err, data) => {
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

  app.delete('/rutas/estado_civil/:id', (req, res) => {
    Rutas.deleteCivil(req.params.id, (_err, data) => {
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
  //  Ocupaciones
  // ============================
  app.get('/rutas/ocupaciones', (_req, res) => {
    Rutas.getOcupacion((_err, data) => {
      res.status(200).json(data)
    })
  })

  app.post('/rutas/ocupaciones', (req, res) => {
    const userData = {
      id_estado_civil: null,
      ocupacion: req.body.ocupacion
    }
    Rutas.postOcupacion(userData, (_err, data) => {
      if (data && data.insertId) {
        console.log(data)
        res.json({
          success: true,
          msg: 'Ocupacion Insertada',
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

  app.put('/rutas/ocupaciones/:id_ocupacion', (req, res) => {
    const userData = {
      id_ocupacion: req.params.id_ocupacion,
      ocupacion: req.body.ocupacion
    }
    Rutas.updateOcupacion(userData, (_err, data) => {
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

  app.delete('/rutas/ocupaciones/:id', (req, res) => {
    Rutas.deleteOcupacion(req.params.id, (_err, data) => {
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

  app.put('/rutas/productos_agricolas/:id_producto', (req, res) => {
    const userData = {
      id_producto: req.params.id_producto,
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

  // ============================
  //  Tablas Fuertes
  // ============================
  // ============================
  //  Servicios Basicos
  // ============================
  app.get('/rutas/servicios_basicos', (_req, res) => {
    Rutas.getServiciosBasicos((_err, data) => {
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
  //  Servicios Necesarios
  // ============================
  app.get('/rutas/servicios_necesarios', (_req, res) => {
    Rutas.getServiciosNecesarios((_err, data) => {
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
  //  Participacion Limpieza
  // ============================
  app.get('/rutas/participacion_limpieza', (_req, res) => {
    Rutas.getParticipacionLimpieza((_err, data) => {
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
  //  Comercios
  // ============================
  app.get('/rutas/comercios', (_req, res) => {
    Rutas.getComercios((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Tablas debiles
  // ============================
  // ============================
  //  Familias Servicios Basicos
  // ============================
  app.get('/rutas/familias_servicios_basicos', (_req, res) => {
    Rutas.getFamiliasServiciosBasicos((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Servicios de Importancia
  // ============================
  app.get('/rutas/familias_servicios_de_importancia', (_req, res) => {
    Rutas.getFamiliasServiciosImportancia((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Servicios Necesarios
  // ============================
  app.get('/rutas/familias_servicios_necesarios', (_req, res) => {
    Rutas.getFamiliasServiciosNecesarios((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Problemas Comunidad
  // ============================
  app.get('/rutas/familias_problemas_comunidad', (_req, res) => {
    Rutas.getFamiliasProblemasComunidad((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Participacion Limpieza
  // ============================
  app.get('/rutas/familias_participacion_limpieza', (_req, res) => {
    Rutas.getFamiliasParticipacionLimpieza((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Ganaderia
  // ============================
  app.get('/rutas/familias_ganaderias', (_req, res) => {
    Rutas.getFamiliasGanaderias((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Hoticultura
  // ============================
  app.get('/rutas/familias_hoticultura', (_req, res) => {
    Rutas.getFamiliasHoticultura((_err, data) => {
      res.status(200).json(data)
    })
  })

  // ============================
  //  Familias Comercios
  // ============================
  app.get('/rutas/familias_comercios', (_req, res) => {
    Rutas.getFamiliasComercios((_err, data) => {
      res.status(200).json(data)
    })
  })
}

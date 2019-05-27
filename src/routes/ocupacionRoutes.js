const User = require('../models/ocupacion')

module.exports = app => {
  app.get('/ocupacion', (_req, res) => {
    User.getOcupacion((_err, data) => {
      res.status(200).json(data)
    })
  })
}

const User = require('../models/estadoCivil')

module.exports = app => {
  app.get('/estado_civil', (_req, res) => {
    User.getCivil((_err, data) => {
      res.status(200).json(data)
    })
  })
}

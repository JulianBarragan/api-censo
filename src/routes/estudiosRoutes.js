const User = require('../models/estudios')

module.exports = app => {
  app.get('/grado_estudios', (_req, res) => {
    User.getEstudios((_err, data) => {
      res.status(200).json(data)
    })
  })
}

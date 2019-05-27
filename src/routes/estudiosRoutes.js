const User = require('../models/estudios')

module.exports = app => {
  app.get('/estudios', (_req, res) => {
    User.getEstudios((_err, data) => {
      res.status(200).json(data)
    })
  })
}

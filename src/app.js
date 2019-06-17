const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.status(200).send('Welcome to API REST')
})

// settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
require('./routes/userRoutes')(app)
require('./routes/personasRoutes')(app)
require('./routes/familiasRoutes')(app)
require('./routes/estudiosRoutes')(app)
require('./routes/estadoCicilRoutes')(app)
require('./routes/ocupacionRoutes')(app)

// static files
app.listen(app.get('port'), () => {
  console.log('Server started at http://localhost:3000')
})

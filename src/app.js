const express = require('express')
const app = express()

const cors = require('cors')

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.status(200).send('Welcome to API REST')
})

// CORS FUNCTIONS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization')
  // Pass to next layer of middleware
  next()
})

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Settings
app.set('port', process.env.PORT || 3000)

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})

// Routes
require('./routes/userRoutes')(app)
require('./routes/graficasRoutes')(app)
require('./routes/personasRoutes')(app)
require('./routes/familiasRoutes')(app)
require('./routes/rutasBasicasRoutes')(app)
require('./routes/insertarEncuestaRoutes')(app)

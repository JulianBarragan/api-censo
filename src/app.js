const express = require('express')
const app = express()

const cors = require('cors')

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.status(200).send('Welcome to API REST')
})

// // settings
// app.set('port', process.env.PORT || 3000)
// // static files
// app.listen(app.get('port'), () => {
//   console.log('Server started at http://localhost:3000')
// })
let server = app.listen(process.env.PORT || 3000, function () {
  let port = server.address().port
  console.log('Express is working on port' + port)
})

// CORS FUNCTIONS
app.use(function (req, res, next) {
  // var err = new Error('Not Found')
  // err.status = 404
  // next(err)

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization')

  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next()
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// Routes
require('./routes/userRoutes')(app)
require('./routes/personasRoutes')(app)
require('./routes/familiasRoutes')(app)
require('./routes/estudiosRoutes')(app)
require('./routes/estadoCicilRoutes')(app)
require('./routes/ocupacionRoutes')(app)

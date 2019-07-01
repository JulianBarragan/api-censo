const express = require('express')
const app = express()

const cors = require('cors')

const morgan = require('morgan')
const bodyParser = require('body-parser')

// app.get('/', (req, res) => {
//   res.status(200).send('Welcome to API REST')
// })

// Settings
app.set('port', process.env.PORT || 3000)

// CORS FUNCTIONS
require('./config/cors')

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
require('./routes/userRoutes')(app)
require('./routes/personasRoutes')(app)
require('./routes/familiasRoutes')(app)
require('./routes/estudiosRoutes')(app)
require('./routes/estadoCicilRoutes')(app)
require('./routes/ocupacionRoutes')(app)

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})

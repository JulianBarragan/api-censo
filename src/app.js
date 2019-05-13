const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

// settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
require('./routes/userRoutes')(app)

// static files

app.listen(app.get('port'), () => {
  console.log('server on port 3000')
})

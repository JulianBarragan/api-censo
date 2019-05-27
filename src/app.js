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
require('./routes/familiaRoutes')(app)
require('./routes/estudiosRoutes')(app)
require('./routes/estadoCicilRoutes')(app)
require('./routes/ocupacionRoutes')(app)

// static files

app.listen(app.get('port'), () => {
  console.log('SERVER ON PORT 3000')
})

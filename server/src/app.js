const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, { cors: { origin: '*' } })

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

io.on('connection', function (socket) {
  require('./sockets')(socket)
})

sequelize.sync()
  .then(() => {
    http.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

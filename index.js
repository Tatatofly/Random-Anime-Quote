const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const quoteRouter = require('./controllers/quotes')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const config = require('./utils/config')

const extractToken = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }

  next()
}

app.use(extractToken)
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
mongoose.Promise = global.Promise

app.use('/api/login', loginRouter)
app.use('/api/quotes', quoteRouter)
app.use('/api/users', usersRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}
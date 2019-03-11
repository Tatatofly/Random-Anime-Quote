const quoteRouter = require('express').Router()
const Quote = require('../models/quote')
const jwt = require('jsonwebtoken')

const getRandom = async function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

quoteRouter.get('/', async (request, response) => {
  const quotes = await Quote
    .find({})

  response.json(quotes[await getRandom(quotes.length)])
})

quoteRouter.get('/all', async (request, response) => {
  const quotes = await Quote
    .find({})

  response.json(quotes)
})

quoteRouter.get('/:id', async (request, response) => {
  const quote = await Quote.findById(request.params.id)
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })

  try {
    if (quote) {
      response.json(quote)
    } else{
      response.status(404).end()
    }
  } catch (exception) {
    console.log(exception)
  }
})


quoteRouter.post('/', async (request, response) => {
  const { quo, character, anime } = request.body

  try {
    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'Token missing or invalid' })
    }

    if (quo === undefined ||  character === undefined) {
      return response.status(400).json({ error: 'Quote or Character is missing'})
    }

    const quote = new Quote({ quo, character, anime } )
    const result = await quote.save()

    response.status(201).json(result)
  } catch (exception) {
    if (exception.name === 'JsonWebTokenError') {
      response.status(401).json({ error: exception.message })
    } else {
      console.log(exception)
      response.status(500).json({ error: 'Something went wrong...' })
    }
  }
})

module.exports = quoteRouter
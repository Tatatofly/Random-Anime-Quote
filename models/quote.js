const mongoose = require('mongoose')

const Quote = mongoose.model('Quote', {
  quo: String,
  character: String,
  anime: String
})

module.exports = Quote
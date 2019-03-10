const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String
})

userSchema.statics.format = (user) => {
  return {
    _id: user._id,
    username: user.username
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User
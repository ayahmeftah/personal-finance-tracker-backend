const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    profilePic : String,
    profilePicPublicId : String 
})

// helper method to compare passwords
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash)
}

module.exports = mongoose.model('User', userSchema)
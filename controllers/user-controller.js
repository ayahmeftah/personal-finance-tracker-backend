const bcrypt = require("bcrypt")
const User = require("../models/User")
const Category = require("../models/Category")
const Transaction = require("../models/Transaction")
const cloudinary = require("../config/cloudinary")


const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-passwordHash")
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}



module.exports = {
  getUser
}

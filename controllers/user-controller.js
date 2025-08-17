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

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        if (!user) return res.status(404).json({ message: "User not found" })

        if (req.body.username && req.body.username !== user.username) {
            const existing = await User.findOne({ username: req.body.username })
            if (existing) {
                return res.status(400).json({ message: "Username already taken" })
            }
            user.username = req.body.username
        }

        if (req.body.name) user.name = req.body.name
        if (req.body.password) {
            user.passwordHash = await bcrypt.hash(req.body.password, 10)
        }

        if (req.file) {
            if (user.profilePicPublicId) {
                await cloudinary.uploader.destroy(user.profilePicPublicId)
            }
            user.profilePic = req.file.path
            user.profilePicPublicId = req.file.filename
        }

        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getUser,
    updateUser
}

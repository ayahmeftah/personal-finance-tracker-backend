const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const SECRET = process.env.SECRET

// POST /auth/register
exports.signup = async (req, res) => {
    try {
        const { name, username, password } = req.body

        // check if username taken
        const existing = await User.findOne({ username })
        if (existing) {
            return res.status(400).json({ message: 'Username already exists' })
        }

        // hash password
        const passwordHash = await bcrypt.hash(password, 10)

        let profilePic = null
        let profilePicPublicId = null
        if (req.file) {
            profilePic = req.file.path
            profilePicPublicId = req.file.filename
        }



        // create user
        const newUser = new User({
            name,
            username,
            passwordHash,
            profilePic,
            profilePicPublicId
        })
        await newUser.save()

        res.status(201).json({ message: 'User registered successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

// POST /auth/login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const isValid = await user.validatePassword(password)
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const payload = {
            id: user._id,
            username: user.username
            // Add anything else that you want to put into the JWT token here
        }
        const token = jwt.sign(payload, SECRET, { expiresIn: '20d' }) //Look at the docs for more 'expires in' options
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                profilePic: user.profilePic
            }
        })
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}
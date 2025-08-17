const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth-controller')
const setupMulter = require('../middleware/multer')

const upload = setupMulter("budgetwise-profile-pics")

router.post('/signup', upload.single("profilePic"),authController.signup)
router.post('/login', authController.login)

module.exports = router
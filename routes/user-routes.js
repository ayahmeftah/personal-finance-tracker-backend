const express = require("express")
const router = express.Router()
const userController = require("../controllers/user-controller")
const secureRoute = require("../middleware/secureRoute")
const setupMulter = require("../middleware/multer")

const upload = setupMulter("budgetwise-profile-pics")

router.get("/profile", secureRoute, userController.getUser)
router.put("/profile", secureRoute, upload.single("profilePic"), userController.updateUser)
router.delete("/profile", secureRoute, userController.deleteUser)
router.delete("/profile/profile-pic", secureRoute, userController.removeProfilePic)

module.exports = router
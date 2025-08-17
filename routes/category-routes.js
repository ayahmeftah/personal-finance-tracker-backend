const router = require('express').Router()
const categoryController = require('../controllers/category-controller')
const secureRoute = require("../middleware/secureRoute")

router.post("/", secureRoute, categoryController.createCategory)
router.get("/", secureRoute, categoryController.getCategories)
router.get("/:categoryId", secureRoute, categoryController.showCategory)
router.put("/:categoryId", secureRoute, categoryController.updateCategory)
router.delete("/:categoryId", secureRoute, categoryController.deleteCategory)


module.exports = router
const router = require('express').Router()
const categryController = require('../controllers/category-controller')
const secureRoute = require("../middlewares/secureRoute")

router.post("/", secureRoute, categoryController.createCategory)
router.get("/", secureRoute, categoryController.getCategories)
router.get("/:categoryId", secureRoute, categoryController.showCategory)
router.put("/:categoryId", secureRoute, categoryController.updateCategory)
router.delete("/:categoryId", secureRoute, categoryController.deleteCategory)


module.exports = router
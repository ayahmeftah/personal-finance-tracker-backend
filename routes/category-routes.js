const router = require('express').Router()
const categryController = require('../controllers/category-controller')

router.post('/', categryController.createCategory)
router.get('/', categryController.getCategories)
router.get('/:categoryId', categryController.showCategory)
router.put('/:categoryId',categryController.updateCategory)
router.delete('/:categoryId',categryController.deleteCategory)


module.exports = router
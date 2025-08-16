const Category = require('../models/Category')

const createCategory = async (req, res) => {
    try {
        const createdCategory = await Category.create(req.body)
        res.status(201).json(createCategory)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getCategories = async (req, res) => {
    try {
        const allCategories = await Category.find()
        if (allCategories) {
            res.status(200).json(allCategories)
        } else {
            res.status(204)
        }
    } catch (error) {
        res.status(500).json({error: error.message})   
    }
}

const showCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (category) {
            res.status(200).json(category)
        } else {
            res.status(404)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deleteCategory = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateCategory = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    createCategory,
    getCategories,
    showCategory,
    updateCategory,
    deleteCategory
}
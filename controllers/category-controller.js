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
        
    } catch (error) {
        
    }
}

const showCategory = async (req, res) => {
    try {
        
    } catch (error) {
        
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
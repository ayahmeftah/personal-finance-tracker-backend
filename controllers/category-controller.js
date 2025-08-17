const Category = require('../models/Category')
const Transaction = require('../models/Transaction')

const createCategory = async (req, res) => {
    try {
        const createdCategory = await Category.create({
            ...req.body,
            userId: req.user.id
        })
        res.status(201).json(createCategory)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getCategories = async (req, res) => {
    try {
        const allCategories = await Category.find({
            userId: req.user.id
        })
        if (allCategories.length === 0) {
            res.status(204)
        } else {

            res.status(200).json(allCategories)

        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const showCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            _id: req.params.categoryId,
            userId: req.user.id
        })
        if (category) {
            res.status(200).json(category)
        } else {
            res.status(404)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({
            _id: req.params.categoryId,
            userId: req.user.id
        })

        if (category) {
            const categoryTransactions = await Transaction.find({ categoryId: category._id })

            for (const transaction of categoryTransactions) {
                await Transaction.findByIdAndDelete(transaction._id)
            }

            await Category.findByIdAndDelete(category._id)
            res.status(200).json({ message: "Category and related transactions deleted" })
        } else {
            res.status(404)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate(
            {
                _id: req.params.categoryId,
                userId: req.user.id
            },
            req.body
        )
        if (category) {
            res.status(200).json(category)
        } else {
            res.status(404)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCategory,
    getCategories,
    showCategory,
    updateCategory,
    deleteCategory
}
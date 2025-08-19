const Transaction = require('../models/Transaction')

// create transaction
async function createTransaction(req, res) {
    try {
        const newTransaction = await Transaction.create({
            ...req.body,
            userId: req.user.id
        })
        res.status(201).json(newTransaction)

    } catch (error) {
        console.log("Error creating transaction: ", error)
        res.status(500).json({ error: error.message })
    }
}


// get all transactions
async function getAllTransactions(req, res) {
    try {
        const allTransactions = await Transaction.find({
            userId: req.user.id
        }).populate("categoryId", "name emoji")

        if (allTransactions.length === 0) {
            res.status(200).json([])
        } else {
            res.status(200).json(allTransactions)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}


// get one transaction
async function getOneTransaction(req, res) {
    try {
        const oneTransaction = await Transaction.findOne({
            _id: req.params.id,
            userId: req.user.id
        })
        if (oneTransaction) {
            res.status(200).json(oneTransaction)
        } else {
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}


// put for editing transaction
async function updateTransaction(req, res) {
    try {
        const oneTransaction = await Transaction.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id
            },
            req.body
        )

        if (oneTransaction) {
            res.status(200).json(oneTransaction)
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}


// delete one transaction
async function deleteTransaction(req, res) {
    try {
        const oneTransaction = await Transaction.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        })

        if (oneTransaction) {
            res.status(200).json(oneTransaction)
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createTransaction,
    getAllTransactions,
    getOneTransaction,
    updateTransaction,
    deleteTransaction
}
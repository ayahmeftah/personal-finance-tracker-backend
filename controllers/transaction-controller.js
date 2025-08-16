const Transaction = require('../models/Transaction')

// create transaction
async function createTransaction(req, res) {
    try {
        const newTransaction = await Transaction.create(req.body)
        res.status(201).json(newTransaction)

    } catch (error) {
        console.log("Error creating transaction: ", error)
        res.status(500).json({ error: error.message })
    }
}


// get all transactions
async function getAllTransactions(req, res) {
    try {
        const allTransactions = await Transaction.find()

        if (allTransactions) {
            res.status(200).json(allTransactions)
        } else {
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}


// get one transaction
async function getOneTransaction(req, res) {
    try {
        const oneTransaction = await Transaction.findById(req.params.id)

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

module.exports = {
    createTransaction,
    getAllTransactions,
    getOneTransaction
}
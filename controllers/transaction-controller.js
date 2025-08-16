const Transaction = require('../models/Transaction')

// create transaction
async function createTransaction(req,res) {
    try {
        const newTransaction = await Transaction.create(req.body)
        res.status(201).json(newTransaction)
        
    } catch (error) {
        console.log("Error creating transaction: ", error)
        res.status(500).json({error : error.message})
    }
}



module.exports = {
    createTransaction
}
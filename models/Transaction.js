const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    name : {
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        enum: [
            'income',
            'expense'
        ],
        required: true
    },
    amount: {
        type: Number,
        min: 1,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)
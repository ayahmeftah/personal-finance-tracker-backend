const router = require('express').Router()
const transactionController = require('../controllers/transaction-controller')

router.post('/', transactionController.createTransaction)
router.get('/', transactionController.getAllTransactions)
router.get('/:id', transactionController.getOneTransaction)


module.exports = router
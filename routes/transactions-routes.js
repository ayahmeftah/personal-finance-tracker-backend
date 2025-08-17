const router = require('express').Router()
const transactionController = require('../controllers/transaction-controller')
const secureRoute = require("../middlewares/secureRoute")

router.post("/", secureRoute, transactionController.createTransaction)
router.get("/", secureRoute, transactionController.getAllTransactions)
router.get("/:id", secureRoute, transactionController.getOneTransaction)
router.put("/:id", secureRoute, transactionController.updateTransaction)
router.delete("/:id", secureRoute, transactionController.deleteTransaction)


module.exports = router
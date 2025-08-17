const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const connectToDB = require("./config/db")
const cors = require("cors")


const transactionRoutes = require('./routes/transactions-routes')
const categoryRoutes = require('./routes/category-routes')
const authRoutes = require('./routes/auth-routes')


connectToDB()

app.use(cors({origin: 'http://localhost:5173'}))
app.use(morgan("dev"))
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/transactions/category', categoryRoutes)
app.use('/transactions', transactionRoutes)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
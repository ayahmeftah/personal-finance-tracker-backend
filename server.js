const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const connectToDB = require("./config/db")
const cors = require("cors")


connectToDB()

app.use(cors({origin: 'http://localhost:5173'}))
app.use(morgan("dev"))
app.use(express.json())


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
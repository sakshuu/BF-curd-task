const express = require("express")
require("dotenv").config({ path: "./.env" })
const PORT = process.env.PORT || 5000
const db = require("./config/db")
const cors = require("cors")
db()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/user", require("./routes/userRoutes"))

app.listen(PORT, 
    console.log(`SERVER RUNNING http://localhost:${PORT}`))
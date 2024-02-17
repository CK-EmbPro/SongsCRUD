const express = require('express')
const app = express()
const router = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.urlencoded())
// app.use(express.urlencoded())
app.use("/",router)
const dbUrl = process.env.dbUrl
const port = process.env.port

// app.get('/app', (req,res) => res.send("hello world!"))
console.log(dbUrl)
mongoose.connect(dbUrl)
const db = mongoose.connection
db.on("error", (err) => console.error("error", err.message))
db.once('open', () => console.log("connected"))

app.listen(port, () => console.log(`listening on port ${port}`))
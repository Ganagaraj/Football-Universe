const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const { mail } = require('./mail.js')

let app = express()
app.use(cors())
app.use(parser.json())
app.get('/', (req, res) => {
    console.log("hello")
    res.send("<h1>Server Page</h1>")
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    mail(req.body.email)
    res.status(200).send("sucessfully submitted")
})

app.listen(8000, () => {
    console.log("Server is listening...")
})
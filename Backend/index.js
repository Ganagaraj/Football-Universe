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
    const OTP = mail(req.body.email)
    OTP.then((result) => {
        console.log(result)
        res.status(200).send(result.toString())
    })


})



app.listen(8000, () => {
    console.log("Server is listening...")
})
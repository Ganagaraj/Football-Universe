const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const nodemailer = require('nodemailer')
let app = express()
app.use(cors())
app.use(parser.json())
app.get('/', (req, res) => {
    console.log("hello")
    res.send("<h1>Server Page</h1>")
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "footballuniverse107@gmail.com",
            pass: "qciubfqqtkddyvjs" //qciubfqqtkddyvjs
        }
    })

    transporter.sendMail({
        from: "footballuniverse107@gmail.com",
        to: req.body.email,
        subject: "One Time Password from Football Universe",
        text: `we have send you a 4 digit OTP ${OTP} Valid for 5 minutes `

    }, (err) => console.log(err))

    res.status(200).send("sucessfully submitted")
})

app.listen(8000, () => {
    console.log("Server is listening...")
})
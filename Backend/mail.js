const nodemailer = require('nodemailer');

export default function mail(gmail) {
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
        to: gmail,
        subject: "One Time Password from Football Universe",
        text: `we have send you a 4 digit OTP ${OTP} Valid for 5 minutes `

    }, (err) => console.log(err))
}
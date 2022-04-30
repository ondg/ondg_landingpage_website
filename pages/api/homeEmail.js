export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'ondguk@gmail.com',
        pass: process.env.passwordHome,
      },
      secure: true,
    })
    const mailData = {
      from: "",
      to: 'ondguk@gmail.com',
      subject: `Message From ${req.body.email}`,
      text: "" + " | Sent from: " + req.body.email,
      html: `<div>From Home Page</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("mail send");
        res.send("success");
      }
  });
    res.status(200)
  }

 
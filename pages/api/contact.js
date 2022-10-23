export default function (req, res) {
  //   require('dotenv').config()
    
  //   let nodemailer = require('nodemailer')
  //   const transporter = nodemailer.createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: 'ondguk@gmail.com',
  //       pass: process.env.passwordHome,
  //     },
  //     secure: true,
  //   })
  //   const mailData = {
  //     from: req.body.email,
  //     to: 'ondguk@gmail.com',
  //     subject: `Message From ${req.body.name}`,
  //     text: req.body.message + " | Sent from: " + req.body.email,
  //     html: `<div>${req.body.message}</div><p>Sent from:
  //     ${req.body.email}</p>`
  //   }
  //   transporter.sendMail(mailData, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.send("error" + JSON.stringify(err));
  //     } else {
  //       console.log("mail send");
  //       res.send("success");
  //     }
  // });

  let params = {
      user_id: 'RoFaZHQGU6ICHCKB1',
      service_id: 'service_e123lhc',
      template_id: 'template_bslhfww',
      template_params: {
        'to_name': 'ONDG',
        'from_name': `${req.body.name}`,
        'reply_to': `${req.body.email}`,
        'message': `Sent From: ${req.body.email} - Message: ${req.body.message}`
      }
  };

  let headers = {
      'Content-type': 'application/json'
  };

  let options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(params)
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', options)
  .then((httpResponse) => {
    if (httpResponse.ok) {
      res.send("'Your mail is sent!");
    } else {
      res.send("Error: " + httpResponse.status + ' - ' + httpResponse.statusText);
    }
  })
  .catch((error) => {
      res.send("error" + JSON.stringify(err));
  });


  res.status(200)
}

 
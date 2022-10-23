export default function (req, res) {
  let params = {
    user_id: 'RoFaZHQGU6ICHCKB1',
    service_id: 'service_e123lhc',
    template_id: 'template_bslhfww',
    template_params: {
      'to_name': 'ONDG',
      'from_name': `${req.body.email}`,
      'reply_to': `${req.body.email}`,
      'message': `From Home Page - Sent from: ${req.body.email}`
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

 
var router = require('express').Router();
var path = require('path');
var nodemailer = require('nodemailer');
var mailgun = require('nodemailer-mailgun-transport');

if (!process.env.MY_EMAIL) {
  var config = require('./config');
}

var auth = {
  auth: {
    api_key: process.env.MAILGUN_API || config.MAILGUN_API,
    domain: process.env.MAILGUN_DOMAIN || config.MAILGUN_DOMAIN
  }
};

var transporter = nodemailer.createTransport(mailgun(auth));

router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/', req.url));
});

router.post('/contact', function(req, res) {
  var message = {
    from: req.body.email,
    to: 'ryan@divedecks.com',
    subject: 'Message from - ' + req.body.name,
    text: req.body.text
  };

  transporter.sendMail(message, function(err, info) {
    if(err) {
      console.log('error');
      res.json({success: false});
      console.log(err);
    } else {
      res.json({success: true});
    }
  });
});

module.exports = router;

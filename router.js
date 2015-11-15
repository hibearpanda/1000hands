var router = require('express').Router();
var path = require('path');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ryan@divedecks.com',
    pass: ''
  }
});

router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/', req.url));
});

router.post('/contact', function(req, res) {
  var message = {
    from: req.body.name + '&lt' + req.body.email + '&gt',
    to: 'ryan@divedecks.com',
    subject: 'Message from Website - ' + req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(message, function(err, info) {
    if(err) {
      console.log('error');
      res.json({succes: false});
      console.log(err);
      console.log('error');
    } else {
      res.json({success: true});
    }
  });
});

module.exports = router;

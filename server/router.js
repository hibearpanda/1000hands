var router = require('express').Router();
var path = require('path');
var mail = require('./mail');
var pass = 'test';

if (process.env.BTS_PASS) {
  pass = process.env.BTS_PASS;
}

// General page delivery
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/', req.url));
});

// Contact form route - get account details from admin
router.post('/contact', function(req, res) {
  var message = {
    from: req.body.email,
    to: 'ryan@divedecks.com',
    subject: 'Message from - ' + req.body.name,
    text: req.body.text
  };

  mail.sendMail(message, function(err, info) {
    if(err) {
      console.log('error');
      res.json({success: false});
      console.log(err);
    } else {
      res.json({success: true});
    }
  });
});

// Behind the Scenes password route
// TODO: change password check to process.env variable
router.post('/backer_login', function(req, res) {
  if (req.body.password !== pass) {
    res.json({success: false});
  }
  res.json({success: true});
});

module.exports = router;

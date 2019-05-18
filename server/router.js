var router = require('express').Router();
var path = require('path');
var mail = require('./mail');

// General page delivery
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/', req.url));
});

// Contact form route - get account details from admin
router.post('/contact', function(req, res) {
  var message = {
    from: req.body.email,
    to: '1000handsfilm@gmail.com',
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

module.exports = router;

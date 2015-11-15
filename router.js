var router = require('express').Router();
var path = require('path');
var nodemailer = require('nodemailer');

router.get('/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/public/', req.url));
});

router.post('/contact', function(req, res, next) {
});


module.exports = router;

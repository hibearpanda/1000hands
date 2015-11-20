var nodemailer = require('nodemailer');
var mailgun = require('nodemailer-mailgun-transport');

if (!process.env.MAILGUN_API && !process.env.MAILGUN_DOMAIN) {
  var config = require('./config');
}

var auth = {
  auth: {
    api_key: process.env.MAILGUN_API || config.MAILGUN_API,
    domain: process.env.MAILGUN_DOMAIN || config.MAILGUN_DOMAIN
  }
};

var transporter = nodemailer.createTransport(mailgun(auth));

module.exports = transporter;

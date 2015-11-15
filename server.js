var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./router');

var app = express();
var port = 3000;

app.use(bodyParser.json());

app.options('*', cors());

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(port, function() {
  console.log('Server listening on port: ' + 3000);
});

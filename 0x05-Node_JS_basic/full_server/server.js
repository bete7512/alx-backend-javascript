var express = require('express');
var dotenv = require('dotenv');
var router = require('./routes/index.js');
var utils = require('./utils.js');

dotenv.config();

var app = express();
var port = process.env.PORT || 1245;

app.use(express.json());

app.use('/', router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

var server = app.listen(port, function() {
  console.log('Listening on port ' + server.address().port);
});
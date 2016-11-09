const express = require('express');
const app = express();

const PORT = 3000;

const middleware = {
  requireAuthentication: function(req, re, next) {
    console.log('private route hit');
    next();
  },
  logger: function(req, res, next) {
    console.log('Request: ' + new Date().toString() + ''
      + req.method + '' + req.originalUrl);
    next();
  }
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('My name is P');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on Port ' + PORT);
});

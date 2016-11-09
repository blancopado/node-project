const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('My name is P');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on Port ' + PORT);
});

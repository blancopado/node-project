const middleware = {
  requireAuthentication: function(req, re, next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req, res, next) {
    console.log('Request: ' + new Date().toString() + ' '
      + req.method + ' ' + req.originalUrl);
    next();
  }
}

// module exports to expose middleware
module.exports = middleware;

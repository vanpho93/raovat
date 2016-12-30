var session = require('express-session');
module.exports = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30000 }
});

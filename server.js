const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport')
require('dotenv').config();
require('./config/database');
require('./config/passport');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Set up Express session
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
  
// Set up Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/spotify', passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private', 'playlist-read-private', 'playlist-modify-private', 'playlist-modify-public', 'user-top-read'] }));

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(`http://localhost:5173/callback?code=${req.query.code}`);
  }
);

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder

const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

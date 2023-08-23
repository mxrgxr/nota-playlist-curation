const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const axios = require('axios');
require('dotenv').config();
require('./config/database');
require('./config/passport');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
  
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/spotify', passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private', 'playlist-read-private', 'playlist-modify-private', 'playlist-modify-public', 'user-top-read'] }));

app.get('/auth/spotify/callback', (req, res, next) => {
  passport.authenticate('spotify', async (err, user, info) => {
    if (err) {
      console.error('Error in authentication:', err);
      return res.status(500).send('Error in authentication');
    }

    if (!user) {
      return res.status(401).send('Unauthorized');
    }

    const accessToken = info.accessToken;
    req.session.accessToken = accessToken;

    // Log in the user
    req.logIn(user, (err) => {
      if (err) {
        console.error('Error in login:', err);
        return res.status(500).send('Error in login');
      }

      res.send(`
      <script>
        window.opener.postMessage('accessTokenSaved', 'http://localhost:5173');
        window.close();
      </script>
      `);
    });
  })(req, res, next);
});

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

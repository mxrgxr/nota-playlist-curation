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

app.get('/auth/spotify/callback', async (req, res) => {
  const code = req.query.code;
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3001/auth/spotify/callback',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
      },
    });

    const accessToken = response.data.access_token;
    const refreshToken = response.data.refresh_token;

    req.session.accessToken = accessToken;
    req.session.refreshToken = refreshToken;

    res.send(`
    <script>
      window.opener.postMessage('accessTokenSaved', 'http://localhost:5173');
      window.close();
    </script>
    `);
  } catch (error) {
    console.error('Error fetching access token:', error);
    res.status(500).send('Error fetching access token');
  }
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

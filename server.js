const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
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

app.get('/auth/spotify', passport.authenticate('spotify'));

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify'),
  (req, res) => {
    const accessToken = req.user.accessToken;
    res.send(`<script>
      window.opener.postMessage({ status: 'success', accessToken: '${accessToken}' }, '${process.env.SUCCESS_URL}');
      window.close();
    </script>`);
  }
);

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder

const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use('/users', require('./routes/api/users'));
app.use('/playlists', require('./routes/api/playlists'));
app.use('/profiles', require('./routes/api/profile'))
app.use('/search', require('./routes/api/search'))
app.use('/recommendations', require('./routes/api/recommendations'))

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

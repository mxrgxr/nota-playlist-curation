const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../models/user');
require('dotenv').config();

passport.use(
    new SpotifyStrategy(
      {
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: process.env.SPOTIFY_REDIRECT_URI,
      },
      function (accessToken, refreshToken, expires_in, profile, done) {
        User.findOne({ spotifyId: profile.id }, function (err, user) {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, user);
          } else {
            const newUser = new User({
              spotifyId: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
            });
  
            newUser.save(function (err) {
              if (err) {
                return done(err);
              }
              return done(null, newUser);
            });
          }
        });
      }
    )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (userId, done) {
  done(null, await User.findById(userId));
});

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
      async function (accessToken, refreshToken, expires_in, profile, done) {
        try {
          let user = await User.findOne({ spotifyId: profile.id });
          if (user) return done(null, user);
          user = await User.create({
            spotifyId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (userId, done) {
  done(null, await User.findById(userId));
});

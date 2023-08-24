const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../models/user');

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_REDIRECT_URI,
      scope: ['user-read-email', 'user-read-private', 'playlist-read-private', 'playlist-modify-private', 'playlist-modify-public', 'user-top-read']
    },
    async function(accessToken, refreshToken, expires_in, profile, done) {
      try {
        let user = await User.findOne({ spotifyId: profile.id });
        if (user) {
          return done(null, user);
        }
        const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
        user = await User.create({
          spotifyId: profile.id,
          displayName: profile.displayName,
          email: email,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(async function(userId, cb) {
  cb(null, await User.findById(userId));
});
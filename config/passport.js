const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../models/user');

async function refreshAccessToken(refreshToken) {
  try {
    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    };

    const response = await axios(authOptions);
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}

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
          const now = new Date();
          if (user.tokenExpiration && user.tokenExpiration <= now) {
            try {
              const newAccessToken = await refreshAccessToken(refreshToken);
              user.accessToken = newAccessToken;
              user.tokenExpiration = new Date(Date.now() + expires_in * 1000);
              await user.save();
            } catch (err) {
              console.error('Error refreshing access token:', err);
            }
          }
          return done(null, user);
        }
        const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
        const tokenExpiration = new Date(Date.now() + expires_in * 1000);
        user = await User.create({
          spotifyId: profile.id,
          displayName: profile.displayName,
          email: email,
          accessToken: accessToken,
          refreshToken: refreshToken,
          tokenExpiration: tokenExpiration,
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
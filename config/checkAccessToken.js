const User = require('../models/user')
const axios = require('axios')

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
      return {
        access_token: response.data.access_token,
        expires_in: response.data.expires_in,
      };
    } catch (error) {
      throw error;
    }
}

module.exports = async function checkAccessToken(req, res, next) {
    try {
      const accessToken = req.headers.authorization.split(' ')[1];
      const user = await User.findOne({ accessToken: accessToken });
  
      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const now = new Date();
      if (user.tokenExpiration && user.tokenExpiration <= now) {
        const { access_token, expires_in } = await refreshAccessToken(user.refreshToken);
        user.accessToken = access_token;
        user.tokenExpiration = new Date(Date.now() + expires_in * 1000);
        await user.save();
        localStorage.setItem('token', access_token);
        req.user = user;
      }
      next();
    } catch (err) {
      console.error('Error checking access token:', err);
      res.status(500).json({ error: 'Error checking access token' });
    }
}
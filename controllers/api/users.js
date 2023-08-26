const axios = require('axios');
const BASE_URL = 'https://api.spotify.com/v1'

module.exports = {
  getPlaylists
};

async function getPlaylists(req, res) {
    try{
      const accessToken = req.headers.authorization.split(' ')[1];
      const response = await axios.get(BASE_URL + '/me/playlists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Error fetching playlists' });
  }
}
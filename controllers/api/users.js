const axios = require('axios');

module.exports = {
    getPlaylists
}

async function getPlaylists(req, res) {
  const accessToken = req.headers.authorization.split(' ')[1];

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    console.log('getPlaylists response:', response)
    console.log('accesstoken:', accessToken)
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching playlists in controller:', error);
    res.status(500).json({ error: 'Error fetching playlists' });
  }
}

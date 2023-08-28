const axios = require('axios');
const BASE_URL = 'https://api.spotify.com/v1'
const User = require('../../models/user');

module.exports = {
  getPlaylists,
  createPlaylist,
  getPlaylistDetails,
  addTracksToPlaylist
};

async function getPlaylists(req, res) {
  try{
      const accessToken = req.headers.authorization.split(' ')[1];
      const response = await axios.get(BASE_URL + '/me/playlists/?limit=50', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
  });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching playlists' });
  }
}

async function createPlaylist(req, res) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const user = await User.findOne({ accessToken: accessToken });
    const userId = user.spotifyId;
    const playlistName = req.body.name;

    const response = await axios.post(`${BASE_URL}/users/${userId}/playlists`, {
      name: playlistName,
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    console.log(response.data)

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating playlist' });
  }
}

async function getPlaylistDetails(req, res) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const playlistId = req.params.playlistId;

    const response = await axios.get(`${BASE_URL}/playlists/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    const playlistData = response.data;
    res.json(playlistData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching playlist details' });
  }
}

async function addTracksToPlaylist(req, res) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const { playlistId } = req.params;
    const trackUris = req.body.uris;

    const response = await axios.post(`${BASE_URL}/playlists/${playlistId}/tracks`, {
      uris: trackUris,
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error adding tracks to the playlist:', error);
    res.status(500).json({ error: 'Error fetching adding recommendations to playlist' });
  }
}
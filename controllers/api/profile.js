const axios = require('axios')
const BASE_URL = 'https://api.spotify.com/v1/me'

module.exports = {
    getUserProfile,
    getUserTopArtists,
    getUserTopTracks,
};

async function getUserProfile(req, res){
    try{
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await axios.get(BASE_URL, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
    });
    console.log(response)
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      res.status(500).json({ error: 'Error fetching playlists' });
    }
}

async function getUserTopTracks(req, res){
    try{
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await axios.get(BASE_URL + '/top/tracks/?time_range=long_term&limit=5', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
    });
    console.log(response)
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      res.status(500).json({ error: 'Error fetching playlists' });
    }
}

async function getUserTopArtists(req, res){
    try{
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await axios.get(BASE_URL + '/top/artists/?time_range=long_term&limit=5', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
    });
    console.log(response)
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      res.status(500).json({ error: 'Error fetching playlists' });
    }
}
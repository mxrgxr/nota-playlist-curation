const axios = require('axios')
const BASE_URL = 'https://api.spotify.com/v1'

module.exports = {
    getUserProfile
};

async function getUserProfile(req, res){
    console.log('ctrl function called')
    try{
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await axios.get(BASE_URL + '/me', {
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
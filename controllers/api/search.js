const axios = require('axios')
const BASE_URL = 'https://api.spotify.com/v1/search'

module.exports = {
    searchArtists,
};

async function searchArtists(req, res){
    try{
        const searchTerm = req.body.searchTerm;
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await axios.get(BASE_URL, {
        params: {
            q: searchTerm,
            type: 'artist',
            limit: 3,
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        
    });
    res.json(response.data.artists.items);
    } catch (error) {
      res.status(500).json({ error: 'Error searching artists' });
    }
}
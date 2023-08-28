const axios = require('axios')
const BASE_URL = 'https://api.spotify.com/v1/recommendations'

module.exports = {
    getRecommendations,
};

async function getRecommendations(req, res) {
    try {
      const accessToken = req.headers.authorization.split(' ')[1];
      const { artistIds, genres, sliderValues } = req.body;
  
      const response = await axios.get(BASE_URL, {
        params: {
          seed_artists: artistIds,
          seed_genres: genres,
          ...sliderValues,
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
 
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error getting recommendations' });
    }
  }
  
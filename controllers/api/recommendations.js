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
          target_energy: sliderValues.min_energy + (sliderValues.max_energy - sliderValues.min_energy) / 2,
          target_tempo: sliderValues.min_tempo + (sliderValues.max_tempo - sliderValues.min_tempo) / 2,
          target_instrumentalness: sliderValues.min_instrumentalness + (sliderValues.max_instrumentalness - sliderValues.min_instrumentalness) / 2,
          target_danceability: sliderValues.min_danceability + (sliderValues.max_danceability - sliderValues.min_danceability) / 2,
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const trackUris = response.data.tracks.map((track) => track.uri);
      res.json({ trackUris });
    } catch (error) {
      res.status(500).json({ error: 'Error getting recommendations' });
    }
}
  
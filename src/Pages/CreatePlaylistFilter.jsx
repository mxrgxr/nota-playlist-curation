import NavBar from "../components/NavBar/NavBar"
import ArtistSearch from "../components/Filters/Artist/ArtistSearch"
import GenreSearch from "../components/Filters/Genre/GenreSearch"
import GenerateButton from "../components/Filters/GenerateButton"
import SliderList from "../components/Filters/SliderList"
import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import * as recommendationsAPI from '../utilities/recommendations-api'
import * as playlistsAPI from '../utilities/playlists-api'

export default function CreatePlaylistFilter(){
    const { playlistId } = useParams();
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [sliderValues, setSliderValues] = useState({});
    const [generateClicked, setGenerateClicked] = useState(false);
    const navigate = useNavigate();

    const handleSliderValueChange = (categoryTitle, minValue, maxValue) => {
        setSliderValues({
          ...sliderValues,
          [`min_${categoryTitle}`]: minValue,
          [`max_${categoryTitle}`]: maxValue,
        });
    };

    useEffect(() => {
        if (generateClicked) {
          async function sendRecommendationsRequest() {
            const artistIds = selectedArtists.map((artist) => artist.id).join(',');
            const genres = selectedGenres.join(',');
            const accessToken = localStorage.getItem('accessToken');
      
            const data = {
              artistIds,
              genres,
              sliderValues,
            };
      
            try {
              const trackUrisResponse = await recommendationsAPI.getRecommendations(data, accessToken);
              const trackUris = trackUrisResponse.trackUris
              const response = await playlistsAPI.addTracksToPlaylist(playlistId, trackUris, accessToken);
              if (response.snapshot_id) {
                navigate(`/playlist/${playlistId}`);
              }
            } catch (error) {
              console.error('Error sending recommendations request:', error);
            }
          }
      
          sendRecommendationsRequest();
          setGenerateClicked(false);
        }
    }, [generateClicked, selectedArtists, selectedGenres, sliderValues]);      

    return(
        <div className="flex">
            <NavBar />
            <div className="w-screen bg-p-800 p-8 text-lt-ntr font-body text-b-md space-y-4">
                <GenerateButton onClick={() => setGenerateClicked(true)} />
                <ArtistSearch onSelectedArtistsChange={setSelectedArtists} />
                <GenreSearch onSelectedGenresChange={setSelectedGenres} />
                <SliderList onSliderValuesChange={handleSliderValueChange} />
            </div>
        </div>
    )
}
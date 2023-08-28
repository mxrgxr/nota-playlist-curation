import NavBar from "../components/NavBar/NavBar"
import ArtistSearch from "../components/Filters/Artist/ArtistSearch"
import GenreSearch from "../components/Filters/Genre/GenreSearch"
import GenerateButton from "../components/Filters/GenerateButton"
import SliderList from "../components/Filters/SliderList"
import { useParams } from 'react-router-dom';
import {useState} from 'react';

export default function CreatePlaylistFilter(){
    const { playlistId } = useParams();
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [sliderValues, setSliderValues] = useState({});

    const handleSliderValueChange = (categoryTitle, minValue, maxValue) => {
        setSliderValues({
          ...sliderValues,
          [`min_${categoryTitle}`]: minValue,
          [`max_${categoryTitle}`]: maxValue,
        });
    };

    return(
        <div className="flex">
            <NavBar />
            <div className="w-screen bg-p-800 p-8 text-lt-ntr font-body text-b-md space-y-4">
                <GenerateButton />
                <ArtistSearch onSelectedArtistsChange={setSelectedArtists} />
                <GenreSearch onSelectedGenresChange={setSelectedGenres} />
                <SliderList onSliderValuesChange={handleSliderValueChange} />
            </div>
        </div>
    )
}
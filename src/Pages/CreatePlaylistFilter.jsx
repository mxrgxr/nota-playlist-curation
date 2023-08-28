import NavBar from "../components/NavBar/NavBar"
import ArtistSearch from "../components/Filters/Artist/ArtistSearch"
import GenreSearch from "../components/Filters/Genre/GenreSearch"
import GenerateButton from "../components/Filters/GenerateButton"
import SliderList from "../components/Filters/SliderList"
import { useParams } from 'react-router-dom';

export default function CreatePlaylistFilter(){
    const { playlistId } = useParams();
    return(
        <div className="flex">
            <NavBar />
            <div className="h-screen">
                <ArtistSearch />
                <GenreSearch />
                <GenerateButton />
                <SliderList />
            </div>
        </div>
    )
}
import ArtistDropdown from "./ArtistDropdown"
import ArtistSearchInput from "./ArtistSearchInput";
import SelectedArtistChip from "./SelectedArtistChip"
import {useState} from 'react';
import * as artistsAPI from '../../../utilities/search-api'

export default function ArtistSearch(){
    const [searchResults, setSearchResults] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);

    async function handleSearch(searchTerm) {
        const accessToken = localStorage.getItem('accessToken');
        const data = await artistsAPI.searchArtists(searchTerm, accessToken);
        setSearchResults(data);
    }

    function handleSelect(artist) {
        setSelectedArtists([...selectedArtists, artist]);
    }
    
    return (
    <div>
      <ArtistSearchInput onSearch={handleSearch} />
      <ArtistDropdown searchResults={searchResults} onSelect={handleSelect} />
      <div>
        {selectedArtists.map((artist) => (
          <SelectedArtistChip key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
    );
}
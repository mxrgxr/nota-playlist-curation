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

    function handleRemove(artistToRemove) {
      setSelectedArtists(
        selectedArtists.filter((artist) => artist.id !== artistToRemove.id)
      );
    }
    
    return (
    <div>
      <ArtistSearchInput onSearch={handleSearch} />
      <ArtistDropdown searchResults={searchResults} onSelect={handleSelect} />
      <div className="py-4 space-x-4">
        {selectedArtists.map((artist) => (
          <SelectedArtistChip
            key={artist.id}
            artist={artist}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
    );
}
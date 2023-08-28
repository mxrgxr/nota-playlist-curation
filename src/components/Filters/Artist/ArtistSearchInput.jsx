import {useState} from 'react';

export default function ArtistSearchInput({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    function handleSearch(e) {
      e.preventDefault();
      onSearch(searchTerm);
    }
  
    return (
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an artist"
        />
        <button type="submit">Search</button>
      </form>
    );
}
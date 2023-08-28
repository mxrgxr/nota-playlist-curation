import { useState } from 'react';

export default function ArtistSearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className=" w-1/4">
      <form className="relative" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an artist"
          className="rounded py-2 w-full"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}
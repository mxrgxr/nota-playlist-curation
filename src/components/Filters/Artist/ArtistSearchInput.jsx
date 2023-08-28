export default function ArtistSearchInput({ onSearch, searchTerm, setSearchTerm }) {

  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="w-1/4 font-body">
      <form className="relative" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an artist"
          className="rounded py-2 w-full bg-s-50 placeholder-opacity-90 placeholder-s-900 border-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 bg-s-500 rounded-lg px-4 text-lt-ntr">
          Search
        </button>
      </form>
    </div>
  );
}
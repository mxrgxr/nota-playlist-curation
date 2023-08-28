export default function ArtistDropdown({ searchResults, onSelect }) {
  return (
    <ul className="bg-s-100 font-body text-t-sm w-1/4 text-dk-ntr">
      {searchResults.map((artist, index) => (
        <div
          key={artist.id}
          className={`border-b border-s-500 ${
            index % 2 === 0 ? "bg-s-50" : "bg-s-100"
          }`}
        >
          <li
            onClick={() => onSelect(artist)}
            className="p-4 cursor-pointer hover:bg-a-100"
          >
            {artist.name}
          </li>
        </div>
      ))}
    </ul>
  );
}
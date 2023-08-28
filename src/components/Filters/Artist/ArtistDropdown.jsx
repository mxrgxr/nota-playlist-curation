export default function ArtistDropdown({ searchResults, onSelect }) {
    return (
      <ul>
        {searchResults.map((artist) => (
          <li key={artist.id} onClick={() => onSelect(artist)}>
            {artist.name}
          </li>
        ))}
      </ul>
    );
}
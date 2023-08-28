export default function SelectedArtistChip({ artist, onRemove }) {
  return (
    <div className="inline-flex items-center bg-a-500 text-lt-ntr text-t-md font-bold rounded-full px-4 py-1">
      {artist.name}
      <button
        className="pl-2"
        onClick={() => onRemove(artist)}
      >
        &times;
      </button>
    </div>
  );
}
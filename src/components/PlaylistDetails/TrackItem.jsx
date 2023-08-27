export default function TrackListItem({ track }) {
    return (
      <div>
        <img src={track.album.images[0]?.url} alt={track.name} />
        <p>{track.name}</p>
        <img
        src="/delete-icon.svg"
        alt="Delete"
        className="delete-button"
      />
      </div>
    );
}
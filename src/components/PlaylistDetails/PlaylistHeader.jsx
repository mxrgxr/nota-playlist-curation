export default function PlaylistHeader({ playlistName, description }) {
    return (
      <div>
        <h1>{playlistName}</h1>
        {description && <p>{description}</p>}
      </div>
    );
} 
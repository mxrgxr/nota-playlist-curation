export default function PlaylistHeader({ playlistName, description, playlistUrl }) {
  return (
    <div className="text-lt-ntr">
      <h1 className="text-h-lg font-header">
        <a href={playlistUrl} target="_blank" rel="noopener noreferrer">
          {playlistName}
        </a>
      </h1>
      {description && <p className="text-t-md font-body">{description}</p>}
    </div>
  );
}
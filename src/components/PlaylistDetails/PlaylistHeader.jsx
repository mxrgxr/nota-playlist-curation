export default function PlaylistHeader({ playlistName, description }) {
    return (
      <div className="text-lt-ntr">
        <h1 className="text-h-lg font-header">{playlistName}</h1>
        {description && <p className="text-t-md font-body">{description}</p>}
      </div>
    );
} 
export default function TrackListItem({ track }) {
    return (
      <div className="flex items-center justify-between border-b last:border-b-0">
        <div className="flex items-center">
          <div className="">
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="w-12 h-12 bg-white"
            />
          </div>
          <p className="ml-4">{track.name}</p>
        </div>
        <img
          src="/delete-icon.svg"
          alt="Delete"
          className="delete-button"
        />
      </div>
    );
}
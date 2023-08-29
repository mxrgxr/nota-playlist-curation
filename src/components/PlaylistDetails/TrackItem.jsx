export default function TrackListItem({ track }) {
  return (
    <div className="flex items-center justify-between font-body border-b last:border-b-0 py-4 first:pt-0">
      <div className="flex items-center">
        <div className="">
          <img
            src={track.album.images[0]?.url}
            alt={track.name}
            className="w-24 h-24 bg-white"
          />
        </div>
        <div className="ml-8">
          <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <p>{track.name}</p>
          </a>
          <p className="text-b-lg">{track.album.name}</p>
          <p className="text-b-md">{track.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
}
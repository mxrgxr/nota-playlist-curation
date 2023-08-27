export default function TrackListItem({ track }) {
    return (
      <div className="flex items-center justify-between border-b last:border-b-0 py-4 first:pt-0">
        <div className="flex items-center">
          <div className="">
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="w-24 h-24 bg-white"
            />
          </div>
          <p className="ml-8">{track.name}</p>
        </div>
        <button class="bg-s-50 p-8 rounded-full">
            <img src="/delete-icon.svg" alt="Delete" />
        </button>
      </div>
    );
}
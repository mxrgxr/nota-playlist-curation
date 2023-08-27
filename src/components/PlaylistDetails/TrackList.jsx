import TrackItem from './TrackItem';

export default function TrackList({ tracks }) {
  return (
    <div className="bg-s-200 font-body font-bold text-dk-ntr text-t-md p-4 rounded-lg">
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
        />
      ))}
    </div>
  );
}
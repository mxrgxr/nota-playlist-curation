import TrackItem from './TrackItem';

export default function TrackList({ tracks }) {
  return (
    <div className="bg-s-200">
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
        />
      ))}
    </div>
  );
}
import { Link } from 'react-router-dom';

export default function PlaylistCard({ imgSrc, playlistName, playlistId }) {
  return (
    <Link to={`/playlist/${playlistId}`} className="bg-p-200 rounded-lg p-8 flex flex-col items-center">
      <div>
        <img src={imgSrc} alt={playlistName} />
      </div>
      <div>
        <p className="font-body text-t-md text-dk-ntr mt-8">{playlistName}</p>
      </div>
    </Link>
  );
}
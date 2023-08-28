import PlaylistHeader from "../components/PlaylistDetails/PlaylistHeader";
import GetRecommendations from "../components/PlaylistDetails/GetRecommendations";
import TrackList from "../components/PlaylistDetails/TrackList";
import NavBar from "../components/NavBar/NavBar";
import { useParams, Link } from 'react-router-dom';
import * as playlistsAPI from '../utilities/playlists-api';
import { useState, useEffect } from 'react';

export default function PlaylistDetails() {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    async function fetchPlaylistDetails() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await playlistsAPI.getPlaylistDetails(playlistId, accessToken);
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching playlist details:', error);
      }
    }
    fetchPlaylistDetails();
  }, [playlistId]);

  if (!playlist) {
    return <div>Fetching playlist</div>;
  }

  const tracks = playlist.tracks.items.map((item) => item.track);

  return (
    <div className="flex bg-p-800">
      <NavBar />
      <div className="p-8 w-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <PlaylistHeader playlistName={playlist.name} description={playlist.description} />
          <Link to={`/playlist/${playlistId}/filter`}>
            <GetRecommendations />
          </Link>
        </div>
        <div className="flex-grow">
          {tracks.length > 0 ? (
            <TrackList tracks={tracks} />
          ) : (
            <div className="text-lt-ntr font-body text-t-sm">No tracks added yet</div>
          )}
        </div>
      </div>
    </div>
  );
}

import PlaylistHeader from "../components/PlaylistDetails/PlaylistHeader";
import GetRecommendations from "../components/PlaylistDetails/GetRecommendations";
import TrackList from "../components/PlaylistDetails/TrackList";
import NavBar from "../components/NavBar/NavBar";
import { useParams } from 'react-router-dom';
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
        console.log(data)
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching playlist details:', error);
      }
    }
    fetchPlaylistDetails();
  }, [playlistId]);

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div>
        <PlaylistHeader playlistName={playlist.name} description={playlist.description} />
        <GetRecommendations />
        <TrackList tracks={playlist.tracks.items.map((item) => item.track)} />
      </div>
    </div>
  );
}
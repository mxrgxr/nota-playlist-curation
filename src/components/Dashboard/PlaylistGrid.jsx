import PlaylistCard from './PlaylistCard';
import {useState, useEffect} from 'react';
import * as playlistsAPI from '../../utilities/playlists-api';

export default function PlaylistGrid() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await playlistsAPI.getUserPlaylists(accessToken);
        setPlaylists(data.items);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }
    fetchPlaylists();
  }, []);
    
    return (
        <div>
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              imgSrc={playlist.images[0]?.url}
              playlistName={playlist.name}
            />
          ))}
        </div>
    );
}
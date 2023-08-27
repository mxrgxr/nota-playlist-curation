import { useState } from 'react';
import * as playlistsAPI from '../../utilities/playlists-api';

export default function CreatePlaylistModal({ onClose }) {
    const [playlistName, setPlaylistName] = useState('');

  const handleInputChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    const res = await playlistsAPI.createPlaylist(playlistName, accessToken);
    console.log(res)
    if (res.ok) {
      onClose();
    } else {
        console.error('Error creating playlist:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="p-6 rounded-md bg-s-200 w-1/2 h-1/2 border-8 border-lt-ntr flex flex-col items-center justify-center relative">
        <button
          className="font-body font-bold text-err-500 bg-s-100 text-h-md bg-white border-4 border-s-900 rounded-full w-16 h-16 flex items-center justify-center absolute top-0 right-0 m-4"
          onClick={onClose}
        >
          &times;
        </button>
        <p className="font-header text-t-lg text-dk-ntr mb-4">Create a Spotify Playlist</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <input
            type="text"
            id="playlistName"
            name="playlistName"
            placeholder="Name"
            value={playlistName}
            onChange={handleInputChange}
            className="mb-4 rounded-md border-s-500 border-4 shadow-inner focus:border-a-100 text-t-sm placeholder:text-dk-ntr placeholder:text-opacity-80 w-full"
          />
            <button className="bg-s-500 px-4 py-2 rounded-md text-b-lg hover:bg-s-400 text-lt-ntr font-body" type="submit">Build your playlist</button>
        </form>
      </div>
    </div>
  );
}

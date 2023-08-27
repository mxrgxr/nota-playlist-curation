import { useState } from 'react';
import CreatePlaylistModal from '../Modal/CreatePlaylistModal';

export default function CreatePlaylist({ variant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const buttonStyle =
    variant === 'navbar'
      ? 'flex flex-col items-center space-y-2 font-body font-bold text-b-md text-dk-ntr'
      : 'flex items-center font-body text-btn-lg bg-a-200 text-dk-ntr px-8 py-4 rounded-lg font-bold hover:bg-a-100 space-x-4';
  return (
    <div>
    <button className={buttonStyle} onClick={toggleModal}>
      {variant === 'navbar' && <img src="/create-icon.svg" />}
      <p>Create Playlist</p>
    </button>
    {isModalOpen && <CreatePlaylistModal onClose={toggleModal} />}
      </div>
  );
}
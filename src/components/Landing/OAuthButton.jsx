import { useState, useEffect } from 'react';

export default function OAuthButton({color}) {
  const [popup, setPopup] = useState(null);

  const openPopup = () => window.open('http://localhost:3001/auth/spotify');

  const handleClick = () => {
    const newPopup = openPopup();
    setPopup(newPopup);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'http://localhost:3001' && event.data === 'success') {
        if (popup && !popup.closed) {
          popup.close();
        }
      }
    };
  
    window.addEventListener('message', handleMessage);
  
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [popup]);

  return (
    <button onClick={handleClick}
      className={`flex items-center ${color} font-body text-btn-lg text-dk-ntr px-8 py-4 rounded-lg font-bold hover:bg-a-100 space-x-4`}
    >
      <img className="max-h-12" src="/spotify-icon-black.png" alt="Spotify icon" />
      <span>Start Curating</span>
    </button>
  );
}
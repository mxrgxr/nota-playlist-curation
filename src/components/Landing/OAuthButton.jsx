import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function OAuthButton({color}) {
  const { setAccessToken } = useContext(AuthContext);
  const [popup, setPopup] = useState(null);

  const openPopup = () => window.open(`${import.meta.env.VITE_AUTH_ROUTE}`);

  const handleClick = () => {
    const newPopup = openPopup();
    setPopup(newPopup);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === import.meta.env.VITE_ORIGIN_URL && event.data.status === 'success') {
        localStorage.setItem('accessToken', event.data.accessToken);
        setAccessToken(event.data.accessToken);
        if (popup && !popup.closed) {
          popup.close();
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [popup, setAccessToken]);

  return (
    <button onClick={handleClick}
      className={`flex items-center ${color} font-body text-btn-lg text-dk-ntr px-8 py-4 rounded-lg font-bold hover:bg-a-100 space-x-4`}
    >
      <img className="max-h-12" src="/spotify-icon-black.png" alt="Spotify icon" />
      <span>Start Curating</span>
    </button>
  );
}
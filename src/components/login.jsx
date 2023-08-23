import { useState, useEffect } from 'react';

export default function Login() {
  const [popup, setPopup] = useState(null);

  const openPopup = () => {
    const url = 'http://localhost:3001/auth/spotify';

    return window.open(
      url,
    );
  };

  const handleClick = () => {
    const newPopup = openPopup();
    setPopup(newPopup);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (popup && !popup.closed) {
        if (popup.location.href.indexOf('http://localhost:3001/auth/spotify/callback') !== -1) {
          const urlParams = new URLSearchParams(popup.location.search);
          const code = urlParams.get('code');
          console.log('Received OAuth code:', code);
          popup.close();
        }
      }
    }, 500);

    return () => clearInterval(timer);
  }, [popup]);

  return (
    <div>
      <button onClick={handleClick}>Login with Spotify</button>
    </div>
  );
}
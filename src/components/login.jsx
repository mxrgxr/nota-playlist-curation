import { useState, useEffect } from 'react';

export default function Login() {
  const [popup, setPopup] = useState(null);

  const openPopup = () => {
    const url = 'http://localhost:3001/auth/spotify';

    return window.open(url,);
  };

  const handleClick = () => {
    const newPopup = openPopup();
    setPopup(newPopup);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'http://localhost:3001' && event.data === 'accessTokenSaved') {
        console.log('Access token saved in the session');
        popup.close();
      }
    };
  
    window.addEventListener('message', handleMessage);
  
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [popup]);

  return (
    <div>
      <button onClick={handleClick}>Login with Spotify</button>
    </div>
  );
}
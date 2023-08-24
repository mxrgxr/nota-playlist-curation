import { useState, useEffect } from 'react';

export default function OAuthButton() {
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
    <div>
      <button Click={handleClick}>GET STARTED</button>
    </div>
  );
}
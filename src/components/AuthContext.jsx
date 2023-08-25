import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    if (accessToken) {
      fetch('/api/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ user, setUser, accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
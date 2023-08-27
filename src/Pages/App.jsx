import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import PlaylistDetails from './PlaylistDetails';
import { AuthContext } from '../components/AuthContext';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
        </Routes>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
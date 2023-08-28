import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import PlaylistDetails from './PlaylistDetails';
import Profile from './Profile';
import CreatePlaylistFilter from './CreatePlaylistFilter';
import { AuthContext } from '../components/AuthContext';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/playlist/:playlistId/filter" element={<CreatePlaylistFilter />} />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
        </Routes>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
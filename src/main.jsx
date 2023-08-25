import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import './index.css';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
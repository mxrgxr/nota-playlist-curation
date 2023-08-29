import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogOut() {
    logOut();
    navigate('/');
  }

  return (
    <div>
      <button
        className="flex items-center bg-err-200 font-body text-btn-lg text-dk-ntr px-8 py-4 rounded-lg font-bold hover:opacity-90"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}
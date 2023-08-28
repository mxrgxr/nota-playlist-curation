import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

export default function LogOut() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  function handleLogOut() {
    logOut();
    setUser(null);
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
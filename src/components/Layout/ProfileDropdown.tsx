import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../Auth/AuthStore';

export const ProfileDropdown = () => {
      const { logout } = useAuthStore();
      const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
      };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-green-100">
        Log Out
      </button>
    </div>
  );
};
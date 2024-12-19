import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Tornado as Tooth, 
  Menu, 
  User, 
  X,
  Calendar
} from 'lucide-react';
import { NotificationBell } from '../generic/NotificationBell';
import { useAuthStore } from '../Auth/authStore';
import { ProfileAvatar } from '../generic/Avatar';
import { Button } from '../generic/Button';

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Tooth className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Bright Smiles Architects™️</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/implant-process" className="text-gray-600 hover:text-emerald-600">Implant Process</Link>
            <Link to="/book-appointment" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
            <Link 
              to="/api" 
              className="text-green-600 hover:text-green-800 transition-colors duration-200"
            >
              API
            </Link>
            <NotificationBell count={3} to="/notifications" />
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative">
                  <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
                    <ProfileAvatar profile={user} size="SMALL" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-green-100">Log Out</button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="inline-block"
                  >
                    <Button variant="SECONDARY">Login</Button>
                  </Link>
                  <Link
                    to="/register"
                    className="inline-block"
                  >
                    <Button variant="PRIMARY">Register</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/implant-process" className="block text-gray-600 hover:text-emerald-600">Implant Process</Link>
            <Link to="/book-appointment" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
            <Link 
              to="/api" 
              className="text-green-600 hover:text-green-800 transition-colors duration-200"
            >
              API
            </Link>
            <div className="flex items-center space-x-4">
              <NotificationBell count={3} to="/notifications" />
              {isAuthenticated ? (
                <div className="relative">
                  <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
                    <ProfileAvatar profile={user} size="SMALL" />
                    <span>{user.firstName}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-green-100">Log Out</button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="inline-block"
                  >
                    <Button variant="SECONDARY">Login</Button>
                  </Link>
                  <Link
                    to="/register"
                    className="inline-block"
                  >
                    <Button variant="PRIMARY">Register</Button>
                  </Link>
                </>
              )}
            </div>
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
            >
              <User className="h-4 w-4" />
              <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tornado as Tooth, Menu as MenuIcon, X, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { applicationService } from '../../http/applicationService';

import { NotificationBell } from '../generic/NotificationBell';
import { useAuthStore } from '../Auth/AuthStore';
import { Button } from '../generic/Button';
import { ProfileDropdown } from './ProfileDropdown';
import { ProfileAvatar } from '../generic/Avatar';

export const Header = () => {
  const { profile, isAuthenticated } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { data: appStatus } = useQuery({
    queryKey: ['appStatus'],
    queryFn: applicationService.getAppStatus
  });

  const menuContent = (
    <>
      <Link to="/cms/implant-process" className="text-gray-600 hover:text-emerald-600">
        Implant Process
      </Link>
      <Link to="/book-appointment" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
        <Calendar className="h-4 w-4" />
        <span>Book Appointment</span>
      </Link>
      <Link to="/api" className="text-green-600 hover:text-green-800 transition-colors duration-200">
        API
      </Link>
      <NotificationBell {...{ count: appStatus?.unreadNotificationsCount }} to="/notifications" />
      
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
              <ProfileAvatar profile={profile} size="SMALL" />
              {isMenuOpen && <span>{profile.firstName}</span>}
            </button>
            {dropdownOpen && <ProfileDropdown />}
          </div>
        ) : (
          <>
            <Link to="/login" className="inline-block">
              <Button variant="SECONDARY">Login</Button>
            </Link>
            <Link to="/register" className="inline-block">
              <Button variant="PRIMARY">Register</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Tooth className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Bright Smiles Architects™️</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuContent}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuContent}
          </div>
        )}
      </nav>
    </header>
  );
};
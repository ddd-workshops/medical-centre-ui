import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Tornado as Tooth, 
  Menu, 
  User, 
  X,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Tooth className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Bright Smiles Architects™️</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-emerald-600">Pricing</Link>
            <Link to="/implant-process" className="text-gray-600 hover:text-emerald-600">Implant Process</Link>
            <Link to="/book-appointment" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
            >
              <User className="h-4 w-4" />
              <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
            </button>
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
            <Link to="/" className="block text-gray-600 hover:text-emerald-600">Home</Link>
            <Link to="/pricing" className="block text-gray-600 hover:text-emerald-600">Pricing</Link>
            <Link to="/implant-process" className="block text-gray-600 hover:text-emerald-600">Implant Process</Link>
            <Link to="/book-appointment" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
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
}
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +44 20 1234 5678</p>
              <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@brightsmiles.net</p>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> London, UK</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/general" className="hover:text-emerald-400">General Dentistry</Link></li>
              <li><Link to="/services/cosmetic" className="hover:text-emerald-400">Cosmetic Dentistry</Link></li>
              <li><Link to="/services/orthodontics" className="hover:text-emerald-400">Orthodontics</Link></li>
              <li><Link to="/services/implants" className="hover:text-emerald-400">Dental Implants</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-400">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-emerald-400"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-emerald-400"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-emerald-400"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Bright Smiles Architects™️. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
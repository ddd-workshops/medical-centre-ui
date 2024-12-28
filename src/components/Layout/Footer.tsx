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
import { useClinics } from './hooks/useClinics';
import { clinicLink } from '../Routing/routes';

export function Footer() {
  const { data: clinics } = useClinics();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-3 py-8">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-base font-bold mb-2">Contact Us</h3>
              <div className="space-y-1 text-sm">
                <a href="tel:+442012345678" className="flex items-center hover:text-emerald-400">
                  <Phone className="h-3 w-3 mr-1" /> +44 20 1234 5678
                </a>
                <a href="mailto:info@brightsmiles.net" className="flex items-center hover:text-emerald-400">
                  <Mail className="h-3 w-3 mr-1" /> info@brightsmiles.net
                </a>
                <p className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> London, UK</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-emerald-400"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-emerald-400"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-emerald-400"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-emerald-400"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-base font-bold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/cms/implant-process" className="hover:text-emerald-400">Implant Process</Link></li>
              <li><Link to="/cms/general-dentistry" className="hover:text-emerald-400">General Dentistry</Link></li>
              <li><Link to="/cms/cosmetic-dentistry" className="hover:text-emerald-400">Cosmetic Dentistry</Link></li>
              <li><Link to="/cms/orthodontics" className="hover:text-emerald-400">Orthodontics</Link></li>
              <li><Link to="/cms/dental-implants" className="hover:text-emerald-400">Dental Implants</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-base font-bold mb-2">Information</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/cms/pricing" className="hover:text-emerald-400">Pricing</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-400">Careers</Link></li>
              <li><Link to="/cms/privacy-policy" className="hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link to="/cms/terms-of-service" className="hover:text-emerald-400">Terms of Service</Link></li>
            </ul>

            <h3 className="text-base font-bold mt-4 mb-2">Technology</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/api" className="hover:text-emerald-400">API Integration</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-base font-bold mb-2">Our Clinics</h3>
            <ul className="space-y-1 text-sm">
              {clinics?.map(clinic => (
                <li key={clinic.id}>
                  <Link to={clinicLink(clinic)} className="hover:text-emerald-400">
                    {clinic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bright Smiles Architects™️. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
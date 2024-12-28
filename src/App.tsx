import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppProviders } from './AppProviders';

import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Pricing } from './components/Static/Pricing';
import { ImplantProcess } from './components/Static/ImplantProcess';
import { AppointmentBooking } from './components/Appointments/AppointmentBooking';
import { MedicalHistory } from './components/MedicalHistory/MedicalHistory';
import { MedicalHistoryDetails } from './components/MedicalHistory/MedicalHistoryDetails';
import { SwaggerDocs } from './components/API/SwaggerUI';
import { LoginForm } from './components/Auth/LoginForm';
import { RegisterForm } from './components/Auth/RegisterForm';
import { ResetForm } from './components/Auth/ResetForm';
import { NotificationsList } from './components/Notifications/NotificationsList';
import { NotificationDetails } from './components/Notifications/NotificationDetails';
import { CMSContent } from './components/CMS/CMSContent';
import { PrescribedTreatmentsList } from './components/Treatments/PrescribedTreatmentsList';
import { ClinicsList } from './components/Clinics/ClinicsList';
import { RoutedClinicDetails } from './components/Clinics/RoutedClinicDetails';
import { DoctorsList } from './components/Doctors/DoctorsList';
import { DoctorProfile } from './components/Doctors/DoctorProfile';
import { RoutedDoctorsList } from './components/Doctors/RoutedDoctorsList';
import { RoutedDoctorProfile } from './components/Doctors/RoutedDoctorProfile';

import { AppointmentDetailedDescription } from './components/Appointments/AppointmentDetailedDescription';
import { useAuthStore } from './components/Auth/AuthStore';
import { UpdateContactRequestForm } from './components/Profile/UpdateContactRequestForm';
import { AppointmentSearch } from './components/Appointments/AppointmentSearch';

export function App() {
  const { showContactVerification, setShowContactVerification } = useAuthStore();
  
  return (
    <AppProviders>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {showContactVerification && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <UpdateContactRequestForm 
                onClose={() => setShowContactVerification(false)} 
              />
            </div>
          )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
            <Route path="/book-appointment" element={<AppointmentBooking />} />
            <Route path="/appointments/search" element={<AppointmentSearch />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
            <Route path="/medical-history/:id" element={<MedicalHistoryDetails />} />
            <Route path="/appointments/:id" element={<AppointmentDetailedDescription />} />
            <Route path="/prescribed-treatments" element={<PrescribedTreatmentsList />} />
            <Route path="/notifications" element={<NotificationsList />} />
            <Route path="/notifications/:id" element={<NotificationDetails />} />
            <Route path="/clinics" element={<ClinicsList />} />
            <Route path="/clinics/:id" element={<RoutedClinicDetails />} />
            <Route path="/staff" element={<RoutedDoctorsList />} />
            <Route path="/staff/:slug" element={<RoutedDoctorProfile />} />

            <Route path="/api" element={<SwaggerDocs />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/reset" element={<ResetForm />} />
            
            <Route path="/cms/pricing" element={<Pricing />} />
            <Route path="/cms/implant-process" element={<ImplantProcess />} />
            <Route path="/cms/general-dentistry" element={<CMSContent slug="general-dentistry" />} />
            <Route path="/cms/cosmetic-dentistry" element={<CMSContent slug="cosmetic-dentistry" />} />
            <Route path="/cms/orthodontics" element={<CMSContent slug="orthodontics" />} />
            <Route path="/cms/dental-implants" element={<CMSContent slug="dental-implants" />} />
            <Route path="/cms/privacy-policy" element={<CMSContent slug="privacy-policy" />} />
            <Route path="/cms/terms-of-service" element={<CMSContent slug="terms-of-service" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProviders>
  );
}
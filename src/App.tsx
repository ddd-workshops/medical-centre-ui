import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Pricing } from './components/Static/Pricing';
import { ImplantProcess } from './components/Static/ImplantProcess';
import { AppointmentSearch } from './components/Appointments/AppointmentSearch';
import { MedicalHistory } from './components/MedicalHistory/MedicalHistory';
import { MedicalHistoryDetails } from './components/MedicalHistory/MedicalHistoryDetails';
import { SwaggerDocs } from './components/API/SwaggerUI';
import { LoginForm } from './components/Auth/LoginForm';
import { RegisterForm } from './components/Auth/RegisterForm';
import { ResetForm } from './components/Auth/ResetForm';
import { NotificationsList } from './components/Notifications/NotificationsList';
import { NotificationDetails } from './components/Notifications/NotificationDetails';
import { CMSContent } from './components/CMS/CMSContent';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppointmentDetails } from './components/Appointments/AppointmentDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/implant-process" element={<ImplantProcess />} />
              <Route path="/book-appointment" element={<AppointmentSearch />} />
              <Route path="/medical-history" element={<MedicalHistory />} />
              <Route path="/medical-history/:id" element={<MedicalHistoryDetails />} />
              <Route path="/appointments/:id" element={<AppointmentDetails />} />
              <Route path="/notifications" element={<NotificationsList />} />
              <Route path="/notifications/:id" element={<NotificationDetails />} />
              <Route path="/api" element={<SwaggerDocs />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/reset" element={<ResetForm />} />
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
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
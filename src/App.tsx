import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Welcome } from './pages/Welcome';
import { Pricing } from './components/Static/Pricing';
import { ImplantProcess } from './components/Static/ImplantProcess';
import { AppointmentSearch } from './components/Appointments/AppointmentSearch';
import { MedicalHistory } from './components/MedicalHistory/MedicalHistory';
import { MedicalHistoryDetails } from './components/MedicalHistory/MedicalHistoryDetails';
import { SwaggerDocs } from './components/SwaggerUI';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
              <Route path="/" element={<Welcome />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/implant-process" element={<ImplantProcess />} />
              <Route path="/book-appointment" element={<AppointmentSearch />} />
              <Route path="/medical-history" element={<MedicalHistory />} />
              <Route path="/medical-history/:id" element={<MedicalHistoryDetails />} />
              <Route path="/api" element={<SwaggerDocs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
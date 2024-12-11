import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Pricing from './pages/Pricing';
import ImplantProcess from './pages/ImplantProcess';
import AppointmentSearch from './pages/AppointmentSearch';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/implant-process" element={<ImplantProcess />} />
            <Route path="/book-appointment" element={<AppointmentSearch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
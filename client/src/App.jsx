import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { TrekProvider } from './context/TrekContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Expeditions from './pages/Expeditions';
import ExpeditionDetail from './pages/ExpeditionDetail';
import Trekking from './pages/Trekking';
import TrekkingDetail from './pages/TrekkingDetail';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import GeneralEnquiry from './pages/GeneralEnquiry';
import ExpeditionEnquiry from './pages/ExpeditionEnquiry';
import VirtualCallEnquiry from './pages/VirtualCallEnquiry';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/admin/login" />;
    }
    return children;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TrekProvider>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expeditions" element={<Expeditions />} />
            <Route path="/expeditions/:id" element={<ExpeditionDetail />} />
            <Route path="/trekking" element={<Trekking />} />
            <Route path="/trekking/:id" element={<TrekkingDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquire/general" element={<GeneralEnquiry />} />
            <Route path="/enquire/expedition" element={<ExpeditionEnquiry />} />
            <Route path="/enquire/virtual-call" element={<VirtualCallEnquiry />} />
            <Route
              path="/admin/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </TrekProvider>
    </div>
  );
}

export default App;
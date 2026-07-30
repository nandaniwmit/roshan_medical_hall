import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { Pill } from 'lucide-react';

// Lazy Load All 5 Pages as strictly required
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Scroll to Top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback Loading Spinner
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4 text-center">
    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center animate-bounce shadow-lg shadow-emerald-600/30">
      <Pill className="w-6 h-6 rotate-45" />
    </div>
    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
      Loading Roshan Medical Hall...
    </p>
  </div>
);

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleOpenWhatsAppModal = () => setIsWhatsAppModalOpen(true);
  const handleCloseWhatsAppModal = () => setIsWhatsAppModalOpen(false);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F4F7F6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
          
          {/* Header Navbar */}
          <Navbar onOpenWhatsAppModal={handleOpenWhatsAppModal} />

          {/* Main Page Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/about" element={<About onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Floating Action Buttons */}
          <FloatingButtons onOpenWhatsAppModal={handleOpenWhatsAppModal} />

          {/* Global WhatsApp Order Form Modal */}
          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={handleCloseWhatsAppModal}
          />

          {/* Footer containing mandated Global Tracker Hook */}
          <Footer />

        </div>
      </Router>
    </ThemeProvider>
  );
}

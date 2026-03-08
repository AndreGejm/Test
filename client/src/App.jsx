import Navbar from './components/Navbar';
import Hero from './features/home/Hero';
import Services from './features/home/Services';
import Work from './features/home/Work';
import Gear from './features/home/Gear';
import Philosophy from './features/home/Philosophy';
import ReviewsSection from './features/reviews/ReviewsSection';
import Contact from './features/home/Contact';
import AdminDashboard from './features/admin/AdminDashboard';
import LayoutDebug from './components/LayoutDebug';
import BookingModal from './features/bookings/BookingModal';
import ReviewPage from './features/reviews/ReviewPage';
import { useState, useEffect } from 'react';
import { API_URL } from './config';
import './App.css';

/**
 * App Component
 *
 * Hash-based routing:
 *   #admin   → AdminDashboard (protected)
 *   #review  → ReviewPage (token-gated invite-only review form)
 *   (default) → Public site with BookingModal
 */
function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [settings, setSettings] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Listen for hash changes for hash-based routing
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isAdminRoute = hash === '#admin';
  // #review?token=... — hash starts with '#review'
  const isReviewRoute = hash.startsWith('#review');


  // Fetch site settings only for the public site
  useEffect(() => {
    if (!isAdminRoute && !isReviewRoute) {
      fetch(`${API_URL}/settings`)
        .then(r => r.json())
        .then(data => {
          if (data && !data.error) setSettings(data);
          else setSettings({ enableWork: true, enableServices: true, enableAbout: true, enableGear: true, enableReviews: true });
        })
        .catch(() => {
          setSettings({ enableWork: true, enableServices: true, enableAbout: true, enableGear: true, enableReviews: true });
        });
    }
  }, [isAdminRoute, isReviewRoute]);

  // Admin console route
  if (isAdminRoute) {
    return (
      <div className="app">
        <Navbar isAdminMode={true} />
        <AdminDashboard />
      </div>
    );
  }

  // Review Page route
  if (isReviewRoute) {
    return (
      <div className="app">
        <ReviewPage />
      </div>
    );
  }

  // Global Navigation Helpers
  const navigateToSection = (sectionId) => {
    if (isAdminRoute || isReviewRoute) {
      // Navigate to home, then scroll
      window.location.hash = '#home';
      // Wait for React to mount the home page components
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Already on home, just scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Optionally update the hash without triggering a jump if needed, 
        // but standard href behaves similarly. To prevent weird jumps, we handle it programmatically:
        window.history.pushState(null, '', `#${sectionId}`);
      } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '#home');
      }
    }
  };

  const openBookingModal = () => {
    if (isAdminRoute || isReviewRoute) {
      // Navigate to home, then open modal
      window.location.hash = '';
      setTimeout(() => {
        setIsBookingOpen(true);
      }, 100);
    } else {
      setIsBookingOpen(true);
    }
  };

  // Prevent flash of unstyled content while fetching settings
  if (!settings) return <div style={{ height: '100vh', background: '#050505' }} />;

  return (
    <>
      <div className="app">
        <Navbar
          onNavigate={navigateToSection}
          onBookSession={openBookingModal}
        />
        <main>
          <Hero settings={settings} onBookingOpen={openBookingModal} />
          {settings.enableWork && <Work />}
          {settings.enableServices && <Services />}
          {settings.enableAbout && <Philosophy />}
          {settings.enableGear && <Gear />}
          {settings.enableReviews && <ReviewsSection />}
          <Contact settings={settings} onBookingOpen={openBookingModal} />
        </main>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      {import.meta.env.DEV && <LayoutDebug />}
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Provides site-wide navigation and brand logo. 
 * Implements a sticky header that changes visual state (adds a background blur/color)
 * when the user scrolls past a certain threshold.
 * 
 * @param {boolean} isAdminMode - If true, hides anchor links to prevent accidental routing out of the dashboard.
 */
const Navbar = ({ isAdminMode = false, onNavigate, onBookSession }) => {
    // Tracks if the page has been scrolled past the top
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Set up the scroll event listener on mount
    useEffect(() => {
        const handleScroll = () => {
            // If scroll position is greater than 50px, mark as scrolled
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        if (onNavigate) {
            onNavigate(sectionId);
        }
    };

    const handleBookClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        if (onBookSession) {
            onBookSession();
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <div className="logo">
                    <a href="#home" onClick={(e) => {
                        if (!isAdminMode) {
                            handleNavClick(e, 'home');
                        }
                    }}>
                        <span className="logo-text">LAURIDSEN</span>
                        <span className="logo-sub"> PRODUCTION</span>
                    </a>
                </div>
                {!isAdminMode && (
                    <>
                        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
                            <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Work</a>
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                            <a href="#gear" onClick={(e) => handleNavClick(e, 'gear')}>Gear</a>
                            <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>Reviews</a>
                            <button className="nav-cta" onClick={handleBookClick}>Book Session</button>
                        </nav>
                        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </>
                )}
                {isAdminMode && (
                    <div className="nav-links">
                        <a href="#home" className="nav-cta" onClick={(e) => {
                            if (onNavigate) handleNavClick(e, 'home');
                        }}>Return to Site</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;

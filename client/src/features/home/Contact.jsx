import './Contact.css';

/**
 * Contact Component
 * 
 * The final section of the page acting as a footer, containing social links,
 * direct email contact, and a massive placeholder box meant for a booking widget.
 * 
 * TO INTEGRATE CALENDLY:
 * 1. Log in to Calendly, go to your event type > "Share" > "Add to Website" > "Inline Embed".
 * 2. Copy the HTML snippet.
 * 3. Paste the snippet inside the `<div className="booking-widget-placeholder">` below, replacing the mock content.
 */
const Contact = ({ settings, onBookingOpen }) => {
    const instagram = settings?.socialInstagram || 'https://www.instagram.com/lauridsen.production/';
    const youtube = settings?.socialYouTube || 'https://www.youtube.com/@LauridsenProductions';
    const bandcamp = settings?.socialBandcamp || 'https://lauridsenproduction.bandcamp.com/';
    const facebook = settings?.socialFacebook;
    const soundcloud = settings?.socialSoundCloud;
    const fiverr = settings?.socialFiverr;
    const email = settings?.contactEmail || 'noise@lauridsenproduction.com';

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">
                    SUMMON <span className="text-accent">US</span>
                </h2>
                <p className="section-subtitle">
                    Ready to track, mix, or master? Lock in your session below or drop a line for custom quotes.
                </p>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>FREQUENTLY ASKED QUESTIONS</h3>
                        <div className="faq-item" style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--text-main)' }}>How do I prepare tracks?</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Export consolidated, zeroed WAV files (24-bit/48kHz) with all processing bypassed. Provide a tempo map if applicable.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--text-main)' }}>What is the revision policy?</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Every mix includes 3 rounds of free revisions to ensure total satisfaction before finalizing.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--text-main)' }}>Payment terms?</h4>
                            <p style={{ color: 'var(--text-muted)' }}>50% upfront to secure the booking timeframe, 50% upon final delivery. Standard invoices via PayPal or Bank Transfer.</p>
                        </div>

                        <hr style={{ borderColor: 'var(--border-color)', margin: '2rem 0' }} />

                        <h3>CONTACT DETAILS</h3>
                        <p>Email: {email}</p>
                        <p>Location: {settings?.locationText || 'The Bunker, Gothenburg (or Remote worldwide)'}</p>

                        <div className="social-links mt-2">
                            <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">INSTAGRAM</a>
                            <a href={youtube} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">YOUTUBE</a>
                            <a href={bandcamp} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Bandcamp">BANDCAMP</a>
                            {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">FACEBOOK</a>}
                            {soundcloud && <a href={soundcloud} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="SoundCloud">SOUNDCLOUD</a>}
                            {fiverr && <a href={fiverr} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Fiverr">FIVERR</a>}
                        </div>
                        <div className="coffee-link mt-2">
                            <a href="https://buymeacoffee.com/lauridsen.production" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#FFDD00', color: '#FFDD00' }}>
                                Buy Me A Coffee
                            </a>
                        </div>
                    </div>

                    <div className="booking-widget-placeholder">
                        {settings?.bookingEnabled && settings?.calendlyUrl ? (
                            <div className="widget-active" style={{ height: '500px' }}>
                                <iframe
                                    src={settings.calendlyUrl}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Calendly Booking"
                                    loading="lazy"
                                    style={{ background: 'white', borderRadius: '8px' }}
                                ></iframe>
                            </div>
                        ) : (
                            <div className="widget-mock">
                                <h3 className="widget-title">BOOK A SESSION</h3>
                                <p>{settings?.fallbackEmailText || 'Ready to work together? Click below to send a booking request. I will get back to you within 1–2 business days.'}</p>
                                <button className="btn btn-primary" onClick={onBookingOpen} style={{ marginTop: '1.5rem', minWidth: '200px' }}>
                                    Send Booking Request
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} LAURIDSEN PRODUCTION. ALL RIGHTS RESERVED.</p>
            </footer>
        </section >
    );
};

export default Contact;

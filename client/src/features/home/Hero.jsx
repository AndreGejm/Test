import './Hero.css';

/**
 * Hero Component
 * 
 * The initial landing section of the website. Designed to make a strong
 * first visual impact with aggressive typography and primary call-to-actions.
 * Future improvement: Replace the CSS gradient background with a high-res studio image.
 */
const Hero = ({ settings, onBookingOpen }) => {
    const defaultHeadline = 'SONIC OBLITERATION';
    const headline = settings?.heroHeadline || defaultHeadline;
    const subtext = settings?.heroSubtext || 'Unrelenting clarity, crushing weight, and savage precision for extreme metal, hardcore, and crust. Mixing and mastering that respects the chaos.';

    // Auto-split headline for the two-tone accent styling if possible
    const words = headline.split(' ');
    const firstWord = words[0];
    const rest = words.slice(1).join(' ');

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title">
                    <span className="text-accent">{firstWord}</span> {rest}
                </h1>
                <p className="hero-subtitle">{subtext}</p>
                <div className="hero-cta-group">
                    {settings?.secondaryCtaLabel && (
                        <a href={settings.secondaryCtaTarget || '#work'} className="btn btn-outline">{settings.secondaryCtaLabel}</a>
                    )}
                    {settings?.primaryCtaLabel && (
                        // If primaryCtaTarget is '#book' or not set, open booking modal
                        (settings.primaryCtaTarget === '#book' || !settings.primaryCtaTarget || settings.primaryCtaTarget === '#contact')
                            ? <button className="btn btn-primary" onClick={onBookingOpen}>{settings.primaryCtaLabel}</button>
                            : <a href={settings.primaryCtaTarget} className="btn btn-primary">{settings.primaryCtaLabel}</a>
                    )}
                </div>
            </div>

            <div className="scroll-indicator">
                <span>DESCEND</span>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

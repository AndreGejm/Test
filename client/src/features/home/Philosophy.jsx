import './Philosophy.css';

/**
 * Philosophy Component
 * 
 * Renders "THE ABYSS AWAITS" text alongside a heavily textured placeholder box.
 * 
 * TO REPLACE PLACEHOLDER WITH A REAL IMAGE:
 * 1. Add your image to the `src/assets` folder.
 * 2. Import it at the top: `import myStudioImg from '../assets/my-studio.jpg';`
 * 3. Replace the `<div className="image-texture"></div>` below with:
 *    `<img src={myStudioImg} alt="Studio" className="philosophy-actual-img" />`
 * 4. Update CSS accordingly in Philosophy.css.
 */
const Philosophy = () => {
    return (
        <section id="about" className="philosophy-section" aria-labelledby="about-heading">
            <div className="container philosophy-container">
                <div className="philosophy-content">
                    <h2 id="about-heading" className="section-title">
                        ABOUT & <span className="text-accent">CREDIBILITY</span>
                    </h2>
                    <p className="philosophy-text">
                        Lauridsen Production is a dedicated audio engineering facility specializing exclusively in extreme metal, hardcore, and heavy subgenres. Operating directly from Gothenburg and serving bands worldwide, we understand the exact sonic requirements needed to make a record hit with unrelenting force.
                    </p>
                    <p className="philosophy-text">
                        We don't rely on cookie-cutter presets. We enhance your natural aggression, preserve the grit, and deliver a final master that translates across all modern listening formats.
                    </p>
                    <ul className="philosophy-points">
                        <li><strong>10+ Years</strong> of extreme audio engineering experience.</li>
                        <li><strong>Remote Workflow:</strong> Collaborating seamlessly with artists globally.</li>
                        <li><strong>Modern & Vintage:</strong> Digital precision combined with analog warmth.</li>
                    </ul>
                </div>
                <div className="philosophy-image-placeholder" aria-label="Image of Lauridsen Production Studio">
                    {/* This will eventually be replaced with an actual image */}
                    <div className="image-texture"></div>
                    <p className="image-caption">Gothenburg HQ // Remote Worldwide</p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;

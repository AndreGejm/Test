import './Gear.css';

/**
 * Gear Component
 * 
 * Provides a brief overview of the studio's arsenal and links out to a 
 * Google Drive folder containing detailed photos and lists of the hardware/software used.
 */
const Gear = () => {
    return (
        <section id="gear" className="gear-section">
            <div className="container">
                <div className="gear-content">
                    <h2 className="section-title">
                        THE <span className="text-accent">ARSENAL</span>
                    </h2>
                    <p className="gear-text">
                        For those who want to know exactly what shapes the sound.
                        A crushing mix requires the right tools, from high-end analog outboard gear to precise digital processing.
                    </p>
                    <p className="gear-text">
                        Dive into the full list of our current studio equipment, microphones, and instruments.
                    </p>
                    <a href="https://drive.google.com/drive/folders/1Iqk2IjWg5Yz-KY-jzXC0JAbWXrnyN4mW?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-2">
                        View Complete Gear List
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gear;

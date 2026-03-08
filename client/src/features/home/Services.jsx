import './Services.css';

/**
 * Services Data Matrix
 * 
 * Edit this array to modify the titles, descriptions, and icons of the 
 * services offered. The component below automatically maps over this data
 * to create the grid layout.
 */
const servicesData = [
    {
        title: 'Mixing',
        description: 'Transform raw tracks into a massive, three-dimensional wall of sound. We balance extreme speed and aggression with absolute clarity.',
        deliverables: ['Stereo Mix (WAV 24-bit/48kHz)', 'Instrumental Mix', 'Stem Stems (on request)'],
        turnaround: '7-14 days per track',
        pricing: 'Contact for Quote',
        icon: 'M',
    },
    {
        title: 'Mastering',
        description: 'The final polish before release. We push the loudness and density to the absolute limit without sacrificing punch and dynamics.',
        deliverables: ['Streaming Master', 'Vinyl Pre-Master', 'DDP Image (on request)'],
        turnaround: '3-5 days per release',
        pricing: 'Contact for Quote',
        icon: 'X',
    },
    {
        title: 'Editing & Quantizing',
        description: 'Tightening up performances for modern standards. We edit drums, align multi-tracked guitars, and tune vocals while preserving the human feel.',
        deliverables: ['Edited Stems (WAV)', 'MIDI Maps', 'Tempo Maps'],
        turnaround: 'Included with Mixing or Custom Quote',
        pricing: 'Contact for Quote',
        icon: 'E',
    },
];

/**
 * Services Component
 * 
 * Renders the "SONIC ARSENAL" section displaying a grid of service cards.
 * It consumes the `servicesData` array defined above.
 */
const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">
                    STUDIO <span className="text-accent">SERVICES</span>
                </h2>
                <p className="section-subtitle">
                    Professional audio engineering tailored exclusively for extreme subgenres.
                </p>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <article className="service-card" key={index} aria-labelledby={`service-title-${index}`}>
                            <div className="service-icon" aria-hidden="true">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>

                            <hr className="service-divider" />

                            <div className="service-details">
                                <p><strong>Deliverables:</strong> {service.deliverables.join(', ')}</p>
                                <p><strong>Turnaround:</strong> {service.turnaround}</p>
                                <p><strong>Pricing:</strong> {service.pricing}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

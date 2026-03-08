import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { PortfolioRow } from './PortfolioRow';
import './Work.css';

const Work = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/work`)
            .then(res => res.json())
            .then(data => {
                if (data.works) setWorks(data.works);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="work" className="work-section">
            <div className="container">
                <h2 className="section-title">
                    HEAR THE <span className="text-accent">DAMAGE</span>
                </h2>
                <p className="section-subtitle">
                    Recent mixing and mastering projects. Unrelenting clarity and crushing weight.
                </p>

                {loading ? (
                    <p style={{ textAlign: 'center' }}>Loading arsenal...</p>
                ) : works.length === 0 ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No transmissions intercepted. Check back later.</p>
                ) : (
                    <PortfolioRow works={works} />
                )}

                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <a
                        href="https://drive.google.com/drive/folders/1rPrbkScNOjT_MOjAa6VWPwO1-euPqnzs?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        aria-label="Listen to recent mixes and masters on Google Drive"
                    >
                        Full Sound Library &amp; Recent Mixes →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Work;

import ReviewList from './ReviewList';
import './ReviewsSection.css';

/**
 * ReviewsSection Component
 *
 * Displays approved client reviews. Review submission is invite-only —
 * customers receive a personal link by email when their order is completed.
 * There is no public "Leave a Review" button.
 */
const ReviewsSection = () => {
    return (
        <section id="reviews" className="reviews-section">
            <div className="container">
                <h2 className="section-title">
                    CLIENT <span className="text-accent">REVIEWS</span>
                </h2>
                <p className="section-subtitle">
                    See what our clients have to say about working with Lauridsen Production.
                </p>

                <ReviewList />

                <p style={{
                    textAlign: 'center',
                    marginTop: '2.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em'
                }}>
                    Reviews are by invitation only — clients receive a personal review link upon project completion.
                </p>
            </div>
        </section>
    );
};

export default ReviewsSection;

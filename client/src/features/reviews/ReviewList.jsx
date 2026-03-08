import { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../../config';
import './ReviewList.css';

/**
 * ReviewList Component
 * 
 * Fetches and displays published reviews from the API.
 * Includes data aggregations (histogram, average rating) and pagination load-more capability.
 */
const ReviewList = ({ refreshTrigger }) => {
    const [reviews, setReviews] = useState([]);
    const [meta, setMeta] = useState(null);
    const [stats, setStats] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [appendError, setAppendError] = useState(''); // Separate error for "Load More" to prevent wiping the list

    const fetchReviews = useCallback(async (pageNumber = 1, append = false) => {
        setLoading(true);
        if (append) setAppendError('');
        else setError('');

        try {
            const response = await fetch(`${API_URL}/reviews?page=${pageNumber}&limit=5`);

            if (!response.ok) throw new Error('Failed to load reviews');

            const data = await response.json();

            setReviews(prev => append ? [...prev, ...data.reviews] : data.reviews);
            setMeta(data.meta);
            setStats(data.aggregations);
        } catch (err) {
            if (append) {
                setAppendError('Failed to load more reviews. Please try again.');
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }, [/* intentionally no dependencies as we use functional state updates */]);

    // Fetch when component mounts or when a new review is submitted (refreshTrigger increments)
    useEffect(() => {
        setPage(1);
        fetchReviews(1, false);
    }, [refreshTrigger, fetchReviews]);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchReviews(nextPage, true);
    };

    /**
     * Pure helper to render the star rating visually.
     * Extracted to avoid inline complexity.
     */
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>★</span>
        ));
    };

    const renderHistogram = () => {
        if (!stats || !stats.histogram) return null;
        const maxVal = Math.max(...Object.values(stats.histogram));

        return (
            <div className="histogram">
                {[5, 4, 3, 2, 1].map(starValue => {
                    const count = stats.histogram[starValue] || 0;
                    const percentage = maxVal === 0 ? 0 : (count / maxVal) * 100;

                    return (
                        <div key={starValue} className="histogram-row">
                            <span className="histogram-label">{starValue} ★</span>
                            <div className="histogram-bar-container">
                                <div className="histogram-bar" style={{ width: `${percentage}%` }}></div>
                            </div>
                            <span className="histogram-count">{count}</span>
                        </div>
                    );
                })}
            </div>
        );
    };

    if (loading && reviews.length === 0) {
        return <div className="loading-text">Loading reviews...</div>;
    }

    if (error) {
        return <div className="error-text">Failed to retrieve reviews: {error}</div>;
    }

    return (
        <div className="reviews-section-container">

            {/* Left Column: Aggregation Header */}
            <div className="reviews-summary-panel">
                {stats && stats.totalReviews > 0 && (
                    <div className="reviews-header">
                        <div className="rating-summary">
                            <h1 className="rating-big-number">{(stats.averageRating || 0).toFixed(1)}</h1>
                            <div className="rating-stars-large">{renderStars(Math.round(stats.averageRating))}</div>
                            <p className="rating-count">Based on {stats.totalReviews} reviews</p>
                        </div>
                        <div className="rating-histogram-wrapper">
                            {renderHistogram()}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Column: Review List Panel */}
            <div className="reviews-list-panel">
                <div className="reviews-list-scroll-area">
                    <div className="reviews-list">
                        {reviews.length === 0 ? (
                            <p className="no-reviews-text">There are no reviews yet. Be the first to leave one.</p>
                        ) : (
                            reviews.map(review => (
                                <div key={review.id} className="review-card">
                                    <div className="review-card-header">
                                        <div>
                                            <h4 className="review-author">{review.displayName}</h4>
                                            <div className="review-stars">{renderStars(review.rating)}</div>
                                        </div>
                                        <div className="review-date">
                                            {new Date(review.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>

                                    {review.title && <h5 className="review-title">{review.title}</h5>}
                                    <p className="review-comment">{review.comment}</p>

                                    {review.reply && (
                                        <div className="review-reply">
                                            <h6 className="reply-author">Lauridsen Production Reply:</h6>
                                            <p className="reply-content">{review.reply.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pagination Load More */}
                    {meta && page < meta.totalPages && (
                        <div className="load-more-container">
                            {appendError && <p className="error-text-small" style={{ color: 'var(--accent-color)', margin: '0 0 1rem 0' }}>{appendError}</p>}
                            <button className="btn btn-outline" onClick={handleLoadMore} disabled={loading}>
                                {loading ? 'Loading...' : 'Load More Reviews'}
                            </button>
                        </div>
                    )}
                </div>
                {/* Scroll affordance gradient */}
                <div className="scroll-affordance-bottom"></div>
            </div>

        </div>
    );
};

export default ReviewList;

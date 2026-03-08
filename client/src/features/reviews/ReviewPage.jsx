import { useState, useEffect, useCallback, useActionState } from 'react';
import { API_URL } from '../../config';
import './ReviewPage.css';

const STATES = {
    LOADING: 'loading',
    VALID: 'valid',
    INVALID: 'invalid',
    EXPIRED: 'expired',
    USED: 'used',
    ALREADY_REVIEWED: 'already_reviewed',
    SUCCESS: 'success',
};

/**
 * ReviewPage
 * ==========
 * Rendered at hash route #review?token=<token>
 * Validates the token server-side, then shows the review form with React 19 Action handles.
 */
const ReviewPage = () => {
    const [pageState, setPageState] = useState(STATES.LOADING);
    const [tokenInfo, setTokenInfo] = useState(null); // { orderId, orderPublicId, customerName }
    const [token, setToken] = useState('');

    // Form controlled state for display elements (stars, character count)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [displayName, setDisplayName] = useState('');
    const [comment, setComment] = useState('');

    const validateToken = useCallback(async (t) => {
        try {
            const res = await fetch(`${API_URL}/review-token/${encodeURIComponent(t)}`);
            const data = await res.json();
            if (res.ok && data.valid) {
                setTokenInfo(data);
                setPageState(STATES.VALID);
            } else {
                const code = data.code;
                if (code === 'USED' || code === 'ALREADY_REVIEWED') setPageState(STATES.USED);
                else if (code === 'EXPIRED') setPageState(STATES.EXPIRED);
                else setPageState(STATES.INVALID);
            }
        } catch {
            setPageState(STATES.INVALID);
        }
    }, [setTokenInfo, setPageState]);

    // Extract token from hash URL: /#review?token=abc
    useEffect(() => {
        const tFromSearch = new URLSearchParams(window.location.search).get('token');
        const hashPart = window.location.hash;
        const qIndex = hashPart.indexOf('?');
        const tFromHash = qIndex >= 0 ? new URLSearchParams(hashPart.substring(qIndex)).get('token') : null;
        const t = tFromSearch || tFromHash;

        if (!t) {
            setTimeout(() => setPageState(STATES.INVALID), 0);
            return;
        }
        setTimeout(() => {
            setToken(t);
            validateToken(t);
        }, 0);
    }, [validateToken]);

    // submitReview remains unchanged

    const submitReview = async (previousState, formData) => {
        const payload = {
            token,
            rating: Number(formData.get('rating')),
            displayName: formData.get('displayName').trim(),
            comment: formData.get('comment').trim(),
        };

        const e = {};
        if (!payload.rating || isNaN(payload.rating)) e.rating = 'Please select a star rating.';
        if (!payload.displayName || payload.displayName.length < 1) e.displayName = 'Name is required.';
        if (payload.displayName.length > 80) e.displayName = 'Name must be under 80 characters.';
        if (!payload.comment || payload.comment.length < 30) e.comment = 'Review must be at least 30 characters.';
        if (payload.comment.length > 1000) e.comment = 'Review must be under 1000 characters.';

        if (Object.keys(e).length > 0) {
            return { errors: e, serverError: null };
        }

        try {
            const res = await fetch(`${API_URL}/review-submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (res.ok) {
                setPageState(STATES.SUCCESS);
                return { errors: {}, serverError: null };
            }

            const code = data.code;
            if (code === 'USED' || code === 'ALREADY_REVIEWED') {
                setPageState(STATES.USED);
                return { errors: {}, serverError: null };
            } else if (code === 'EXPIRED') {
                setPageState(STATES.EXPIRED);
                return { errors: {}, serverError: null };
            }

            return { errors: {}, serverError: data.error || 'Something went wrong. Please try again.' };
        } catch {
            return { errors: {}, serverError: 'Unable to connect. Please try again.' };
        }
    };

    const [formState, formAction, isPending] = useActionState(submitReview, { errors: {}, serverError: null });

    const errors = formState.errors || {};
    const serverError = formState.serverError;

    // ── Render states ──
    if (pageState === STATES.LOADING) {
        return (
            <div className="review-page">
                <div className="review-page__card">
                    <div className="review-page__loading">Validating your review link…</div>
                </div>
            </div>
        );
    }
    if (pageState === STATES.EXPIRED) {
        return (
            <div className="review-page">
                <div className="review-page__card review-page__card--error">
                    <div className="review-page__status-icon">⏱</div>
                    <h2>Link Expired</h2>
                    <p>This review link has expired. Review invitations are valid for 30 days.</p>
                    <p className="review-page__muted">If you believe this is an error, please reach out directly.</p>
                </div>
            </div>
        );
    }
    if (pageState === STATES.USED) {
        return (
            <div className="review-page">
                <div className="review-page__card review-page__card--info">
                    <div className="review-page__status-icon">✓</div>
                    <h2>Already Submitted</h2>
                    <p>This review link has already been used. Each link can only be used once.</p>
                    <p className="review-page__muted">Thank you for your feedback!</p>
                </div>
            </div>
        );
    }
    if (pageState === STATES.INVALID) {
        return (
            <div className="review-page">
                <div className="review-page__card review-page__card--error">
                    <div className="review-page__status-icon">✕</div>
                    <h2>Invalid Link</h2>
                    <p>This review link is invalid or does not exist.</p>
                    <p className="review-page__muted">Please use the link from your completed order email.</p>
                </div>
            </div>
        );
    }
    if (pageState === STATES.SUCCESS) {
        return (
            <div className="review-page">
                <div className="review-page__card review-page__card--success">
                    <div className="review-page__status-icon review-page__status-icon--success">★</div>
                    <h2>Thank You!</h2>
                    <p>Your review has been submitted and is <strong>pending approval</strong>. Once approved, it will appear on the site.</p>
                    <a href="/" className="btn btn-primary review-page__home-btn">Back to Site</a>
                </div>
            </div>
        );
    }

    // VALID — show the form
    return (
        <div className="review-page">
            <div className="review-page__card">
                <div className="review-page__brand">LAURIDSEN PRODUCTION</div>
                <h2>Leave a Review</h2>
                {tokenInfo && (
                    <p className="review-page__order-ref">Order: <strong>{tokenInfo.orderPublicId}</strong></p>
                )}
                <p className="review-page__muted">Your review will be moderated before appearing publicly. Your email will not be shown.</p>

                <form className="review-form" action={formAction} noValidate>
                    {/* Star Rating — hidden input allows standard form submission while using custom UI */}
                    <input type="hidden" name="rating" value={rating} />
                    <div className={`review-form__group ${errors.rating ? 'has-error' : ''}`}>
                        <label>Rating <span className="req">*</span></label>
                        <div className="review-star-selector" role="group" aria-label="Star rating">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`review-star ${star <= (hover || rating) ? 'active' : ''}`}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                                >★</button>
                            ))}
                        </div>
                        {errors.rating && <span className="review-form__error">{errors.rating}</span>}
                    </div>

                    {/* Display Name */}
                    <div className={`review-form__group ${errors.displayName ? 'has-error' : ''}`}>
                        <label htmlFor="review-name">Your Name <span className="req">*</span></label>
                        <input id="review-name" name="displayName" type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} maxLength={80} placeholder="Name shown on the review" />
                        {errors.displayName && <span className="review-form__error">{errors.displayName}</span>}
                    </div>

                    {/* Comment */}
                    <div className={`review-form__group ${errors.comment ? 'has-error' : ''}`}>
                        <label htmlFor="review-comment">Review <span className="req">*</span></label>
                        <textarea id="review-comment" name="comment" value={comment} onChange={e => setComment(e.target.value)} rows={5} maxLength={1000} placeholder="Share your experience (30–1000 characters)" />
                        <span className="review-form__char-count">{comment.length}/1000 {comment.length < 30 && comment.length > 0 && `(${30 - comment.length} more needed)`}</span>
                        {errors.comment && <span className="review-form__error">{errors.comment}</span>}
                    </div>

                    {serverError && <div className="review-form__server-error">{serverError}</div>}

                    <button type="submit" className="btn btn-primary review-form__submit" disabled={isPending}>
                        {isPending ? 'Submitting…' : 'Submit Review'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewPage;

import { useState, useEffect, useActionState } from 'react';
import { API_URL } from '../../config';
import './BookingModal.css';

const SERVICE_TYPES = ['Mixing', 'Mastering', 'Tracking', 'Complete'];

const INITIAL_FORM = {
    name: '',
    email: '',
    serviceType: '',
    genre: '',
    numSongs: '',
    songLength: '',
    numStems: '',
    message: '',
};

/**
 * BookingModal
 * ============
 * A full-screen modal containing the booking form, leveraging React 19 useActionState.
 */
const BookingModal = ({ isOpen, onClose }) => {
    // Keep local form state for character counts and immediate feedback
    const [form, setForm] = useState(INITIAL_FORM);

    const submitBooking = async (previousState, formData) => {
        const payload = {
            name: formData.get('name').trim(),
            email: formData.get('email').trim(),
            serviceType: formData.get('serviceType'),
            genre: formData.get('genre').trim() || undefined,
            message: formData.get('message').trim() || undefined,
            numSongs: formData.get('numSongs') ? parseInt(formData.get('numSongs'), 10) : undefined,
            songLength: formData.get('songLength').trim() || undefined,
            numStems: formData.get('numStems') ? parseInt(formData.get('numStems'), 10) : undefined,
        };

        // Client-side validations
        const e = {};
        if (!payload.name || payload.name.length < 2) e.name = 'Name must be at least 2 characters.';
        if (payload.name && payload.name.length > 80) e.name = 'Name must be under 80 characters.';
        if (!payload.email) e.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) e.email = 'Please enter a valid email address.';
        if (!payload.serviceType) e.serviceType = 'Please select a service type.';
        if (payload.genre && payload.genre.length > 60) e.genre = 'Genre must be under 60 characters.';
        if (payload.message && payload.message.length > 2000) e.message = 'Message must be under 2000 characters.';
        if (payload.numSongs !== undefined && (isNaN(payload.numSongs) || payload.numSongs < 1 || payload.numSongs > 999))
            e.numSongs = 'Number of songs must be between 1 and 999.';
        if (payload.numStems !== undefined && (isNaN(payload.numStems) || payload.numStems < 1 || payload.numStems > 9999))
            e.numStems = 'Number of stems must be between 1 and 9999.';

        if (Object.keys(e).length > 0) {
            return { errors: e, serverError: null, confirmation: null };
        }

        try {
            const res = await fetch(`${API_URL}/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (!res.ok) {
                if (data.details) {
                    const mappedErrors = Object.fromEntries(
                        Object.entries(data.details).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])
                    );
                    return { errors: mappedErrors, serverError: null, confirmation: null };
                }
                return { errors: {}, serverError: data.error || 'Something went wrong. Please try again.', confirmation: null };
            }

            return { errors: {}, serverError: null, confirmation: { publicId: data.publicId, serviceType: data.serviceType } };
        } catch {
            return { errors: {}, serverError: 'Unable to connect to the server. Please try again later.', confirmation: null };
        }
    };

    const [state, formAction, isPending] = useActionState(submitBooking, { errors: {}, serverError: null, confirmation: null });

    // Close on ESC key
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Reset on close
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setForm(INITIAL_FORM);
                // Can't easily reset useActionState state, but since it unmounts it's fine
            }, 300);
        }
    }, [isOpen]);

    // Derived errors from action state
    const errors = state?.errors || {};
    const serverError = state?.serverError;
    const confirmation = state?.confirmation;

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    if (!isOpen) return null;

    return (
        <div className="booking-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label="Booking request form">
            <div className="booking-modal">
                <button className="booking-modal__close" onClick={onClose} aria-label="Close booking form">✕</button>

                {confirmation ? (
                    <div className="booking-confirmation">
                        <div className="booking-confirmation__icon">✓</div>
                        <h2>Request Received</h2>
                        <p className="booking-confirmation__order-id">{confirmation.publicId}</p>
                        <p>Your <strong>{confirmation.serviceType}</strong> request is <strong>pending review</strong>. A confirmation has been sent to your email. I'll be in touch within 1–2 business days.</p>
                        <button className="btn btn-primary" onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className="booking-modal__header">
                            <h2>Book a Session</h2>
                            <p>Fill in the details below and I'll get back to you within 1–2 business days.</p>
                        </div>

                        <form className="booking-form" action={formAction} noValidate>
                            {/* Name + Email */}
                            <div className="booking-form__row">
                                <div className={`booking-form__group ${errors.name ? 'has-error' : ''}`}>
                                    <label htmlFor="book-name">Full Name <span className="req">*</span></label>
                                    <input id="book-name" name="name" type="text" value={form.name} onChange={e => handleChange('name', e.target.value)} autoComplete="name" maxLength={80} />
                                    {errors.name && <span className="booking-form__error">{errors.name}</span>}
                                </div>
                                <div className={`booking-form__group ${errors.email ? 'has-error' : ''}`}>
                                    <label htmlFor="book-email">Email Address <span className="req">*</span></label>
                                    <input id="book-email" name="email" type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} autoComplete="email" />
                                    {errors.email && <span className="booking-form__error">{errors.email}</span>}
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className={`booking-form__group ${errors.serviceType ? 'has-error' : ''}`}>
                                <label htmlFor="book-service">Service Type <span className="req">*</span></label>
                                <select id="book-service" name="serviceType" value={form.serviceType} onChange={e => handleChange('serviceType', e.target.value)}>
                                    <option value="">— Select a service —</option>
                                    {SERVICE_TYPES.map(s => <option key={s} value={s}>{s}{s === 'Complete' ? ' (Mixing + Mastering + Tracking)' : ''}</option>)}
                                </select>
                                {errors.serviceType && <span className="booking-form__error">{errors.serviceType}</span>}
                            </div>

                            {/* Genre */}
                            <div className={`booking-form__group ${errors.genre ? 'has-error' : ''}`}>
                                <label htmlFor="book-genre">Genre <span className="optional">(optional)</span></label>
                                <input id="book-genre" name="genre" type="text" value={form.genre} onChange={e => handleChange('genre', e.target.value)} placeholder="e.g. Death Metal, Black Metal, Doom..." maxLength={60} />
                                {errors.genre && <span className="booking-form__error">{errors.genre}</span>}
                            </div>

                            {/* Songs / Length / Stems */}
                            <div className="booking-form__row booking-form__row--thirds">
                                <div className={`booking-form__group ${errors.numSongs ? 'has-error' : ''}`}>
                                    <label htmlFor="book-songs">No. of Songs <span className="optional">(optional)</span></label>
                                    <input id="book-songs" name="numSongs" type="number" value={form.numSongs} onChange={e => handleChange('numSongs', e.target.value)} min={1} max={999} placeholder="e.g. 10" />
                                    {errors.numSongs && <span className="booking-form__error">{errors.numSongs}</span>}
                                </div>
                                <div className="booking-form__group">
                                    <label htmlFor="book-length">Avg. Song Length <span className="optional">(optional)</span></label>
                                    <input id="book-length" name="songLength" type="text" value={form.songLength} onChange={e => handleChange('songLength', e.target.value)} placeholder="e.g. 4:30 or 5 min" maxLength={20} />
                                </div>
                                <div className={`booking-form__group ${errors.numStems ? 'has-error' : ''}`}>
                                    <label htmlFor="book-stems">No. of Stems <span className="optional">(optional)</span></label>
                                    <input id="book-stems" name="numStems" type="number" value={form.numStems} onChange={e => handleChange('numStems', e.target.value)} min={1} max={9999} placeholder="e.g. 24" />
                                    {errors.numStems && <span className="booking-form__error">{errors.numStems}</span>}
                                </div>
                            </div>

                            {/* Message */}
                            <div className={`booking-form__group ${errors.message ? 'has-error' : ''}`}>
                                <label htmlFor="book-message">Additional Notes <span className="optional">(optional)</span></label>
                                <textarea id="book-message" name="message" value={form.message} onChange={e => handleChange('message', e.target.value)} rows={4} maxLength={2000} placeholder="Tell me about the project, references, timeline, or anything else that might be helpful." />
                                <span className="booking-form__char-count">{form.message.length}/2000</span>
                                {errors.message && <span className="booking-form__error">{errors.message}</span>}
                            </div>

                            {serverError && <div className="booking-form__server-error">{serverError}</div>}

                            <button type="submit" className="btn btn-primary booking-form__submit" disabled={isPending}>
                                {isPending ? 'Sending...' : 'Send Booking Request'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookingModal;

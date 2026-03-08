import React, { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../../../config';
import ConfirmModal from '../../../components/common/ConfirmModal';

const ReviewModerator = ({ showToast, csrfToken }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [replyText, setReplyText] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const [hardDeleteId, setHardDeleteId] = useState(null);

    const fetchAdminReviews = useCallback(async () => {
        try {
            setLoading(true);
            const url = statusFilter ? `${API_URL}/admin/reviews?status=${statusFilter}` : `${API_URL}/admin/reviews`;
            const res = await fetch(url, { credentials: 'include' });
            if (!res.ok) throw new Error('Failed to fetch reviews');
            const data = await res.json();
            setReviews(data.reviews || []);
        } catch (err) {
            showToast(err.message, 'error');
        } finally {
            setLoading(false);
        }
    }, [statusFilter, showToast]);

    useEffect(() => {
        fetchAdminReviews();
    }, [fetchAdminReviews]);

    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch(`${API_URL}/admin/reviews/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
                body: JSON.stringify({ status: newStatus }),
                credentials: 'include'
            });
            if (!res.ok) throw new Error(`Failed to mark as ${newStatus}`);
            showToast(`Review marked as ${newStatus}`, 'success');
            setReviews(reviews.map(r => r.id === id ? { ...r, status: newStatus } : r));
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleReplySubmit = async (id) => {
        try {
            const res = await fetch(`${API_URL}/admin/reviews/${id}/reply`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
                body: JSON.stringify({ content: replyText }),
                credentials: 'include'
            });
            if (!res.ok) throw new Error('Failed to post reply');
            const data = await res.json();
            setReviews(reviews.map(r => r.id === id ? { ...r, reply: data.reply } : r));
            setReplyingTo(null);
            setReplyText('');
            showToast('Reply saved', 'success');
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const handleHardDelete = async () => {
        if (!hardDeleteId) return;
        try {
            const res = await fetch(`${API_URL}/admin/reviews/${hardDeleteId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
                credentials: 'include'
            });
            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.error || 'Hard delete failed');
            }
            showToast('Review permanently deleted', 'success');
            setHardDeleteId(null);
            fetchAdminReviews();
        } catch (err) {
            showToast(err.message, 'error');
        }
    };

    const filteredReviews = reviews.filter(r => {
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            return r.displayName.toLowerCase().includes(q) || r.comment.toLowerCase().includes(q);
        }
        return true;
    });

    return (
        <div className="review-moderator">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>Review Moderation</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ padding: '0.5rem' }} />
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '0.5rem' }}>
                        <option value="">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="published">Published</option>
                        <option value="rejected">Rejected</option>
                        <option value="deleted">Soft Deleted</option>
                    </select>
                </div>
            </div>

            {loading ? <p>Loading reviews...</p> : (
                <div style={{ overflowX: 'auto', background: 'var(--bg-surface)', padding: '1rem', borderRadius: '4px' }}>
                    <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '0.5rem' }}>User</th>
                                <th style={{ padding: '0.5rem' }}>Rating</th>
                                <th style={{ padding: '0.5rem' }}>Comment</th>
                                <th style={{ padding: '0.5rem' }}>Status</th>
                                <th style={{ padding: '0.5rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReviews.map(r => (
                                <tr key={r.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '0.5rem' }}>
                                        <strong>{r.displayName}</strong><br />
                                        <small style={{ color: 'var(--text-muted)' }}>{r.email}</small>
                                    </td>
                                    <td style={{ padding: '0.5rem' }}>{r.rating}★</td>
                                    <td style={{ padding: '0.5rem', maxWidth: '300px' }}>
                                        {r.title && <strong>{r.title}<br /></strong>}
                                        {r.comment}
                                        {r.reply && <div style={{ marginTop: '0.5rem', paddingLeft: '0.5rem', borderLeft: '2px solid var(--accent-color)' }}>
                                            <small><strong>Reply:</strong> {r.reply.content}</small>
                                        </div>}
                                    </td>
                                    <td style={{ padding: '0.5rem' }}>
                                        <span style={{ padding: '0.2rem 0.5rem', background: '#333', borderRadius: '4px', fontSize: '0.8rem' }}>
                                            {r.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td style={{ padding: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {r.status !== 'published' && <button onClick={() => updateStatus(r.id, 'published')} style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}>Approve</button>}
                                            {r.status !== 'rejected' && <button onClick={() => updateStatus(r.id, 'rejected')} style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}>Reject</button>}
                                            {r.status !== 'deleted' && <button onClick={() => updateStatus(r.id, 'deleted')} style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}>Delete</button>}
                                            <button onClick={() => { setReplyingTo(r.id); setReplyText(r.reply?.content || ''); }} style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}>Reply</button>

                                            {r.status === 'deleted' && (
                                                <button onClick={() => setHardDeleteId(r.id)} style={{ padding: '0.2rem 0.5rem', cursor: 'pointer', background: 'var(--accent-color)', color: 'white', border: 'none' }}>
                                                    HARD DELETE
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {replyingTo && (
                <ConfirmModal
                    isOpen={true}
                    title="Public Reply"
                    message={<textarea style={{ width: '100%', minHeight: '100px', background: 'var(--bg-color)', color: 'white' }} value={replyText} onChange={e => setReplyText(e.target.value)} />}
                    confirmText="Save Reply"
                    onConfirm={() => handleReplySubmit(replyingTo)}
                    onCancel={() => setReplyingTo(null)}
                />
            )}

            {hardDeleteId && (
                <ConfirmModal
                    isOpen={true}
                    isDestructive={true}
                    title="Permanently Delete Review?"
                    message={
                        <p style={{ color: 'var(--accent-color)' }}>
                            <strong>WARNING:</strong> This permanently erases the review from the database and cannot be undone.
                        </p>
                    }
                    confirmText="Yes, Delete Permanently"
                    onConfirm={handleHardDelete}
                    onCancel={() => setHardDeleteId(null)}
                />
            )}
        </div>
    );
};

export default ReviewModerator;

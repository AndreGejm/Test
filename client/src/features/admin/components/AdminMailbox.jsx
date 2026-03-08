import { useState, useEffect } from 'react';
import { API_URL } from '../../../config';
import './AdminMailbox.css';

/**
 * AdminMailbox
 * ============
 * Dev-only email viewer — shows all emails stored in the DevEmail table
 * (populated when SMTP_HOST is not configured).
 * Allows viewing HTML content and deleting entries.
 */
const AdminMailbox = ({ csrfToken }) => {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [expanded, setExpanded] = useState(null); // email id

    const fetchEmails = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`${API_URL}/admin/mailbox`, { credentials: 'include' });
            if (!res.ok) throw new Error('Failed to load mailbox');
            setEmails(await res.json());
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchEmails(); }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`${API_URL}/admin/mailbox/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: { 'X-CSRF-Token': csrfToken },
            });
            setEmails(prev => prev.filter(e => e.id !== id));
            if (expanded === id) setExpanded(null);
        } catch {
            alert('Failed to delete email');
        }
    };

    const formatDate = (d) => new Date(d).toLocaleString('en-GB', {
        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    });

    return (
        <div className="admin-mailbox">
            <div className="admin-mailbox__header">
                <div>
                    <h2 className="admin-mailbox__title">Dev Email Mailbox</h2>
                    <p className="admin-mailbox__subtitle">
                        Emails are stored here because <code>SMTP_HOST</code> is not configured.
                        Configure SMTP in <code>server/.env</code> to send real emails.
                    </p>
                </div>
                <button className="mailbox-btn" onClick={fetchEmails} title="Refresh">↻ Refresh</button>
            </div>

            {error && <div className="mailbox-error">{error}</div>}

            {loading ? (
                <div className="mailbox-loading">Loading mailbox…</div>
            ) : emails.length === 0 ? (
                <div className="mailbox-empty">
                    <div className="mailbox-empty__icon">✉</div>
                    <p>No emails yet. Submit a booking or trigger a status change to see emails here.</p>
                </div>
            ) : (
                <div className="mailbox-list">
                    {emails.map(e => (
                        <div key={e.id} className={`mailbox-item ${expanded === e.id ? 'mailbox-item--expanded' : ''}`}>
                            <div className="mailbox-item__header" onClick={() => setExpanded(expanded === e.id ? null : e.id)}>
                                <div className="mailbox-item__meta">
                                    <span className="mailbox-item__to">{e.toAddress}</span>
                                    <span className="mailbox-item__date">{formatDate(e.sentAt)}</span>
                                </div>
                                <div className="mailbox-item__subject">{e.subject}</div>
                                <div className="mailbox-item__controls">
                                    <span className="mailbox-item__toggle">{expanded === e.id ? '▲' : '▼'}</span>
                                    <button
                                        className="mailbox-btn mailbox-btn--delete"
                                        onClick={(ev) => { ev.stopPropagation(); handleDelete(e.id); }}
                                        aria-label="Delete email"
                                    >✕</button>
                                </div>
                            </div>
                            {expanded === e.id && (
                                <div className="mailbox-item__body">
                                    {e.textBody && (
                                        <div className="mailbox-item__text">
                                            <div className="mailbox-item__body-label">Plain Text</div>
                                            <pre>{e.textBody}</pre>
                                        </div>
                                    )}
                                    <div className="mailbox-item__body-label">HTML Preview</div>
                                    <iframe
                                        className="mailbox-item__iframe"
                                        srcDoc={e.htmlBody}
                                        title={`Email: ${e.subject}`}
                                        sandbox="allow-same-origin"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminMailbox;

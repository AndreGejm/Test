import { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../../../config';
import './OrdersManager.css';

const STATUS_LABELS = {
    PENDING: 'Pending',
    ACCEPTED: 'Accepted',
    REJECTED: 'Rejected',
    IN_PROGRESS: 'In Progress',
    READY_FOR_REVIEW: 'Ready for Review',
    UPDATING: 'Updating',
    COMPLETED: 'Completed',
};

const STATUS_COLORS = {
    PENDING: '#f59e0b',
    ACCEPTED: '#3b82f6',
    REJECTED: '#ef4444',
    IN_PROGRESS: '#8b5cf6',
    READY_FOR_REVIEW: '#06b6d4',
    UPDATING: '#f97316',
    COMPLETED: '#22c55e',
};

const ALLOWED_TRANSITIONS = {
    PENDING: ['ACCEPTED', 'REJECTED'],
    ACCEPTED: ['IN_PROGRESS', 'REJECTED'],
    IN_PROGRESS: ['READY_FOR_REVIEW', 'UPDATING'],
    READY_FOR_REVIEW: ['UPDATING', 'COMPLETED'],
    UPDATING: ['READY_FOR_REVIEW', 'COMPLETED'],
    COMPLETED: [],
    REJECTED: [],
};

const ALL_STATUSES = Object.keys(STATUS_LABELS);

function StatusBadge({ status }) {
    return (
        <span className="orders-status-badge" style={{ '--badge-color': STATUS_COLORS[status] || '#888' }}>
            {STATUS_LABELS[status] || status}
        </span>
    );
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
}

// ── Orders List View ───────────────────────────────────────────────────────────

function OrdersList({ onSelectOrder }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [search, setSearch] = useState('');

    const fetchOrders = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const params = new URLSearchParams();
            if (filterStatus) params.set('status', filterStatus);
            if (search.trim()) params.set('search', search.trim());
            const res = await fetch(`${API_URL}/admin/orders?${params}`, { credentials: 'include' });
            if (!res.ok) throw new Error('Failed to load orders');
            setOrders(await res.json());
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, [filterStatus, search]);

    useEffect(() => { fetchOrders(); }, [fetchOrders]);

    return (
        <div className="orders-list">
            <div className="orders-list__toolbar">
                <input
                    className="orders-search"
                    type="text"
                    placeholder="Search by name, email, or Order ID…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <select className="orders-filter" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                    <option value="">All Statuses</option>
                    {ALL_STATUSES.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
                </select>
                <button className="orders-btn orders-btn--icon" onClick={fetchOrders} title="Refresh">↻</button>
            </div>

            {error && <div className="orders-error">{error}</div>}

            {loading ? (
                <div className="orders-loading">Loading orders…</div>
            ) : orders.length === 0 ? (
                <div className="orders-empty">No orders found.</div>
            ) : (
                <div className="orders-table-wrapper">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Service</th>
                                <th>Status</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} className="orders-table__row" onClick={() => onSelectOrder(order.id)} tabIndex={0} onKeyDown={e => e.key === 'Enter' && onSelectOrder(order.id)}>
                                    <td className="orders-table__id">{order.publicId}</td>
                                    <td>
                                        <div className="orders-table__name">{order.customerName}</div>
                                        <div className="orders-table__email">{order.customerEmail}</div>
                                    </td>
                                    <td>{order.serviceType}</td>
                                    <td><StatusBadge status={order.status} /></td>
                                    <td className="orders-table__date">{formatDate(order.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

// ── Order Detail View ──────────────────────────────────────────────────────────

function OrderDetail({ orderId, csrfToken, onBack }) {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Status change
    const [newStatus, setNewStatus] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusForce, setStatusForce] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);
    const [statusError, setStatusError] = useState('');
    const [statusWarning, setStatusWarning] = useState('');

    // Drive link
    const [driveLink, setDriveLink] = useState('');
    const [driveLinkLoading, setDriveLinkLoading] = useState(false);
    const [driveLinkError, setDriveLinkError] = useState('');
    const [driveLinkSuccess, setDriveLinkSuccess] = useState('');

    // Customer message
    const [msgText, setMsgText] = useState('');
    const [msgLoading, setMsgLoading] = useState(false);
    const [msgError, setMsgError] = useState('');
    const [msgSuccess, setMsgSuccess] = useState('');

    const fetchOrder = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`${API_URL}/admin/orders/${orderId}`, { credentials: 'include' });
            if (!res.ok) throw new Error('Order not found');
            const data = await res.json();
            setOrder(data);
            setDriveLink(data.driveLink || '');
            const allowed = ALLOWED_TRANSITIONS[data.status] || [];
            if (allowed.length > 0) setNewStatus(allowed[0]);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, [orderId]);

    useEffect(() => { fetchOrder(); }, [fetchOrder]);

    const handleStatusChange = async () => {
        if (!newStatus) return;
        setStatusLoading(true);
        setStatusError('');
        setStatusWarning('');
        try {
            const res = await fetch(`${API_URL}/admin/orders/${orderId}/status`, {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
                body: JSON.stringify({ status: newStatus, message: statusMessage || undefined, force: statusForce }),
            });
            const data = await res.json();
            if (!res.ok) { setStatusError(data.error || 'Failed to update status'); return; }
            if (data.warning) setStatusWarning(data.warning);
            setStatusMessage('');
            setStatusForce(false);
            await fetchOrder();
        } catch { setStatusError('Request failed'); }
        finally { setStatusLoading(false); }
    };

    const handleDriveLinkSave = async () => {
        setDriveLinkLoading(true);
        setDriveLinkError('');
        setDriveLinkSuccess('');
        try {
            const res = await fetch(`${API_URL}/admin/orders/${orderId}/drive-link`, {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
                body: JSON.stringify({ driveLink }),
            });
            const data = await res.json();
            if (!res.ok) { setDriveLinkError(data.error || 'Failed to save Drive link'); return; }
            if (data.warning) setDriveLinkError(data.warning);
            else setDriveLinkSuccess('Drive link saved and email sent to customer.');
            await fetchOrder();
        } catch { setDriveLinkError('Request failed'); }
        finally { setDriveLinkLoading(false); }
    };

    const handleSendMessage = async () => {
        if (!msgText.trim()) return;
        setMsgLoading(true);
        setMsgError('');
        setMsgSuccess('');
        try {
            const res = await fetch(`${API_URL}/admin/orders/${orderId}/message`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
                body: JSON.stringify({ message: msgText }),
            });
            const data = await res.json();
            if (!res.ok) { setMsgError(data.error || 'Failed to send'); return; }
            if (data.warning) setMsgError(data.warning);
            else setMsgSuccess('Message sent to customer.');
            setMsgText('');
            await fetchOrder();
        } catch { setMsgError('Request failed'); }
        finally { setMsgLoading(false); }
    };

    if (loading) return <div className="orders-loading">Loading order…</div>;
    if (error) return <div className="orders-error">{error} <button className="orders-btn" onClick={onBack}>← Back</button></div>;
    if (!order) return null;

    const allowed = ALLOWED_TRANSITIONS[order.status] || [];

    return (
        <div className="order-detail">
            <div className="order-detail__nav">
                <button className="orders-btn" onClick={onBack}>← All Orders</button>
                <span className="order-detail__public-id">{order.publicId}</span>
                <StatusBadge status={order.status} />
            </div>

            {/* Customer Info */}
            <section className="order-detail__section">
                <h3>Customer</h3>
                <div className="order-detail__grid">
                    <Field label="Name" value={order.customerName} />
                    <Field label="Email" value={order.customerEmail} />
                </div>
            </section>

            {/* Booking Details */}
            <section className="order-detail__section">
                <h3>Booking Details</h3>
                <div className="order-detail__grid">
                    <Field label="Service" value={order.serviceType} />
                    {order.genre && <Field label="Genre" value={order.genre} />}
                    {order.numSongs != null && <Field label="Songs" value={order.numSongs} />}
                    {order.songLength && <Field label="Length" value={order.songLength} />}
                    {order.numStems != null && <Field label="Stems" value={order.numStems} />}
                    <Field label="Created" value={formatDate(order.createdAt)} />
                </div>
                {order.message && (
                    <div className="order-detail__message-box">
                        <label>Customer Notes</label>
                        <div>{order.message}</div>
                    </div>
                )}
            </section>

            {/* Status History */}
            <section className="order-detail__section">
                <h3>Status History</h3>
                <div className="order-detail__history">
                    {order.statusHistory.map((h) => (
                        <div key={h.id} className="history-entry">
                            <div className="history-entry__line" />
                            <div className="history-entry__content">
                                <div className="history-entry__transition">
                                    {h.fromStatus ? <><span>{STATUS_LABELS[h.fromStatus] || h.fromStatus}</span> → </> : null}
                                    <strong><StatusBadge status={h.toStatus} /></strong>
                                </div>
                                <div className="history-entry__meta">{formatDate(h.createdAt)} · {h.changedBy}</div>
                                {h.message && <div className="history-entry__note">{h.message}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Review Token Status */}
            {order.reviewToken && (
                <section className="order-detail__section">
                    <h3>Review Token</h3>
                    <div className="order-detail__token-info">
                        {order.reviewToken.usedAt
                            ? <span className="token-used">✓ Used — review submitted {formatDate(order.reviewToken.usedAt)}</span>
                            : <>
                                <span className="token-active">⏳ Active — expires {formatDate(order.reviewToken.expiresAt)}</span>
                                {order.review && <span> · Review status: <strong>{order.review.status}</strong></span>}
                            </>
                        }
                    </div>
                </section>
            )}

            {/* Change Status */}
            {allowed.length > 0 && (
                <section className="order-detail__section order-detail__action-section">
                    <h3>Change Status</h3>
                    {statusError && <div className="orders-error">{statusError}</div>}
                    {statusWarning && <div className="orders-warning">⚠ {statusWarning}</div>}
                    <div className="order-detail__action-row">
                        <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                            {allowed.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
                        </select>
                        <button className="orders-btn orders-btn--primary" onClick={handleStatusChange} disabled={statusLoading}>
                            {statusLoading ? 'Saving…' : 'Update Status'}
                        </button>
                    </div>
                    <textarea
                        className="order-detail__msg-input"
                        placeholder="Optional note to customer (included in status email)"
                        value={statusMessage}
                        onChange={e => setStatusMessage(e.target.value)}
                        rows={2}
                        maxLength={2000}
                    />
                    <label className="order-detail__force-label">
                        <input type="checkbox" checked={statusForce} onChange={e => setStatusForce(e.target.checked)} />
                        Force override (skip transition validation)
                    </label>
                </section>
            )}

            {/* Drive Link */}
            <section className="order-detail__section order-detail__action-section">
                <h3>Google Drive Folder</h3>
                {driveLinkError && <div className="orders-error">{driveLinkError}</div>}
                {driveLinkSuccess && <div className="orders-success">{driveLinkSuccess}</div>}
                <div className="order-detail__action-row">
                    <input
                        type="url"
                        placeholder="https://drive.google.com/drive/folders/..."
                        value={driveLink}
                        onChange={e => setDriveLink(e.target.value)}
                    />
                    <button className="orders-btn orders-btn--primary" onClick={handleDriveLinkSave} disabled={driveLinkLoading}>
                        {driveLinkLoading ? 'Saving…' : 'Save & Email Customer'}
                    </button>
                </div>
                {order.driveLink && (
                    <div className="order-detail__drive-link">
                        <a href={order.driveLink} target="_blank" rel="noopener noreferrer">🔗 Open current Drive folder</a>
                    </div>
                )}
            </section>

            {/* Send Customer Message */}
            <section className="order-detail__section order-detail__action-section">
                <h3>Send Customer Message</h3>
                {msgError && <div className="orders-error">{msgError}</div>}
                {msgSuccess && <div className="orders-success">{msgSuccess}</div>}
                <textarea
                    className="order-detail__msg-input"
                    placeholder="Type a message to the customer…"
                    value={msgText}
                    onChange={e => setMsgText(e.target.value)}
                    rows={3}
                    maxLength={2000}
                />
                <button className="orders-btn orders-btn--primary" onClick={handleSendMessage} disabled={msgLoading || !msgText.trim()}>
                    {msgLoading ? 'Sending…' : 'Send Message'}
                </button>
            </section>
        </div>
    );
}

function Field({ label, value }) {
    return (
        <div className="order-field">
            <span className="order-field__label">{label}</span>
            <span className="order-field__value">{value}</span>
        </div>
    );
}

// ── OrdersManager — top-level component ───────────────────────────────────────

const OrdersManager = ({ csrfToken }) => {
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    return (
        <div className="orders-manager">
            {selectedOrderId ? (
                <OrderDetail
                    orderId={selectedOrderId}
                    csrfToken={csrfToken}
                    onBack={() => setSelectedOrderId(null)}
                />
            ) : (
                <OrdersList
                    onSelectOrder={setSelectedOrderId}
                />
            )}
        </div>
    );
};

export default OrdersManager;

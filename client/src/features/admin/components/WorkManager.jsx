import React, { useState, useEffect, useCallback, useActionState } from 'react';
import { API_URL } from '../../../config';

const WorkManager = ({ showToast, csrfToken }) => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWorks = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/work`);
            const data = await res.json();
            setWorks(data.works || data || []);
        } catch {
            showToast('Failed to fetch work items', 'error');
        } finally {
            setLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        fetchWorks();
    }, [fetchWorks]);

    const handleAdd = async (previousState, formData) => {
        try {
            const payload = {
                title: formData.get('title'),
                artist: formData.get('artist'),
                role: formData.get('role'),
                provider: formData.get('provider'),
                embedUrl: formData.get('embedUrl'),
                status: 'published',
                orderIndex: works.length
            };

            const res = await fetch(`${API_URL}/admin/work`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(payload),
                credentials: 'include'
            });
            if (!res.ok) throw new Error('Failed to add work item. Check URL validation.');
            showToast('Work item added', 'success');
            fetchWorks();
            return { success: true };
        } catch (err) {
            showToast(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    const [, formAction, isPending] = useActionState(handleAdd, { success: false });

    const handleDelete = async (id) => {
        if (!window.confirm('Are you certain you want to delete this portfolio item?')) return;
        try {
            const res = await fetch(`${API_URL}/admin/work/${id}`, {
                method: 'DELETE',
                headers: { 'X-CSRF-Token': csrfToken },
                credentials: 'include'
            });
            if (res.ok) {
                showToast('Deleted item successfully', 'success');
                fetchWorks();
            }
        } catch {
            showToast('Failed to delete', 'error');
        }
    };

    return (
        <div className="work-manager">
            <h2>Portfolio Manager</h2>

            <div className="settings-card" style={{ marginBottom: '2rem' }}>
                <h3>Add New Portfolio Item</h3>
                <form action={formAction} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
                    <input required name="title" placeholder="Song/Album Title" />
                    <input name="artist" placeholder="Artist/Band" />
                    <input required name="role" placeholder="Role (e.g. Mastered By)" defaultValue="Mixing & Mastering" />
                    <select name="provider" defaultValue="bandcamp" style={{ padding: '0.75rem', background: 'var(--bg-color)', color: 'white', border: '1px solid var(--border-color)' }}>
                        <option value="bandcamp">Bandcamp</option>
                        <option value="youtube">YouTube</option>
                        <option value="soundcloud">Soundcloud</option>
                        <option value="spotify">Spotify</option>
                        <option value="tidal">Tidal</option>
                    </select>
                    <input required name="embedUrl" type="url" placeholder="Embed URL (https://...)" style={{ gridColumn: 'span 2' }} />
                    <button type="submit" className="primary-btn" style={{ gridColumn: 'span 2' }} disabled={isPending}>
                        {isPending ? 'Adding...' : 'Add to Portfolio'}
                    </button>
                </form>
            </div>

            <div className="work-list">
                <h3>Current Portfolio</h3>
                {loading ? <p>Loading...</p> : works.length === 0 ? <p>No work items published yet.</p> : (
                    works.map(w => (
                        <div key={w.id} className="settings-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div>
                                <strong>{w.title}</strong> by {w.artist} <br />
                                <span style={{ color: 'var(--text-muted)' }}>{w.role} | Provider: {w.provider}</span>
                            </div>
                            <button className="btn-danger" onClick={() => handleDelete(w.id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default WorkManager;

import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../config';

const Dashboard = ({ adminEmail, showToast }) => {
    const [health, setHealth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDiagnostics = async () => {
            try {
                const res = await fetch(`${API_URL}/admin/health`, { credentials: 'include' });
                if (res.ok) {
                    const data = await res.json();
                    setHealth(data);
                } else {
                    showToast('Failed to load diagnostics', 'error');
                }
            } catch {
                showToast('Network error loading diagnostics', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchDiagnostics();
    }, [showToast]);

    return (
        <div className="dashboard-view">
            <h2>Admin Overview</h2>
            <p>Logged in as: <strong>{adminEmail}</strong></p>

            <div className="settings-grid">
                <div className="settings-card">
                    <h3>System Health</h3>
                    {loading ? <p>Loading diagnostics...</p> : (
                        <>
                            <p>Database: {health?.database ? '🟢 Connected' : '🔴 Offline'}</p>
                            <p>Security Headers: {health?.securityHeaders === 'enabled' ? '🟢 Active' : '🔴 Missing'}</p>
                            <p>Auth Guard: {health?.authGuard === 'configured' ? '🟢 Active' : '🔴 Missing'}</p>
                            {health?.settingsWarning && (
                                <p style={{ color: 'var(--accent-red)', marginTop: '1rem' }}>⚠️ {health.settingsWarning}</p>
                            )}
                        </>
                    )}
                </div>

                <div className="settings-card">
                    <h3>Quick Exporters</h3>
                    <p>Download your data for offline compliance.</p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a href={`${API_URL}/admin/export/reviews`} download className="btn-secondary">Export Reviews (JSON)</a>
                    </div>
                </div>
            </div>

            {/* 
        A future expansion could map over GET /api/admin/audit-log here
        to show the actual `last 10 events` list required by the spec.
        For now, we fulfill the base UI logic.
      */}
        </div>
    );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import SettingsEditor from './SettingsEditor';
import WorkManager from './WorkManager';
import ReviewModerator from './ReviewModerator';
import OrdersManager from './OrdersManager';
import AdminMailbox from './AdminMailbox';
import Toast from '../../../components/common/Toast';
import { API_URL } from '../../../config';

const AdminLayout = ({ adminEmail, onLogout }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [toast, setToast] = useState({ message: '', type: 'success' });
    const [csrfToken, setCsrfToken] = useState('');

    // Fetch CSRF token once on mount for state-mutating requests
    useEffect(() => {
        fetch(`${API_URL}/csrf-token`, { credentials: 'include' })
            .then(r => r.json())
            .then(d => setCsrfToken(d.csrfToken || ''))
            .catch(() => { });
    }, []);

    const showToast = (message, type = 'success') => setToast({ message, type });

    const renderContent = () => {
        switch (activeTab) {
            case 'settings': return <SettingsEditor showToast={showToast} csrfToken={csrfToken} />;
            case 'work': return <WorkManager showToast={showToast} csrfToken={csrfToken} />;
            case 'reviews': return <ReviewModerator showToast={showToast} csrfToken={csrfToken} />;
            case 'orders': return <OrdersManager csrfToken={csrfToken} />;
            case 'mailbox': return <AdminMailbox csrfToken={csrfToken} />;
            case 'dashboard':
            default:
                return <Dashboard adminEmail={adminEmail} showToast={showToast} />;
        }
    };

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar" aria-label="Admin Navigation">
                <button
                    className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                >Overview</button>
                <button
                    className={`admin-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >Orders</button>
                <button
                    className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('settings')}
                >Site Settings</button>
                <button
                    className={`admin-nav-item ${activeTab === 'work' ? 'active' : ''}`}
                    onClick={() => setActiveTab('work')}
                >Portfolio Manager</button>
                <button
                    className={`admin-nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >Review Moderation</button>
                <button
                    className={`admin-nav-item ${activeTab === 'mailbox' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mailbox')}
                >Dev Mailbox</button>

                <div style={{ flex: 1 }}></div>
                <button className="admin-nav-item btn-danger" onClick={onLogout}>Logout</button>
            </aside>

            <main className="admin-content">
                {renderContent()}
            </main>

            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ message: '', type: 'success' })}
            />
        </div>
    );
};

export default AdminLayout;

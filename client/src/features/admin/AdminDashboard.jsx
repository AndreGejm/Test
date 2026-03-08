import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { API_URL } from '../../config';
import AdminLayout from './components/AdminLayout';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [adminUser, setAdminUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLoginSuccess = async (credentialResponse) => {
        try {
            setLoading(true);
            setError('');
            const res = await fetch(`${API_URL}/admin/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential: credentialResponse.credential }),
                credentials: 'include'
            });

            if (!res.ok) {
                throw new Error('Unauthorized or not an Admin');
            }

            const data = await res.json();
            setAdminUser(data.admin);
        } catch (err) {
            setError(err.message);
            googleLogout();
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch(`${API_URL}/admin/logout`, { method: 'POST', credentials: 'include' });
            setAdminUser(null);
            googleLogout();
        } catch (err) {
            console.error(err);
        }
    };

    if (!adminUser) {
        return (
            <div className="admin-login-container" style={{ textAlign: 'center', padding: '10rem 0' }}>
                <h2>RESTRICTED ACCESS</h2>
                <p>Sign in with your authorized Google Account to manage the console.</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => setError('Google Login Failed')}
                        useOneTap
                    />
                </div>
                {loading && <p>Authenticating...</p>}
                {error && <p className="admin-error" style={{ color: 'var(--accent-color)', marginTop: '1rem' }}>{error}</p>}
            </div>
        );
    }

    return <AdminLayout adminEmail={adminUser.email} onLogout={handleLogout} />;
};

export default AdminDashboard;

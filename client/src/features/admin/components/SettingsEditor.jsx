import React, { useState, useEffect, useActionState } from 'react';
import { API_URL } from '../../../config';
import ConfirmModal from '../../../components/common/ConfirmModal';

const SettingsEditor = ({ showToast, csrfToken }) => {
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch public settings
        fetch(`${API_URL}/settings`).then(r => r.json()).catch(() => ({}))
            .then((settingsData) => {
                // Inject defaults if empty
                setSettings({
                    heroHeadline: settingsData.heroHeadline || 'SONIC OBLITERATION',
                    heroSubtext: settingsData.heroSubtext || 'Unrelenting audio engineering.',
                    primaryCtaLabel: settingsData.primaryCtaLabel || 'BOOK YOUR SESSION',
                    primaryCtaTarget: settingsData.primaryCtaTarget || '#contact',
                    secondaryCtaLabel: settingsData.secondaryCtaLabel || 'HEAR THE DAMAGE',
                    secondaryCtaTarget: settingsData.secondaryCtaTarget || '#work',
                    contactEmail: settingsData.contactEmail || 'lauridsen@example.com',
                    bookingEnabled: settingsData.bookingEnabled ?? true,
                    calendlyUrl: settingsData.calendlyUrl || '',
                    fallbackEmailText: settingsData.fallbackEmailText || 'Booking is currently paused, please email directly.',
                    ...settingsData
                });
                setLoading(false);
            });
    }, []);

    const handleSave = async () => {
        try {
            // Build payload from current controlled settings state
            // since keeping it controlled is easiest for dynamic toggles
            const res = await fetch(`${API_URL}/admin/settings`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                },
                body: JSON.stringify(settings),
                credentials: 'include'
            });

            if (!res.ok) {
                const errorData = await res.json();
                showToast(errorData.error || 'Failed to save settings', 'error');
                return { success: false, error: errorData.error };
            }

            showToast('Settings successfully updated', 'success');
            return { success: true, error: null };
        } catch (err) {
            showToast(err.message, 'error');
            return { success: false, error: err.message };
        }
    };

    const [, formAction, isPending] = useActionState(handleSave, { success: false, error: null });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    if (loading) return <p>Loading settings...</p>;

    return (
        <form className="settings-view" action={formAction}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Site Settings</h2>
                <button type="submit" className="primary-btn" disabled={isPending}>
                    {isPending ? 'Saving...' : 'Save All Changes'}
                </button>
            </div>

            <div className="settings-grid">
                <div className="settings-card">
                    <h3>Hero & Branding</h3>
                    <label>Headline</label>
                    <input name="heroHeadline" value={settings.heroHeadline || ''} onChange={handleChange} maxLength={100} />
                    <label>Subtext</label>
                    <textarea name="heroSubtext" value={settings.heroSubtext || ''} onChange={handleChange} maxLength={300} rows={3} />
                </div>

                <div className="settings-card">
                    <h3>Call-To-Actions (CTAs)</h3>
                    <label>Primary Button Label</label>
                    <input name="primaryCtaLabel" value={settings.primaryCtaLabel || ''} onChange={handleChange} maxLength={30} />
                    <label>Primary Button Target (Anchor)</label>
                    <input name="primaryCtaTarget" value={settings.primaryCtaTarget || ''} onChange={handleChange} maxLength={50} />
                    <label>Secondary Button Label</label>
                    <input name="secondaryCtaLabel" value={settings.secondaryCtaLabel || ''} onChange={handleChange} maxLength={30} />
                </div>

                <div className="settings-card">
                    <h3>Booking Configuration</h3>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <input type="checkbox" name="bookingEnabled" checked={settings.bookingEnabled} onChange={handleChange} style={{ width: 'auto' }} />
                        Calendar Booking Enabled
                    </label>
                    {settings.bookingEnabled ? (
                        <>
                            <label>Calendly Widget URL</label>
                            <input name="calendlyUrl" value={settings.calendlyUrl || ''} onChange={handleChange} placeholder="https://calendly.com/your-name" />
                        </>
                    ) : (
                        <>
                            <label>Fallback Text (Disabled State)</label>
                            <input name="fallbackEmailText" value={settings.fallbackEmailText || ''} onChange={handleChange} maxLength={100} />
                        </>
                    )}
                </div>

                <div className="settings-card">
                    <h3>Contact & Social</h3>
                    <label>Public Contact Email</label>
                    <input type="email" name="contactEmail" value={settings.contactEmail || ''} onChange={handleChange} />
                    <label>Instagram URL</label>
                    <input type="url" name="socialInstagram" value={settings.socialInstagram || ''} onChange={handleChange} placeholder="https://www.instagram.com/..." />
                    <label>YouTube URL</label>
                    <input type="url" name="socialYouTube" value={settings.socialYouTube || ''} onChange={handleChange} placeholder="https://www.youtube.com/@..." />
                    <label>Bandcamp URL</label>
                    <input type="url" name="socialBandcamp" value={settings.socialBandcamp || ''} onChange={handleChange} placeholder="https://bandcamp.com/..." />
                    <label>Facebook URL</label>
                    <input type="url" name="socialFacebook" value={settings.socialFacebook || ''} onChange={handleChange} placeholder="https://www.facebook.com/..." />
                    <label>SoundCloud URL</label>
                    <input type="url" name="socialSoundCloud" value={settings.socialSoundCloud || ''} onChange={handleChange} placeholder="https://soundcloud.com/..." />
                    <label>Fiverr URL</label>
                    <input type="url" name="socialFiverr" value={settings.socialFiverr || ''} onChange={handleChange} placeholder="https://www.fiverr.com/..." />
                </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                <button type="submit" className="primary-btn" disabled={isPending}>
                    {isPending ? 'Saving...' : 'Save All Changes'}
                </button>
            </div>
        </form>
    );
};

export default SettingsEditor;

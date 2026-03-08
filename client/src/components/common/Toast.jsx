import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div className={`toast toast-${type}`} role="alert" aria-live="assertive">
            {message}
            <button className="toast-close" onClick={onClose} aria-label="Close Notification">&times;</button>
        </div>
    );
};

export default Toast;

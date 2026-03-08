import React, { useRef, useEffect } from 'react';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Confirm', isDestructive = false }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <dialog ref={dialogRef} className="confirm-modal" onCancel={onCancel}>
            <div className="modal-content">
                <h3>{title}</h3>
                <p>{message}</p>
                <div className="modal-actions">
                    <button className="btn-secondary" onClick={onCancel}>Cancel</button>
                    <button className={isDestructive ? 'btn-danger' : 'btn-primary'} onClick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ConfirmModal;

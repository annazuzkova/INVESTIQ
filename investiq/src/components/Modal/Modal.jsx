import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ children, visible, onClose }) {
    if (!visible) return null;
    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

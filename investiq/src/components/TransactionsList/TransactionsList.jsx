import React from 'react';
import styles from './TransactionsList.module.css';

export default function TransactionsList({ items = [] }) {
    return (
        <ul className={styles.list}>
            {items.map(t => (
                <li key={t.id} className={styles.item}>
                    <span>{t.text}</span>
                    <span>{t.amount} ₴</span>
                </li>
            ))}
        </ul>
    );
}

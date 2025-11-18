import React from 'react';
import styles from './Balance.module.css';

export default function Balance({ amount = 0 }) {
    return (
        <section className={styles.balance}>
            <div className={styles.label}>Баланс</div>
            <div className={styles.value}>{amount} ₴</div>
        </section>
    );
}

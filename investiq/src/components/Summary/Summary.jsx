import React from 'react';
import styles from './Summary.module.css';

export default function Summary({ income = 0, expense = 0 }) {
    return (
        <section className={styles.summary}>
            <div>Доходи: {income} ₴</div>
            <div>Витрати: {expense} ₴</div>
        </section>
    );
}

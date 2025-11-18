import React, { useState } from 'react';
import styles from './TransactionForm.module.css';

export default function TransactionForm({ onAdd }) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!text || !amount) return;
        onAdd && onAdd({ id: Date.now(), text, amount: Number(amount) });
        setText('');
        setAmount('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Назва" />
            <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Сума" type="number" />
            <button type="submit">Додати</button>
        </form>
    );
}

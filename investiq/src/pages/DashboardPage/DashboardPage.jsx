import React from 'react';
import Balance from '../../components/Balance/Balance';
import Summary from '../../components/Summary/Summary';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
    const sample = [{ id: 1, text: 'Salary', amount: 5000 }, { id: 2, text: 'Coffee', amount: -50 }];
    return (
        <section className={styles.page}>
            <Balance amount={4950} />
            <Summary income={5000} expense={50} />
            <TransactionForm onAdd={(t) => console.log('add', t)} />
            <TransactionsList items={sample} />
        </section>
    );
}
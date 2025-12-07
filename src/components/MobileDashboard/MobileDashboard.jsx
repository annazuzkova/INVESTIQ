import React, { useState, useEffect } from "react";
import styles from "./MobileDashboard.module.css";
import { useNavigate } from "react-router-dom";
import MobileFinanceList from "../MobileFinanceList/MobileFinanceList";

export default function MobileDashboard() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  // Завантажуємо усі транзакції
  const loadTransactions = () => {
    const income = JSON.parse(localStorage.getItem("income")) || [];
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setTransactions([...income, ...expenses]);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  // Видалення
  const handleDelete = (id, type) => {
    const current = JSON.parse(localStorage.getItem(type)) || [];
    const updated = current.filter((t) => t.id !== id);
    localStorage.setItem(type, JSON.stringify(updated));
    loadTransactions(); // Оновлюємо список
  };

  return (
    <div>
      <h2>Мобільна таблиця</h2>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => navigate("/dashboardpage/add-transaction/expenses")}
        >
          Витрати
        </button>
        <button
          className={styles.button}
          onClick={() => navigate("/dashboardpage/add-transaction/income")}
        >
          Доходи
        </button>
      </div>

      <MobileFinanceList items={transactions} onDelete={handleDelete} />
    </div>
  );
}

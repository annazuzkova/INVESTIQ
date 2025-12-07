import TrashIcon from "../TransactionsList/TrashIcon";
import React, { useEffect, useState } from "react";
import styles from "./MobileFinanceList.module.css";

export default function MobileFinanceList() {
  const [transactions, setTransactions] = useState([]);

  // Зчитуємо всі транзакції
  const loadTransactions = () => {
    const income = JSON.parse(localStorage.getItem("income")) || [];
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setTransactions([...income, ...expenses]);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  // Видалення транзакції
  const handleDelete = (id) => {
    // Перевіряємо в income
    let income = JSON.parse(localStorage.getItem("income")) || [];
    if (income.find((t) => t.id === id)) {
      income = income.filter((t) => t.id !== id);
      localStorage.setItem("income", JSON.stringify(income));
      loadTransactions();
      return;
    }

    // Перевіряємо в expenses
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    if (expenses.find((t) => t.id === id)) {
      expenses = expenses.filter((t) => t.id !== id);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      loadTransactions();
      return;
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody>
          {transactions.map((item) => {
            const isExpense = (
              JSON.parse(localStorage.getItem("expenses")) || []
            ).some((t) => t.id === item.id);
            return (
              <tr key={item.id}>
                <td className={styles.datawrapper}>
                  <div className={styles.namewrapper}>{item.text}</div>{" "}
                  {item.date}
                </td>
                <td>{item.category}</td>
                <td className={styles.amount}>
                  {isExpense ? "-" : ""}
                  {item.amount} грн.
                </td>
                <td>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

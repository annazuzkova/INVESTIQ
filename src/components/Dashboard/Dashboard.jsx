import React, { useEffect, useState } from "react";
import Balance from "../Balance/Balance";
// import Summary from "../Summary/Summary";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionsList from "../TransactionsList/TransactionsList";
import styles from "./Dashboard.module.css";
import ZvedennyaTable from "../ZvedennyaTable/ZvedennyaTable";

export default function Dashboard() {
  const [page, setPage] = useState("");
  const [financeCategory, setFinanceCategory] = useState([]);

  // при зміні сторінки — підтягуємо дані з localStorage
  useEffect(() => {
    if (!page) return;

    const data = JSON.parse(localStorage.getItem(page)) || [];
    setFinanceCategory(data);
  }, [page]);

  const add = (t) => {
    if (!page) {
      alert("Спочатку обери: доходи або витрати");
      return;
    }

    const current = JSON.parse(localStorage.getItem(page)) || [];
    const updated = [...current, t];

    localStorage.setItem(page, JSON.stringify(updated));
    setFinanceCategory(updated);
  };

  const remove = (id) => {
    if (!page) return;

    const current = JSON.parse(localStorage.getItem(page)) || [];
    const updated = current.filter((t) => t.id !== id);

    localStorage.setItem(page, JSON.stringify(updated));
    setFinanceCategory(updated);
  };

  return (
    <section className={styles.page}>
      <Balance />

      <div className={styles.table}>
        <div className={styles.buttons}>
          <button
            onClick={() => setPage("expenses")}
            className={page === "expenses" ? styles.active : ""}
          >
            витрати
          </button>

          <button
            onClick={() => setPage("income")}
            className={page === "income" ? styles.active : ""}
          >
            доходи
          </button>
        </div>{" "}
        <TransactionForm onAdd={add} />
        <div className={styles.container}>
          {" "}
          <TransactionsList items={financeCategory} onDelete={remove} />
          <ZvedennyaTable />
        </div>
      </div>
    </section>
  );
}

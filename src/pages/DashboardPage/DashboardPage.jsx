import React, { useEffect, useState } from "react";
import Balance from "../../components/Balance/Balance";
import Summary from "../../components/Summary/Summary";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import styles from "./DashboardPage.module.css";
import incomeArray from "../../income.json";
import expensesArray from "../../expenses.json";

export default function DashboardPage() {
  const [page, setPage] = useState();
  const [financeCategory, setАinanceCategory] = useState();
  //   const [object, setObject] = useState();
  //   const sample = [
  //     { id: 1, text: "Salary", amount: 5000 },
  //     { id: 2, text: "Coffee", amount: -50 },
  //   ];

  useEffect(() => {
    console.log("name змінено:", page);
    if (page === "expenses") {
      setАinanceCategory(expensesArray);
    }
    if (page === "income") {
      setАinanceCategory(incomeArray);
    }
  }, [page]);

  const add = (t) => {
    console.log(t);
  };

  return (
    <section className={styles.page}>
      <Balance amount={4950} />
      <Summary income={5000} expense={50} />
      <div className={styles.table}>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setPage("expenses");
            }}
            className={page === "expenses" ? styles.active : ""}
          >
            витрати
          </button>
          <button
            onClick={() => {
              setPage("income");
            }}
            className={page === "income" ? styles.active : ""}
          >
            доходи
          </button>
        </div>
        <TransactionForm onAdd={(t) => add(t)} />
        <TransactionsList items={financeCategory} />
      </div>
    </section>
  );
}

import React, { useState } from "react";
import styles from "./TransactionForm.module.css";
import { Data } from "../Data/Data";
// import CalculatorInput from "./CalculatorInput";

export default function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategoty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      text,
      category,
      amount: Number(amount),
    };

    onAdd && onAdd(newTransaction);

    cleanForm();
  };
  const cleanForm = () => {
    setText("");
    setAmount("");
    setCategoty("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <Data />
        <div className={styles.wrapper}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Назва"
            className={styles.description}
          />
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategoty(e.target.value)}
          >
            <option value="">Категорія товару</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Продукти">Продукти</option>
            <option value="Здоров’я">Здоров’я</option>
            <option value="Алкоголь">Алкоголь</option>
            <option value="Розваги">Розваги</option>
            <option value="Все для дому">Все для дому</option>
            <option value="Техніка">Техніка</option>
            <option value="Комуналка, зв’язок">Комуналка, зв’язок</option>
            <option value="Спорт, хобі">Спорт, хобі</option>
            <option value="Навчання">Навчання</option>
            <option value="Інше">Інше</option>
          </select>
          <div className={styles.numberWrapper}>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Сума"
              type="number"
              className={styles.amount}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={styles.submit}>
          ввести
        </button>
        <button
          onClick={() => {
            cleanForm();
          }}
          className={styles.clean}
        >
          Очистити
        </button>
      </div>
    </form>
  );
}

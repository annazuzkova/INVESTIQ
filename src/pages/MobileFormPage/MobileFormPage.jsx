import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MobileFormPage.module.css";
import CalculatorInput from "../../components/TransactionForm/CalculatorInput";

export default function MobileFormPage() {
  const navigate = useNavigate();
  const { type } = useParams(); // "income" або "expenses"

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      text,
      category,
      amount: Number(amount),
      type,
    };

    const current = JSON.parse(localStorage.getItem(type)) || [];
    localStorage.setItem(type, JSON.stringify([...current, newTransaction]));

    // Повертаємося на мобільний Dashboard
    navigate("/dashboardpage");
  };

  const cleanForm = () => {
    setText("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Назва"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Категорія</option>
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
      </div>
      <div className={styles.summaryWrapper}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Сума"
          type="number"
        />
        <CalculatorInput className={styles.svg} />
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.buttonAdd}>
          Додати
        </button>
        <button type="button" onClick={cleanForm} className={styles.button}>
          Очистити
        </button>
      </div>
    </form>
  );
}

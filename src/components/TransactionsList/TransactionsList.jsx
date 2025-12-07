import React from "react";
import styles from "./TransactionsList.module.css";
import TrashIcon from "./TrashIcon";

export default function TransactionsList({ items = [], onDelete }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ДАТА</th>
            <th>ОПИС</th>
            <th>КАТЕГОРІЯ</th>
            <th>СУМА</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.text}</td>
              <td>{item.category}</td>

              <td className={styles.amount}>{item.amount}</td>

              <td className={styles.delete}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => onDelete(item.id)}
                >
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}

          {Array.from({ length: 9 - items.length }).map((_, i) => (
            <tr key={"empty" + i} className={styles.emptyRow}>
              <td colSpan="5"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

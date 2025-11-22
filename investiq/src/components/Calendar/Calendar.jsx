export default function IncomeForm() {
  return (
    <div className="income-form">

      {/* Поле дати */}
      <div className="income-date">
        <img width={30} src="https://cdn-icons-png.flaticon.com/128/54/54332.png" alt="calendar" />
        <input
          type="date"
          className="date-input"
        />
      </div>

      <input
        type="text"
        placeholder="Опис прибутку"
        className="income-input"
      />

      <select className="income-category">
        <option>Категорія прибутку</option>
      </select>

      <div className="income-amount">
        <span>0,00</span>
        <img width={30} src="https://cdn-icons-png.flaticon.com/128/3626/3626508.png" alt="calculator" />
      </div>

      <button className="income-submit">ВВЕСТИ</button>
      <button className="income-clear">ОЧИСТИТИ</button>

    </div>
  );
}

import React, { useState } from "react";
import "./Costs.css";
import CostsChart from "../CostsChart/CostsChart.jsx";


import alcoholIcon from "./icons/Alcohol.png";
import domIcon from "./icons/Dom.png";
import gantelyaIcon from "./icons/Gantelya.png";
import knigaIcon from "./icons/Kniga.png";
import lampaIcon from "./icons/Lampa.png";
import productiIcon from "./icons/Producti.png";
import rahunokIcon from "./icons/Rahunok.png";
import rozvagiIcon from "./icons/Rozvagi.png";
import tehnikaIcon from "./icons/Tehnika.png";
import transportIcon from "./icons/Transport.png";
import zdorovyaIcon from "./icons/Zdorovya.png";



const categories = [
  { label: "Продукти", amount: 5000, icon: productiIcon },
  { label: "Алкоголь", amount: 200, icon: alcoholIcon },
  { label: "Розваги", amount: 800, icon: rozvagiIcon },
  { label: "Здоров'я", amount: 900, icon: zdorovyaIcon },
  { label: "Транспорт", amount: 2000, icon: transportIcon },
  { label: "Все для дому", amount: 1500, icon: domIcon },
  { label: "Техніка", amount: 800, icon: tehnikaIcon },
  { label: "Комуналка", amount: 2200, icon: rahunokIcon },
  { label: "Спорт, хобі", amount: 1800, icon: gantelyaIcon },
  { label: "Навчання", amount: 2400, icon: knigaIcon },
  { label: "Інше", amount: 3000, icon: lampaIcon }
];


const sampleChartData = {
  "Продукти": [
    { name: "Свинина", value: 5000 },
    { name: "Гов'ядина", value: 4500 },
    { name: "Курятина", value: 3200 },
    { name: "Риба", value: 2100 },
    { name: "Паніни", value: 1800 },
    { name: "Кава", value: 1700 },
    { name: "Спагетті", value: 1500 },
    { name: "Шоколад", value: 800 },
    { name: "Маслини", value: 500 },
    { name: "Зелень", value: 300 }
  ],

  "Алкоголь": [
    { name: "Пиво", value: 120 },
    { name: "Вино", value: 50 },
    { name: "Міцний алкоголь", value: 30 }
  ],

  "Розваги": [
    { name: "Кіно", value: 300 },
    { name: "Настільні ігри", value: 200 },
    { name: "Кава з друзями", value: 150 },
    { name: "Парки атракціонів", value: 150 }
  ],

  "Здоров'я": [
    { name: "Ліки", value: 400 },
    { name: "Вітаміни", value: 250 },
    { name: "Обстеження", value: 150 },
    { name: "Спортзал", value: 100 }
  ],

  "Транспорт": [
    { name: "Пальне", value: 1200 },
    { name: "Автобус", value: 300 },
    { name: "Таксі", value: 300 },
    { name: "Стоянка", value: 200 }
  ],

  "Все для дому": [
    { name: "Засоби для прибирання", value: 600 },
    { name: "Побутова хімія", value: 400 },
    { name: "Декор", value: 300 },
    { name: "Посуд", value: 200 }
  ],

  "Техніка": [
    { name: "Кабелі", value: 200 },
    { name: "Аксесуари", value: 200 },
    { name: "Ремонт техніки", value: 200 },
    { name: "Додавання пам’яті", value: 200 }
  ],

  "Комуналка": [
    { name: "Електрика", value: 900 },
    { name: "Опалення", value: 600 },
    { name: "Вода", value: 400 },
    { name: "Інтернет", value: 300 }
  ],

  "Спорт, хобі": [
    { name: "Спортзал", value: 800 },
    { name: "Спортивний одяг", value: 500 },
    { name: "Хобі-матеріали", value: 300 },
    { name: "Інвентар", value: 200 }
  ],

  "Навчання": [
    { name: "Курси", value: 1200 },
    { name: "Книги", value: 600 },
    { name: "Матеріали", value: 400 },
    { name: "Онлайн-платформи", value: 200 }
  ],

  "Інше": [
    { name: "Подарунки", value: 1200 },
    { name: "Одяг", value: 900 },
    { name: "Косметика", value: 600 },
    { name: "Аксесуари", value: 300 }
  ]
};


export default function Costs() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="costs-container">
      <h2 className="title">ВИТРАТИ</h2>

      <div className="categories-grid">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="category-card"
            onClick={() => setSelectedCategory(cat.label)}
          >
            <div className="amount">{cat.amount} грн</div>

            <div className="icon">
              <img src={cat.icon} alt={cat.label} className="cost-icon" />
            </div>

            <div className="label">{cat.label}</div>
          </div>
        ))}
      </div>

      {selectedCategory && sampleChartData[selectedCategory] && (
        <CostsChart
          title={selectedCategory}
          data={sampleChartData[selectedCategory]}
        />
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, setItems } from "./Zvedennya.store";
import "./Zvedennya.modal.css";

const STORAGE_KEY = "zvedennya_items";

const ZvedennyaTable = () => {
  const [inputValue, setInputValue] = useState("");
  const items = useSelector((state) => state.items || []);
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      dispatch(setItems(JSON.parse(saved)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    const value = inputValue.trim();
    if (!value) return;

    dispatch(addItem(value));
    setInputValue("");
  };

  return (
    <div className="card-wrap">
      <div className="card">
        <div className="card-header">ЗВЕДЕННЯ</div>
        <div className="container">
          {" "}
          <div className="list">
            {items.map((item) => (
              <div className="list-row" key={item}>
                <span className="month">{item}</span>
                <span className="amount">10 000.00</span>
              </div>
            ))}
          </div>
        </div>

        <div className="control">
          <input
            className="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Місяць"
          />
          <button className="btn" onClick={handleAdd}>
            Додати
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZvedennyaTable;

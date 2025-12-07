import React, { useState } from "react";
import "../styles/Login.css";
import Logo from "../assets/logo.svg";
import Photos from "../pages/Photos.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // режим: login або register
  const [mode, setMode] = useState("login");
  // поля для входу
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // поля для реєстрації
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  // повідомлення для користувача (успіх/помилка)
  const [message, setMessage] = useState("");

  // Обробник входу
  const handleLogin = (e) => {
    e.preventDefault();
    // читання з localStorage — тут просте локальне збереження користувача
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    const storedName = localStorage.getItem("userName");

    // Якщо користувача немає в localStorage то просимо зареєструватися
    if (!storedEmail) {
      setMessage("Користувача не знайдено. Будь ласка, зареєструйтесь.");
      return;
    }

    // Порівнюємо введені дані з збереженими.
    // Примітка: це спрощена авторизація для демо — без хешування,
    // не використовувати так у продакшені.
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
      // відмічаємо стан "увійшов"
      localStorage.setItem("isRegistered", "true");
      if (storedName) localStorage.setItem("userName", storedName);
      setMessage("Успішний вхід.");
      navigate("/dashboardpage");
    } else {
      setMessage("Невірний email або пароль.");
    }
  };

  // Обробник реєстрації
  const handleRegister = (e) => {
    e.preventDefault();
    // Перевірка заповнення полів
    if (!regName || !regEmail || !regPassword) {
      setMessage("Заповніть усі поля реєстрації.");
      return;
    }
    // Зберігаємо прості ключі в localStorage.
    // Пояснення: ми зберігаємо ім'я, email і пароль локально для демонстрації.
    // У реальній системі пароль повинен зберігатися на сервері у захищеному вигляді.
    localStorage.setItem("isRegistered", "true");
    localStorage.setItem("userName", regName);
    localStorage.setItem("userEmail", regEmail);
    localStorage.setItem("userPassword", regPassword);
    setMessage("Реєстрація пройшла успішно. Тепер увійдіть.");
    setMode("login");
    setRegName("");
    setRegEmail("");
    setRegPassword("");
  };

  return (
    <div className="iq-root">
      <div className="iq-hero">
        {/* ілюстрація зліва — декоративна, не впливає на логіку */}
        <img src={Photos} alt="illustration" className="iq-hero-photo" />
        {/* логотип зверху */}
        <img src={Logo} alt="investiq" className="iq-small-logo" />
        <div className="iq-hero-content">
          <h1 className="iq-title">InvestIQ</h1>
          <p className="iq-sub">SMART FINANCE</p>
        </div>
      </div>

      <div className="iq-card-wrap">
        <div className="iq-card">
          {mode === "login" ? (
            <>
              {/* <p className="iq-hint">
                Ви можете авторизуватися за допомогою акаунта Google
              </p> */}

              <p className="iq-or">
                Увійти за допомогою ел. пошти та пароля після реєстрації
              </p>

              <form onSubmit={handleLogin}>
                <label className="iq-label">Електронна пошта:</label>
                <input
                  className="iq-input"
                  type="email"
                  placeholder="your@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />

                <label className="iq-label">Пароль:</label>
                <input
                  className="iq-input"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />

                <div className="iq-actions">
                  <button className="iq-btn primary" type="submit">
                    УВІЙТИ
                  </button>
                  <button
                    className="iq-btn ghost"
                    type="button"
                    onClick={() => {
                      setMode("register");
                      setMessage("");
                    }}
                  >
                    РЕЄСТРАЦІЯ
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h3 style={{ margin: 0, marginBottom: 12 }}>Реєстрація</h3>
              <form onSubmit={handleRegister}>
                <label className="iq-label">Ім'я користувача:</label>
                <input
                  className="iq-input"
                  type="text"
                  placeholder="Ваше ім'я"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  required
                />

                <label className="iq-label">Електронна пошта:</label>
                <input
                  className="iq-input"
                  type="email"
                  placeholder="your@email.com"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  required
                />

                <label className="iq-label">Пароль:</label>
                <input
                  className="iq-input"
                  type="password"
                  placeholder="••••••••"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  required
                />

                <div className="iq-actions">
                  <button className="iq-btn primary" type="submit">
                    ЗАРЕЄСТРУВАТИСЯ
                  </button>
                  <button
                    className="iq-btn ghost"
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setMessage("");
                    }}
                  >
                    Назад
                  </button>
                </div>
              </form>
            </>
          )}

          {message && (
            <p style={{ marginTop: 12, color: "#2d6a4f" }}>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

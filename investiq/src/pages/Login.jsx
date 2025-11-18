import React from 'react';
import '../styles/Login.css';
import Logo from '../assets/logo.svg';

export default function Login() {
    return (
        <div className="iq-root">
            <div className="iq-hero">
                <img src={Logo} alt="investiq" className="iq-small-logo" />
                <div className="iq-hero-content">
                    <h1 className="iq-title">investiq</h1>
                    <p className="iq-sub">SMART FINANCE</p>
                </div>
            </div>

            <div className="iq-card-wrap">
                <div className="iq-card">
                    <p className="iq-hint">Ви можете авторизуватися за допомогою акаунта Google</p>
                    <button className="iq-google">
                        <span className="iq-google-icon">G</span>
                        Google
                    </button>

                    <p className="iq-or">Або увійти за допомогою ел. пошти та пароля після реєстрації</p>

                    <label className="iq-label">Електронна пошта:</label>
                    <input className="iq-input" type="email" placeholder="your@email.com" />

                    <label className="iq-label">Пароль:</label>
                    <input className="iq-input" type="password" placeholder="••••••••" />

                    <div className="iq-actions">
                        <button className="iq-btn primary">УВІЙТИ</button>
                        <button className="iq-btn ghost">РЕЄСТРАЦІЯ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

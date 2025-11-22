import React, { useState } from 'react';
import '../styles/Login.css';
import Logo from '../assets/logo.svg';
import Photos from '../pages/photos.png';

export default function Login() {
    const [mode, setMode] = useState('login');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');
        const storedName = localStorage.getItem('userName');

        if (!storedEmail) {
            setMessage('Пользователь не найден. Пожалуйста, зарегистрируйтесь.');
            return;
        }

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            localStorage.setItem('isRegistered', 'true');
            if (storedName) localStorage.setItem('userName', storedName);
            setMessage('Успішний вхід.');
        } else {
            setMessage('Невірний email або пароль.');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!regName || !regEmail || !regPassword) {
            setMessage('Заповніть усі поля реєстрації.');
            return;
        }
        localStorage.setItem('isRegistered', 'true');
        localStorage.setItem('userName', regName);
        localStorage.setItem('userEmail', regEmail);
        localStorage.setItem('userPassword', regPassword);
        setMessage('Реєстрація пройшла успішно. Тепер увійдіть.');
        setMode('login');
        setRegName('');
        setRegEmail('');
        setRegPassword('');
    };

    return (
        <div className="iq-root">
            <div className="iq-hero">
                <img src={Photos} alt="illustration" className="iq-hero-photo" />
                <img src={Logo} alt="investiq" className="iq-small-logo" />
                <div className="iq-hero-content">
                    <h1 className="iq-title">InvestIQ</h1>
                    <p className="iq-sub">SMART FINANCE</p>
                </div>
            </div>

            <div className="iq-card-wrap">
                <div className="iq-card">
                    {mode === 'login' ? (
                        <>
                            <p className="iq-hint">Ви можете авторизуватися за допомогою акаунта Google</p>
                            <button className="iq-google" type="button">
                                <span className="iq-google-icon">G</span>
                                Google
                            </button>

                            <p className="iq-or">Або увійти за допомогою ел. пошти та пароля після реєстрації</p>

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
                                    <button className="iq-btn primary" type="submit">УВІЙТИ</button>
                                    <button
                                        className="iq-btn ghost"
                                        type="button"
                                        onClick={() => { setMode('register'); setMessage(''); }}
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
                                    <button className="iq-btn primary" type="submit">ЗАРЕЄСТРУВАТИСЯ</button>
                                    <button
                                        className="iq-btn ghost"
                                        type="button"
                                        onClick={() => { setMode('login'); setMessage(''); }}
                                    >
                                        Назад
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {message && <p style={{ marginTop: 12, color: '#2d6a4f' }}>{message}</p>}
                </div>
            </div>
        </div>
    );
}

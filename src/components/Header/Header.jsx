import React, { useEffect, useState } from 'react';


export default function Header() {
    // перевіряємо, чи потрібно приховувати хедер на сторінці логіну
    const [hideOnLogin, setHideOnLogin] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.location.pathname.toLowerCase().includes('login');
    });

    // стан реєстрації та ім'я користувача
    const [isRegistered, setIsRegistered] = useState(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('isRegistered') === 'true';
    });
    const [userName, setUserName] = useState(() => {
        if (typeof window === 'undefined') return '';
        return localStorage.getItem('userName') || '';
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // оновлюємо стан при зміні localStorage в інших вкладках
        const onStorage = (e) => {
            if (e.key === 'isRegistered') {
                setIsRegistered(localStorage.getItem('isRegistered') === 'true');
            }
            if (e.key === 'userName') {
                setUserName(localStorage.getItem('userName') || '');
            }
            if (e.key === 'currentUserEmail') {
                // можна додатково реагувати на зміну поточного емейлу, якщо потрібно
            }
        };
        window.addEventListener('storage', onStorage);

        // оновлення при навігації (наприклад back/forward) — ховаємо хедер на /login
        const onPop = () => setHideOnLogin(window.location.pathname.toLowerCase().includes('login'));
        window.addEventListener('popstate', onPop);

        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('popstate', onPop);
        };
    }, []);

    // обробник виходу з акаунта
    const handleLogout = (e) => {
        e && e.preventDefault && e.preventDefault();
        // видаляємо локальні маркери сесії
        localStorage.removeItem('isRegistered');
        localStorage.removeItem('userName');
        localStorage.removeItem('currentUserEmail');
        // оновлюємо локальний стан, щоб UI відреагував миттєво
        setIsRegistered(false);
        setUserName('');
        // за потреби: можна додати редірект на сторінку логіну:
        // window.location.href = '/login';
    };

    if (hideOnLogin) return null;

    const headerStyle = {
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        boxSizing: 'border-box',
    };

    const leftStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
    };

    const logoBox = {
        width: 28,
        height: 20,
        borderRadius: 6,
        background: 'linear-gradient(90deg,#ff7a2d 0%, #ff9b4a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 800,
        fontSize: 12,
        paddingLeft: 2,
    };

    const titleStyle = {
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 0.6,
        color: '#0b1220',
    };

    const rightStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        color: '#556270',
        fontSize: 13,
    };

    const userCircle = {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: '#eef2f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#556270',
        fontWeight: 700,
        fontSize: 12,
    };

    return (
        <nav className="header-main" style={headerStyle}>
            <div style={leftStyle}>
                <div style={logoBox}>i</div>
                <div style={titleStyle}>INVESTIQ</div>
            </div>

            {/* правий блок відображається лише коли користувач зареєстрований */}
            {isRegistered ? (
                <div style={rightStyle}>
                    <div style={userCircle}>{(userName && userName[0]?.toUpperCase()) || 'U'}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                        <span style={{ fontSize: 13, color: '#26303a' }}>{userName || 'User'}</span>
                        <a
                            href="#"
                            onClick={handleLogout}
                            style={{ fontSize: 12, color: '#6b7782', textDecoration: 'underline', marginTop: 2 }}
                        >
                            Вийти
                        </a>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
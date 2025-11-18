import React from 'react';

export default function Header() {
    // don't render header on login page
    if (typeof window !== 'undefined') {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('login')) return null;
    }

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
        <header style={headerStyle}>
            <div style={leftStyle}>
                <div style={logoBox}>i</div>
                <div style={titleStyle}>INVESTIQ</div>
            </div>

            <div style={rightStyle}>
                <div style={userCircle}>U</div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                    <span style={{ fontSize: 13, color: '#26303a' }}>User Name</span>
                    <a href="#" style={{ fontSize: 12, color: '#6b7782', textDecoration: 'underline' }}>Вийти</a>
                </div>
            </div>
        </header>
    );
}

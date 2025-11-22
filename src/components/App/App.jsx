import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../../pages/Login';
import FinancePage from "../../pages/FinancePage/FinancePage.jsx"
import '../../styles/Login.css';

export default function App() {
    /* useEffect(() => {
        const prevMargin = document.body.style.margin;
        const prevOverflowY = document.body.style.overflowY;
        document.body.style.margin = '0';
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.margin = prevMargin;
            document.body.style.overflowY = prevOverflowY;
        };
    }, []);

    return (
        <div className="app" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Header />
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <Login />
            </div>
        </div>
    ); */

    return(
        <>
            <Header />
            <FinancePage />
        </>
    )
}
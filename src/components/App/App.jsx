import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../../pages/Login.jsx';
import FinancePage from "../../pages/FinancePage/FinancePage.jsx";
import Calendarik from "../Calendar/Calendar.jsx";
import "../Calendar/Calendar.css";
import '../../styles/Login.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Costs from '../Costs/Costs.jsx';
import DashboardPage from "../../pages/DashboardPage/DashboardPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Логін */}
                <Route path="/" element={<Login />} />

                {/* Головна */}
                <Route path="/costs" element={<Costs />} />

                {/* Фінансові сторінки */}
                <Route path="/finance" element={<FinancePage />} />

                {/* Дашборд */}
                <Route path="/dashboard" element={<DashboardPage />} />

                {/* Календар */}
                <Route path="/calendar" element={<Calendarik />} />
            </Routes>
        </BrowserRouter>
    );
}

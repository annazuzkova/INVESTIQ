//App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Login from '../../pages/Login';
import FinancePage from '../../pages/FinancePage/FinancePage.jsx';
import Calendarik from '../Calendar/Calendar.jsx';
import '../Calendar/Calendar.css';
import '../../styles/Login.css';
import Costs from '../Costs/Costs.jsx';
import DashboardPage from '../../pages/DashboardPage/DashboardPage.jsx';


import ZvedennyaTable from '../ZvedennyaTable/ZvedennyaTable';
import '../ZvedennyaTable/Zvedennya.modal.css'

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Costs />} />

                <Route path="/login" element={<Login />} />

                <Route path="/finance" element={<FinancePage />} />

                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/calendar" element={<Calendarik />} />

                <Route path="/zvedennya" element={<ZvedennyaTable />} />
            </Routes>
        </BrowserRouter>
    );
}

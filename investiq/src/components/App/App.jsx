import React from 'react';
import './App.css';
/* import Login from '../../pages/Login';
import '../../styles/Login.css'; */
import IncomeForm from '../Calendar/Calendar';
import "../Calendar/Calendar.css";
export default function App() {
    return (
        <div className="app">
            <IncomeForm />
        </div>
    );
}
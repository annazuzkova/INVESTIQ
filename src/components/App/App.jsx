import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Container from '../Container/Container';
import DashboardPage from '../../pages/DashboardPage/DashboardPage';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Container>
                <DashboardPage />
            </Container>
        </div>
    );
}
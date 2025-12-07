import React, { useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Login from "../../pages/Login";
import FinancePage from "../../pages/FinancePage/FinancePage.jsx";
import DashboardPage from "../../pages/DashboardPage/DashboardPage.jsx";
import MobileFormPage from "../../pages/MobileFormPage/MobileFormPage.jsx";
import "../../styles/Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "../Background/Background.jsx";

export default function App() {
  useEffect(() => {
    const prevMargin = document.body.style.margin;
    const prevOverflowY = document.body.style.overflowY;
    document.body.style.margin = "0";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.margin = prevMargin;
      document.body.style.overflowY = prevOverflowY;
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/financepage" element={<FinancePage />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
          <Route
            path="/dashboardpage/add-transaction/:type"
            element={<MobileFormPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

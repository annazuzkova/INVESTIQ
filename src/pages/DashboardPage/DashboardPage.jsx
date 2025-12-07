import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import MobileDashboard from "../../components/MobileDashboard/MobileDashboard";

export default function DashboardPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileDashboard /> : <Dashboard />;
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("isRegistered") === "true";
  });
  const [userName, setUserName] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("userName") || "";
  });
  const [hideOnLogin, setHideOnLogin] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.location.pathname.toLowerCase().includes("login");
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      const flag = localStorage.getItem("isRegistered") === "true";
      const name = localStorage.getItem("userName") || "";
      setIsRegistered(flag);
      setUserName(name);
    };
    check();

    const onStorage = (e) => {
      if (e.key === "isRegistered" || e.key === "userName") check();
    };
    window.addEventListener("storage", onStorage);

    const onPop = () =>
      setHideOnLogin(window.location.pathname.toLowerCase().includes("login"));
    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  if (hideOnLogin) return null;

  const headerStyle = {
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    background: "#ffffff",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: 12,
  };

  const logoBox = {
    width: 28,
    height: 20,
    borderRadius: 6,
    background: "linear-gradient(90deg,#ff7a2d 0%, #ff9b4a 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: 12,
    paddingLeft: 2,
  };

  const titleStyle = {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.6,
    color: "#0b1220",
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: 14,
    color: "#556270",
    fontSize: 13,
  };

  const userCircle = {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#eef2f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#556270",
    fontWeight: 700,
    fontSize: 12,
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isRegistered");
    localStorage.removeItem("userName");
    setIsRegistered(false);
    setUserName("");
    navigate("/login");
  };

  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <div style={logoBox}>i</div>
        <div style={titleStyle}>INVESTIQ</div>
      </div>

      {/* {isRegistered ? ( */}
      <div style={rightStyle}>
        <div style={userCircle}>
          {(userName && userName[0]?.toUpperCase()) || "U"}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
        >
          <span style={{ fontSize: 13, color: "#26303a" }}>
            {userName || "User"}
          </span>
          <Link
            onClick={handleLogout}
            style={{
              fontSize: 12,
              color: "#6b7782",
              textDecoration: "underline",
            }}
          >
            Вийти
          </Link>
        </div>
      </div>
      {/* ) : null} */}
    </header>
  );
}

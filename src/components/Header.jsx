import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./HeaderFooter.css";

const Header = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Get current user from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserRole(user.role || "");
  }, []);

  return (
    <header className="app-header">
      <div className="app-header-container">
        <div className="app-logo">
          <img
            src="/AS-logo.png"
            alt="AcadSync Logo"
          />
          <h1>AcadSync</h1>
          {userRole === "Admin" && <span className="admin-badge">ADMIN</span>}
          {userRole === "Faculty" && <span className="admin-badge" style={{background: "#4285f4"}}>FACULTY</span>}
          {userRole === "Student" && <span className="admin-badge" style={{background: "#10B981"}}>STUDENT</span>}
        </div>
        <Nav userRole={userRole} />
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./HeaderFooter.css";

const Header = () => {
  const [userRole, setUserRole] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserRole(user.role || "");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`app-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container header-container">
        <div className="logo">
          <img
            src="/AS-logo.png"
            alt="AcadSync Logo"
          />
          <h1>AcadSync</h1>
          {userRole === "Admin" && <span className="admin-badge">ADMIN</span>}
          {userRole === "Faculty" && <span className="admin-badge" style={{background: "#4285f4"}}>FACULTY</span>}
          {userRole === "Student" && <span className="admin-badge" style={{background: "#10B981"}}>STUDENT</span>}
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <Nav userRole={userRole} />
        </div>
      </div>
    </header>
  );
};

export default Header;

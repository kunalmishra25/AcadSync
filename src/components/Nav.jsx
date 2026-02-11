import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFooter.css";

const Nav = ({ userRole }) => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  // Render different navigation based on user role
  const renderNavLinks = () => {
    switch(userRole) {
      case "Admin":
        return (
          <>
            <li>
              <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/students" className={({ isActive }) => (isActive ? "active" : "")}>
                Manage Students
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty" className={({ isActive }) => (isActive ? "active" : "")}>
                Manage Faculty
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                Manage Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports" className={({ isActive }) => (isActive ? "active" : "")}>
                Reports
              </NavLink>
            </li>
          </>
        );
      case "Faculty":
        return (
          <>
            <li>
              <NavLink to="/faculty/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                My Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty/attendance" className={({ isActive }) => (isActive ? "active" : "")}>
                Attendance
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty/announcements" className={({ isActive }) => (isActive ? "active" : "")}>
                Announcements
              </NavLink>
            </li>
          </>
        );
      case "Student":
        return (
          <>
            <li>
              <NavLink to="/student/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/student/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                My Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/student/attendance" className={({ isActive }) => (isActive ? "active" : "")}>
                Attendance
              </NavLink>
            </li>
            <li>
              <NavLink to="/student/fees" className={({ isActive }) => (isActive ? "active" : "")}>
                Fees
              </NavLink>
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav>
      <ul>
        {renderNavLinks()}
        {user && user.name && (user.role === "Student" || user.role === "Faculty") && (
          <li className="user-dropdown">
            <div 
              className="user-info" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg className="profile-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span className="welcome-text">{user.name.split(' ')[0]}</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            )}
          </li>
        )}
        {user && user.role === "Admin" && (
          <li>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

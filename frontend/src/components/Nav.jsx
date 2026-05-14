import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFooter.css";

const IconDashboard = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const IconUsers = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconBook = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const IconAttendance = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15l2 2 4-4"></path></svg>;
const IconBell = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const IconFees = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const IconReports = () => <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>;

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
                <IconDashboard /><span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/students" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconUsers /><span>Students</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconUsers /><span>Faculty</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconBook /><span>Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconReports /><span>Reports</span>
              </NavLink>
            </li>
          </>
        );
      case "Faculty":
        return (
          <>
            <li>
              <NavLink to="/faculty/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconDashboard /><span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconBook /><span>Classes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty/attendance" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconAttendance /><span>Attendance</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty/announcements" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconBell /><span>Notices</span>
              </NavLink>
            </li>
          </>
        );
      case "Student":
        return (
          <>
            <li>
              <NavLink to="/student/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconDashboard /><span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/student/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconBook /><span>Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/student/attendance" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconAttendance /><span>Attendance</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/student/fees" className={({ isActive }) => (isActive ? "active" : "")}>
                <IconFees /><span>Fees</span>
              </NavLink>
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="app-nav">
      <ul className="app-nav-list">
        {renderNavLinks()}
        {user && user.name && (user.role === "Student" || user.role === "Faculty") && (
          <li className="user-dropdown">
            <div 
              className="user-info" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg className="profile-icon nav-icon" viewBox="0 0 24 24" fill="currentColor">
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
          <li className="admin-logout-li">
            <button onClick={handleLogout} className="btn btn-danger admin-logout-btn">
              <svg className="nav-icon logout-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span className="logout-text">Logout</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

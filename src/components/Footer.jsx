import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderFooter.css";

const Footer = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserRole(user.role || "");
  }, []);

  const footerTitle = useMemo(() => {
    switch (userRole) {
      case "Student":
        return "AcadSync Student";
      case "Faculty":
        return "AcadSync Faculty";
      case "Admin":
      default:
        return "AcadSync Admin";
    }
  }, [userRole]);

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-stats">
          <div className="stat-card">
            <div className="stat-value">5,247</div>
            <div className="stat-label">Total Students</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">342</div>
            <div className="stat-label">Faculty Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">156</div>
            <div className="stat-label">Active Courses</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">94.2%</div>
            <div className="stat-label">Average Attendance</div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h3>{footerTitle}</h3>
            <p>
              Comprehensive administrative dashboard for managing college operations, student
              records, and faculty activities efficiently.
            </p>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="/technical-support">Technical Support</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />
        <div className="copyright">(c) 2025 AcadSync Dashboard. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

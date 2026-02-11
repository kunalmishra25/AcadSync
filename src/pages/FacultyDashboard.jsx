import React from "react";
import { useNavigate } from "react-router-dom";
import "./FacultyDashboard.css";

const FacultyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="faculty-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title-animated">Faculty Dashboard</h1>
        <p>
          Welcome back! Manage your courses, track student performance,
          and access teaching resources all in one place.
        </p>
        <div className="dashboard-actions">
          <button className="btn btn-primary" onClick={() => navigate("/faculty/grades")}>
            View Grades
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/faculty/resources")}>
            Teaching Resources
          </button>
        </div>
      </div>

      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <p>Access the most frequently used faculty functions with just one click.</p>
        
        <div className="quick-actions-grid">
          <div className="action-card" onClick={() => navigate("/faculty/courses")}>
            <div className="card-icon classes-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#4285f4"/>
                <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="#4285f4"/>
              </svg>
            </div>
            <h3>Manage Classes</h3>
            <p>View your class schedule, student lists, and course materials</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/faculty/attendance")}>
            <div className="card-icon attendance-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#34c759"/>
              </svg>
            </div>
            <h3>Take Attendance</h3>
            <p>Record and manage student attendance for your classes</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/faculty/grades")}>
            <div className="card-icon grades-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" fill="#ff9500"/>
              </svg>
            </div>
            <h3>Grade Management</h3>
            <p>Enter and update grades, create assessments and view performance</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/faculty/assignments")}>
            <div className="card-icon assignments-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#4285f4"/>
              </svg>
            </div>
            <h3>Assignments</h3>
            <p>Track submissions and grade assignments for your courses</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/faculty/announcements")}>
            <div className="card-icon announcements-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V4l8 8-8 8v-4H4V8z" fill="#ff5252"/>
              </svg>
            </div>
            <h3>Post Announcements</h3>
            <p>Share important updates and information with your students</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/faculty/resources")}>
            <div className="card-icon resources-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" fill="#4285f4"/>
              </svg>
            </div>
            <h3>Teaching Resources</h3>
            <p>Access teaching materials, templates and educational resources</p>
            <button className="access-btn">Access</button>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Your Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>4</h3>
            <p>Active Courses</p>
          </div>
          <div className="stat-card">
            <h3>128</h3>
            <p>Total Students</p>
          </div>
          <div className="stat-card">
            <h3>24</h3>
            <p>Pending Assignments</p>
          </div>
          <div className="stat-card">
            <h3>92%</h3>
            <p>Attendance Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
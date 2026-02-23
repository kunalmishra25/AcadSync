import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title-animated">Student Dashboard</h1>
        <p>
          Welcome back, Access your courses, check attendance, view grades,
          and manage all your academic activities from this dashboard.
        </p>
        <div className="dashboard-actions">
          <button className="btn btn-primary" onClick={() => navigate("/student/profile")}>
            View Profile
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/student/courses")}>
            My Courses
          </button>
        </div>
      </div>

      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <p>Access the most frequently used student functions with just one click.</p>
        
        <div className="quick-actions-grid">
          <div className="action-card" onClick={() => navigate("/student/courses")}>
            <div className="card-icon courses-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" fill="#06B6D4"/>
                <path d="M7 8H17M7 12H17M7 16H13" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>My Courses</h3>
            <p>View your enrolled courses and access course materials</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/student/attendance")}>
            <div className="card-icon attendance-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#10B981"/>
              </svg>
            </div>
            <h3>Attendance</h3>
            <p>Check your attendance records for all courses</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/student/marks")}>
            <div className="card-icon marks-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4zm3-8h-1V7h1v2zm-3-2h-1v2h1V7zm-3 2H8v2h1V9z" fill="#8B5CF6"/>
              </svg>
            </div>
            <h3>Grades & Marks</h3>
            <p>View your academic performance and grades</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/student/timetable")}>
            <div className="card-icon timetable-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" fill="#EF4444"/>
                <path d="M8 2V6M16 2V6M3 10H21M8 14H10M14 14H16M8 18H10M14 18H16" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Timetable</h3>
            <p>Check your class schedule and upcoming sessions</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/student/announcements")}>
            <div className="card-icon announcements-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 18h-6a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 014.5 6h6M16 6h1.5A1.5 1.5 0 0119 7.5v9a1.5 1.5 0 01-1.5 1.5H16M8 12h8M12 18V6" stroke="#10B981" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Announcements</h3>
            <p>View important announcements from administration</p>
            <button className="access-btn">Access</button>
          </div>
          
          <div className="action-card" onClick={() => navigate("/student/fees")}>
            <div className="card-icon fees-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="#64748B"/>
              </svg>
            </div>
            <h3>Fee Details</h3>
            <p>View fee structure and payment history</p>
            <button className="access-btn">Access</button>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Your Academic Stats</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Attendance</h3>
            <div className="stat-value">87%</div>
            <p>Overall attendance across all courses</p>
          </div>
          <div className="stat-card">
            <h3>CGPA</h3>
            <div className="stat-value">8.7</div>
            <p>Current semester grade (out of 10)</p>
          </div>
          <div className="stat-card">
            <h3>Assignments</h3>
            <div className="stat-value">5</div>
            <p>Pending assignments to complete</p>
          </div>
          <div className="stat-card">
            <h3>Upcoming Tests</h3>
            <div className="stat-value">2</div>
            <p>Tests scheduled in the next 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
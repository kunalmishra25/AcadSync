import React from "react";
import { Link } from "react-router-dom";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-page">
      <div className="page-header">
        <h2>System Analytics</h2>
        <p>Comprehensive insights and performance metrics for your educational institution</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="actions-bar">
            <h3>Analytics Dashboard</h3>
            <Link to="/admin/dashboard" className="btn btn-outline">Back to Dashboard</Link>
          </div>

          <div className="analytics-summary">
            <div className="summary-card">
              <h3>Total Students</h3>
              <div className="analytics-value">5,247</div>
              <div className="analytics-detail">+12% from last month</div>
            </div>
            <div className="summary-card">
              <h3>Faculty Members</h3>
              <div className="analytics-value">342</div>
              <div className="analytics-detail">+3 new this semester</div>
            </div>
            <div className="summary-card">
              <h3>Active Courses</h3>
              <div className="analytics-value">156</div>
              <div className="analytics-detail">Above target of 150</div>
            </div>
            <div className="summary-card">
              <h3>Average Attendance</h3>
              <div className="analytics-value">94.2%</div>
              <div className="analytics-detail">+2.3% improvement</div>
            </div>
          </div>

          <div className="analytics-grid">
            <div className="analytics-card">
              <h4>Student Enrollment Trends</h4>
              <div className="chart-container">
                <div className="chart-bar" style={{ height: '60%' }}>
                  <span className="chart-value">180</span>
                  <span className="chart-label">Jan</span>
                </div>
                <div className="chart-bar" style={{ height: '75%' }}>
                  <span className="chart-value">220</span>
                  <span className="chart-label">Feb</span>
                </div>
                <div className="chart-bar" style={{ height: '85%' }}>
                  <span className="chart-value">280</span>
                  <span className="chart-label">Mar</span>
                </div>
                <div className="chart-bar" style={{ height: '70%' }}>
                  <span className="chart-value">240</span>
                  <span className="chart-label">Apr</span>
                </div>
                <div className="chart-bar" style={{ height: '90%' }}>
                  <span className="chart-value">320</span>
                  <span className="chart-label">May</span>
                </div>
                <div className="chart-bar current" style={{ height: '95%' }}>
                  <span className="chart-value">350</span>
                  <span className="chart-label">Jun</span>
                </div>
              </div>
            </div>

            <div className="analytics-card">
              <h4>Department Performance</h4>
              <div className="performance-list">
                <div className="performance-item">
                  <span className="dept-name">Computer Science</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }}></div>
                  </div>
                  <span className="dept-score">92%</span>
                </div>
                <div className="performance-item">
                  <span className="dept-name">Electronics</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '88%' }}></div>
                  </div>
                  <span className="dept-score">88%</span>
                </div>
                <div className="performance-item">
                  <span className="dept-name">Mechanical</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                  <span className="dept-score">85%</span>
                </div>
                <div className="performance-item">
                  <span className="dept-name">Civil</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '83%' }}></div>
                  </div>
                  <span className="dept-score">83%</span>
                </div>
              </div>
            </div>

            <div className="analytics-card">
              <h4>Grade Distribution</h4>
              <div className="grade-stats">
                <div className="grade-item">
                  <span className="grade-label">Outstanding (O)</span>
                  <span className="grade-count">156 students</span>
                  <span className="grade-percent">12.5%</span>
                </div>
                <div className="grade-item">
                  <span className="grade-label">Excellent (A+)</span>
                  <span className="grade-count">298 students</span>
                  <span className="grade-percent">23.9%</span>
                </div>
                <div className="grade-item">
                  <span className="grade-label">Very Good (A)</span>
                  <span className="grade-count">412 students</span>
                  <span className="grade-percent">33.0%</span>
                </div>
                <div className="grade-item">
                  <span className="grade-label">Good (B+)</span>
                  <span className="grade-count">381 students</span>
                  <span className="grade-percent">30.6%</span>
                </div>
              </div>
            </div>

            <div className="analytics-card">
              <h4>Recent Activity</h4>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">📊</div>
                  <div className="activity-content">
                    <span className="activity-title">New student registrations</span>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">👨‍🏫</div>
                  <div className="activity-content">
                    <span className="activity-title">Faculty performance review completed</span>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📚</div>
                  <div className="activity-content">
                    <span className="activity-title">Course curriculum updated</span>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">🎓</div>
                  <div className="activity-content">
                    <span className="activity-title">Semester results published</span>
                    <span className="activity-time">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
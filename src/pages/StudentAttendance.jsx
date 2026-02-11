import React from "react";
import "./StudentAttendance.css";

const StudentAttendance = () => {
  // Sample attendance data
  const attendanceData = [
    { course: "Computer Science 101", present: 32, absent: 3, percentage: 91 },
    { course: "Data Structures", present: 28, absent: 2, percentage: 93 },
    { course: "Web Development", present: 30, absent: 5, percentage: 86 },
    { course: "Database Systems", present: 25, absent: 5, percentage: 83 },
    { course: "Software Engineering", present: 22, absent: 3, percentage: 88 }
  ];

  return (
    <div className="student-attendance-page">
      <div className="page-header">
        <h2>Attendance Records</h2>
        <p>Track your attendance across all courses and maintain good academic standing</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="attendance-summary">
            <div className="summary-card">
              <h3>Overall Attendance</h3>
              <div className="attendance-percentage">87%</div>
              <div className="attendance-status good">Good Standing</div>
            </div>
            <div className="summary-card">
              <h3>Total Classes</h3>
              <div className="attendance-count">155</div>
              <div className="attendance-detail">Attended: 137 | Missed: 18</div>
            </div>
            <div className="summary-card">
              <h3>This Month</h3>
              <div className="attendance-percentage">92%</div>
              <div className="attendance-detail">Attended: 23 | Missed: 2</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Course-wise Attendance</h3>
          </div>

          <div className="attendance-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((course, index) => (
                  <tr key={index}>
                    <td>{course.course}</td>
                    <td>{course.present}</td>
                    <td>{course.absent}</td>
                    <td>{course.percentage}%</td>
                    <td>
                      <span className={`status-badge ${course.percentage >= 85 ? 'good' : course.percentage >= 75 ? 'warning' : 'danger'}`}>
                        {course.percentage >= 85 ? 'Good' : course.percentage >= 75 ? 'Warning' : 'Low'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="actions-bar" style={{ marginTop: "2rem" }}>
            <h3>Monthly Attendance Trend</h3>
          </div>

          <div className="attendance-chart">
            <div className="chart-container">
              <div className="chart-bar" style={{ height: '85%' }}>
                <span className="chart-value">85%</span>
                <span className="chart-label">Jan</span>
              </div>
              <div className="chart-bar" style={{ height: '78%' }}>
                <span className="chart-value">78%</span>
                <span className="chart-label">Feb</span>
              </div>
              <div className="chart-bar" style={{ height: '90%' }}>
                <span className="chart-value">90%</span>
                <span className="chart-label">Mar</span>
              </div>
              <div className="chart-bar" style={{ height: '82%' }}>
                <span className="chart-value">82%</span>
                <span className="chart-label">Apr</span>
              </div>
              <div className="chart-bar" style={{ height: '87%' }}>
                <span className="chart-value">87%</span>
                <span className="chart-label">May</span>
              </div>
              <div className="chart-bar" style={{ height: '92%' }}>
                <span className="chart-value">92%</span>
                <span className="chart-label">Jun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
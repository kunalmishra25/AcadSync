import React from "react";
import "./Reports.css";

const Reports = () => {
  return (
    <div className="reports-page">
      <div className="page-header">
        <h2>Generate Reports</h2>
        <p>Create comprehensive reports on attendance, performance, and analytics</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="actions-bar">
            <h3>Available Reports</h3>
          </div>

          <div className="reports-grid">
            <div className="report-card">
              <h4>Student Performance Report</h4>
              <p>Generate detailed performance analytics for all students</p>
              <button className="btn">Generate Report</button>
            </div>
            
            <div className="report-card">
              <h4>Attendance Report</h4>
              <p>View attendance statistics and trends across all courses</p>
              <button className="btn">Generate Report</button>
            </div>
            
            <div className="report-card">
              <h4>Faculty Report</h4>
              <p>Comprehensive faculty performance and workload analysis</p>
              <button className="btn">Generate Report</button>
            </div>
            
            <div className="report-card">
              <h4>Course Analytics</h4>
              <p>Detailed course enrollment and completion statistics</p>
              <button className="btn">Generate Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
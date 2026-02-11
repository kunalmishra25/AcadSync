import React from "react";
import "./StudentMarks.css";

const StudentMarks = () => {
  // Sample marks data
  const marksData = [
    { 
      course: "Computer Science 101", 
      assignments: 85, 
      midterm: 78, 
      final: 88, 
      total: 84, 
      grade: "A-" 
    },
    { 
      course: "Data Structures", 
      assignments: 92,
      midterm: 85, 
      final: 90, 
      total: 89, 
      grade: "A" 
    },
    { 
      course: "Web Development", 
      assignments: 88, 
      midterm: 75, 
      final: 82, 
      total: 82, 
      grade: "B+" 
    },
    { 
      course: "Database Systems", 
      assignments: 79, 
      midterm: 72, 
      final: 80, 
      total: 77, 
      grade: "B" 
    },
    { 
      course: "Software Engineering", 
      assignments: 94, 
      midterm: 88, 
      final: 91, 
      total: 91, 
      grade: "A" 
    }
  ];

  return (
    <div className="student-marks-page">
      <div className="page-header">
        <h2>Grades & Marks</h2>
        <p>View your academic performance and grades across all courses</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="marks-summary">
            <div className="summary-card">
              <h3>Current GPA</h3>
              <div className="marks-value">8.4</div>
              <div className="marks-status good">Good Standing</div>
            </div>
            <div className="summary-card">
              <h3>Highest Grade</h3>
              <div className="marks-grade">A+</div>
              <div className="marks-detail">Software Engineering</div>
            </div>
            <div className="summary-card">
              <h3>Overall Performance</h3>
              <div className="marks-percentage">85%</div>
              <div className="marks-detail">Good</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Course-wise Marks</h3>
          </div>

          <div className="marks-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Assignments</th>
                  <th>Midterm</th>
                  <th>Final</th>
                  <th>Total</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {marksData.map((course, index) => (
                  <tr key={index}>
                    <td>{course.course}</td>
                    <td>{course.assignments}</td>
                    <td>{course.midterm}</td>
                    <td>{course.final}</td>
                    <td>{course.total}</td>
                    <td>
                      <span className={`grade-badge ${
                        course.grade.startsWith('A') ? 'excellent' : 
                        course.grade.startsWith('B') ? 'good' : 
                        course.grade.startsWith('C') ? 'average' : 'poor'
                      }`}>
                        {course.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="actions-bar" style={{ marginTop: "2rem" }}>
            <h3>Semester Performance</h3>
          </div>

          <div className="performance-chart">
            <div className="chart-container">
              <div className="chart-bar" style={{ height: '75%' }}>
                <span className="chart-value">7.2</span>
                <span className="chart-label">Sem 1</span>
              </div>
              <div className="chart-bar" style={{ height: '82%' }}>
                <span className="chart-value">8.5</span>
                <span className="chart-label">Sem 2</span>
              </div>
              <div className="chart-bar" style={{ height: '88%' }}>
                <span className="chart-value">7.9</span>
                <span className="chart-label">Sem 3</span>
              </div>
              <div className="chart-bar" style={{ height: '85%' }}>
                <span className="chart-value">8.2</span>
                <span className="chart-label">Sem 4</span>
              </div>
              <div className="chart-bar" style={{ height: '90%' }}>
                <span className="chart-value">8.3</span>
                <span className="chart-label">Sem 5</span>
              </div>
              <div className="chart-bar current" style={{ height: '87%' }}>
                <span className="chart-value">7.7</span>
                <span className="chart-label">Current</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMarks;
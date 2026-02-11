import React, { useState } from "react";
import "./FacultyGrades.css";

const FacultyGrades = () => {
  const [editingRow, setEditingRow] = useState(null);
  const [editData, setEditData] = useState({});
  // Sample grades data
  const [gradesData, setGradesData] = useState([
    { 
      student: "Arjun Sharma", 
      rollId: "CS2021001",
      course: "Data Structures",
      assignments: 85, 
      midterm: 78, 
      final: 88, 
      total: 84, 
      grade: "A-" 
    },
    { 
      student: "Priya Patel", 
      rollId: "CS2021002",
      course: "Data Structures",
      assignments: 92, 
      midterm: 85, 
      final: 90, 
      total: 89, 
      grade: "A" 
    },
    { 
      student: "Rohit Kumar", 
      rollId: "CS2021003",
      course: "Data Structures",
      assignments: 88, 
      midterm: 75, 
      final: 82, 
      total: 82, 
      grade: "B+" 
    },
    { 
      student: "Ananya Singh", 
      rollId: "CS2021004",
      course: "Data Structures",
      assignments: 79, 
      midterm: 72, 
      final: 80, 
      total: 77, 
      grade: "B" 
    }
  ]);

  const handleEdit = (index) => {
    setEditingRow(index);
    setEditData(gradesData[index]);
  };

  const handleSave = (index) => {
    const newGradesData = [...gradesData];
    const total = Math.round((editData.assignments + editData.midterm + editData.final) / 3);
    let grade = 'B+';
    if (total >= 90) grade = 'O';
    else if (total >= 80) grade = 'A+';
    else if (total >= 70) grade = 'A';
    else grade = 'B+';
    
    newGradesData[index] = { ...editData, total, grade };
    setGradesData(newGradesData);
    setEditingRow(null);
  };

  const handleCancel = () => {
    setEditingRow(null);
    setEditData({});
  };

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: parseInt(value) || 0 });
  };

  return (
    <div className="faculty-grades-page">
      <div className="page-header">
        <h2>Grade Management</h2>
        <p>Enter and manage student grades, create assessments, and track academic performance</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="grades-summary">
            <div className="summary-card">
              <h3>Total Students</h3>
              <div className="grades-value">160</div>
              <div className="grades-detail">Across All Courses</div>
            </div>
            <div className="summary-card">
              <h3>Average Grade</h3>
              <div className="grades-grade">B+</div>
              <div className="grades-detail">Class Performance</div>
            </div>
            <div className="summary-card">
              <h3>Pending Grades</h3>
              <div className="grades-percentage">12</div>
              <div className="grades-detail">Assignments to Grade</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Student Grades - Data Structures</h3>
            <button className="add-grade-btn">Add New Grade</button>
          </div>

          <div className="grades-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Roll ID</th>
                  <th>Assignments</th>
                  <th>Midterm</th>
                  <th>Final</th>
                  <th>Total</th>
                  <th>Grade</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {gradesData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.student}</td>
                    <td>{student.rollId}</td>
                    <td>
                      {editingRow === index ? (
                        <input 
                          type="number" 
                          value={editData.assignments} 
                          onChange={(e) => handleInputChange('assignments', e.target.value)}
                          className="edit-input"
                        />
                      ) : (
                        student.assignments
                      )}
                    </td>
                    <td>
                      {editingRow === index ? (
                        <input 
                          type="number" 
                          value={editData.midterm} 
                          onChange={(e) => handleInputChange('midterm', e.target.value)}
                          className="edit-input"
                        />
                      ) : (
                        student.midterm
                      )}
                    </td>
                    <td>
                      {editingRow === index ? (
                        <input 
                          type="number" 
                          value={editData.final} 
                          onChange={(e) => handleInputChange('final', e.target.value)}
                          className="edit-input"
                        />
                      ) : (
                        student.final
                      )}
                    </td>
                    <td>{student.total}</td>
                    <td>
                      <span className={`grade-badge ${
                        student.grade.startsWith('A') ? 'excellent' : 
                        student.grade.startsWith('B') ? 'good' : 
                        student.grade.startsWith('C') ? 'average' : 'poor'
                      }`}>
                        {student.grade}
                      </span>
                    </td>
                    <td>
                      {editingRow === index ? (
                        <div className="edit-actions">
                          <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                        </div>
                      ) : (
                        <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="actions-bar" style={{ marginTop: "2rem" }}>
            <h3>Grade Distribution</h3>
          </div>

          <div className="grade-chart">
            <div className="chart-container">
              <div className="chart-bar" style={{ height: '60%' }}>
                <span className="chart-value">15</span>
                <span className="chart-label">A</span>
              </div>
              <div className="chart-bar" style={{ height: '75%' }}>
                <span className="chart-value">22</span>
                <span className="chart-label">B</span>
              </div>
              <div className="chart-bar" style={{ height: '45%' }}>
                <span className="chart-value">12</span>
                <span className="chart-label">C</span>
              </div>
              <div className="chart-bar" style={{ height: '25%' }}>
                <span className="chart-value">5</span>
                <span className="chart-label">D</span>
              </div>
              <div className="chart-bar" style={{ height: '15%' }}>
                <span className="chart-value">2</span>
                <span className="chart-label">F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyGrades;
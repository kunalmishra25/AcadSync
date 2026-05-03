import React, { useState } from "react";
import "./FacultyGrades.css";
import { facultyGradeSeedBySubject, getFacultySubjects } from "./facultyData";

const FacultyGrades = () => {
  const subjects = getFacultySubjects();
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [editingRow, setEditingRow] = useState(null);
  const [editData, setEditData] = useState({});
  const [gradesBySubject, setGradesBySubject] = useState(facultyGradeSeedBySubject);

  const gradesData = gradesBySubject[selectedSubject] || [];
  const averageTotal = gradesData.length
    ? Math.round(gradesData.reduce((sum, student) => sum + student.total, 0) / gradesData.length)
    : 0;
  const averageGrade = averageTotal >= 90 ? 'O' : averageTotal >= 80 ? 'A+' : averageTotal >= 70 ? 'A' : 'B+';
  const pendingGrades = gradesData.filter(
    (student) => student.assignments === null || student.midterm === null || student.final === null
  ).length;

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setEditingRow(null);
    setEditData({});
  };

  const handleEdit = (index) => {
    setEditingRow(index);
    setEditData(gradesData[index]);
  };

  const handleSave = (index) => {
    const total = Math.round((editData.assignments + editData.midterm + editData.final) / 3);
    let grade = 'B+';
    if (total >= 90) grade = 'O';
    else if (total >= 80) grade = 'A+';
    else if (total >= 70) grade = 'A';

    setGradesBySubject((prev) => ({
      ...prev,
      [selectedSubject]: prev[selectedSubject].map((student, studentIndex) =>
        studentIndex === index ? { ...editData, total, grade } : student
      ),
    }));
    setEditingRow(null);
  };

  const handleCancel = () => {
    setEditingRow(null);
    setEditData({});
  };

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: parseInt(value, 10) || 0 });
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
              <div className="grades-value">{gradesData.length}</div>
              <div className="grades-detail">For {selectedSubject}</div>
            </div>
            <div className="summary-card">
              <h3>Average Grade</h3>
              <div className="grades-grade">{averageGrade}</div>
              <div className="grades-detail">Current subject performance</div>
            </div>
            <div className="summary-card">
              <h3>Pending Grades</h3>
              <div className="grades-percentage">{pendingGrades}</div>
              <div className="grades-detail">Assessments to complete</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Student Grades - {selectedSubject}</h3>
            <select
              className="subject-dropdown"
              value={selectedSubject}
              onChange={(e) => handleSubjectChange(e.target.value)}
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div className="grades-table">
          <div className="table-responsive">
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
                  <tr key={`${selectedSubject}-${student.rollId}`}>
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

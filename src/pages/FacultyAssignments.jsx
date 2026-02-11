import React, { useState } from 'react';
import './FacultyAssignments.css';

const subjects = {
  'Data Structures': [
    { id: 'S101', name: 'Aarav Sharma', status: 'submitted', marks: 85 },
    { id: 'S102', name: 'Priya Patel', status: 'submitted', marks: 92 },
    { id: 'S103', name: 'Arjun Singh', status: 'pending', marks: null },
    { id: 'S104', name: 'Kavya Reddy', status: 'submitted', marks: 78 },
    { id: 'S105', name: 'Rohan Gupta', status: 'pending', marks: null }
  ],
  'Database Systems': [
    { id: 'S101', name: 'Aarav Sharma', status: 'submitted', marks: 88 },
    { id: 'S102', name: 'Priya Patel', status: 'pending', marks: null },
    { id: 'S103', name: 'Arjun Singh', status: 'submitted', marks: 75 },
    { id: 'S104', name: 'Kavya Reddy', status: 'late', marks: 70 },
    { id: 'S105', name: 'Rohan Gupta', status: 'submitted', marks: 82 }
  ],
  'Web Development': [
    { id: 'S101', name: 'Aarav Sharma', status: 'pending', marks: null },
    { id: 'S102', name: 'Priya Patel', status: 'submitted', marks: 95 },
    { id: 'S103', name: 'Arjun Singh', status: 'submitted', marks: 89 },
    { id: 'S104', name: 'Kavya Reddy', status: 'submitted', marks: 91 },
    { id: 'S105', name: 'Rohan Gupta', status: 'late', marks: 65 }
  ]
};

function FacultyAssignments() {
  const [selectedSubject, setSelectedSubject] = useState('Data Structures');
  const [submissions, setSubmissions] = useState(subjects[selectedSubject]);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setSubmissions(subjects[subject]);
  };

  const updateMarks = (studentId, marks) => {
    setSubmissions(prev => prev.map(student => 
      student.id === studentId ? { ...student, marks: parseInt(marks) } : student
    ));
  };

  const saveMarks = () => {
    alert('Marks saved successfully!');
  };

  const submitted = submissions.filter(s => s.status === 'submitted' || s.status === 'late').length;
  const pending = submissions.filter(s => s.status === 'pending').length;

  return (
    <div className="faculty-assignments">
      <div className="assignments-header">
        <h1>Assignment Submissions</h1>
        <p>Track and grade student assignments by subject</p>
      </div>

      <div className="assignments-content">
        <div className="subject-selector">
          <label>Select Subject:</label>
          <select 
            value={selectedSubject} 
            onChange={(e) => handleSubjectChange(e.target.value)}
          >
            {Object.keys(subjects).map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div className="summary-stats">
          <div className="stat-box submitted">
            <h3>Submitted: {submitted}</h3>
          </div>
          <div className="stat-box pending">
            <h3>Pending: {pending}</h3>
          </div>
        </div>

        <table className="submissions-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Status</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <span className={`status ${student.status}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  {student.status !== 'pending' ? (
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={student.marks || ''}
                      onChange={(e) => updateMarks(student.id, e.target.value)}
                    />
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button className="save-btn" onClick={saveMarks}>
          Save Marks
        </button>
      </div>
    </div>
  );
}

export default FacultyAssignments;
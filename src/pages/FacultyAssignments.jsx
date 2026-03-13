import React, { useEffect, useState } from 'react';
import InlineMessage from "../components/InlineMessage";
import './FacultyAssignments.css';
import {
  getFacultySubjects,
  loadAssignmentStudents,
  saveAssignmentStudents,
} from "./facultyData";

function FacultyAssignments() {
  const subjects = getFacultySubjects();
  const [selectedSubject, setSelectedSubject] = useState('Data Structures');
  const [submissions, setSubmissions] = useState(() => loadAssignmentStudents('Data Structures'));
  const [message, setMessage] = useState({ text: '', type: 'success' });

  useEffect(() => {
    setSubmissions(loadAssignmentStudents(selectedSubject));
  }, [selectedSubject]);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  };

  const updateMarks = (studentId, marks) => {
    if (marks === '') {
      setSubmissions((prev) =>
        prev.map((student) =>
          student.id === studentId ? { ...student, marks: null } : student
        )
      );
      return;
    }

    const parsedMarks = Number(marks);
    if (!Number.isInteger(parsedMarks) || parsedMarks < 0 || parsedMarks > 100) {
      setMessage({ text: 'Marks must be between 0 and 100.', type: 'error' });
      return;
    }

    setSubmissions((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, marks: parsedMarks } : student
      )
    );
  };

  const saveMarks = () => {
    const invalidStudent = submissions.find(
      (student) =>
        student.status !== 'pending' &&
        (student.marks === null || student.marks < 0 || student.marks > 100)
    );

    if (invalidStudent) {
      setMessage({ text: `Enter valid marks for ${invalidStudent.name}.`, type: 'error' });
      return;
    }

    saveAssignmentStudents(selectedSubject, submissions);
    setMessage({ text: 'Marks saved successfully!', type: 'success' });
  };

  const submitted = submissions.filter((s) => s.status === 'submitted' || s.status === 'late').length;
  const pending = submissions.filter((s) => s.status === 'pending').length;

  return (
    <div className="faculty-assignments">
      <div className="assignments-header">
        <h1>Assignment Submissions</h1>
        <p>Track and grade student assignments by subject</p>
      </div>

      <div className="assignments-content">
        <InlineMessage
          message={message.text}
          type={message.type}
          onClose={() => setMessage({ text: '', type: 'success' })}
        />
        <div className="subject-selector">
          <label>Select Subject:</label>
          <select
            value={selectedSubject}
            onChange={(e) => handleSubjectChange(e.target.value)}
          >
            {subjects.map((subject) => (
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
            {submissions.map((student) => (
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
                      value={student.marks ?? ''}
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

import React, { useEffect, useState } from 'react';
import InlineMessage from "../components/InlineMessage";
import './FacultyAttendance.css';
import {
  getDefaultAttendanceStudents,
  getFacultySubjects,
} from "./facultyData";

const ATTENDANCE_KEY = 'faculty_attendance';

function FacultyAttendance() {
  const subjects = getFacultySubjects();
  const [selectedSubject, setSelectedSubject] = useState('Data Structures');
  const [students, setStudents] = useState(getDefaultAttendanceStudents('Data Structures'));
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [message, setMessage] = useState({ text: '', type: 'success' });

  useEffect(() => {
    const saved = localStorage.getItem(`${ATTENDANCE_KEY}_${selectedSubject}_${selectedDate}`);
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(getDefaultAttendanceStudents(selectedSubject));
    }
  }, [selectedDate, selectedSubject]);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setStudents(getDefaultAttendanceStudents(subject));
  };

  const updateStudent = (id, field, value) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  const saveAttendance = () => {
    localStorage.setItem(`${ATTENDANCE_KEY}_${selectedSubject}_${selectedDate}`, JSON.stringify(students));
    setMessage({ text: 'Attendance saved successfully!', type: 'success' });
  };

  return (
    <div className="faculty-attendance">
      <div className="attendance-header">
        <h1>Attendance Management</h1>
        <p>Track and manage student attendance for your classes</p>
      </div>

      <div className="attendance-content">
        <InlineMessage
          message={message.text}
          type={message.type}
          onClose={() => setMessage({ text: '', type: 'success' })}
        />
        <div className="class-selector">
          <div className="subject-selector">
            <label>Subject: </label>
            <select
              value={selectedSubject}
              onChange={(e) => handleSubjectChange(e.target.value)}
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div className="date-selector">
            <label>Date: </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-picker"
            />
          </div>
        </div>

        <div className="attendance-table-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <select
                      className="status-dropdown"
                      value={student.status}
                      onChange={(e) => updateStudent(student.id, 'status', e.target.value)}
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                      <option value="late">Late</option>
                      <option value="excused">Excused</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Add notes"
                      value={student.notes}
                      onChange={(e) => updateStudent(student.id, 'notes', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <button className="btn btn-primary" onClick={saveAttendance}>
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyAttendance;

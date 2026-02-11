import React, { useState, useEffect } from 'react';
import './FacultyAttendance.css';

const ATTENDANCE_KEY = 'faculty_attendance';

const subjectStudents = {
  'Data Structures': [
    { id: 'S101', name: 'Aarav Sharma', status: 'present', notes: '' },
    { id: 'S102', name: 'Priya Patel', status: 'present', notes: '' },
    { id: 'S103', name: 'Arjun Singh', status: 'present', notes: '' },
    { id: 'S104', name: 'Kavya Reddy', status: 'present', notes: '' },
    { id: 'S105', name: 'Rohan Gupta', status: 'present', notes: '' },
    { id: 'S106', name: 'Ananya Joshi', status: 'present', notes: '' },
    { id: 'S107', name: 'Vikram Kumar', status: 'present', notes: '' },
    { id: 'S108', name: 'Ishita Agarwal', status: 'present', notes: '' },
    { id: 'S109', name: 'Karan Mehta', status: 'present', notes: '' },
    { id: 'S110', name: 'Sneha Verma', status: 'present', notes: '' },
    { id: 'S111', name: 'Rahul Nair', status: 'present', notes: '' },
    { id: 'S112', name: 'Pooja Iyer', status: 'present', notes: '' },
    { id: 'S113', name: 'Aditya Rao', status: 'present', notes: '' },
    { id: 'S114', name: 'Neha Sinha', status: 'present', notes: '' },
    { id: 'S115', name: 'Siddharth Jain', status: 'present', notes: '' }
  ],
  'Database Systems': [
    { id: 'S101', name: 'Aarav Sharma', status: 'present', notes: '' },
    { id: 'S102', name: 'Priya Patel', status: 'present', notes: '' },
    { id: 'S103', name: 'Arjun Singh', status: 'present', notes: '' },
    { id: 'S104', name: 'Kavya Reddy', status: 'present', notes: '' },
    { id: 'S105', name: 'Rohan Gupta', status: 'present', notes: '' },
    { id: 'S106', name: 'Ananya Joshi', status: 'present', notes: '' },
    { id: 'S107', name: 'Vikram Kumar', status: 'present', notes: '' },
    { id: 'S108', name: 'Ishita Agarwal', status: 'present', notes: '' },
    { id: 'S109', name: 'Karan Mehta', status: 'present', notes: '' },
    { id: 'S110', name: 'Sneha Verma', status: 'present', notes: '' },
    { id: 'S111', name: 'Rahul Nair', status: 'present', notes: '' },
    { id: 'S112', name: 'Pooja Iyer', status: 'present', notes: '' }
  ],
  'Web Development': [
    { id: 'S101', name: 'Aarav Sharma', status: 'present', notes: '' },
    { id: 'S102', name: 'Priya Patel', status: 'present', notes: '' },
    { id: 'S103', name: 'Arjun Singh', status: 'present', notes: '' },
    { id: 'S104', name: 'Kavya Reddy', status: 'present', notes: '' },
    { id: 'S105', name: 'Rohan Gupta', status: 'present', notes: '' },
    { id: 'S106', name: 'Ananya Joshi', status: 'present', notes: '' },
    { id: 'S107', name: 'Vikram Kumar', status: 'present', notes: '' },
    { id: 'S108', name: 'Ishita Agarwal', status: 'present', notes: '' },
    { id: 'S109', name: 'Karan Mehta', status: 'present', notes: '' },
    { id: 'S110', name: 'Sneha Verma', status: 'present', notes: '' },
    { id: 'S111', name: 'Rahul Nair', status: 'present', notes: '' },
    { id: 'S112', name: 'Pooja Iyer', status: 'present', notes: '' },
    { id: 'S113', name: 'Aditya Rao', status: 'present', notes: '' },
    { id: 'S114', name: 'Neha Sinha', status: 'present', notes: '' }
  ]
};

function FacultyAttendance() {
  const [selectedSubject, setSelectedSubject] = useState('Data Structures');
  const [students, setStudents] = useState(subjectStudents[selectedSubject]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const saved = localStorage.getItem(`${ATTENDANCE_KEY}_${selectedSubject}_${selectedDate}`);
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(subjectStudents[selectedSubject]);
    }
  }, [selectedDate, selectedSubject]);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setStudents(subjectStudents[subject]);
  };

  const updateStudent = (id, field, value) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, [field]: value } : student
    ));
  };

  const saveAttendance = () => {
    localStorage.setItem(`${ATTENDANCE_KEY}_${selectedSubject}_${selectedDate}`, JSON.stringify(students));
    alert('Attendance saved successfully!');
  };

  return (
    <div className="faculty-attendance">
      <div className="attendance-header">
        <h1>Attendance Management</h1>
        <p>Track and manage student attendance for your classes</p>
      </div>

      <div className="attendance-content">
        <div className="class-selector">
          <div className="subject-selector">
            <label>Subject: </label>
            <select 
              value={selectedSubject} 
              onChange={(e) => handleSubjectChange(e.target.value)}
            >
              {Object.keys(subjectStudents).map(subject => (
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
              {students.map(student => (
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
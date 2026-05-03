import React, { useEffect, useState } from "react";
import ConfirmDialog from "../components/ConfirmDialog";
import InlineMessage from "../components/InlineMessage";

import "./ManageStudents.css";

const STUDENT_KEY = "cc_students";
const seedStudents = [
  { id: "S101", name: "Aarav Mehta", email: "aarav.mehta@acadsync.com", course: "B.Tech CSE", year: "1" },
  { id: "S102", name: "Isha Verma", email: "isha.verma@acadsync.com", course: "B.Sc Physics", year: "2" },
  { id: "S103", name: "Rohan Kapoor", email: "rohan.kapoor@acadsync.com", course: "MBA", year: "1" },
  { id: "S104", name: "Priya Sharma", email: "priya.sharma@acadsync.com", course: "B.Tech ECE", year: "3" },
  { id: "S105", name: "Arjun Singh", email: "arjun.singh@acadsync.com", course: "B.Com", year: "2" },
  { id: "S106", name: "Kavya Patel", email: "kavya.patel@acadsync.com", course: "M.Sc Chemistry", year: "1" },
  { id: "S107", name: "Vikram Gupta", email: "vikram.gupta@acadsync.com", course: "BBA", year: "3" }
];

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [stId, setStId] = useState("");
  const [stName, setStName] = useState("");
  const [stEmail, setStEmail] = useState("");
  const [stCourse, setStCourse] = useState("");
  const [stYear, setStYear] = useState("");
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [studentToDelete, setStudentToDelete] = useState(null);

  // Helpers to interact with localStorage (same keys as original)
  const getStudentsFromStorage = () => JSON.parse(localStorage.getItem(STUDENT_KEY) || "[]");
  const setStudentsToStorage = (list) => localStorage.setItem(STUDENT_KEY, JSON.stringify(list));

  const ensureSeedStudents = () => {
    const existing = getStudentsFromStorage();
    if (!existing || existing.length === 0) {
      setStudentsToStorage(seedStudents);
    }
  };

  useEffect(() => {
    ensureSeedStudents();
    setStudents(getStudentsFromStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render logic already handled by React state update
  const renderStudentsTable = () => {
    setStudents(getStudentsFromStorage());
  };

  const addStudentFromForm = () => {
    const id = stId.trim();
    const name = stName.trim();
    const email = stEmail.trim();
    const course = stCourse.trim();
    const year = stYear.toString().trim();

    if (!id || !name || !email || !course || !year) {
      setMessage({ text: "Please fill in all fields", type: "error" });
      return;
    }

    const current = getStudentsFromStorage();
    if (current.some((s) => s.id.toLowerCase() === id.toLowerCase())) {
      setMessage({ text: "Student ID already exists", type: "error" });
      return;
    }

    const updated = [...current, { id, name, email, course, year }];
    setStudentsToStorage(updated);
    renderStudentsTable();

    // Clear form fields (keeps same ids in DOM)
    setStId("");
    setStName("");
    setStEmail("");
    setStCourse("");
    setStYear("");

    setMessage({ text: "Student added successfully!", type: "success" });
  };

  const deleteStudent = (id) => {
    setStudentToDelete(id);
  };

  const confirmDeleteStudent = () => {
    const filtered = getStudentsFromStorage().filter((s) => s.id !== studentToDelete);
    setStudentsToStorage(filtered);
    renderStudentsTable();
    setStudentToDelete(null);
    setMessage({ text: "Student deleted successfully!", type: "success" });
  };

  const clearAll = () => {
    localStorage.removeItem(STUDENT_KEY);
    renderStudentsTable();
  };

  const resetToDefault = () => {
    setStudentsToStorage(seedStudents);
    renderStudentsTable();
  };

  return (
    <>
      <ConfirmDialog
        open={Boolean(studentToDelete)}
        title="Delete student"
        message="Are you sure you want to delete this student?"
        confirmText="Delete"
        onConfirm={confirmDeleteStudent}
        onCancel={() => setStudentToDelete(null)}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h2>Student Records Management</h2>
          <p>Add, edit, or remove student records and manage enrollments efficiently</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <InlineMessage message={message.text} type={message.type} onClose={() => setMessage({ text: "", type: "success" })} />
          <div className="actions-bar">
            <h3>Student Records</h3>
            <div>
              <button className="btn btn-outline" onClick={clearAll}>
                Clear All
              </button>
              <button className="btn" onClick={resetToDefault}>
                Reset to Default
              </button>
            </div>
          </div>

          <div className="form-row">
            <input id="stId" type="text" placeholder="ID" value={stId} onChange={(e) => setStId(e.target.value)} />
            <input id="stName" type="text" placeholder="Full Name" value={stName} onChange={(e) => setStName(e.target.value)} />
            <input id="stEmail" type="email" placeholder="Email" value={stEmail} onChange={(e) => setStEmail(e.target.value)} />
            <input id="stCourse" type="text" placeholder="Course" value={stCourse} onChange={(e) => setStCourse(e.target.value)} />
          </div>
          <div className="form-row form-row-submit">
            <input id="stYear" type="number" min="1" max="5" placeholder="Year" value={stYear} onChange={(e) => setStYear(e.target.value)} />
            <button className="btn" onClick={addStudentFromForm}>
              Add Student
            </button>
          </div>
          <div className="table-responsive">
            <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="studentsTbody">
              {students && students.length > 0 ? (
                students.map((s, idx) => (
                  <tr key={s.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <span className="badge">{s.id}</span>
                    </td>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.course}</td>
                    <td>Year {s.year}</td>
                    <td>
                      <button className="btn btn-danger" data-id={s.id} onClick={() => deleteStudent(s.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
            </table>
          </div>
        </div>
      </section>

    </>
  );
};

export default ManageStudents;

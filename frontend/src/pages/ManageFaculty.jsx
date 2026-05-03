import React, { useEffect, useState } from "react";
import ConfirmDialog from "../components/ConfirmDialog";
import InlineMessage from "../components/InlineMessage";

import "./ManageFaculty.css";

const FACULTY_KEY = "cc_faculty";
const seedFaculty = [
  { id: "F101", name: "Dr. Sharma", email: "sharma@acadsync.com", department: "CSE", designation: "Professor" },
  { id: "F102", name: "Prof. Iyer", email: "iyer@acadsync.com", department: "ECE", designation: "Associate Professor" },
  { id: "F103", name: "Dr. Patel", email: "patel@acadsync.com", department: "Mechanical", designation: "Assistant Professor" },
  { id: "F104", name: "Dr. Gupta", email: "gupta@acadsync.com", department: "Physics", designation: "Professor" },
  { id: "F105", name: "Prof. Singh", email: "singh@acadsync.com", department: "Mathematics", designation: "Associate Professor" },
  { id: "F106", name: "Dr. Reddy", email: "reddy@acadsync.com", department: "Chemistry", designation: "Assistant Professor" },
  { id: "F107", name: "Prof. Kumar", email: "kumar@acadsync.com", department: "Civil", designation: "Professor" }
];

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [facId, setFacId] = useState("");
  const [facName, setFacName] = useState("");
  const [facEmail, setFacEmail] = useState("");
  const [facDept, setFacDept] = useState("");
  const [facDesignation, setFacDesignation] = useState("");
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [facultyToDelete, setFacultyToDelete] = useState(null);

  const getFacultyFromStorage = () => JSON.parse(localStorage.getItem(FACULTY_KEY) || "[]");
  const setFacultyToStorage = (list) => localStorage.setItem(FACULTY_KEY, JSON.stringify(list));

  const ensureSeedFaculty = () => {
    const existing = getFacultyFromStorage();
    if (!existing || existing.length === 0) {
      setFacultyToStorage(seedFaculty);
    }
  };

  useEffect(() => {
    ensureSeedFaculty();
    setFaculty(getFacultyFromStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFacultyTable = () => {
    setFaculty(getFacultyFromStorage());
  };

  const addFacultyFromForm = () => {
    const id = facId.trim();
    const name = facName.trim();
    const email = facEmail.trim();
    const department = facDept.trim();
    const designation = facDesignation.trim();

    if (!id || !name || !email || !department || !designation) {
      setMessage({ text: "Please fill in all fields", type: "error" });
      return;
    }

    const current = getFacultyFromStorage();
    if (current.some((f) => f.id.toLowerCase() === id.toLowerCase())) {
      setMessage({ text: "Faculty ID already exists", type: "error" });
      return;
    }

    const updated = [...current, { id, name, email, department, designation }];
    setFacultyToStorage(updated);
    renderFacultyTable();

    setFacId("");
    setFacName("");
    setFacEmail("");
    setFacDept("");
    setFacDesignation("");

    setMessage({ text: "Faculty added successfully!", type: "success" });
  };

  const deleteFaculty = (id) => {
    setFacultyToDelete(id);
  };

  const confirmDeleteFaculty = () => {
    const filtered = getFacultyFromStorage().filter((f) => f.id !== facultyToDelete);
    setFacultyToStorage(filtered);
    renderFacultyTable();
    setFacultyToDelete(null);
    setMessage({ text: "Faculty deleted successfully!", type: "success" });
  };

  const clearAll = () => {
    localStorage.removeItem(FACULTY_KEY);
    renderFacultyTable();
  };

  const resetToDefault = () => {
    setFacultyToStorage(seedFaculty);
    renderFacultyTable();
  };

  return (
    <>
      <ConfirmDialog
        open={Boolean(facultyToDelete)}
        title="Delete faculty member"
        message="Are you sure you want to delete this faculty member?"
        confirmText="Delete"
        onConfirm={confirmDeleteFaculty}
        onCancel={() => setFacultyToDelete(null)}
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h2>Faculty Management</h2>
          <p>Add, edit, or remove faculty records and manage department assignments efficiently</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <InlineMessage message={message.text} type={message.type} onClose={() => setMessage({ text: "", type: "success" })} />
          <div className="actions-bar">
            <h3>Faculty Records</h3>
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
            <input type="text" placeholder="ID" value={facId} onChange={(e) => setFacId(e.target.value)} />
            <input type="text" placeholder="Full Name" value={facName} onChange={(e) => setFacName(e.target.value)} />
            <input type="email" placeholder="Email" value={facEmail} onChange={(e) => setFacEmail(e.target.value)} />
            <input type="text" placeholder="Department" value={facDept} onChange={(e) => setFacDept(e.target.value)} />
          </div>
          <div className="form-row form-row-submit">
            <input type="text" placeholder="Designation" value={facDesignation} onChange={(e) => setFacDesignation(e.target.value)} />
            <button className="btn" onClick={addFacultyFromForm}>
              Add Faculty
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
                <th>Department</th>
                <th>Designation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {faculty && faculty.length > 0 ? (
                faculty.map((f, idx) => (
                  <tr key={f.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <span className="badge">{f.id}</span>
                    </td>
                    <td>{f.name}</td>
                    <td>{f.email}</td>
                    <td>{f.department}</td>
                    <td>{f.designation}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteFaculty(f.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>
                    No faculty found.
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

export default ManageFaculty;

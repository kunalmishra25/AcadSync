import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CourseManagement.css";

const COURSE_STORAGE_KEY = "cc_courses";

const seedCourses = [
  { id: "CS101", name: "Introduction to Computer Science", department: "Computer Science", credits: "3", instructor: "Dr. Priya Sharma" },
  { id: "PH202", name: "Modern Physics", department: "Physics", credits: "4", instructor: "Dr. Rajesh Kumar" },
  { id: "BUS303", name: "Business Ethics", department: "Business", credits: "3", instructor: "Prof. Ananya Patel" },
  { id: "MA101", name: "Calculus I", department: "Mathematics", credits: "4", instructor: "Dr. Suresh Singh" },
  { id: "CH201", name: "Organic Chemistry", department: "Chemistry", credits: "3", instructor: "Dr. Meera Reddy" },
  { id: "EC301", name: "Digital Electronics", department: "Electronics", credits: "4", instructor: "Prof. Amit Gupta" },
  { id: "ME202", name: "Thermodynamics", department: "Mechanical", credits: "3", instructor: "Dr. Vikram Kumar" },
  { id: "CS201", name: "Data Structures", department: "Computer Science", credits: "4", instructor: "Dr. Priya Sharma" },
  { id: "EN101", name: "English Literature", department: "English", credits: "3", instructor: "Prof. Sarah Johnson" },
  { id: "BIO301", name: "Molecular Biology", department: "Biology", credits: "4", instructor: "Dr. Ravi Nair" }
];

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    department: "",
    credits: "",
    instructor: ""
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(COURSE_STORAGE_KEY) || "[]");
    if (!stored || stored.length === 0) {
      localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(seedCourses));
      setCourses(seedCourses);
    } else {
      setCourses(stored);
    }
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const addCourse = () => {
    const { id, name, department, credits, instructor } = form;
    if (!id || !name || !department || !credits || !instructor) {
      alert("Please fill all fields");
      return;
    }
    if (courses.some(c => c.id.toLowerCase() === id.toLowerCase())) {
      alert("Course ID already exists");
      return;
    }
    const newCourses = [...courses, { id, name, department, credits, instructor }];
    setCourses(newCourses);
    localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(newCourses));
    setForm({ id: "", name: "", department: "", credits: "", instructor: "" });
    alert("Course added successfully");
  };

  const deleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const filtered = courses.filter(c => c.id !== id);
      setCourses(filtered);
      localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(filtered));
      alert("Course deleted successfully");
    }
  };

  const clearAll = () => {
    localStorage.removeItem(COURSE_STORAGE_KEY);
    setCourses([]);
  };

  const resetToDefault = () => {
    localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(seedCourses));
    setCourses(seedCourses);
  };

  return (
    <>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h2>Course Management</h2>
          <p>Add, edit, or remove courses and manage course assignments</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="actions-bar">
            <h3>Manage Courses</h3>
            <Link to="/admin" className="btn btn-outline">Back to Dashboard</Link>
          </div>

          <div className="form-row">
            <input id="id" value={form.id} onChange={handleInputChange} type="text" placeholder="Course ID" />
            <input id="name" value={form.name} onChange={handleInputChange} type="text" placeholder="Course Name" />
            <input id="department" value={form.department} onChange={handleInputChange} type="text" placeholder="Department" />
            <input id="credits" value={form.credits} onChange={handleInputChange} type="number" min="1" max="6" placeholder="Credits" />
          </div>
          <div className="form-row" style={{ gridTemplateColumns: "1fr auto" }}>
            <input id="instructor" value={form.instructor} onChange={handleInputChange} type="text" placeholder="Instructor" />
            <button className="btn" onClick={addCourse}>Add Course</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Credits</th>
                <th>Instructor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, idx) => (
                <tr key={c.id}>
                  <td>{idx + 1}</td>
                  <td><span className="badge">{c.id}</span></td>
                  <td>{c.name}</td>
                  <td>{c.department}</td>
                  <td>{c.credits}</td>
                  <td>{c.instructor}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteCourse(c.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <button className="btn btn-outline" onClick={clearAll}>Clear All</button>
            <button className="btn" onClick={resetToDefault}>Reset to Default</button>
          </div>
        </div>
      </section>

    </>
  );
};

export default CourseManagement;

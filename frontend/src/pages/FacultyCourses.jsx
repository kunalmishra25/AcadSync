import React from "react";
import "./FacultyCourses.css";

const FacultyCourses = () => {
  // Sample courses data
  const coursesData = [
    { 
      id: "CS101", 
      name: "Computer Science Fundamentals", 
      students: 45, 
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "Room 201",
      semester: "Fall 2024"
    },
    { 
      id: "CS201", 
      name: "Data Structures & Algorithms", 
      students: 38, 
      schedule: "Tue, Thu - 11:00 AM",
      room: "Room 305",
      semester: "Fall 2024"
    },
    { 
      id: "CS301", 
      name: "Database Management Systems", 
      students: 42, 
      schedule: "Mon, Wed - 2:00 PM",
      room: "Room 102",
      semester: "Fall 2024"
    },
    { 
      id: "CS401", 
      name: "Software Engineering", 
      students: 35, 
      schedule: "Tue, Thu - 3:30 PM",
      room: "Room 204",
      semester: "Fall 2024"
    }
  ];

  return (
    <div className="faculty-courses-page">
      <div className="page-header">
        <h2>My Courses</h2>
        <p>Manage your assigned courses, view student lists, and track class progress</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="courses-summary">
            <div className="summary-card">
              <h3>Total Courses</h3>
              <div className="course-count">4</div>
              <div className="course-detail">Active Courses</div>
            </div>
            <div className="summary-card">
              <h3>Total Students</h3>
              <div className="course-count">160</div>
              <div className="course-detail">Enrolled Students</div>
            </div>
            <div className="summary-card">
              <h3>Average Class Size</h3>
              <div className="course-count">40</div>
              <div className="course-detail">Students per Course</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Course Management</h3>
          </div>

          <div className="courses-grid">
            {coursesData.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-header">
                  <h4>{course.name}</h4>
                  <div className="course-id">{course.id}</div>
                </div>
                <div className="course-info">
                  <div className="info-item">
                    <span className="label">Students:</span>
                    <span className="value">{course.students}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Schedule:</span>
                    <span className="value">{course.schedule}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Room:</span>
                    <span className="value">{course.room}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Semester:</span>
                    <span className="value status">{course.semester}</span>
                  </div>
                </div>
                <div className="course-actions">
                  <button className="course-button primary">Manage Course</button>
                  <button className="course-button secondary">View Students</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCourses;
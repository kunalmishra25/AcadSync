import React from "react";
import "./StudentCourses.css";

const StudentCourses = () => {
  // Sample courses data
  const coursesData = [
    {
      id: "CS101",
      title: "Computer Science 101",
      instructor: "Dr. Rajesh Verma",
      credits: 4,
      progress: 65,
      status: "In Progress"
    },
    {
      id: "DS201",
      title: "Data Structures",
      instructor: "Prof. Ananya Patel",
      credits: 4,
      progress: 70,
      status: "In Progress"
    },
    {
      id: "WD301",
      title: "Web Development",
      instructor: "Dr. Priya Sharma",
      credits: 3,
      progress: 55,
      status: "In Progress"
    },
    {
      id: "DB401",
      title: "Database Systems",
      instructor: "Dr. Sunil Mehta",
      credits: 4,
      progress: 60,
      status: "In Progress"
    },
    {
      id: "SE501",
      title: "Software Engineering",
      instructor: "Prof. Vikram Iyer",
      credits: 3,
      progress: 75,
      status: "In Progress"
    }
  ];

  return (
    <div className="student-courses-page">
      <div className="page-header">
        <h2>My Courses</h2>
        <p>View and manage your enrolled courses</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="courses-summary">
            <div className="summary-card">
              <h3>Total Courses</h3>
              <div className="course-count">{coursesData.length}</div>
              <div className="course-detail">Current Semester</div>
            </div>
            <div className="summary-card">
              <h3>Total Credits</h3>
              <div className="course-count">
                {coursesData.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <div className="course-detail">18 Credits Required</div>
            </div>
            <div className="summary-card">
              <h3>Average Progress</h3>
              <div className="course-percentage">
                {Math.round(
                  coursesData.reduce((sum, course) => sum + course.progress, 0) /
                    coursesData.length
                )}%
              </div>
              <div className="course-detail">Across All Courses</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Enrolled Courses</h3>
          </div>

          <div className="courses-grid">
            {coursesData.map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-header">
                  <h4>{course.title}</h4>
                  <span className="course-id">{course.id}</span>
                </div>
                <div className="course-info">
                  <div className="info-item">
                    <span className="label">Instructor:</span>
                    <span className="value">{course.instructor}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Credits:</span>
                    <span className="value">{course.credits}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Status:</span>
                    <span className="value status">{course.status}</span>
                  </div>
                </div>
                <div className="course-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="course-actions">
                  <button className="course-button primary">View Materials</button>
                  <button className="course-button secondary">Discussion</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourses;
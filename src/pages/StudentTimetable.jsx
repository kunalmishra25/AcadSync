import React, { useState } from "react";
import "./StudentTimetable.css";

const StudentTimetable = () => {
  const [activeDay, setActiveDay] = useState("Monday");
  
  // Sample timetable data
  const timetableData = {
    Monday: [
      { time: "09:00 - 10:30", course: "Computer Science 101", room: "Room A101", instructor: "Dr. Rajesh Verma" },
      { time: "11:00 - 12:30", course: "Data Structures", room: "Room B205", instructor: "Prof. Ananya Patel" },
      { time: "14:00 - 15:30", course: "Web Development", room: "Lab C304", instructor: "Dr. Priya Sharma" }
    ],
    Tuesday: [
      { time: "09:00 - 10:30", course: "Database Systems", room: "Room A105", instructor: "Dr. Sunil Mehta" },
      { time: "11:00 - 12:30", course: "Software Engineering", room: "Room B201", instructor: "Prof. Vikram Iyer" }
    ],
    Wednesday: [
      { time: "09:00 - 10:30", course: "Computer Science 101", room: "Room A101", instructor: "Dr. Rajesh Verma" },
      { time: "11:00 - 12:30", course: "Data Structures", room: "Room B205", instructor: "Prof. Ananya Patel" },
      { time: "14:00 - 16:30", course: "Programming Lab", room: "Lab C302", instructor: "Mr. Arjun Kumar" }
    ],
    Thursday: [
      { time: "09:00 - 10:30", course: "Database Systems", room: "Room A105", instructor: "Dr. Sunil Mehta" },
      { time: "11:00 - 12:30", course: "Software Engineering", room: "Room B201", instructor: "Prof. Vikram Iyer" },
      { time: "14:00 - 15:30", course: "Web Development", room: "Lab C304", instructor: "Dr. Priya Sharma" }
    ],
    Friday: [
      { time: "10:00 - 11:30", course: "Project Meeting", room: "Room D105", instructor: "Prof. Neha Gupta" },
      { time: "13:00 - 14:30", course: "Programming Lab", room: "Lab C302", instructor: "Mr. Arjun Kumar" }
    ]
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="student-timetable-page">
      <div className="page-header">
        <h2>Class Timetable</h2>
        <p>View your weekly class schedule and room assignments</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="timetable-nav">
            {days.map((day) => (
              <button
                key={day}
                className={`day-button ${activeDay === day ? "active" : ""}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="timetable-container">
            <div className="day-schedule">
              <h3>{activeDay}'s Schedule</h3>
              
              {timetableData[activeDay].length > 0 ? (
                <div className="schedule-cards">
                  {timetableData[activeDay].map((session, index) => (
                    <div className="schedule-card" key={index}>
                      <div className="time-slot">{session.time}</div>
                      <div className="course-info">
                        <h4>{session.course}</h4>
                        <div className="course-details">
                          <span><i className="fas fa-map-marker-alt"></i> {session.room}</span>
                          <span><i className="fas fa-user"></i> {session.instructor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-classes">
                  <p>No classes scheduled for {activeDay}.</p>
                </div>
              )}
            </div>

            <div className="weekly-overview">
              <h3>Weekly Overview</h3>
              <div className="week-summary">
                <div className="summary-item">
                  <div className="summary-value">15</div>
                  <div className="summary-label">Total Classes</div>
                </div>
                <div className="summary-item">
                  <div className="summary-value">5</div>
                  <div className="summary-label">Courses</div>
                </div>
                <div className="summary-item">
                  <div className="summary-value">24</div>
                  <div className="summary-label">Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTimetable;
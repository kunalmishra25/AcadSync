import React, { useState, useEffect } from "react";
import "./StudentAnnouncement.css";

const StudentAnnouncement = () => {
  const [announcements, setAnnouncements] = useState(() => {
    const savedAnnouncements = localStorage.getItem('announcements');
    if (savedAnnouncements) {
      return JSON.parse(savedAnnouncements);
    } else {
      return [
        {
          id: 1,
          title: "End of Semester Examination Schedule",
          content: "The end of semester examinations will begin on June 15th. Please check the examination portal for your individual schedule.",
          target: "All Students",
          date: "2023-05-20",
          status: "Active"
        },
        {
          id: 2,
          title: "Faculty Development Program",
          content: "A three-day faculty development program on 'Modern Teaching Methodologies' will be conducted from June 5th to 7th.",
          target: "Faculty",
          date: "2023-05-18",
          status: "Active"
        }
      ];
    }
  });

  // Filter announcements for students only
  const studentAnnouncements = announcements.filter(
    announcement => announcement.target === "All Students" || 
                   announcement.target === "First Year" || 
                   announcement.target === "Second Year" || 
                   announcement.target === "Third Year" || 
                   announcement.target === "Final Year"
  );

  return (
    <div className="student-announcements-page">
      <div className="page-header">
        <h2>Announcements</h2>
        <p>View important announcements from the administration and faculty</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="actions-bar">
            <h3>Recent Announcements</h3>
          </div>

          <div className="announcements-list">
            {studentAnnouncements.length > 0 ? (
              studentAnnouncements.map(announcement => (
                <div className="announcement-card" key={announcement.id}>
                  <div className="announcement-header">
                    <h4>{announcement.title}</h4>
                    <span className="badge">{announcement.target}</span>
                  </div>
                  <div className="announcement-content">
                    <p>{announcement.content}</p>
                  </div>
                  <div className="announcement-footer">
                    <span className="announcement-date">Posted on: {announcement.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-announcements">
                <p>No announcements available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAnnouncement;
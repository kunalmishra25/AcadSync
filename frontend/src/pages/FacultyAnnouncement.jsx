import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyAnnouncement.css';

function FacultyAnnouncement() {
  const navigate = useNavigate();

  return (
    <div className="faculty-announcement">
      {/* Header Section */}
      <div className="announcement-header">
        <h1>Faculty Announcements</h1>
        <p>Create and manage announcements for your students and classes</p>
      </div>

      {/* Announcements Section */}
      <div className="announcements-section">
        <h2>Your Announcements</h2>
        <p>Create, edit, and manage announcements for your students</p>
        
        <div className="announcements-list">
          <div className="announcement-card">
            <div className="announcement-header">
              <h3>Midterm Exam Schedule</h3>
              <span className="date-badge">Posted: May 15, 2023</span>
            </div>
            <p className="announcement-content">
              The midterm exams for all classes will be held from June 1-5, 2023. Please check the detailed schedule attached and prepare your students accordingly.
            </p>
            <div className="announcement-actions">
              <button className="action-btn edit-btn">Edit</button>
              <button className="action-btn delete-btn">Delete</button>
              <button className="action-btn view-btn">View Details</button>
            </div>
          </div>

          <div className="announcement-card">
            <div className="announcement-header">
              <h3>Assignment Submission Deadline</h3>
              <span className="date-badge">Posted: May 10, 2023</span>
            </div>
            <p className="announcement-content">
              Reminder to all students: The deadline for submitting the research paper is May 20, 2023. Late submissions will be penalized as per department policy.
            </p>
            <div className="announcement-actions">
              <button className="action-btn edit-btn">Edit</button>
              <button className="action-btn delete-btn">Delete</button>
              <button className="action-btn view-btn">View Details</button>
            </div>
          </div>

          <div className="announcement-card">
            <div className="announcement-header">
              <h3>Guest Lecture Series</h3>
              <span className="date-badge">Posted: May 5, 2023</span>
            </div>
            <p className="announcement-content">
              We are pleased to announce a series of guest lectures by industry experts starting next week. Attendance is mandatory for all students.
            </p>
            <div className="announcement-actions">
              <button className="action-btn edit-btn">Edit</button>
              <button className="action-btn delete-btn">Delete</button>
              <button className="action-btn view-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Announcement Section */}
      <div className="create-announcement-section">
        <h2>Create New Announcement</h2>
        <p>Fill out the form below to create a new announcement</p>
        
        <form className="announcement-form">
          <div className="form-group">
            <label htmlFor="title">Announcement Title</label>
            <input type="text" id="title" placeholder="Enter announcement title" />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">Announcement Content</label>
            <textarea id="content" rows="6" placeholder="Enter announcement content"></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="target">Target Audience</label>
            <select id="target">
              <option value="">Select target audience</option>
              <option value="all">All Students</option>
              <option value="class1">Computer Science - Year 1</option>
              <option value="class2">Computer Science - Year 2</option>
              <option value="class3">Computer Science - Year 3</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Publish Announcement</button>
            <button type="button" className="btn btn-secondary">Save as Draft</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FacultyAnnouncement;
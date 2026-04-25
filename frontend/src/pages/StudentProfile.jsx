import React from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  // Sample student data
  const studentData = {
    name: "Rahul Sharma",
    id: "STU2023001",
    email: "rahul.sharma@chitkara.edu.in",
    phone: "+91 98765 43210",
    department: "Computer Science & Engineering",
    batch: "2023-2027",
    advisor: "Dr. Priya Verma",
    address: "123, Sector 14, Chandigarh, Punjab - 160014",
    dateOfBirth: "15/05/1999",
    enrollmentDate: "01/09/2023"
  };

  return (
    <div className="student-profile-page">
      <div className="page-header">
        <h2>My Profile</h2>
        <p>View and manage your personal information</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="profile-container">
            <div className="profile-sidebar">
              <div className="profile-image">
                <div className="avatar">
                  {studentData.name.split(" ").map(name => name[0]).join("")}
                </div>
              </div>
              <h3>{studentData.name}</h3>
              <p className="student-id">{studentData.id}</p>
              <p className="student-department">{studentData.department}</p>
              <div className="profile-actions">
                <button className="profile-button primary">Edit Profile</button>
                <button className="profile-button secondary">Change Password</button>
              </div>
            </div>

            <div className="profile-details">
              <div className="section">
                <h3>Personal Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Full Name</span>
                    <span className="value">{studentData.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Email Address</span>
                    <span className="value">{studentData.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Phone Number</span>
                    <span className="value">{studentData.phone}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Date of Birth</span>
                    <span className="value">{studentData.dateOfBirth}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Address</span>
                    <span className="value">{studentData.address}</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>Academic Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Student ID</span>
                    <span className="value">{studentData.id}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Department</span>
                    <span className="value">{studentData.department}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Batch</span>
                    <span className="value">{studentData.batch}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Academic Advisor</span>
                    <span className="value">{studentData.advisor}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Enrollment Date</span>
                    <span className="value">{studentData.enrollmentDate}</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>Documents</h3>
                <div className="documents-list">
                  <div className="document-item">
                    <div className="document-icon"></div>
                    <div className="document-info">
                      <h4>Admission Letter</h4>
                      <p>Uploaded on 15/08/2023</p>
                    </div>
                    <button className="document-button">View</button>
                  </div>
                  <div className="document-item">
                    <div className="document-icon"></div>
                    <div className="document-info">
                      <h4>ID Card Copy</h4>
                      <p>Uploaded on 20/08/2023</p>
                    </div>
                    <button className="document-button">View</button>
                  </div>
                  <div className="document-item">
                    <div className="document-icon"></div>
                    <div className="document-info">
                      <h4>Previous Transcripts</h4>
                      <p>Uploaded on 25/08/2023</p>
                    </div>
                    <button className="document-button">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
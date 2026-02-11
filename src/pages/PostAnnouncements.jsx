import React, { useState, useEffect } from "react";
import "./PostAnnouncements.css";

const PostAnnouncements = () => {
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

  useEffect(() => {
    localStorage.setItem('announcements', JSON.stringify(announcements));
  }, [announcements]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    target: "All Students"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({
      ...newAnnouncement,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const announcement = {
      id: announcements.length + 1,
      ...newAnnouncement,
      date: new Date().toISOString().split('T')[0],
      status: "Active"
    };
    
    setAnnouncements([announcement, ...announcements]);
    setNewAnnouncement({
      title: "",
      content: "",
      target: "All Students"
    });
  };
  
  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
  };

  return (
    <div className="post-announcements-page">
      <div className="page-header">
        <h2>Post Announcements</h2>
        <p>Create and manage important announcements for students and faculty members</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="actions-bar">
            <h3>Create New Announcement</h3>
          </div>

          <div className="announcement-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label htmlFor="title">Announcement Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Enter announcement title" 
                    value={newAnnouncement.title}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="target">Target Audience</label>
                  <select 
                    id="target" 
                    name="target"
                    value={newAnnouncement.target}
                    onChange={handleInputChange}
                  >
                    <option value="All Students">All Students</option>
                    <option value="Faculty">Faculty</option>
                    <option value="First Year">First Year Students</option>
                    <option value="Second Year">Second Year Students</option>
                    <option value="Third Year">Third Year Students</option>
                    <option value="Final Year">Final Year Students</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="content">Announcement Content</label>
                  <textarea 
                    id="content" 
                    name="content" 
                    placeholder="Enter announcement details" 
                    value={newAnnouncement.content}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn">Publish Announcement</button>
              </div>
            </form>
          </div>

          <div className="actions-bar" style={{ marginTop: "3rem" }}>
            <h3>Recent Announcements</h3>
          </div>

          <div className="announcements-list">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Target</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map(announcement => (
                  <tr key={announcement.id}>
                    <td>
                      <div>{announcement.title}</div>
                      <div className="announcement-date">{announcement.date}</div>
                    </td>
                    <td><span className="badge">{announcement.target}</span></td>
                    <td>{announcement.date}</td>
                    <td>{announcement.status}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-danger" 
                        onClick={() => handleDelete(announcement.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAnnouncements;
import React from "react";
import "./FacultyResources.css";

const FacultyResources = () => {
  // Sample resources data
  const resourcesData = [
    { 
      title: "Course Syllabus Template", 
      type: "Template",
      category: "Planning",
      size: "2.5 MB",
      format: "PDF"
    },
    { 
      title: "Assignment Rubric Generator", 
      type: "Tool",
      category: "Assessment",
      size: "1.2 MB",
      format: "Excel"
    },
    { 
      title: "Lecture Presentation Template", 
      type: "Template",
      category: "Teaching",
      size: "5.8 MB",
      format: "PowerPoint"
    },
    { 
      title: "Student Feedback Form", 
      type: "Form",
      category: "Evaluation",
      size: "0.8 MB",
      format: "Word"
    },
    { 
      title: "Grade Calculator Spreadsheet", 
      type: "Tool",
      category: "Grading",
      size: "1.5 MB",
      format: "Excel"
    },
    { 
      title: "Online Learning Best Practices", 
      type: "Guide",
      category: "Teaching",
      size: "3.2 MB",
      format: "PDF"
    }
  ];

  return (
    <div className="faculty-resources-page">
      <div className="page-header">
        <h2>Teaching Resources</h2>
        <p>Access teaching materials, templates, tools and educational resources to enhance your teaching experience</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="resources-summary">
            <div className="summary-card">
              <h3>Total Resources</h3>
              <div className="resource-count">24</div>
              <div className="resource-detail">Available Resources</div>
            </div>
            <div className="summary-card">
              <h3>Templates</h3>
              <div className="resource-count">8</div>
              <div className="resource-detail">Ready to Use</div>
            </div>
            <div className="summary-card">
              <h3>Tools & Guides</h3>
              <div className="resource-count">16</div>
              <div className="resource-detail">Educational Tools</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Resource Library</h3>
            <button className="upload-btn">Upload Resource</button>
          </div>

          <div className="resources-grid">
            {resourcesData.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-header">
                  <div className="resource-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" fill="#4285f4"/>
                    </svg>
                  </div>
                  <div className="resource-info">
                    <h4>{resource.title}</h4>
                    <div className="resource-meta">
                      <span className="resource-type">{resource.type}</span>
                      <span className="resource-category">{resource.category}</span>
                    </div>
                  </div>
                </div>
                <div className="resource-details">
                  <div className="detail-item">
                    <span className="label">Format:</span>
                    <span className="value">{resource.format}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Size:</span>
                    <span className="value">{resource.size}</span>
                  </div>
                </div>
                <div className="resource-actions">
                  <button className="resource-button primary">Download</button>
                  <button className="resource-button secondary">Preview</button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

export default FacultyResources;
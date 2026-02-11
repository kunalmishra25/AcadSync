import React from "react";
import "./FooterPages.css";

const TechnicalSupport = () => {
  return (
    <div className="footer-page">
      <div className="footer-page-header">
        <h1>Technical Support</h1>
        <p>Need help with AcadSync? We're here to assist you with any technical issues or questions you may have.</p>
      </div>
      
      <div className="footer-page-content">
        <div className="content-card">
          <h3>🔧 Common Issues & Solutions</h3>
          <ul>
            <li><strong>Can't log in?</strong> Check your username and password. Reset password if needed.</li>
            <li><strong>Page not loading?</strong> Clear your browser cache and try again.</li>
            <li><strong>Data not saving?</strong> Ensure you have a stable internet connection.</li>
            <li><strong>Reports not generating?</strong> Make sure all required fields are filled.</li>
          </ul>
        </div>
        
        <div className="support-grid">
          <div className="contact-card">
            <h4>📧 Email Support</h4>
            <p><strong>support@acadsync.edu</strong></p>
            <p>Response within 24 hours</p>
          </div>
          <div className="contact-card">
            <h4>📞 Phone Support</h4>
            <p><strong>+1-555-0124</strong></p>
            <p>Mon-Fri, 9 AM - 6 PM</p>
          </div>
          <div className="contact-card">
            <h4>💬 Live Chat</h4>
            <p><strong>Available Now</strong></p>
            <p>Business hours only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;
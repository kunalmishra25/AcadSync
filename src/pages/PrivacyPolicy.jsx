import React from "react";
import "./FooterPages.css";

const PrivacyPolicy = () => {
  return (
    <div className="footer-page">
      <div className="footer-page-header">
        <h1>Privacy Policy</h1>
        <p>At AcadSync, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
      </div>
      
      <div className="footer-page-content">
        <div className="content-card">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include your name, email address, phone number, and academic information.</p>
        </div>
        
        <div className="content-card">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>
        </div>
        
        <div className="content-card">
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy.</p>
        </div>
        
        <div className="content-card">
          <h2>4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        </div>
        
        <div className="content-card">
          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also have additional rights depending on your location.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
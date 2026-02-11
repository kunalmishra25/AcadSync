import React from "react";
import "./FooterPages.css";

const TermsOfService = () => {
  return (
    <div className="footer-page">
      <div className="footer-page-header">
        <h1>Terms of Service</h1>
        <p>Welcome to AcadSync. By accessing or using our services, you agree to be bound by these Terms of Service.</p>
      </div>
      
      <div className="footer-page-content">
        <div className="content-card">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the AcadSync platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </div>
        
        <div className="content-card">
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials on AcadSync's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title.</p>
        </div>
        
        <div className="content-card">
          <h2>3. User Accounts</h2>
          <p>To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        </div>
        
        <div className="content-card">
          <h2>4. Privacy Policy</h2>
          <p>Your use of AcadSync is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.</p>
        </div>
        
        <div className="content-card">
          <h2>5. Modifications</h2>
          <p>AcadSync reserves the right to modify or replace these Terms of Service at any time. It is your responsibility to check the Terms periodically for changes.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
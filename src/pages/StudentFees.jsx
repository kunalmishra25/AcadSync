import React from "react";
import "./StudentFees.css";

const StudentFees = () => {
  // Sample fees data
  const feesData = [
    {
      id: "INV-2023-001",
      description: "Tuition Fee - Semester I",
      amount: 75000,
      dueDate: "15/09/2023",
      status: "paid"
    },
    {
      id: "INV-2023-002",
      description: "Library Fee - Annual",
      amount: 5000,
      dueDate: "30/09/2023",
      status: "paid"
    },
    {
      id: "INV-2023-003",
      description: "Lab Access Fee - Semester I",
      amount: 8500,
      dueDate: "15/10/2023",
      status: "paid"
    },
    {
      id: "INV-2024-001",
      description: "Tuition Fee - Semester II",
      amount: 75000,
      dueDate: "15/01/2024",
      status: "pending"
    },
    {
      id: "INV-2024-002",
      description: "Exam Fee - Semester II",
      amount: 3500,
      dueDate: "28/02/2024",
      status: "pending"
    }
  ];

  // Calculate totals
  const totalFees = feesData.reduce((sum, fee) => sum + fee.amount, 0);
  const paidFees = feesData
    .filter(fee => fee.status === "paid")
    .reduce((sum, fee) => sum + fee.amount, 0);
  const pendingFees = totalFees - paidFees;

  return (
    <div className="student-fees-page">
      <div className="page-header">
        <h2>Fees & Payments</h2>
        <p>View and manage your tuition fees and payment history</p>
      </div>

      <div className="main-content">
        <div className="container">
          <div className="fees-summary">
            <div className="summary-card">
              <h3>Total Fees</h3>
              <div className="fee-amount">₹{totalFees.toLocaleString('en-IN')}</div>
              <div className="fee-detail">Academic Year 2023-2024</div>
            </div>
            <div className="summary-card">
              <h3>Paid Amount</h3>
              <div className="fee-amount paid">₹{paidFees.toLocaleString('en-IN')}</div>
              <div className="fee-detail">Thank you for your payment</div>
            </div>
            <div className="summary-card">
              <h3>Pending Amount</h3>
              <div className="fee-amount pending">₹{pendingFees.toLocaleString('en-IN')}</div>
              <div className="fee-detail">Due within 30 days</div>
            </div>
          </div>

          <div className="actions-bar">
            <h3>Payment History</h3>
            <button className="action-button">Make Payment</button>
          </div>

          <div className="fees-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {feesData.map((fee, index) => (
                  <tr key={index}>
                    <td>{fee.id}</td>
                    <td>{fee.description}</td>
                    <td>₹{fee.amount.toLocaleString('en-IN')}</td>
                    <td>{fee.dueDate}</td>
                    <td>
                      <span className={`status-badge ${fee.status}`}>
                        {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="payment-methods">
            <h3>Payment Methods</h3>
            <div className="methods-container">
              <div className="method-card">
                <div className="method-icon credit-card"></div>
                <h4>Credit Card</h4>
                <p>Pay securely using your credit card</p>
                <button className="method-button">Pay Now</button>
              </div>
              <div className="method-card">
                <div className="method-icon bank"></div>
                <h4>Bank Transfer</h4>
                <p>Direct transfer to university account</p>
                <button className="method-button">View Details</button>
              </div>
              <div className="method-card">
                <div className="method-icon scholarship"></div>
                <h4>Scholarship</h4>
                <p>Apply for available scholarships</p>
                <button className="method-button">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;
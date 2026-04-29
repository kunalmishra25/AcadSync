import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./RoleSignup.css";

const RoleSignup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rollId, setRollId] = useState("");
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });
  const notificationTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const showNotification = (message, type) => {
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    setNotification({ show: true, message, type });

    notificationTimeoutRef.current = setTimeout(() => {
      setNotification((current) => ({ ...current, show: false }));
      notificationTimeoutRef.current = null;
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      showNotification("Please fill all required fields", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    if (password.length < 6) {
      showNotification("Password must be at least 6 characters long", "error");
      return;
    }

    if (password !== confirmPassword) {
      showNotification("Passwords do not match", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user) => user.email === email)) {
      showNotification("Email already registered. Please use a different email.", "error");
      return;
    }

    if (role === "Student" && rollId && users.some((user) => user.rollId === rollId)) {
      showNotification("Roll ID already registered. Please use a different Roll ID.", "error");
      return;
    }

    const newUser = {
      role,
      name,
      email,
      password,
      rollId: role === "Student" ? rollId : "",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showNotification("Account created successfully!", "success");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <div className="logo">
            <img src="/AS-logo.png" alt="AcadSync Logo" />
            <h1>AcadSync</h1>
          </div>
          <div className="create-account-pill">Create Account</div>
          <h2>Join AcadSync</h2>
          <p>
            Create your account to access your role-based dashboard. Students may also set a Roll ID
            to login easily.
          </p>
        </div>
        <div className="signup-right">
          <h2>Sign up</h2>
          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Select Role</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {role === "Student" && (
              <div className="form-group full-width">
                <label htmlFor="rollId">Roll ID (Students only)</label>
                <input
                  id="rollId"
                  type="text"
                  placeholder="Enter your Roll ID"
                  value={rollId}
                  onChange={(e) => setRollId(e.target.value)}
                />
                <small>Example: STU1001</small>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="create-account-btn" type="submit">
              Create account
            </button>
            <div className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
      <div className={`notification ${notification.type} ${notification.show ? "show" : ""}`}>
        {notification.message}
      </div>
    </div>
  );
};

export default RoleSignup;

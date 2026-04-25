import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./RoleLogin.css";

const RoleLogin = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });
  const notificationTimeoutRef = useRef(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const adminExists = users.some(
      (user) => user.email === "kunal1361.becse24@chitkara.edu.in" && user.role === "Admin"
    );

    if (!adminExists) {
      const adminUser = {
        role: "Admin",
        name: "Admin User",
        email: "kunal1361.becse24@chitkara.edu.in",
        password: "Kunal@7800",
      };

      users.push(adminUser);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const showNotification = (message, type) => {
    const shortMessages = {
      "Login successful!": "Success!",
      "Invalid credentials. Please try again.": "Invalid credentials!",
      "Please fill all fields": "Fill all fields!",
    };

    const shortMessage = shortMessages[message] || message;

    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    setNotification({ show: true, message: shortMessage, type });

    notificationTimeoutRef.current = setTimeout(() => {
      setNotification((current) => ({ ...current, show: false }));
      notificationTimeoutRef.current = null;
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      showNotification("Please fill all fields", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((currentUser) => {
      if (role !== currentUser.role) return false;

      if (role === "Student") {
        return (
          (currentUser.email === identifier || currentUser.rollId === identifier) &&
          currentUser.password === password
        );
      }

      return currentUser.email === identifier && currentUser.password === password;
    });

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      showNotification("Login successful!", "success");

      setTimeout(() => {
        if (user.role === "Admin") navigate("/admin/dashboard");
        else if (user.role === "Student") navigate("/student/dashboard");
        else if (user.role === "Faculty") navigate("/faculty/dashboard");
        else navigate("/login");
      }, 1000);
    } else {
      showNotification("Invalid credentials. Please try again.", "error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="logo">
            <img src="/AS-logo.png" alt="AcadSync Logo" />
            <h1>AcadSync</h1>
          </div>
          <div className="secure-login-pill">Secure Login Portal</div>
          <h2>Welcome back</h2>
          <p>
            Sign in to access your personalized AcadSync dashboard. Students can use Roll ID or
            Email. Faculty and Admin use Email.
          </p>
        </div>

        <div className="login-right">
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Select Role</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="identifier">{role === "Student" ? "Roll ID or Email" : "Email"}</label>
              <input
                id="identifier"
                type="text"
                placeholder={role === "Student" ? "Enter your Roll ID or Email" : "Enter your Email"}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
              {role === "Student" && <small>Students: you can use Roll ID or Email</small>}
              {role === "Faculty" && <small>Enter your official email</small>}
              {role === "Admin" && <small>Enter your official email</small>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>
            {role !== "Admin" && (
              <div className="signup-link">
                Don't have an account? <Link to="/signup">Create one</Link>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className={`notification ${notification.type} ${notification.show ? "show" : ""}`}>
        {notification.message}
      </div>
    </div>
  );
};

export default RoleLogin;

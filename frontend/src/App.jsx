import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";

// Layout for global header/footer
import Layout from "./components/Layout"; 

// Pages
import RoleLogin from "./components/RoleLogin";
import RoleSignup from "./components/RoleSignup";
import AdminDashboard from "./pages/AdminDashboard";
import ManageStudents from "./pages/ManageStudents";
import ManageFaculty from "./pages/ManageFaculty";
import CourseManagement from "./pages/CourseManagement";
import SystemSettings from "./pages/SystemSettings";
import TechnicalSupport from "./pages/TechnicalSupport";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PostAnnouncements from "./pages/PostAnnouncements";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";

// Student Pages
import StudentDashboard from "./pages/StudentDashboard";
import StudentAnnouncement from "./pages/StudentAnnouncement";
import StudentAttendance from "./pages/StudentAttendance";
import StudentMarks from "./pages/StudentMarks";
import StudentTimetable from "./pages/StudentTimetable";
import StudentFees from "./pages/StudentFees";
import StudentCourses from "./pages/StudentCourses";
import StudentProfile from "./pages/StudentProfile";

// Faculty Pages
import FacultyDashboard from "./pages/FacultyDashboard";
import FacultyAnnouncement from "./pages/FacultyAnnouncement";
import FacultyAttendance from "./pages/FacultyAttendance";
import FacultyAssignments from "./pages/FacultyAssignments";
import FacultyCourses from "./pages/FacultyCourses";
import FacultyGrades from "./pages/FacultyGrades";
import FacultyResources from "./pages/FacultyResources";

// ScrollToTop component to ensure pages start from the top when navigating
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Protected route component for role-based access control
const ProtectedRoute = ({ allowedRoles }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if user has required role
  if (!user || !user.role || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<RoleLogin />} />
        <Route path="/signup" element={<RoleSignup />} />

        {/* All pages with consistent layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" />} />
          
          {/* Admin Routes - Only accessible by Admin */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<ManageStudents />} />
            <Route path="faculty" element={<ManageFaculty />} />
            <Route path="courses" element={<CourseManagement />} />
            <Route path="settings" element={<SystemSettings />} />
            <Route path="announcements" element={<PostAnnouncements />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          
          {/* Student Routes - Only accessible by Student */}
          <Route element={<ProtectedRoute allowedRoles={["Student"]} />}>
            <Route path="student/dashboard" element={<StudentDashboard />} />
            <Route path="student/announcements" element={<StudentAnnouncement />} />
            <Route path="student/attendance" element={<StudentAttendance />} />
            <Route path="student/marks" element={<StudentMarks />} />
            <Route path="student/timetable" element={<StudentTimetable />} />
            <Route path="student/fees" element={<StudentFees />} />
            <Route path="student/courses" element={<StudentCourses />} />
            <Route path="student/profile" element={<StudentProfile />} />
          </Route>
          
          {/* Faculty Routes - Only accessible by Faculty */}
          <Route element={<ProtectedRoute allowedRoles={["Faculty"]} />}>
            <Route path="faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="faculty/announcements" element={<FacultyAnnouncement />} />
            <Route path="faculty/attendance" element={<FacultyAttendance />} />
            <Route path="faculty/assignments" element={<FacultyAssignments />} />
            <Route path="faculty/courses" element={<FacultyCourses />} />
            <Route path="faculty/grades" element={<FacultyGrades />} />
            <Route path="faculty/resources" element={<FacultyResources />} />
          </Route>
          
          {/* Footer pages - Accessible by all */}
          <Route path="technical-support" element={<TechnicalSupport />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
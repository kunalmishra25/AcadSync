const STUDENT_DASHBOARD_KEY = "student_dashboard_data";

const defaultStudentDashboardData = {
  attendance: [
    { course: "Computer Science 101", present: 32, absent: 3, percentage: 91 },
    { course: "Data Structures", present: 28, absent: 2, percentage: 93 },
    { course: "Web Development", present: 30, absent: 5, percentage: 86 },
    { course: "Database Systems", present: 25, absent: 5, percentage: 83 },
    { course: "Software Engineering", present: 22, absent: 3, percentage: 88 },
  ],
  marks: [
    { course: "Computer Science 101", total: 84 },
    { course: "Data Structures", total: 89 },
    { course: "Web Development", total: 82 },
    { course: "Database Systems", total: 77 },
    { course: "Software Engineering", total: 91 },
  ],
  work: {
    pendingAssignments: 5,
    upcomingTests: 2,
  },
};

export const getStudentDashboardData = () => {
  const stored = localStorage.getItem(STUDENT_DASHBOARD_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(STUDENT_DASHBOARD_KEY, JSON.stringify(defaultStudentDashboardData));
  return defaultStudentDashboardData;
};

export const getStudentDashboardStats = () => {
  const data = getStudentDashboardData();
  const attendanceAverage = Math.round(
    data.attendance.reduce((sum, item) => sum + item.percentage, 0) / data.attendance.length
  );
  const averageMarks =
    data.marks.reduce((sum, item) => sum + item.total, 0) / data.marks.length;
  const cgpa = (averageMarks / 10).toFixed(1);

  return {
    attendance: `${attendanceAverage}%`,
    cgpa,
    pendingAssignments: data.work.pendingAssignments,
    upcomingTests: data.work.upcomingTests,
  };
};

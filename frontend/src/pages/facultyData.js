export const FACULTY_ASSIGNMENTS_KEY = "faculty_assignments";

export const facultySubjectStudents = {
  "Data Structures": [
    { id: "S101", name: "Aarav Sharma" },
    { id: "S102", name: "Priya Patel" },
    { id: "S103", name: "Arjun Singh" },
    { id: "S104", name: "Kavya Reddy" },
    { id: "S105", name: "Rohan Gupta" },
    { id: "S106", name: "Ananya Joshi" },
    { id: "S107", name: "Vikram Kumar" },
    { id: "S108", name: "Ishita Agarwal" },
    { id: "S109", name: "Karan Mehta" },
    { id: "S110", name: "Sneha Verma" },
    { id: "S111", name: "Rahul Nair" },
    { id: "S112", name: "Pooja Iyer" },
    { id: "S113", name: "Aditya Rao" },
    { id: "S114", name: "Neha Sinha" },
    { id: "S115", name: "Siddharth Jain" },
  ],
  "Database Systems": [
    { id: "S101", name: "Aarav Sharma" },
    { id: "S102", name: "Priya Patel" },
    { id: "S103", name: "Arjun Singh" },
    { id: "S104", name: "Kavya Reddy" },
    { id: "S105", name: "Rohan Gupta" },
    { id: "S106", name: "Ananya Joshi" },
    { id: "S107", name: "Vikram Kumar" },
    { id: "S108", name: "Ishita Agarwal" },
    { id: "S109", name: "Karan Mehta" },
    { id: "S110", name: "Sneha Verma" },
    { id: "S111", name: "Rahul Nair" },
    { id: "S112", name: "Pooja Iyer" },
  ],
  "Web Development": [
    { id: "S101", name: "Aarav Sharma" },
    { id: "S102", name: "Priya Patel" },
    { id: "S103", name: "Arjun Singh" },
    { id: "S104", name: "Kavya Reddy" },
    { id: "S105", name: "Rohan Gupta" },
    { id: "S106", name: "Ananya Joshi" },
    { id: "S107", name: "Vikram Kumar" },
    { id: "S108", name: "Ishita Agarwal" },
    { id: "S109", name: "Karan Mehta" },
    { id: "S110", name: "Sneha Verma" },
    { id: "S111", name: "Rahul Nair" },
    { id: "S112", name: "Pooja Iyer" },
    { id: "S113", name: "Aditya Rao" },
    { id: "S114", name: "Neha Sinha" },
  ],
};

const facultyAssignmentOverrides = {
  "Data Structures": {
    S101: { status: "submitted", marks: 85 },
    S102: { status: "submitted", marks: 92 },
    S103: { status: "pending", marks: null },
    S104: { status: "submitted", marks: 78 },
    S105: { status: "pending", marks: null },
  },
  "Database Systems": {
    S101: { status: "submitted", marks: 88 },
    S102: { status: "pending", marks: null },
    S103: { status: "submitted", marks: 75 },
    S104: { status: "late", marks: 70 },
    S105: { status: "submitted", marks: 82 },
  },
  "Web Development": {
    S101: { status: "pending", marks: null },
    S102: { status: "submitted", marks: 95 },
    S103: { status: "submitted", marks: 89 },
    S104: { status: "submitted", marks: 91 },
    S105: { status: "late", marks: 65 },
  },
};

export const getFacultySubjects = () => Object.keys(facultySubjectStudents);

export const getDefaultAttendanceStudents = (subject) =>
  (facultySubjectStudents[subject] || []).map((student) => ({
    ...student,
    status: "present",
    notes: "",
  }));

export const getDefaultAssignmentStudents = (subject) =>
  (facultySubjectStudents[subject] || []).map((student) => {
    const override = facultyAssignmentOverrides[subject]?.[student.id];

    return {
      ...student,
      status: override?.status || "pending",
      marks: override?.marks ?? null,
    };
  });

export const loadAssignmentStudents = (subject) => {
  const saved = localStorage.getItem(`${FACULTY_ASSIGNMENTS_KEY}_${subject}`);

  if (saved) {
    return JSON.parse(saved);
  }

  return getDefaultAssignmentStudents(subject);
};

export const saveAssignmentStudents = (subject, students) => {
  localStorage.setItem(`${FACULTY_ASSIGNMENTS_KEY}_${subject}`, JSON.stringify(students));
};

export const facultyGradeSeedBySubject = {
  "Data Structures": [
    {
      student: "Aarav Sharma",
      rollId: "CS2021001",
      course: "Data Structures",
      assignments: 85,
      midterm: 78,
      final: 88,
      total: 84,
      grade: "A-",
    },
    {
      student: "Priya Patel",
      rollId: "CS2021002",
      course: "Data Structures",
      assignments: 92,
      midterm: 85,
      final: 90,
      total: 89,
      grade: "A",
    },
    {
      student: "Arjun Singh",
      rollId: "CS2021003",
      course: "Data Structures",
      assignments: 88,
      midterm: 75,
      final: 82,
      total: 82,
      grade: "B+",
    },
    {
      student: "Kavya Reddy",
      rollId: "CS2021004",
      course: "Data Structures",
      assignments: 79,
      midterm: 72,
      final: 80,
      total: 77,
      grade: "B",
    },
  ],
  "Database Systems": [
    {
      student: "Aarav Sharma",
      rollId: "CS2021001",
      course: "Database Systems",
      assignments: 88,
      midterm: 80,
      final: 86,
      total: 85,
      grade: "A+",
    },
    {
      student: "Priya Patel",
      rollId: "CS2021002",
      course: "Database Systems",
      assignments: 90,
      midterm: 84,
      final: 93,
      total: 89,
      grade: "A",
    },
    {
      student: "Arjun Singh",
      rollId: "CS2021003",
      course: "Database Systems",
      assignments: 76,
      midterm: 72,
      final: 79,
      total: 76,
      grade: "B",
    },
    {
      student: "Kavya Reddy",
      rollId: "CS2021004",
      course: "Database Systems",
      assignments: 82,
      midterm: 74,
      final: 80,
      total: 79,
      grade: "B+",
    },
  ],
  "Web Development": [
    {
      student: "Aarav Sharma",
      rollId: "CS2021001",
      course: "Web Development",
      assignments: 91,
      midterm: 86,
      final: 90,
      total: 89,
      grade: "A",
    },
    {
      student: "Priya Patel",
      rollId: "CS2021002",
      course: "Web Development",
      assignments: 95,
      midterm: 89,
      final: 96,
      total: 93,
      grade: "O",
    },
    {
      student: "Arjun Singh",
      rollId: "CS2021003",
      course: "Web Development",
      assignments: 84,
      midterm: 78,
      final: 81,
      total: 81,
      grade: "A+",
    },
    {
      student: "Kavya Reddy",
      rollId: "CS2021004",
      course: "Web Development",
      assignments: 87,
      midterm: 82,
      final: 85,
      total: 85,
      grade: "A+",
    },
  ],
};

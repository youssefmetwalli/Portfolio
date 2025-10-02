import { AcademicProps } from "../types/academics";

export const ACADEMICS: (AcademicProps & { isShow?: boolean })[] = [
    {
        course: "Automata and Theory of Computation",
        institution: "University of Aizu",
        academicYears: ["2024/2025", "2025/2026"],
        role: "Teaching Assistant",
        responsibilities: [
          "Facilitated problem-solving sessions and clarified theoretical concepts for around 100 students each year",
          "Deveeloped an Intelligent Tutoring System to ease the studying for the students",
          "Assisted in exam preparation and rubric-based grading",   
        ],
        isShow: true,
    },
    {
      course: "Language Processing Systems",
      institution: "University of Aizu",
      academicYears: ["2024/2025", "2025/2026"],
      role: "Teaching Assistant",
      responsibilities: [
        "Graded assignments and projects with detailed feedback",
        "Prepared exercises and sample solutions in coordination with instructors",
      ],
      isShow: true,
    },

  ];
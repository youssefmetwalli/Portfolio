import { ProjectItem } from "@/common/types/projects";

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Automata Intelligent Tutoring System",
    slug: "automata-intelligent-tutoring-system",
    description: "An Intelligent Tutoring System solely dedicated for Automata Theory",
    image: "/images/projects/automata.png",
    link_demo: "https://automata-its.onrender.com",
    link_github: "https://github.com/youssefmetwalli/ITS-FA",
    stacks: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Google Gemini", "Firebase"],
    content: null,
    is_show: true,
    is_featured: true
  },
  {
    id: 2,
    title: "Alexa Skill Checkout API",
    slug: "alexa-skill-checkout-api",
    description: "An API that allows users to checkout of a booking/room through a voice interaction with Amazon Alexa.",
    image: "/images/projects/alexa.jpg",
    link_github: "https://github.com/youssefmetwalli/Alexa-Checkout-API",
    stacks: ["Python", "Alexa", "AWS", "Docker", "Firebase"],
    content: null,
    is_show: true,
    is_featured: true
  }
];

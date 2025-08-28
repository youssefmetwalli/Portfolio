import { CareerProps } from "../types/careers";

export const CAREERS: CareerProps[] = [
  {
    position: "Software Systems Engineer",
    company: "Asera Co. Ltd",
    logo: "/images/careers/asera.jpg",
    location: "Inawashiro, Japan 🇯🇵",
    location_type: "Hybrid",
    type: "Part-time",
    start_date: "2022-06",
    end_date: null,
    industry: "Property Management",
    link: "https://www.asera.co.jp/",
    responsibilities: [
      "Part of the company's IT Department.",
      "Developed and maintained various services and applications that ease the work of our comapany's employees, our company's customers, and our company's partner companies.",
      "Attended various events and meetings as both a speaker, and a representative of the IT Department.",
    ],
    isShow: true,
  },
  {
    position: "Applications Engineer",
    company: "Rakuten",
    logo: "/images/careers/rakuten.jpg",
    location: "Tokyo, Japan 🇯🇵",
    location_type: "Remote",
    type: "Internship",
    start_date: "2024-09",
    end_date: "2024-10",
    industry: "Fintech",
    link: "https://global.rakuten.com/corp/",
    responsibilities: [
      "Helped develop an application that alerts citizens in case of an emergency or earthquake.",
      "Ensured smooth user experience and fast performance by leveraging React Native features such as efficient rendering and optimized bundling.",
      "Collaborated with design and marketing teams to align online presence with brand identity.",
    ],
    isShow: true,
  },
];

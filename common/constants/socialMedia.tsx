import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  // {
  //   title: "Contact Me",
  //   description: "Reach out via email for any inquiries or collaborations.",
  //   name: "gmail",
  //   href: "mailto:ymetwalli22@gmail.com",
  //   icon: <SiGmail size={iconSize} />,
  //   backgroundIcon: <SiGmail size={backgroundIconSize} />,
  //   textColor: "text-red-300",
  //   backgroundColor: "bg-red-300",
  //   borderColor: "border-red-300",
  //   backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
  //   colSpan: "md:col-span-2",
  //   isShow: true,
  // },
  {
    title: "Connect With Me",
    description:
      "Connect for collaboration or explore my professional experience.",
    name: "linkedin",
    href: "https://www.linkedin.com/in/youssef-obata-0a8ba1297/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Explore my Work",
    description: "View the source code for all of my public projects on GitHub.",
    name: "github",
    href: "https://github.com/youssefmetwalli",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
];

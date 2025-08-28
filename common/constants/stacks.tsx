import { BiLogoPostgresql } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiFirebase,
  SiSupabase,
  SiDocker,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    isActive: true,
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    isActive: true,
  },
  "Node.js": {
    icon: <SiNodedotjs size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
    isActive: true,
  },
  PostgreSql: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
    isActive: true,
  },
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-500",
    isActive: true,
  },
  AI: {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    isActive: true,
  },  
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },
};

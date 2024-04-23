import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {FaGraduationCap, FaReact } from "react-icons/fa";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  
    {
    title: "Frontend Developer Intern",
    location: "Onsite",
    description:
      "Completed Six Months of Internship from Off-sides Technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "March-2023 - Aug-2023",
  },
  {
    title: "React UI Intern",
    location: "Remote",
    description:
      "Completed three Months of Internship from Optimizia.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep-2023 - Nov-2023",
  },
  {
    title: "React UI Designer and Developer",
    location: "Remote",
    description:
      "Completed Five months of Job from dev-holistic",
    icon: React.createElement(CgWorkAlt),
    date: "Dec-2023 - Mar-2024",
  },
] as const;

export const educationsData = [
   {
    title: "Virtual University",
    location: "Karachi",
    description:
      "Bachelor's business and Information Technology(BBIT).",
    icon: React.createElement(FaGraduationCap),
    date: "Sep-2022 - Sep-2026",
  },
  {
    title: "Islamia Science College",
    location: "Karachi",
    description:
      "Pre-Engineering",
    icon: React.createElement(FaGraduationCap),
    date: "May-2017 - Sep-2019",
  },
   {
    title: "Cork's Govt. Boys Secondary School",
    location: "Karachi",
    description:
      "Biology Science",
    icon: React.createElement(FaGraduationCap),
    date: "May-2015 - may-2017",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "jQuery",
  "JavaScript",
  "API Integration",
  "Figma/Sketch to UI",
  "JSX",
  "React",
  "Next.js",
  "Responsive Web Design",
  "Git",
  "Tailwind.css",
  "Redux",
   "Component Libraries (Ant-Design, Material UI and React Bootstrap)",
] as const;

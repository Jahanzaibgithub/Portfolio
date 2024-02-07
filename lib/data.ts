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
    title: "React UI Intern",
    location: "Remote",
    description:
      "Completed three Months of Internship from Optimizia.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep-2023 - Nov-2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Remote",
    description:
      "Completed three months of internship from dev-holistic",
    icon: React.createElement(CgWorkAlt),
    date: "May-2023 - July-2023",
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
  "Git",
  "Tailwind",
  "Redux",
] as const;

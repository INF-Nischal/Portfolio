export interface TNavLink {
  id: number;
  name: string;
  url: string;
  icon?: string;
}

export const navlinks: TNavLink[] = [
  {
    id: 1,
    name: "About",
    url: "#about",
  },
  {
    id: 2,
    name: "Passion",
    url: "#passion",
  },
  {
    id: 3,
    name: "Experience",
    url: "#experience",
  },
  {
    id: 4,
    name: "Work",
    url: "#work",
  },
  {
    id: 5,
    name: "Contact",
    url: "#contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    socialLink: "facebook.com/nischalbista",
    icon: "/icons/facebook.svg",
  },
  {
    id: 2,
    socialLink: "instagram.com/nischalbista",
    icon: "/icons/instagram.svg",
  },
  {
    id: 3,
    socialLink: "linkedin.com/nischalbista",
    icon: "/icons/linkedin.svg",
  },
  {
    id: 4,
    socialLink: "github.com/nischalbista",
    icon: "/icons/github.svg",
  },
];

interface TTechnologies {
  id: number;
  tooltip: string;
  url: string;
}

export const technologies = [
  {
    id: 1,
    tooltip: "HTML - 5",
    url: "/icons/html-5.svg",
  },
  {
    id: 2,
    tooltip: "CSS - 3",
    url: "/icons/css-3.svg",
  },
  {
    id: 3,
    tooltip: "Javascript",
    url: "/icons/javascript.svg",
  },
  {
    id: 4,
    tooltip: "Git",
    url: "/icons/git.svg",
  },
  {
    id: 5,
    tooltip: "NodeJS",
    url: "/icons/nodejs.svg",
  },
  {
    id: 6,
    tooltip: "TailwindCSS",
    url: "/icons/tailwindcss.svg",
  },
  {
    id: 7,
    tooltip: "MongoDB",
    url: "/icons/mongodb.svg",
  },
  {
    id: 8,
    tooltip: "React",
    url: "/icons/react.svg",
  },
];

export const works = [
  {
    id: 1,
    tooltip: "Kutumba",
    url: "/icons/tailwindcss.svg",
  },
];

export const projects = [
  {
    id: 1,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Portfolio Website",
  },
  {
    id: 2,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "E-commerce Platform",
  },
  {
    id: 3,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Social Media App",
  },
  {
    id: 4,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Project Management Tool",
  },
  {
    id: 5,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Fitness Tracker",
  },
  {
    id: 6,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Travel Blog",
  },
  {
    id: 7,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "AI Chatbot",
  },
  {
    id: 8,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Online Learning Platform",
  },
  {
    id: 9,
    projectThumbnail: "/images/home-background.jpg",
    projectName: "Recipe Finder App",
  },
];

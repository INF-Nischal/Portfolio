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

export const socialLinks: TNavLink[] = [
  {
    id: 1,
    name: "facebook",
    url: "",
  },
  {
    id: 2,
    name: "instagram",
    url: "",
  },
  {
    id: 3,
    name: "github",
    url: "",
  },
  {
    id: 4,
    name: "linkedin",
    url: "",
  },
];

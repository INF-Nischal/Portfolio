"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";

const sections = ["about", "passion", "experience", "work", "contact"];

const Header = () => {
  const { about, passion, experience, work, contact } = usePageContext();

  const refs: { [key: string]: React.RefObject<HTMLElement> } = {
    about,
    passion,
    experience,
    work,
    contact,
  };

  const scrollToSection = (sectionName: string) => {
    const ref = refs[sectionName];
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 w-full h-[64px] flex items-center justify-between px-8 bg-black/60">
      <h1 className="uppercase text-white">Nischal Bista</h1>
      <div className="flex items-center gap-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="uppercase hover:text-gray-700 text-white"
          >
            {section}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;

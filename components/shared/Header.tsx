"use client";

import { usePageContext } from "@/store/PageProvider";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const sections = ["about", "passion", "experience", "work", "contact"];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
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

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full flex items-center justify-between px-8 md:px-16 lg:px-32 z-[999] ${
        scrollY === 0 ? "bg-black/60 h-[64px]" : "bg-black h-[48px]"
      } transition-all ease-in-out duration-500`}
    >
      <h1 className="uppercase text-white text-lg">Nischal Bista</h1>
      <div className="hidden md:flex items-center gap-6">
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
      <div className="block md:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-white text-[20px]"
        >
          <FaBars />
        </button>
        <div>
          {isNavOpen && (
            <div className="absolute left-0 top-0 pt-[48px] w-full flex flex-col bg-black transition-all duration-200 -z-[9999]">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsNavOpen(!isNavOpen);
                  }}
                  className="uppercase hover:text-gray-700 text-white h-[48px]"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

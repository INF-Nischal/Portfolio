"use client";

import { socialLinks } from "@/constants";
import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import SocialCard from "../cards/SocialCard";

const Footer = () => {
  const handleScrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white py-8 flex flex-col items-center gap-6">
      <div className="flex gap-1 items-center">
        {socialLinks.map((item) => (
          <SocialCard
            key={item.id}
            socialLink={item.socialLink}
            icon={item.icon}
          />
        ))}
      </div>
      <button onClick={handleScrollTopPage}>
        <FaSpaceShuttle className="text-[48px] -rotate-90" />
      </button>
      <p>&copy; Nischal Bista 2023</p>
    </footer>
  );
};

export default Footer;

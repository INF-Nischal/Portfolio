"use client";

import { socialLinks } from "@/constants";
import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { motion } from "framer-motion";
import SocialCard from "../cards/SocialCard";

const Footer = () => {
  const handleScrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-500 text-white py-8 flex flex-col items-center gap-6">
      <div className="flex gap-2 items-center">
        {socialLinks.map((item) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={item.id}
          >
            <SocialCard socialLink={item.socialLink} icon={item.icon} />
          </motion.button>
        ))}
      </div>
      <motion.button onClick={handleScrollTopPage}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FaSpaceShuttle className="text-[48px] -rotate-90" />
        </motion.div>
      </motion.button>
      <p>
        <span className="text-lg">&copy;</span> Nischal Bista 2023
      </p>
    </footer>
  );
};

export default Footer;

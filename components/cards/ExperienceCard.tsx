"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceCardProps {
  id: number;
  tooltip: string;
  url: string;
  width: number;
  height: number;
}

const ExperienceCard = ({
  id,
  tooltip,
  url,
  width,
  height,
}: ExperienceCardProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ filter: "grayscale(100%)" }}
        animate={{
          filter: hoveredId === id ? "grayscale(0%)" : "grayscale(100%)",
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <Image
          src={url}
          alt="tooltip"
          width={width}
          height={height}
          className="rounded-md"
        />
      </motion.div>
      <AnimatePresence>
        {hoveredId && hoveredId === id && (
          <motion.div
            key={id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            exit={{ y: 20, opacity: 0 }}
            className="absolute -top-12 left-0 px-2 py-1 bg-white border border-gray-300 rounded-sm shadow-lg whitespace-nowrap before:content-[''] before:absolute before:bottom-[-6px] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-white"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceCard;

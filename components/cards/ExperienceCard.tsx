"use client";

import React, { useState } from "react";
import Image from "next/image";

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
      <Image
        src={url}
        alt="tooltip"
        width={width}
        height={height}
        className={hoveredId === id ? "filter-none" : "grayscale"}
      />
      {hoveredId && hoveredId === id && (
        <span className="absolute -top-12 left-0 px-2 py-1 bg-white border border-gray-300 rounded-sm shadow-lg whitespace-nowrap before:content-[''] before:absolute before:bottom-[-6px] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-white">
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default ExperienceCard;

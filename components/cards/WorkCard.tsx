"use client";

import Image from "next/image";
import React, { useState } from "react";

interface WorkCardProps {
  id: number;
  projectThumbnail: string;
  projectName: string;
}

const WorkCard = ({ id, projectThumbnail, projectName }: WorkCardProps) => {
  const [hoverId, setHoverId] = useState<number | null>(null);

  const handleFocus = () => {
    setHoverId(id);
  };

  const handleBlur = () => {
    setHoverId(null);
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <Image src={projectThumbnail} alt={projectName} width={390} height={0} />
      {hoverId && hoverId === id && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col hover:cursor-pointer">
          <div className="h-[80%] bg-black/60"></div>
          <button className="h-[20%] bg-blue-500">{projectName}</button>
        </div>
      )}
    </div>
  );
};

export default WorkCard;

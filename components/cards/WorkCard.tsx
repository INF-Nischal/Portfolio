"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {hoverId && hoverId === id && (
          <motion.div
            key={id}
            className="absolute top-0 left-0 w-full h-full flex flex-col hover:cursor-pointer"
          >
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: "80%",
                transition: { duration: 0.5 },
              }}
              exit={{
                height: 0,
              }}
              className="bg-black/60"
            ></motion.div>
            <motion.button
              initial={{
                height: 0,
                marginTop: "auto",
              }}
              animate={{
                height: "20%",
                transition: { duration: 0.5 },
              }}
              exit={{
                height: 0,
              }}
              className="bg-blue-500"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{
                  opacity: 0,
                }}
              >
                {projectName}
              </motion.p>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkCard;

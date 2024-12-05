"use client";

import { projects } from "@/constants";
import { usePageContext } from "@/store/PageProvider";
import React, { useRef } from "react";
import WorkCard from "./cards/WorkCard";
import { motion, useInView } from "framer-motion";

const Work = () => {
  const workRef = useRef(null);

  const isInView = useInView(workRef, {
    once: true,
    margin: "-40%",
  });

  return (
    <section id="work" ref={usePageContext().work} className="bg-white">
      <div
        ref={workRef}
        className="flex flex-col items-center gap-12 px-4 py-24 lg:p-24"
      >
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="heading-2 font-light">What I&apos;ve done</h2>
          <p className="paragraph">(more comming soon)</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 + index * 0.2, ease: "easeOut" }}
            >
              <WorkCard
                id={item.id}
                projectThumbnail={item.projectThumbnail}
                projectName={item.projectName}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

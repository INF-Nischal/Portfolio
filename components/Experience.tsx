"use client";

import React, { useRef } from "react";
import { technologies, works } from "@/constants";
import { usePageContext } from "@/store/PageProvider";
import ExperienceCard from "./cards/ExperienceCard";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const experienceRef = useRef(null);

  const isInView = useInView(experienceRef, {
    once: true,
    margin: "-200px",
  });

  const handleResume = () => {
    window.open("/files/cv.pdf", "_blank");
  };

  return (
    <section id="experience" ref={usePageContext().experience}>
      <div className="section_layout bg-white">
        <div
          ref={experienceRef}
          className="flex flex-col items-center gap-12 py-24"
        >
          <motion.h2
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="heading-2 font-light"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="w-full paragraph text-center"
          >
            I&apos;ve been doing web development for about 2 years now, and
            I&apos;m always eager to learn more in this fast paced industry.
          </motion.p>
          <div className="w-full flex flex-col gap-16 md:flex-row md:justify-center md:gap-x-48">
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="flex flex-col gap-4"
            >
              <h3 className="uppercase text-center heading-3">
                Some technology I&apos;ve worked with:
              </h3>
              <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6">
                {technologies.map((item, index) => (
                  <motion.div
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 1.5 + index * 0.1,
                    }}
                    key={item.id}
                  >
                    <ExperienceCard
                      id={item.id}
                      tooltip={item.tooltip}
                      url={item.url}
                      width={72}
                      height={72}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="uppercase heading-3">Where I&apos;ve worked:</h3>
              <div className="w-full grid grid-cols-2 lg:grid-cols-1 gap-x-6 lg:gap-y-8">
                {works.map((item, index) => (
                  <motion.div
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 1.5 + index * 0.1,
                    }}
                    key={item.id}
                  >
                    <ExperienceCard
                      key={item.id}
                      id={item.id}
                      tooltip={item.tooltip}
                      url={item.url}
                      width={142}
                      height={142}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full py-24 flex flex-col items-center gap-6 bg-black/40 backdrop:blur-0">
        <h2 className="uppercase text-4xl font-light text-white">
          Check out my resume!
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-[136px] h-[40px] border text-white font-light"
          onClick={handleResume}
        >
          Grab a copy
        </motion.button>
      </div>
    </section>
  );
};

export default Experience;

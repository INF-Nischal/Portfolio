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
  });

  return (
    <section id="experience" ref={usePageContext().experience}>
      <div className="bg-white">
        <div
          ref={experienceRef}
          className="flex flex-col items-center gap-12 py-24"
        >
          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="uppercase text-4xl font-light"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[90%] lg:w-[40%] text-center"
          >
            I&apos;ve been doing web development for about 2 years now, and
            I&apos;m always eager to learn more in this fast paced industry.
          </motion.p>
          <div className="flex flex-col gap-8 md:flex-row lg:gap-64 px-32">
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <h3 className="uppercase text-lg">
                Some technology I&apos;ve worked with:
              </h3>
              <div className="grid grid-cols-5 gap-x-8 gap-y-6">
                {technologies.map((item, index) => (
                  <motion.div
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 1.4 + index * 0.2,
                      ease: "easeOut",
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
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="uppercase text-lg">Where I&apos;ve worked:</h3>
              <div className="grid grid-cols-1">
                {works.map((item, index) => (
                  <motion.div
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 1.4 + index * 0.2,
                      ease: "easeOut",
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
        >
          Grab a copy
        </motion.button>
      </div>
    </section>
  );
};

export default Experience;

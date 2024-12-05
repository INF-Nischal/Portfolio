"use client";

import React, { useRef } from "react";
import { usePageContext } from "@/store/PageProvider";
import Image from "next/image";
import profile from "../public/images/profile.jpg";
import { FaCode, FaKeyboard, FaLaptop } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);

  const isInView = useInView(aboutRef, {
    once: true,
    margin: "-200px",
  });

  return (
    <section
      id="about"
      ref={usePageContext().about}
      className="section_layout bg-white py-24 flex justify-center"
    >
      <div ref={aboutRef} className="w-full">
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-6"
        >
          <h2 className="heading-2">A little about me</h2>

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Image
              src={profile}
              alt="profile"
              width={180}
              height={180}
              className="object-cover rounded-full overflow-hidden"
            />
          </motion.div>

          <motion.p
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="paragraph w-full md:w-[80%] lg:w-[70%] text-center lg:p-0"
          >
            Hi! I&apos;m Nischal Bista, a web developer with a strong focus on
            front-end development and creating functional, robust systems.
            Currently, I&apos;m in my final year of the Bachelor of Computer
            Applications (BCA) program at HSM College. My goal is to pursue a
            career where I can leverage my skills to design and build dependable
            software solutions that deliver impactful and seamless user
            experiences.
          </motion.p>
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="w-full md:w-[80%] lg:w-[70%] flex flex-col items-center gap-6 bg-gray-300 p-6"
          >
            <h3 className="heading-3">TL;DR? Self Proclamations:</h3>
            <div className="w-full flex justify-around">
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
                className="flex flex-col items-center gap-2"
              >
                <FaLaptop className="text-[48px] transition-all duration-200" />
                <p className="paragraph">Designer</p>
              </motion.div>
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                className="flex flex-col items-center gap-2"
              >
                <FaCode className="text-[48px] transition-all duration-200" />
                <p className="paragraph">Web Developer</p>
              </motion.div>
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2.4 }}
                className="flex flex-col items-center gap-2"
              >
                <FaKeyboard className="text-[48px] transition-all duration-200" />
                <p className="paragraph">---</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

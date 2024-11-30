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
    // root: aboutRef,
    // margin: "10px",
    // amount: "all",
  });

  return (
    <section
      id="about"
      ref={usePageContext().about}
      className="bg-white py-24 flex justify-center"
    >
      <div ref={aboutRef} className="w-full md:w-[90%] lg:w-[40%]">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-6"
        >
          <h2 className="uppercase text-4xl font-light">A little about me</h2>

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
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
              y: 50,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-center px-4 lg:p-0"
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
              y: 50,
              opacity: 0,
            }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="w-full flex flex-col items-center gap-6 bg-gray-300 p-6"
          >
            <h3>TL;DR? Self Proclamations:</h3>
            <div className="w-full flex justify-around">
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                className="flex flex-col items-center gap-2"
              >
                <FaLaptop className="text-[64px]" />
                <p>Designer</p>
              </motion.div>
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <FaCode className="text-[64px]" />
                <p>Web Developer</p>
              </motion.div>
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
                className="flex flex-col items-center gap-2"
              >
                <FaKeyboard className="text-[64px]" />
                <p>---</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
